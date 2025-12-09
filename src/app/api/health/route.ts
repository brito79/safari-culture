import { NextResponse } from 'next/server';
import { healthCheck } from '@/lib/db/db';

/**
 * Health check endpoint for monitoring
 * Returns database connection status and application health
 */
export async function GET() {
  const startTime = Date.now();
  
  try {
    // Check database connection
    const dbHealthy = await healthCheck();
    const duration = Date.now() - startTime;

    if (!dbHealthy) {
      return NextResponse.json(
        {
          status: 'unhealthy',
          database: 'disconnected',
          timestamp: new Date().toISOString(),
          responseTime: `${duration}ms`,
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        status: 'healthy',
        database: 'connected',
        timestamp: new Date().toISOString(),
        responseTime: `${duration}ms`,
        environment: process.env.NODE_ENV || 'unknown',
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  } catch (error) {
    const duration = Date.now() - startTime;
    
    console.error('❌ Health check failed:', error);
    
    return NextResponse.json(
      {
        status: 'error',
        database: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
        responseTime: `${duration}ms`,
      },
      { status: 500 }
    );
  }
}
