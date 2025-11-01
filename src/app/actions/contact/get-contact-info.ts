'use server';

import { query } from '@/lib/db/db';

export interface ContactInfo {
  id: number;
  phone: string;
  phone_hours: string;
  email: string;
  email_response: string;
  office: string;
  office_details: string;
}

export async function getContactInfo() {
  try {
    console.log('📞 Fetching contact information from database...');
    
    const sql = `
      SELECT 
        id,
        phone,
        phone_hours,
        email,
        email_response,
        office,
        office_details
      FROM contact_us
      ORDER BY id DESC
      LIMIT 1
    `;
    
    const [results] = await query(sql) as [ContactInfo[], any];
    
    if (!results || results.length === 0) {
      console.log('⚠️ No contact information found in database');
      return {
        success: false,
        message: 'No contact information found',
        data: null
      };
    }
    
    console.log('✅ Contact information fetched successfully');
    
    return {
      success: true,
      message: 'Contact information retrieved successfully',
      data: results[0]
    };
    
  } catch (error) {
    console.error('❌ Error fetching contact information:', error);
    return {
      success: false,
      message: 'Failed to fetch contact information',
      data: null
    };
  }
}
