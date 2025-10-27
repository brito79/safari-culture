import { v4 as uuidv4 } from 'uuid';
import { query, execute } from './queries';
import { Rate } from '@/types/database';

/**
 * Get all rates for a tour
 */
export async function getRatesByTourId(tourId: string): Promise<Rate[]> {
  const sql = `
    SELECT * FROM rates 
    WHERE tour_id = ? 
    ORDER BY valid_from ASC
  `;
  return query<Rate>(sql, [tourId]);
}

/**
 * Get current rate for a tour based on date
 */
export async function getCurrentRate(
  tourId: string,
  date: Date = new Date()
): Promise<Rate | null> {
  const sql = `
    SELECT * FROM rates 
    WHERE tour_id = ? 
    AND valid_from <= ? 
    AND valid_to >= ?
    ORDER BY valid_from DESC
    LIMIT 1
  `;
  const dateStr = date.toISOString().split('T')[0];
  const rates = await query<Rate>(sql, [tourId, dateStr, dateStr]);
  return rates.length > 0 ? rates[0] : null;
}

/**
 * Create new rate
 */
export async function createRate(data: {
  tour_id: string;
  season_name: string;
  price_per_person: number;
  currency?: string;
  valid_from: Date;
  valid_to: Date;
  min_guests?: number;
  max_guests?: number;
  notes?: string;
}): Promise<string> {
  const id = uuidv4();
  const sql = `
    INSERT INTO rates (
      id, tour_id, season_name, price_per_person, 
      currency, valid_from, valid_to, min_guests, 
      max_guests, notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  await execute(sql, [
    id,
    data.tour_id,
    data.season_name,
    data.price_per_person,
    data.currency || 'USD',
    data.valid_from,
    data.valid_to,
    data.min_guests || 1,
    data.max_guests || null,
    data.notes || null
  ]);
  
  return id;
}

/**
 * Update rate
 */
export async function updateRate(
  id: string,
  data: Partial<Omit<Rate, 'id' | 'tour_id' | 'created_at' | 'updated_at'>>
): Promise<void> {
  const fields: string[] = [];
  const values: any[] = [];
  
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      fields.push(`${key} = ?`);
      values.push(value);
    }
  });
  
  if (fields.length === 0) return;
  
  values.push(id);
  const sql = `UPDATE rates SET ${fields.join(', ')} WHERE id = ?`;
  await execute(sql, values);
}

/**
 * Delete rate
 */
export async function deleteRate(id: string): Promise<void> {
  const sql = `DELETE FROM rates WHERE id = ?`;
  await execute(sql, [id]);
}

/**
 * Check for overlapping rates
 */
export async function hasOverlappingRates(
  tourId: string,
  validFrom: Date,
  validTo: Date,
  excludeRateId?: string
): Promise<boolean> {
  const sql = `
    SELECT COUNT(*) as count FROM rates
    WHERE tour_id = ?
    AND (
      (valid_from <= ? AND valid_to >= ?)
      OR (valid_from <= ? AND valid_to >= ?)
      OR (valid_from >= ? AND valid_to <= ?)
    )
    ${excludeRateId ? 'AND id != ?' : ''}
  `;
  
  const params = [
    tourId,
    validFrom, validFrom,
    validTo, validTo,
    validFrom, validTo
  ];
  
  if (excludeRateId) params.push(excludeRateId);
  
  const result = await query<{ count: number }>(sql, params);
  return result[0].count > 0;
}