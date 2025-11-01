import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/db';
import { revalidatePath } from 'next/cache';

// Enable ISR with 60 second revalidation
export const revalidate = 60;

// Use 'force-static' for better performance with revalidation
// This allows Next.js to cache and serve static responses
export const dynamic = 'force-static';

// Type definitions
interface CampRow {
  camp_id: string;
  name: string;
  region: string;
  description: string;
  accommodation: string;
  features_list: string;
  image_hero_url: string;
  image_gallery_urls: string;
  starting_price: number;
}

export async function GET() {
  try {
    // Query to get camps with starting prices
    const sql = `
    SELECT
    c.camp_id,
    c.name,
    c.region,
    c.description,
    c.accommodation,
    c.features_list,
    c.image_hero_url,
    c.image_gallery_urls,
    MIN(r.sharing_rate) AS starting_price
FROM
    camps c
JOIN 
    rates r ON c.name = r.name -- Use JOIN to ensure only camps with rates are considered for MIN()
GROUP BY
    c.camp_id, c.name, c.region, c.description, c.accommodation,
    c.features_list, c.image_hero_url, c.image_gallery_urls
ORDER BY
    CAST(REPLACE(REPLACE(MIN(r.sharing_rate), 'R', ''), ',', '') AS DECIMAL(10, 2)) ASC;
    `;

    const [rows] = await query<CampRow>(sql);

    // Transform the data to match the frontend format
    const transformedCamps = (rows as CampRow[]).map(camp => {
      // Handle pipe-separated features
      const features = camp.features_list ? 
        camp.features_list.split('|').map((f: string) => f.trim()).filter(f => f.length > 0) : [];
      
      // Handle pipe-separated gallery URLs
      const gallery = camp.image_gallery_urls ? 
        camp.image_gallery_urls.split('|').map((url: string) => url.trim()).filter(url => url.length > 0) : [];

      return {
        id: camp.camp_id,
        name: camp.name,
        region: camp.region,
        description: camp.description,
        features,
        images: {
          hero: camp.image_hero_url || '',
          gallery
        },
        accommodation: camp.accommodation,
        fromPrice: camp.starting_price
      };
    });

    return NextResponse.json(
      {
        success: true,
        data: transformedCamps
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch camps data',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { camp_id, name, region, description, accommodation, features, images } = body;

    // Validation
    if (!camp_id || !name || !region || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: camp_id, name, region, description' },
        { status: 400 }
      );
    }

    // Convert arrays to pipe-separated strings for database storage
    const features_list = Array.isArray(features) ? features.join('|') : features || null;
    const image_hero_url = images?.hero || null;
    const image_gallery_urls = Array.isArray(images?.gallery) ? images.gallery.join('|') : null;

    const insertSql = `
      INSERT INTO camps (
        camp_id, name, region, description, accommodation, 
        features_list, image_hero_url, image_gallery_urls
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await query(insertSql, [
      camp_id,
      name,
      region,
      description,
      accommodation || null,
      features_list,
      image_hero_url,
      image_gallery_urls
    ]);

    // Revalidate camps pages to reflect new data
    revalidatePath('/camps');
    revalidatePath('/api/camps');

    return NextResponse.json({
      success: true,
      message: 'Camp created successfully',
      data: { camp_id, name }
    });

  } catch (error) {
    console.error('Database error:', error);
    
    // Handle duplicate entry error
    if (error instanceof Error && 'code' in error && error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { success: false, error: 'Camp with this ID or name already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create camp',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}