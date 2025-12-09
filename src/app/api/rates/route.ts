
import { query } from '@/lib/db/db';
import { NextResponse } from 'next/server';
import { Rate, ApiResponse } from '@/lib/db/types';

// Enable ISR with 60 second revalidation
export const revalidate = 60;

// Database queries require dynamic rendering
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [rows] = await query<Rate>('SELECT * FROM rates');
    
    const response: ApiResponse<Rate[]> = {
      success: true,
      data: rows,
      count: rows.length
    };
    
    // Add cache control headers for better control
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('DB error:', error);
    
    const errorResponse: ApiResponse<never> = {
      success: false,
      error: 'Failed to fetch rates',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
