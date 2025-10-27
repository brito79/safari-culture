import { v4 as uuidv4 } from 'uuid';
import { query, queryOne, execute } from './queries';
import { Tour } from '@/types/database';

/**
 * Get all published tours
 */
export async function getAllTours(): Promise<Tour[]> {
  const sql = `
    SELECT * FROM tours 
    WHERE status = 'published' 
    ORDER BY created_at DESC
  `;
  return query<Tour>(sql);
}

/**
 * Get tour by slug
 */
export async function getTourBySlug(slug: string): Promise<Tour | null> {
  const sql = `SELECT * FROM tours WHERE slug = ? LIMIT 1`;
  return queryOne<Tour>(sql, [slug]);
}

/**
 * Get tour by ID
 */
export async function getTourById(id: string): Promise<Tour | null> {
  const sql = `SELECT * FROM tours WHERE id = ? LIMIT 1`;
  return queryOne<Tour>(sql, [id]);
}

/**
 * Create new tour
 */
export async function createTour(data: {
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  location: string;
  latitude?: number;
  longitude?: number;
  amenities?: string[];
  max_guests?: number;
  hero_image_url?: string;
  status?: 'draft' | 'published';
}): Promise<string> {
  const id = uuidv4();
  const sql = `
    INSERT INTO tours (
      id, name, slug, description, short_description, 
      location, latitude, longitude, amenities, 
      max_guests, hero_image_url, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  await execute(sql, [
    id,
    data.name,
    data.slug,
    data.description || null,
    data.short_description || null,
    data.location,
    data.latitude || null,
    data.longitude || null,
    data.amenities ? JSON.stringify(data.amenities) : null,
    data.max_guests || null,
    data.hero_image_url || null,
    data.status || 'published'
  ]);
  
  return id;
}

/**
 * Update tour
 */
export async function updateTour(
  id: string,
  data: Partial<Omit<Tour, 'id' | 'created_at' | 'updated_at'>>
): Promise<void> {
  const fields: string[] = [];
  const values: any[] = [];
  
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      fields.push(`${key} = ?`);
      values.push(
        key === 'amenities' && Array.isArray(value) 
          ? JSON.stringify(value) 
          : value
      );
    }
  });
  
  if (fields.length === 0) return;
  
  values.push(id);
  const sql = `UPDATE tours SET ${fields.join(', ')} WHERE id = ?`;
  await execute(sql, values);
}

/**
 * Delete tour
 */
export async function deleteTour(id: string): Promise<void> {
  const sql = `DELETE FROM tours WHERE id = ?`;
  await execute(sql, [id]);
}

/**
 * Get all tours (including drafts) - Admin only
 */
export async function getAllToursAdmin(): Promise<Tour[]> {
  const sql = `SELECT * FROM tours ORDER BY created_at DESC`;
  return query<Tour>(sql);
}