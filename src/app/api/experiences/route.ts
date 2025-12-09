import { NextResponse } from 'next/server';
import { query } from '@/lib/db/db';

// Enable ISR with 60 second revalidation
export const revalidate = 60;
// Database queries require dynamic rendering
export const dynamic = 'force-dynamic';

interface ExperienceRow {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  long_description: string;
  image_url: string;
  duration: string;
  difficulty: string;
  best_time: string;
  highlights: string; // Comma/pipe-separated string
  camps: string; // Comma/pipe-separated string
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
  count?: number;
}

export async function GET() {
  const startTime = Date.now();
  
  try {
    console.log('📊 Fetching experiences from database...');
    
    const sql = `
      SELECT 
        id,
        title,
        subtitle,
        description,
        long_description,
        image_url,
        duration,
        difficulty,
        best_time,
        highlights,
        camps
      FROM experiences_camps
      ORDER BY id ASC
    `;

    const [rows] = await query<ExperienceRow>(sql);
    
    // Validate query results
    if (!Array.isArray(rows)) {
      throw new Error('Invalid database response: expected array');
    }
    
    console.log(`✅ Found ${rows.length} experiences in database`);

    // Helper function to parse comma/pipe-separated values
    const parseList = (value: string | null | undefined): string[] => {
      if (!value) return [];
      // Split by comma or pipe, trim whitespace, filter empty strings
      return value
        .split(/[,|]/)
        .map(item => item.trim())
        .filter(item => item.length > 0);
    };

    // Transform database rows to match frontend format with validation
    const experiences = rows.map(row => {
      try {
        // Validate required fields
        if (!row.id || !row.title || !row.description) {
          throw new Error(`Missing required fields for experience ${row.id}`);
        }

        return {
          id: row.id,
          title: row.title,
          subtitle: row.subtitle || '',
          description: row.description,
          longDescription: row.long_description,
          image: row.image_url,
          duration: row.duration || '',
          difficulty: row.difficulty || '',
          bestTime: row.best_time || '',
          highlights: parseList(row.highlights),
          camps: parseList(row.camps),
        };
      } catch (parseError) {
        console.error(`Error parsing experience ${row.id}:`, parseError);
        throw parseError;
      }
    });

    const duration = Date.now() - startTime;
    console.log(`⏱️  Query completed in ${duration}ms`);

    const response: ApiResponse<typeof experiences> = {
      success: true,
      data: experiences,
      count: experiences.length,
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        'X-Response-Time': `${duration}ms`,
      },
    });
  } catch (error) {
    const duration = Date.now() - startTime;
    
    console.error('❌ Database error in GET /api/experiences:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      duration: `${duration}ms`,
      stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined,
    });
    
    const errorResponse: ApiResponse<never> = {
      success: false,
      error: 'Failed to fetch experiences',
      details: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : 'Unknown error')
        : 'An error occurred while fetching experiences',
    };
    
    return NextResponse.json(errorResponse, { 
      status: 500,
      headers: {
        'X-Response-Time': `${duration}ms`,
      },
    });
  }
}
