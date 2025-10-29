'use server'

import { query } from '@/lib/db/db';
import { Contact, ContactFormData, ServerActionResponse } from '@/lib/db/types';

/**
 * Server action to handle contact form submissions
 * Transforms form data and saves to the database
 */
export async function submitContactForm(formData: ContactFormData): Promise<ServerActionResponse> {
  try {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.groupSize || !formData.experienceType) {
      return {
        success: false,
        message: 'Please fill in all required fields',
        error: 'Missing required fields'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
        error: 'Invalid email format'
      };
    }

    // Transform form data to match database schema
    const contactData: Omit<Contact, 'contact_id' | 'submission_date'> = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone?.trim() || null,
      country: formData.country.trim(),
      travel_dates: formData.travelDates?.trim() || null,
      group_size: formData.groupSize,
      experience_type: formData.experienceType,
      budget: formData.budget || null,
      camps_interested: formData.camps.length > 0 ? JSON.stringify(formData.camps) : null,
      special_requests: formData.specialRequests?.trim() || null
    };

    // Insert into database
    const insertQuery = `
      INSERT INTO contact (
        first_name,
        last_name,
        email,
        phone,
        country,
        travel_dates,
        group_size,
        experience_type,
        budget,
        camps_interested,
        special_requests
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      contactData.first_name,
      contactData.last_name,
      contactData.email,
      contactData.phone,
      contactData.country,
      contactData.travel_dates,
      contactData.group_size,
      contactData.experience_type,
      contactData.budget,
      contactData.camps_interested,
      contactData.special_requests
    ];

    const [result] = await query(insertQuery, values);
    
    // Check if insertion was successful
    if (result && typeof result === 'object' && 'insertId' in result && 
        typeof (result as { insertId: unknown }).insertId === 'number' && 
        (result as { insertId: number }).insertId > 0) {
      return {
        success: true,
        message: 'Thank you for your application! Our safari specialists will contact you within 24 hours.'
      };
    } else {
      throw new Error('Failed to insert contact data');
    }

  } catch (error: unknown) {
    console.error('Contact form submission error:', error);
    
    // Handle duplicate email error
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ER_DUP_ENTRY') {
      return {
        success: false,
        message: 'An application with this email address already exists. Please contact us directly if you need to update your information.',
        error: 'Duplicate email'
      };
    }

    // Handle other database errors
    return {
      success: false,
      message: 'We apologize, but there was an issue submitting your application. Please try again or contact us directly.',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}

/**
 * Server action to retrieve all contact submissions (for admin use)
 */
export async function getContactSubmissions(): Promise<ServerActionResponse & { data?: Contact[] }> {
  try {
    const selectQuery = `
      SELECT 
        contact_id,
        submission_date,
        first_name,
        last_name,
        email,
        phone,
        country,
        travel_dates,
        group_size,
        experience_type,
        budget,
        camps_interested,
        special_requests
      FROM contact 
      ORDER BY submission_date DESC
    `;

    const [rows] = await query<Contact>(selectQuery);

    return {
      success: true,
      message: `Retrieved ${rows.length} contact submissions`,
      data: rows
    };

  } catch (error: unknown) {
    console.error('Error retrieving contact submissions:', error);
    return {
      success: false,
      message: 'Failed to retrieve contact submissions',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}

/**
 * Server action to get a single contact submission by ID (for admin use)
 */
export async function getContactSubmission(contactId: number): Promise<ServerActionResponse & { data?: Contact }> {
  try {
    const selectQuery = `
      SELECT 
        contact_id,
        submission_date,
        first_name,
        last_name,
        email,
        phone,
        country,
        travel_dates,
        group_size,
        experience_type,
        budget,
        camps_interested,
        special_requests
      FROM contact 
      WHERE contact_id = ?
    `;

    const [rows] = await query<Contact>(selectQuery, [contactId]);

    if (rows.length === 0) {
      return {
        success: false,
        message: 'Contact submission not found',
        error: 'Not found'
      };
    }

    return {
      success: true,
      message: 'Contact submission retrieved successfully',
      data: rows[0]
    };

  } catch (error: unknown) {
    console.error('Error retrieving contact submission:', error);
    return {
      success: false,
      message: 'Failed to retrieve contact submission',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}
