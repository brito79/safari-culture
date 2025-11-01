export type RatePeriod = "6-Jun-26 to 31-May-26" | "1-Apr-26 to 31-May-26" | "1-Jun-26 to 31-Oct-26" | "1-Nov-26 to 19-Dec-26" | "20-Dec-26 to 5-Jan-27";

export interface CampRate {
  sharing: string; // Per person, sharing rate (e.g., "R7 318")
  supplement: string; // Single supplement rate (e.g., "R2 194")
}

export interface CampData {
  category: string; // e.g., "Adventures", "Classic"
  camp: string; // e.g., "Doro Nawas", "Sossusvlei"
  name: string; // e.g., "Wilderness-Doro-Nawas" (Crucial for DB JOINs)
  type: 'FI' | 'DBB'; // e.g., "FI" (Full Inclusive), "DBB" (Dinner, Bed & Breakfast)
  rates: Record<RatePeriod, CampRate>;
}