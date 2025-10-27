export interface Tour {
  id: string;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  location: string;
  latitude?: number;
  longitude?: number;
  amenities?: string[]; // JSON parsed
  max_guests?: number;
  hero_image_url?: string;
  status: 'draft' | 'published';
  created_at: Date;
  updated_at: Date;
}

export interface Rate {
  id: string;
  tour_id: string;
  season_name: string;
  price_per_person: number;
  currency: string;
  valid_from: Date;
  valid_to: Date;
  min_guests: number;
  max_guests?: number;
  notes?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Image {
  id: string;
  tour_id?: string;
  s3_key: string;
  s3_url: string;
  title?: string;
  alt_text?: string;
  caption?: string;
  display_order: number;
  is_hero: boolean;
  width?: number;
  height?: number;
  file_size?: number;
  created_at: Date;
}

export interface Inquiry {
  id: string;
  tour_id?: string;
  name: string;
  email: string;
  phone?: string;
  preferred_dates?: Date;
  guest_count?: number;
  message?: string;
  status: 'new' | 'contacted' | 'converted' | 'archived';
  created_at: Date;
}