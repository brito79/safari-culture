-- Create KYC Applications Table
-- This table stores all safari booking applications with complete customer information

CREATE TABLE IF NOT EXISTS kyc_applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_id VARCHAR(50) UNIQUE NOT NULL,
  
  -- Step 1: Personal Information
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  date_of_birth DATE NOT NULL,
  nationality VARCHAR(100) NOT NULL,
  passport_number VARCHAR(50) NOT NULL,
  passport_expiry DATE NOT NULL,
  
  -- Step 2: Travel Details
  preferred_start_date DATE NOT NULL,
  preferred_end_date DATE NOT NULL,
  flexible_dates BOOLEAN DEFAULT FALSE,
  number_of_adults INT NOT NULL,
  number_of_children INT DEFAULT 0,
  children_ages TEXT, -- JSON array
  trip_duration INT,
  
  -- Step 3: Camp Selection
  selected_camps TEXT NOT NULL, -- JSON array of camp bookings
  total_nights INT,
  estimated_budget VARCHAR(50),
  
  -- Step 4: Experience Preferences
  selected_experiences TEXT, -- JSON array
  wildlife_interests TEXT, -- JSON array
  photography_level VARCHAR(50),
  special_interests TEXT, -- JSON array
  
  -- Step 5: Special Requirements
  dietary_restrictions TEXT, -- JSON array
  other_dietary TEXT,
  medical_conditions TEXT, -- JSON array
  mobility_needs TEXT, -- JSON array
  special_requests TEXT,
  
  -- Step 6: Emergency Contact
  emergency_contact_name VARCHAR(100) NOT NULL,
  emergency_contact_relationship VARCHAR(50) NOT NULL,
  emergency_contact_phone VARCHAR(50) NOT NULL,
  emergency_contact_email VARCHAR(255) NOT NULL,
  
  -- Step 7: Consent
  agreed_to_terms BOOLEAN NOT NULL,
  marketing_consent BOOLEAN DEFAULT FALSE,
  
  -- Status & Admin
  status ENUM('pending', 'reviewing', 'approved', 'rejected', 'completed') DEFAULT 'pending',
  admin_notes TEXT,
  reviewed_by VARCHAR(100),
  reviewed_at TIMESTAMP NULL,
  
  -- Timestamps
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Indexes
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_submitted (submitted_at),
  INDEX idx_application_id (application_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Verify table creation
SELECT 'KYC Applications table created successfully!' AS message;
