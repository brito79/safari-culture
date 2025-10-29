import { NextRequest, NextResponse } from 'next/server';
import { getInquiries, getInquiryById, deleteInquiry, getInquiryStats } from '@/app/actions/dashboard/inquries';

/**
 * GET /api/inquries - Retrieve all inquiries or stats (admin only)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    // Get specific inquiry by ID
    if (id) {
      const contactId = parseInt(id);
      if (isNaN(contactId)) {
        return NextResponse.json(
          { success: false, error: 'Invalid inquiry ID' },
          { status: 400 }
        );
      }

      const result = await getInquiryById(contactId);
      
      if (result.success) {
        return NextResponse.json({
          success: true,
          data: result.data
        });
      } else {
        return NextResponse.json(
          { success: false, error: result.error, message: result.message },
          { status: result.error === 'Not found' ? 404 : 500 }
        );
      }
    }

    // Get inquiry statistics
    if (type === 'stats') {
      const result = await getInquiryStats();
      
      if (result.success) {
        return NextResponse.json({
          success: true,
          data: result.data
        });
      } else {
        return NextResponse.json(
          { success: false, error: result.error, message: result.message },
          { status: 500 }
        );
      }
    }

    // Get all inquiries (default)
    const result = await getInquiries();
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        data: result.data,
        count: result.data?.length || 0
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error, message: result.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error - GET /api/inquries:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'Failed to retrieve inquiries'
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/inquries - Delete an inquiry by ID (admin only)
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing inquiry ID' },
        { status: 400 }
      );
    }

    const contactId = parseInt(id);
    if (isNaN(contactId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid inquiry ID' },
        { status: 400 }
      );
    }

    const result = await deleteInquiry(contactId);
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error, message: result.message },
        { status: result.error === 'Not found' ? 404 : 500 }
      );
    }
  } catch (error) {
    console.error('API Error - DELETE /api/inquries:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'Failed to delete inquiry'
      },
      { status: 500 }
    );
  }
}
