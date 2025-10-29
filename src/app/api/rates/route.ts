

import { query } from '@/lib/db/db';
import { NextResponse } from 'next/server';
import { Rate, ApiResponse } from '@/lib/db/types';

export async function GET() {
  try {
    const [rows] = await query<Rate>('SELECT * FROM rates');
    
    const response: ApiResponse<Rate[]> = {
      success: true,
      data: rows,
      count: rows.length
    };
    
    return NextResponse.json(response);
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
