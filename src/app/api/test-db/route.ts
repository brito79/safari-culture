import { NextResponse } from 'next/server';
import { db } from '@/lib/db/db';

export async function GET() {
  try {
    // Test query
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    
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