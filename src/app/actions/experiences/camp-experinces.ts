'use server';

import { query } from '@/lib/db/db';
import { unstable_cache } from 'next/cache';

export interface Experience {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  difficulty: string;
  bestTime: string;
  highlights: string[];
  camps: string[];
}

interface ExperienceRow {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  long_description: string;
  image_url: string;
  duration: string;
  difficulty: string;
  best_time: string;
  highlights: string;
  camps: string;
}

/**
 * Helper function to parse comma/pipe-separated values
 */
function parseList(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .split(/[,|]/)
    .map(item => item.trim())
    .filter(item => item.length > 0);
}

/**
 * Fetch all camp experiences directly from database
 * Production-optimized with caching and error handling
 * Uses Next.js unstable_cache for 60-second revalidation
 */
async function fetchExperiencesFromDb(): Promise<Experience[]> {
  try {
    console.log('📊 [Server Action] Fetching experiences from database...');
    
    const sql = `
      SELECT 
        id,
        title,
        subtitle,
        description,
        long_description,
        image_url,
        duration,
        difficulty,
        best_time,
        highlights,
        camps
      FROM experiences_camps
      ORDER BY id ASC
    `;

    const [rows] = await query<ExperienceRow>(sql);
    
    if (!Array.isArray(rows)) {
      throw new Error('Invalid database response');
    }

    console.log(`✅ [Server Action] Found ${rows.length} experiences`);

    // Transform and validate
    const experiences = rows.map(row => {
      if (!row.id || !row.title || !row.description) {
        throw new Error(`Missing required fields for experience ${row.id}`);
      }

      return {
        id: row.id,
        title: row.title,
        subtitle: row.subtitle || '',
        description: row.description,
        longDescription: row.long_description || '',
        image: row.image_url || '',
        duration: row.duration || '',
        difficulty: row.difficulty || '',
        bestTime: row.best_time || '',
        highlights: parseList(row.highlights),
        camps: parseList(row.camps),
      };
    });

    return experiences;
  } catch (error) {
    console.error('❌ [Server Action] Error fetching experiences:', error);
    throw error;
  }
}

/**
 * Cached version of experiences fetch
 * Revalidates every 60 seconds
 */
const getCachedExperiences = unstable_cache(
  async () => fetchExperiencesFromDb(),
  ['camp-experiences'],
  {
    revalidate: 60,
    tags: ['experiences', 'camp-experiences']
  }
);

/**
 * Public API: Fetch all camp experiences
 * Returns empty array on error to prevent page crashes
 */
export async function getCampExperiences(): Promise<Experience[]> {
  try {
    return await getCachedExperiences();
  } catch (error) {
    console.error('❌ Error in getCampExperiences:', error);
    // Return empty array instead of throwing to prevent page crashes
    return [];
  }
}

/**
 * Fetch a single experience by ID
 */
export async function getExperienceById(id: number): Promise<Experience | null> {
  try {
    const experiences = await getCampExperiences();
    return experiences.find(exp => exp.id === id) || null;
  } catch (error) {
    console.error(`Error fetching experience ${id}:`, error);
    return null;
  }
}

/**
 * Fetch experiences available at a specific camp
 */
export async function getExperiencesByCamp(campName: string): Promise<Experience[]> {
  try {
    const experiences = await getCampExperiences();
    return experiences.filter(exp => 
      exp.camps.some(camp => 
        camp.toLowerCase().includes(campName.toLowerCase())
      )
    );
  } catch (error) {
    console.error(`Error fetching experiences for camp ${campName}:`, error);
    return [];
  }
}
