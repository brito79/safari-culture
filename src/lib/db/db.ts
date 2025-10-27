import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import mysql from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';

// Database configuration interface
interface DbConfig {
  host: string;
  username: string;
  password: string;
  database?: string; // Optional - can connect without specifying database
  dbInstanceIdentifier?: string; // AWS RDS instance identifier
  port?: number;
  engine?: string; // Database engine (e.g., 'mysql')
}

// Cache for connection pool
let pool: Pool | null = null;

/**
 * Retrieves database configuration from AWS Secrets Manager
 * Uses AWS credentials from:
 * 1. Environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
 * 2. AWS credentials file (~/.aws/credentials)
 * 3. IAM roles (if running on AWS)
 */
export async function getDbConfig(): Promise<DbConfig> {
  try {
    // Configure the Secrets Manager client
    const client = new SecretsManagerClient({ 
      region: process.env.AWS_REGION || 'us-east-1',
      // Credentials are automatically loaded from:
      // - Environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
      // - AWS credentials file
      // - IAM roles
    });
    
    const secretName = process.env.DB_SECRET_NAME || 'wilderness-namibia-db';
    const command = new GetSecretValueCommand({ 
      SecretId: secretName,
      VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
    });
    
    console.log(`Fetching secret: ${secretName} from region: ${process.env.AWS_REGION || 'us-east-1'}`);
    const response = await client.send(command);
    
    if (!response.SecretString) {
      throw new Error('Secret not found or is empty');
    }
    
    const config = JSON.parse(response.SecretString) as DbConfig;
    console.log('✓ Successfully retrieved database configuration from Secrets Manager');
    
    // Validate required fields
    const missingFields = [];
    if (!config.host) missingFields.push('host');
    if (!config.username) missingFields.push('username');
    if (!config.password) missingFields.push('password');
    
    if (missingFields.length > 0) {
      throw new Error(`Secret is missing required fields: ${missingFields.join(', ')}`);
    }
    
    // Warn if database is not specified
    if (!config.database) {
      console.warn('⚠️  Warning: No database name specified in secret. Connection will succeed but you may need to USE a database in your queries.');
      console.warn('   Consider adding a "database" field to your secret with your MySQL database name.');
    }
    
    return config;
  } catch (error) {
    console.error('Error fetching database config from Secrets Manager:', error);
    
    // Provide detailed error information
    if (error instanceof Error) {
      const errorDetails = {
        message: error.message,
        name: error.name,
        // @ts-ignore - AWS SDK errors have additional properties
        code: error.$metadata?.httpStatusCode || error.code,
      };
      console.error('Error details:', errorDetails);
      throw new Error(`Failed to fetch DB config: ${error.name} - ${error.message}`);
    }
    
    throw new Error('Failed to fetch DB config: Unknown error');
  }
}

/**
 * Creates a connection pool for better performance
 * Reuses the same pool across multiple requests
 */
export async function getPool(): Promise<Pool> {
  if (pool) {
    return pool;
  }

  try {
    const config = await getDbConfig();
    
    pool = mysql.createPool({
      host: config.host,
      user: config.username,
      password: config.password,
      database: config.database, // Optional - will be undefined if not provided
      port: config.port || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });

    console.log('✓ Database connection pool created');
    return pool;
  } catch (error) {
    console.error('Error creating database pool:', error);
    throw error;
  }
}

/**
 * Gets a single connection from the pool
 * Use this for simple queries
 */
export async function getConnection() {
  const connectionPool = await getPool();
  return await connectionPool.getConnection();
}

/**
 * Executes a query using the connection pool
 * This is the recommended way to run queries
 */
export async function query<T = any>(sql: string, values?: any[]): Promise<T> {
  const connectionPool = await getPool();
  const [rows] = await connectionPool.execute(sql, values);
  return rows as T;
}

/**
 * Tests the database connection
 * Use this to verify your setup
 */
export async function testConnection(): Promise<boolean> {
  try {
    const connectionPool = await getPool();
    const connection = await connectionPool.getConnection();
    
    console.log('Testing database connection...');
    await connection.ping();
    connection.release();
    
    console.log('✓ Database connection successful!');
    return true;
  } catch (error) {
    console.error('✗ Database connection failed:', error);
    return false;
  }
}

/**
 * Closes the connection pool
 * Call this when shutting down your application
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
    console.log('✓ Database connection pool closed');
  }
}
