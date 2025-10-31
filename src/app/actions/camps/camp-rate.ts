'use server';

import { query } from '@/lib/db/db';

// Type definitions for rate data
export interface CampRate {
  id: number;
  name: string;
  sharing_rate: number;
  single_rate: number;
  created_at: string;
}

export interface CampRateResponse {
  campName: string;
  rates: CampRate[];
}

/**
 * Server action to fetch rates for a specific camp from the database
 * @param campId - The camp ID to fetch rates for
 * @returns Promise<CampRateResponse | null>
 */
export async function getCampRates(campId: string): Promise<CampRateResponse | null> {
  try {
    // First, get the camp name from camp_id
    const campSql = `
      SELECT name 
      FROM camps 
      WHERE camp_id = ?
    `;
    
    const [campRows] = await query<{ name: string }>(campSql, [campId]);
    
    if (!campRows.length) {
      console.log(`No camp found with ID: ${campId}`);
      return null;
    }
    
    const campName = campRows[0].name;
    
    // Then fetch rates for this camp
    const ratesSql = `
      SELECT 
        id,
        name,
        sharing_rate,
        single_rate,
        created_at
      FROM rates 
      WHERE name = ?
      ORDER BY sharing_rate ASC
    `;
    
    const [ratesRows] = await query<CampRate>(ratesSql, [campName]);
    
    console.log(`Found ${ratesRows.length} rates for camp: ${campName}`);
    
    return {
      campName,
      rates: ratesRows
    };

  } catch (error) {
    console.error('Error fetching camp rates:', error);
    return null;
  }
}

/**
 * Helper function to get all rates (for admin or overview purposes)
 */
export async function getAllRates(): Promise<CampRate[]> {
  try {
    const sql = `
      SELECT 
        id,
        name,
        sharing_rate,
        single_rate,
        created_at
      FROM rates 
      ORDER BY name ASC, sharing_rate ASC
    `;
    
    const [rows] = await query<CampRate>(sql);
    
    return rows;

  } catch (error) {
    console.error('Error fetching all rates:', error);
    return [];
  }
}
