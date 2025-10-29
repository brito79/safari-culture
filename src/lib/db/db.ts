import mysql from 'mysql2/promise';
import { getDatabaseCredentials } from '../secrets';

let pool: mysql.Pool | undefined;

export async function initDb(): Promise<mysql.Pool> {
  if (!pool) {
    const { username, password } = await getDatabaseCredentials();

    pool = mysql.createPool({
      host: process.env.RDS_HOST!,
      user: username,
      password: password,
      database: process.env.RDS_DATABASE!,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  return pool;
}

// Export a function that returns the initialized pool
export async function getDb(): Promise<mysql.Pool> {
  return await initDb();
}

// Export a direct query function for convenience
export async function query<T = unknown>(sql: string, params?: unknown[]): Promise<[T[], mysql.FieldPacket[]]> {
  const db = await getDb();
  const result = await db.query(sql, params);
  return result as [T[], mysql.FieldPacket[]];
}

