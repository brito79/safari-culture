import { NextResponse } from 'next/server';
import { query } from '@/lib/db/db';

// Enable ISR with 60 second revalidation
export const revalidate = 60;
// Use 'force-static' for better caching performance
export const dynamic = 'force-static';

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
}

export async function GET() {
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

    // Transform database rows to match frontend format
    const experiences = rows.map(row => {
      try {
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

    const response: ApiResponse<typeof experiences> = {
      success: true,
      data: experiences,
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('❌ DB error:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    const errorResponse: ApiResponse<never> = {
      success: false,
      error: 'Failed to fetch experiences',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
