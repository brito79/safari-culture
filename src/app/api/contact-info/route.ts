import { NextRequest, NextResponse } from 'next/server';
import { getContactInfo } from '@/app/actions/contact/get-contact-info';
import { updateContactInfo } from '@/app/actions/contact/update-contact-info';
import { auth0 } from '@/lib/auth0';

// Enable ISR with 60 second revalidation for GET requests
export const revalidate = 60;
// Keep dynamic for this route since it has authenticated PUT requests
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('📞 API: Fetching contact information...');
    
    const result = await getContactInfo();
    
    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          data: result.data,
          message: result.message
        },
        {
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
          },
        }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: result.message
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('❌ API Error fetching contact info:', error);
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log('✏️ API: Updating contact information...');
    
    // Check authentication
    const session = await auth0.getSession();
    if (!session || !session.user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unauthorized - Admin access required'
        },
        { status: 401 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    const { phone, phone_hours, email, email_response, office, office_details } = body;
    
    // Validate required fields
    if (!phone || !phone_hours || !email || !email_response || !office || !office_details) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required'
        },
        { status: 400 }
      );
    }
    
    // Update contact info
    const result = await updateContactInfo({
      phone,
      phone_hours,
      email,
      email_response,
      office,
      office_details
    });
    
    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          data: result.data,
          message: result.message
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: result.message
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ API Error updating contact info:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
