import { NextResponse } from 'next/server';
import pool from '@/lib/db/connections';

export async function GET() {
  try {
    // Test connection
    const connection = await pool.getConnection();
    
    // Test query
    const [rows] = await connection.execute('SELECT 1 + 1 AS result');
    
    connection.release();
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      data: rows
    });
  } catch (error) {
    console.error('Database test failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}