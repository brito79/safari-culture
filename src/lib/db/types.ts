// Database table interfaces

export interface Rate {
  id: number;
  category: string;
  camp: string;
  name: string;
  type: 'FI' | 'DBB';
  rate_period: string;
  sharing_rate: string;
  supplement_rate: string;
}

export interface Contact {
  contact_id?: number;
  submission_date?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  country: string;
  travel_dates?: string | null;
  group_size: string;
  experience_type: string;
  budget?: string | null;
  camps_interested?: string | null; // JSON string of array
  special_requests?: string | null;
}

// Form data interface for the contact form component
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  travelDates: string;
  groupSize: string;
  experienceType: string;
  camps: string[];
  specialRequests: string;
  budget: string;
}

// Server action response type
export interface ServerActionResponse {
  success: boolean;
  message: string;
  error?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
  count?: number;
}

export interface DatabaseError {
  code: string;
  message: string;
  stack?: string;
}