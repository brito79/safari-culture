import pool from './connections';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

/**
 * Execute a SELECT query
 */
export async function query<T extends RowDataPacket>(
  sql: string,
  params?: any[]
): Promise<T[]> {
  try {
    const [rows] = await pool.execute<T[]>(sql, params);
    return rows;
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
}

/**
 * Execute an INSERT/UPDATE/DELETE query
 */
export async function execute(
  sql: string,
  params?: any[]
): Promise<ResultSetHeader> {
  try {
    const [result] = await pool.execute<ResultSetHeader>(sql, params);
    return result;
  } catch (error) {
    console.error('Execute error:', error);
    throw error;
  }
}

/**
 * Get a single row
 */
export async function queryOne<T extends RowDataPacket>(
  sql: string,
  params?: any[]
): Promise<T | null> {
  const rows = await query<T>(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

/**
 * Execute multiple queries in a transaction
 */
export async function transaction(
  callback: (connection: mysql.PoolConnection) => Promise<void>
): Promise<void> {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    await callback(connection);
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}