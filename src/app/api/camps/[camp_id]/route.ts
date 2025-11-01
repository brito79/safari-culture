import { NextRequest, NextResponse } from 'next/server';
import { getCampRates } from '@/app/actions/camps/camp-rate';

export async function GET(
  request: NextRequest,
  { params }: { params: { camp_id: string[] } }
) {
  try {
    // Extract camp_id from the dynamic route
    const campId = params.camp_id[0];
    
    if (!campId) {
      return NextResponse.json(
        { success: false, error: 'Camp ID is required' },
        { status: 400 }
      );
    }

    // Fetch rates for the specific camp
    const campRates = await getCampRates(campId);

    if (!campRates) {
      return NextResponse.json(
        { success: false, error: 'Camp not found or no rates available' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: campRates
    });

  } catch (error) {
    console.error('API error fetching camp rates:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch camp rates',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Support for POST requests to add new rates (admin functionality)
export async function POST(
  request: NextRequest,
  { params }: { params: { camp_id: string[] } }
) {
  try {
    const campId = params.camp_id[0];
    const body = await request.json();
    const { sharing_rate, single_rate } = body;

    if (!campId || !sharing_rate || !single_rate) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: camp_id, sharing_rate, single_rate' },
        { status: 400 }
      );
    }

    // This would typically include rate creation logic
    // For now, return a placeholder response
    return NextResponse.json({
      success: true,
      message: 'Rate creation not yet implemented',
      data: { campId, sharing_rate, single_rate }
    });

  } catch (error) {
    console.error('API error creating camp rate:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create camp rate',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}