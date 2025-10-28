import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      RDS_HOST: process.env.RDS_HOST || 'NOT_SET',
      RDS_USER: process.env.RDS_USER || 'NOT_SET', 
      RDS_DATABASE: process.env.RDS_DATABASE || 'NOT_SET',
      RDS_PASSWORD: process.env.RDS_PASSWORD ? 'SET' : 'NOT_SET',
      RDS_PORT: process.env.RDS_PORT || 'NOT_SET'
    };

    console.log('Environment variables:', envCheck);

    // Try to import and test the database connection
    const { db } = await import('@/lib/db/db.js');
    
    console.log('Database pool created successfully');
    
    // Test query
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      environmentCheck: envCheck,
      queryResult: rows
    });
  } catch (error) {
    console.error('Database test failed:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        environmentCheck: {
          RDS_HOST: process.env.RDS_HOST ? 'SET' : 'NOT_SET',
          RDS_USER: process.env.RDS_USER ? 'SET' : 'NOT_SET', 
          RDS_DATABASE: process.env.RDS_DATABASE ? 'SET' : 'NOT_SET',
          RDS_PASSWORD: process.env.RDS_PASSWORD ? 'SET' : 'NOT_SET',
          RDS_PORT: process.env.RDS_PORT ? 'SET' : 'NOT_SET'
        }
      },
      { status: 500 }
    );
  }
}