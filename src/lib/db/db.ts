import mysql from 'mysql2/promise';
import { getDatabaseCredentials } from '../secrets';

let pool: mysql.Pool | undefined;
let isShuttingDown = false;

/**
 * Validate required environment variables for database connection
 */
function validateEnvironment(): void {
  const required = ['RDS_HOST', 'RDS_DATABASE'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

/**
 * Initialize database connection pool with production-ready configuration
 */
export async function initDb(): Promise<mysql.Pool> {
  if (pool) {
    return pool;
  }

  if (isShuttingDown) {
    throw new Error('Database is shutting down, cannot create new connections');
  }

  try {
    // Validate environment variables
    validateEnvironment();

    // Get credentials (with fallback to env vars)
    const { username, password } = await getDatabaseCredentials();

    // Validate credentials
    if (!password) {
      throw new Error('Database password is required');
    }

    console.log('🔌 Initializing database connection pool...');

    pool = mysql.createPool({
      host: process.env.RDS_HOST!,
      user: username,
      password: password,
      database: process.env.RDS_DATABASE!.replace(/'/g, ''), // Remove quotes if present
      port: parseInt(process.env.RDS_PORT || '3306', 10),
      waitForConnections: true,
      connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '10', 10),
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
      // Connection timeout settings
      connectTimeout: 10000, // 10 seconds
      // Automatically remove idle connections
      idleTimeout: 60000, // 60 seconds
    });

    // Test the connection
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    
    console.log('✅ Database connection pool initialized successfully');

    return pool;
  } catch (error) {
    console.error('❌ Failed to initialize database pool:', error);
    pool = undefined; // Reset pool on error
    throw error;
  }
}

/**
 * Get the database connection pool
 */
export async function getDb(): Promise<mysql.Pool> {
  return await initDb();
}

/**
 * Execute a database query with error handling
 */
export async function query<T = unknown>(
  sql: string, 
  params?: unknown[]
): Promise<[T[], mysql.FieldPacket[]]> {
  if (isShuttingDown) {
    throw new Error('Database is shutting down');
  }

  try {
    const db = await getDb();
    const result = await db.query(sql, params);
    return result as [T[], mysql.FieldPacket[]];
  } catch (error) {
    console.error('❌ Database query error:', {
      sql: sql.substring(0, 100) + '...', // Log first 100 chars
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

/**
 * Health check for database connection
 */
export async function healthCheck(): Promise<boolean> {
  try {
    if (!pool) {
      return false;
    }
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database health check failed:', error);
    return false;
  }
}

/**
 * Gracefully close database connections
 * Call this on application shutdown
 */
export async function closeDb(): Promise<void> {
  if (!pool) {
    return;
  }

  isShuttingDown = true;
  console.log('🔌 Closing database connection pool...');

  try {
    await pool.end();
    pool = undefined;
    console.log('✅ Database connection pool closed successfully');
  } catch (error) {
    console.error('❌ Error closing database pool:', error);
    throw error;
  } finally {
    isShuttingDown = false;
  }
}

// Handle graceful shutdown on process termination
if (typeof process !== 'undefined') {
  process.on('SIGTERM', async () => {
    console.log('📡 SIGTERM received, closing database connections...');
    await closeDb();
  });

  process.on('SIGINT', async () => {
    console.log('📡 SIGINT received, closing database connections...');
    await closeDb();
    process.exit(0);
  });
}

