'use server';

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

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
}

/**
 * Fetch all camp experiences from the database
 * Uses ISR with 60-second revalidation
 */
export async function getCampExperiences(): Promise<Experience[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/experiences`, {
      method: 'GET',
      next: { 
        revalidate: 60,
        tags: ['experiences', 'camp-experiences']
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<Experience[]> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error || 'Failed to fetch experiences');
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching camp experiences:', error);
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
