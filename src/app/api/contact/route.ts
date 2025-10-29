import { NextRequest, NextResponse } from 'next/server';
import { getContactSubmissions } from '@/app/actions/contact/contact';

/**
 * GET /api/contact - Retrieve all contact submissions (admin only)
 */
export async function GET() {
  try {
    const result = await getContactSubmissions();
    
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
    console.error('API Error - GET /api/contact:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'Failed to retrieve contact submissions'
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/contact - Submit a new contact form (alternative to server action)
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { submitContactForm } = await import('@/app/actions/contact/contact.js');
    
    const result = await submitContactForm(formData);
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error, message: result.message },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('API Error - POST /api/contact:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'Failed to submit contact form'
      },
      { status: 500 }
    );
  }
}