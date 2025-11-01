'use server';

// Type definitions for camp data
export interface Camp {
    id: string;
    name: string;
    region: string;
    description: string;
    features?: string[];
    images?: {
        hero?: string;
        gallery?: string[];
    };
    accommodation?: string;
    fromPrice?: string;
}

interface ApiResponse {
    success: boolean;
    data?: Camp[];
    error?: string;
    details?: unknown;
}

/**
 * Server action to fetch camps data from the database
 * Uses Next.js cache with 60-second revalidation
 */
export async function getCampsData(): Promise<Camp[]> {
    try {
        // Get the base URL for API calls
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        
        // Make API call to our camps endpoint with revalidation
        const response = await fetch(`${baseUrl}/api/camps`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: { 
                revalidate: 60, // Revalidate every 60 seconds
                tags: ['camps'] // Cache tag for targeted revalidation
            }
        });

        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (!result.success) {
            throw new Error(result.error || 'API returned unsuccessful response');
        }

        if (!result.data) {
            throw new Error('No data returned from API');
        }

        console.log('Successfully fetched camps from database');
        return result.data;

    } catch (error) {
        console.error('Error fetching camps data:', error);
        throw error; // Re-throw the error instead of returning fallback data
    }
}

/**
 * Helper function to get a single camp by ID
 */
export async function getCampById(id: string): Promise<Camp | null> {
    try {
        const camps = await getCampsData();
        return camps.find(camp => camp.id === id) || null;
    } catch (error) {
        console.error('Error fetching camp by ID:', error);
        throw error;
    }
}

/**
 * Helper function to get camps by region
 */
export async function getCampsByRegion(region: string): Promise<Camp[]> {
    try {
        const camps = await getCampsData();
        return camps.filter(camp => camp.region.toLowerCase() === region.toLowerCase());
    } catch (error) {
        console.error('Error fetching camps by region:', error);
        throw error;
    }
}


