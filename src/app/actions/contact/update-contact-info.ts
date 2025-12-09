'use server';

import { query } from '@/lib/db/db';

export interface UpdateContactInfoData {
  phone: string;
  phone_hours: string;
  email: string;
  email_response: string;
  office: string;
  office_details: string;
}

interface ContactInfoRecord {
  id: number;
  phone: string;
  phone_hours: string;
  email: string;
  email_response: string;
  office: string;
  office_details: string;
  created_at?: string;
  updated_at?: string;
}

export async function updateContactInfo(data: UpdateContactInfoData): Promise<{
  success: boolean;
  message: string;
  data: ContactInfoRecord | null;
}> {
  try {
    console.log('✏️ Updating contact information in database...');
    
    const sql = `
      UPDATE contact_us 
      SET 
        phone = ?,
        phone_hours = ?,
        email = ?,
        email_response = ?,
        office = ?,
        office_details = ?
      WHERE id = (SELECT id FROM (SELECT id FROM contact_us ORDER BY id DESC LIMIT 1) as temp)
    `;
    
    await query(sql, [
      data.phone,
      data.phone_hours,
      data.email,
      data.email_response,
      data.office,
      data.office_details
    ]);
    
    console.log('✅ Contact information updated successfully');
    
    // Fetch the updated data
    const [results] = await query<ContactInfoRecord>('SELECT * FROM contact_us ORDER BY id DESC LIMIT 1');
    
    return {
      success: true,
      message: 'Contact information updated successfully',
      data: results[0] || null
    };
    
  } catch (error) {
    console.error('❌ Error updating contact information:', error);
    return {
      success: false,
      message: 'Failed to update contact information',
      data: null
    };
  }
}
