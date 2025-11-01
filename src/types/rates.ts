/**
 * Rate types for camp pricing
 */

export interface CampRate {
  id: string | number;
  camp: string;
  season: string;
  startDate: string;
  endDate: string;
  amount: number;
  currency: string;
}

export interface Rate {
  id: number;
  camp_id: string;
  season: string;
  start_date: string;
  end_date: string;
  sharing_rate: number;
  single_rate: number;
  currency: string;
}
