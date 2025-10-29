'use server'

import { query } from '@/lib/db/db';
import { Contact, ServerActionResponse } from '@/lib/db/types';

/**
 * Get all contact inquiries for admin dashboard
 */
export async function getInquiries(): Promise<ServerActionResponse & { data?: Contact[] }> {
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
      message: `Retrieved ${rows.length} inquiries`,
      data: rows
    };

  } catch (error: unknown) {
    console.error('Error retrieving inquiries:', error);
    return {
      success: false,
      message: 'Failed to retrieve inquiries',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}

/**
 * Get single inquiry by ID
 */
export async function getInquiryById(contactId: number): Promise<ServerActionResponse & { data?: Contact }> {
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
        message: 'Inquiry not found',
        error: 'Not found'
      };
    }

    return {
      success: true,
      message: 'Inquiry retrieved successfully',
      data: rows[0]
    };

  } catch (error: unknown) {
    console.error('Error retrieving inquiry:', error);
    return {
      success: false,
      message: 'Failed to retrieve inquiry',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}

/**
 * Delete inquiry by ID
 */
export async function deleteInquiry(contactId: number): Promise<ServerActionResponse> {
  try {
    const deleteQuery = `DELETE FROM contact WHERE contact_id = ?`;
    
    await query(deleteQuery, [contactId]);
    
    // Since we didn't get an error, assume deletion was successful
    return {
      success: true,
      message: 'Inquiry deleted successfully'
    };

  } catch (error: unknown) {
    console.error('Error deleting inquiry:', error);
    return {
      success: false,
      message: 'Failed to delete inquiry',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}

/**
 * Get inquiries with filters and pagination
 */
export async function getInquiriesFiltered(
  page: number = 1,
  limit: number = 10,
  filters: {
    country?: string;
    experienceType?: string;
    dateFrom?: string;
    dateTo?: string;
  } = {}
): Promise<ServerActionResponse & { data?: Contact[], total?: number, pages?: number }> {
  try {
    const offset = (page - 1) * limit;
    const whereConditions: string[] = [];
    const queryParams: unknown[] = [];

    // Build WHERE conditions
    if (filters.country) {
      whereConditions.push('country = ?');
      queryParams.push(filters.country);
    }

    if (filters.experienceType) {
      whereConditions.push('experience_type = ?');
      queryParams.push(filters.experienceType);
    }

    if (filters.dateFrom) {
      whereConditions.push('DATE(submission_date) >= ?');
      queryParams.push(filters.dateFrom);
    }

    if (filters.dateTo) {
      whereConditions.push('DATE(submission_date) <= ?');
      queryParams.push(filters.dateTo);
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : '';

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM contact ${whereClause}`;
    const [countResult] = await query<{ total: number }>(countQuery, queryParams);
    const total = countResult[0]?.total || 0;

    // Get paginated results
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
      ${whereClause}
      ORDER BY submission_date DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await query<Contact>(selectQuery, [...queryParams, limit, offset]);

    const pages = Math.ceil(total / limit);

    return {
      success: true,
      message: `Retrieved ${rows.length} of ${total} inquiries`,
      data: rows,
      total,
      pages
    };

  } catch (error: unknown) {
    console.error('Error retrieving filtered inquiries:', error);
    return {
      success: false,
      message: 'Failed to retrieve inquiries',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}

/**
 * Get inquiry statistics
 */
export async function getInquiryStats(): Promise<ServerActionResponse & { data?: {
  total: number;
  thisMonth: number;
  byCountry: { country: string; count: number }[];
  byExperience: { experience_type: string; count: number }[];
} }> {
  try {
    // Total inquiries
    const [totalResult] = await query<{ total: number }>('SELECT COUNT(*) as total FROM contact');
    const total = totalResult[0]?.total || 0;

    // This month inquiries
    const [monthResult] = await query<{ thisMonth: number }>(
      'SELECT COUNT(*) as thisMonth FROM contact WHERE YEAR(submission_date) = YEAR(NOW()) AND MONTH(submission_date) = MONTH(NOW())'
    );
    const thisMonth = monthResult[0]?.thisMonth || 0;

    // By country
    const [countryResult] = await query<{ country: string; count: number }>(
      'SELECT country, COUNT(*) as count FROM contact GROUP BY country ORDER BY count DESC LIMIT 10'
    );

    // By experience type
    const [experienceResult] = await query<{ experience_type: string; count: number }>(
      'SELECT experience_type, COUNT(*) as count FROM contact GROUP BY experience_type ORDER BY count DESC'
    );

    return {
      success: true,
      message: 'Statistics retrieved successfully',
      data: {
        total,
        thisMonth,
        byCountry: countryResult,
        byExperience: experienceResult
      }
    };

  } catch (error: unknown) {
    console.error('Error retrieving inquiry statistics:', error);
    return {
      success: false,
      message: 'Failed to retrieve statistics',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}
