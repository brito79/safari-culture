// Base types
type UUID = string;
type ISODateString = string;
type CurrencyCode = 'ZAR' | 'USD' | 'EUR' | 'GBP';
type BoardBasis = 'FI' | 'DBB'; // Fully Inclusive or Dinner, Bed & Breakfast

type ImageCategory = 'hero' | 'accommodation' | 'activities' | 'landscapes' | 'wildlife' | 'gallery' | 'amenity' | 'other';
type ImageKind = 'hero' | 'gallery' | 'inline';
type ActivityDifficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Easy to Moderate' | 'Moderate to Challenging';
type Status = 'draft' | 'published';
type InquiryStatus = 'new' | 'contacted' | 'quoted' | 'closed';

// Base interfaces
interface BaseEntity {
  id: UUID;
  created_at: ISODateString;
  updated_at?: ISODateString;
}

// Region
interface Region extends BaseEntity {
  name: string;
  description: string;
}

// Camp
interface CampLocation {
  country: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  altitude?: string;
  nearest_town?: string;
  [key: string]: any; // For additional location properties
}

interface Camp extends BaseEntity {
  name: string;
  slug: string;
  region_id: UUID;
  description: string;
  accommodation_summary: string;
  from_price_amount: number;
  from_price_currency: CurrencyCode;
  capacity_total: number;
  min_stay_default: number;
  location: CampLocation;
  hero_image_id?: UUID;
  status: Status;
  region?: Region; // Populated in joins
}

// Camp Feature
interface CampFeature extends BaseEntity {
  camp_id: UUID;
  label: string;
  display_order: number;
  camp?: Camp; // Populated in joins
}

// Camp Section
interface CampSection extends BaseEntity {
  camp_id: UUID;
  section_type: 'overview' | 'accommodation_intro' | 'activities_intro' | 'contact_notes' | 'custom';
  title: string | null;
  body: string;
  display_order: number;
  camp?: Camp; // Populated in joins
}

// Experience
interface Experience extends BaseEntity {
  title: string;
  subtitle: string | null;
  description: string;
  long_description: string;
  image_url: string;
  duration: string;
  difficulty: ActivityDifficulty;
  best_time: string;
  highlights: string[];
  status: Status;
}

// Camp Experience (Junction table)
interface CampExperience extends BaseEntity {
  camp_id: UUID;
  experience_id: UUID;
  display_order: number;
  additional_notes?: string;
  camp?: Camp; // Populated in joins
  experience?: Experience; // Populated in joins
}

// Activity
interface Activity extends BaseEntity {
  camp_id: UUID;
  title: string;
  description: string;
  image_id?: UUID;
  duration: string;
  difficulty: ActivityDifficulty;
  display_order: number;
  camp?: Camp; // Populated in joins
  highlights?: ActivityHighlight[]; // Populated in joins
}

// Activity Highlight
interface ActivityHighlight extends BaseEntity {
  activity_id: UUID;
  label: string;
  display_order: number;
  activity?: Activity; // Populated in joins
}

// Accommodation Type
interface AccommodationType extends BaseEntity {
  camp_id: UUID;
  name: string;
  max_occupancy: number | null;
  bedrooms: number | null;
  description: string | null;
  display_order: number;
  camp?: Camp; // Populated in joins
  features?: AccommodationFeature[]; // Populated in joins
}

// Accommodation Feature
interface AccommodationFeature extends BaseEntity {
  accommodation_type_id: UUID;
  label: string;
  display_order: number;
  accommodation_type?: AccommodationType; // Populated in joins
}

// Rate Season
interface RateSeason extends BaseEntity {
  camp_id: UUID;
  name: string;
  start_date: ISODateString;
  end_date: ISODateString;
  priority: number;
  min_nights: number;
  blackout: boolean;
  camp?: Camp; // Populated in joins
}

// Rate
interface Rate extends BaseEntity {
  camp_id: UUID;
  season_id: UUID;
  board_basis: BoardBasis;
  currency_code: CurrencyCode;
  sharing_rate: number;
  single_supplement: number;
  effective_from: ISODateString;
  effective_to: ISODateString;
  camp?: Camp; // Populated in joins
  season?: RateSeason; // Populated in joins
}

// Image
interface Image extends BaseEntity {
  camp_id?: UUID | null;
  experience_id?: UUID | null;
  activity_id?: UUID | null;
  s3_key: string;
  s3_url: string;
  alt_text?: string;
  caption?: string;
  category: ImageCategory;
  kind: ImageKind;
  display_order: number;
  width?: number;
  height?: number;
  file_size?: number;
  camp?: Camp; // Populated in joins
  experience?: Experience; // Populated in joins
  activity?: Activity; // Populated in joins
}

// Gallery
interface Gallery extends BaseEntity {
  camp_id: UUID;
  name: string;
  description?: string;
  display_order: number;
  camp?: Camp; // Populated in joins
  images?: GalleryImage[]; // Populated in joins
}

// Gallery Image (Junction table)
interface GalleryImage extends BaseEntity {
  gallery_id: UUID;
  image_id: UUID;
  display_order: number;
  gallery?: Gallery; // Populated in joins
  image?: Image; // Populated in joins
}

// Contact
interface Contact extends BaseEntity {
  camp_id: UUID;
  location_line1?: string;
  location_line2?: string;
  region_text?: string;
  country: string;
  email?: string;
  phone?: string;
  website?: string;
  skype?: string;
  best_time_notes?: string;
  camp?: Camp; // Populated in joins
}

// Inquiry
interface InquiryTravelDates {
  checkin: ISODateString;
  checkout: ISODateString;
  flexible: boolean;
}

interface InquiryGuestCount {
  adults: number;
  children: number;
  child_ages?: number[];
}

interface Inquiry extends BaseEntity {
  camp_id?: UUID | null;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  travel_dates: InquiryTravelDates;
  guest_count: InquiryGuestCount;
  message?: string;
  status: InquiryStatus;
  admin_notes?: string;
  camp?: Camp; // Populated in joins
}

// Role
interface PermissionSet {
  [key: string]: string[]; // e.g., { 'camps': ['view', 'edit'], 'users': ['manage'] }
}

interface Role extends BaseEntity {
  name: 'admin' | 'public';
  permissions: PermissionSet;
  users?: User[]; // Populated in joins
}

// User
interface User extends BaseEntity {
  auth0_sub: string;
  email: string;
  name?: string | null;
  role_id: UUID;
  last_login?: ISODateString | null;
  role?: Role; // Populated in joins
}

// Audit Log
interface AuditLog extends BaseEntity {
  user_id?: UUID | null;
  action: string;
  entity_type: string;
  entity_id: UUID;
  metadata?: Record<string, any>;
  user?: User; // Populated in joins
}

// Migration
interface Migration extends BaseEntity {
  version: string;
  description?: string;
  executed_at: ISODateString;
}

// Export all types
export type {
  UUID,
  ISODateString,
  CurrencyCode,
  BoardBasis,
  ImageCategory,
  ImageKind,
  ActivityDifficulty,
  Status,
  InquiryStatus,
  BaseEntity,
  Region,
  CampLocation,
  Camp,
  CampFeature,
  CampSection,
  Experience,
  CampExperience,
  Activity,
  ActivityHighlight,
  AccommodationType,
  AccommodationFeature,
  RateSeason,
  Rate,
  Image,
  Gallery,
  GalleryImage,
  Contact,
  InquiryTravelDates,
  InquiryGuestCount,
  Inquiry,
  PermissionSet,
  Role,
  User,
  AuditLog,
  Migration
};

// Export interfaces that can be used for type assertions
export const Types = {
  isCamp: (obj: any): obj is Camp => 'name' in obj && 'slug' in obj && 'region_id' in obj,
  isExperience: (obj: any): obj is Experience => 'title' in obj && 'duration' in obj && 'difficulty' in obj,
  isUser: (obj: any): obj is User => 'auth0_sub' in obj && 'email' in obj && 'role_id' in obj,
  // Add more type guards as needed
};