'use server';

import { Rate, ApiResponse } from '@/lib/db/types';
import { CampData, CampRate, RatePeriod } from '@/types/types';
import { findMatchingCampName } from '@/lib/utils/camp-utils';
import { unstable_cache } from 'next/cache';

/**
 * Fetches camp rates by camp name from the rates API
 * Transforms database Rate[] into CampData format
 * Uses Next.js cache with 60-second revalidation
 * 
 * @param campName - The unique camp name identifier or URL slug
 * @returns CampData object with rates organized by period, or null if not found
 */
export async function getCampRatesByName(campName: string): Promise<CampData | null> {
  try {
    // Fetch all rates from the API with revalidation
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/rates`, {
      method: 'GET',
      next: { 
        revalidate: 60, // Revalidate every 60 seconds
        tags: ['rates', `camp-${campName}`] // Cache tags for targeted revalidation
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch rates: ${response.statusText}`);
    }

    const apiResponse: ApiResponse<Rate[]> = await response.json();

    if (!apiResponse.success || !apiResponse.data) {
      throw new Error(apiResponse.error || 'Failed to fetch rates');
    }

    // Get all unique camp names from database
    const uniqueCampNames = [...new Set(apiResponse.data.map(rate => rate.name))];
    
    // Try to find matching camp name using smart matching
    const matchedCampName = findMatchingCampName(campName, uniqueCampNames);
    
    if (!matchedCampName) {
      return null;
    }
    
    // Filter rates for the matched camp
    const campRates = apiResponse.data.filter((rate) => rate.name === matchedCampName);

    if (campRates.length === 0) {
      return null;
    }

    // Get camp metadata from first rate entry
    const firstRate = campRates[0];

    // Transform rates array into Record<RatePeriod, CampRate> format
    const ratesRecord: Record<RatePeriod, CampRate> = {} as Record<RatePeriod, CampRate>;

    campRates.forEach((rate) => {
      ratesRecord[rate.rate_period as RatePeriod] = {
        sharing: rate.sharing_rate,
        supplement: rate.supplement_rate,
      };
    });

    // Construct CampData object
    const campData: CampData = {
      category: firstRate.category,
      camp: firstRate.camp,
      name: firstRate.name,
      type: firstRate.type,
      rates: ratesRecord,
    };

    return campData;
  } catch (error) {
    console.error('Error fetching camp rates by name:', error);
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch camp rates'
    );
  }
}

/**
 * Fetches all camp rates grouped by camp name
 * Useful for displaying all camps with their rates
 * Uses Next.js cache with 60-second revalidation
 * 
 * @returns Array of CampData objects
 */
export async function getAllCampRates(): Promise<CampData[]> {
  try {
    // Fetch all rates from the API with revalidation
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/rates`, {
      method: 'GET',
      next: { 
        revalidate: 60, // Revalidate every 60 seconds
        tags: ['rates', 'all-camps'] // Cache tags for targeted revalidation
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch rates: ${response.statusText}`);
    }

    const apiResponse: ApiResponse<Rate[]> = await response.json();

    if (!apiResponse.success || !apiResponse.data) {
      throw new Error(apiResponse.error || 'Failed to fetch rates');
    }

    // Group rates by camp name
    const campMap = new Map<string, Rate[]>();

    apiResponse.data.forEach((rate) => {
      if (!campMap.has(rate.name)) {
        campMap.set(rate.name, []);
      }
      campMap.get(rate.name)!.push(rate);
    });

    // Transform each camp's rates into CampData format
    const allCampData: CampData[] = [];

    campMap.forEach((rates, campName) => {
      const firstRate = rates[0];
      const ratesRecord: Record<RatePeriod, CampRate> = {} as Record<RatePeriod, CampRate>;

      rates.forEach((rate) => {
        ratesRecord[rate.rate_period as RatePeriod] = {
          sharing: rate.sharing_rate,
          supplement: rate.supplement_rate,
        };
      });

      allCampData.push({
        category: firstRate.category,
        camp: firstRate.camp,
        name: firstRate.name,
        type: firstRate.type,
        rates: ratesRecord,
      });
    });

    return allCampData;
  } catch (error) {
    console.error('Error fetching all camp rates:', error);
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch all camp rates'
    );
  }
}
