// KYC Application Types

export interface CampBooking {
  campId: string;
  campName: string;
  numberOfNights: number;
  checkIn: string;
  checkOut: string;
  roomType: 'standard' | 'suite' | 'family';
  numberOfRooms: number;
  specialRequests?: string;
  estimatedRate?: number;
}

export interface KYCFormData {
  // Step 1: Personal Information
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    nationality: string;
    passportNumber: string;
    passportExpiry: string;
  };
  
  // Step 2: Travel Details
  travelDetails: {
    preferredStartDate: string;
    preferredEndDate: string;
    flexibleDates: boolean;
    numberOfAdults: number;
    numberOfChildren: number;
    childrenAges: number[];
    tripDuration?: number;
  };
  
  // Step 3: Camp & Lodge Selection
  campSelection: {
    selectedCamps: CampBooking[];
    totalNights?: number;
    estimatedBudget?: string;
  };
  
  // Step 4: Experience Preferences
  experiencePreferences: {
    selectedExperiences: string[];
    wildlifeInterests: string[];
    photographyLevel: 'casual' | 'enthusiast' | 'professional' | '';
    specialInterests: string[];
  };
  
  // Step 5: Special Requirements
  specialRequirements: {
    dietaryRestrictions: string[];
    otherDietary?: string;
    medicalConditions: string[];
    otherMedical?: string;
    mobilityNeeds: string[];
    accessibilityRequirements?: string;
    specialRequests?: string;
  };
  
  // Step 6: Emergency Contact
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
    email: string;
  };
  
  // Step 7: Metadata
  agreedToTerms: boolean;
  marketingConsent: boolean;
  submittedAt?: string;
  applicationId?: string;
}

export type KYCStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface KYCState {
  currentStep: KYCStep;
  formData: Partial<KYCFormData>;
  completedSteps: Set<KYCStep>;
  errors: Record<string, string>;
}

export type KYCAction =
  | { type: 'SET_STEP'; payload: KYCStep }
  | { type: 'UPDATE_DATA'; payload: Partial<KYCFormData> }
  | { type: 'MARK_COMPLETE'; payload: KYCStep }
  | { type: 'SET_ERRORS'; payload: Record<string, string> }
  | { type: 'RESET' };

export interface Camp {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  features: string[];
  roomTypes: string[];
  priceRange: string;
}
