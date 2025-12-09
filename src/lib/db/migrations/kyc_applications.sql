USE wilderness_namibia_db;

CREATE TABLE kyc_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id VARCHAR(100) NOT NULL UNIQUE,
    
    -- Step 1: Personal Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    nationality VARCHAR(100) NOT NULL,
    passport_number VARCHAR(100) NOT NULL,
    passport_expiry DATE NOT NULL,
    
    -- Step 2: Travel Details
    preferred_start_date DATE NOT NULL,
    preferred_end_date DATE NOT NULL,
    flexible_dates BOOLEAN DEFAULT FALSE,
    number_of_adults INT NOT NULL,
    number_of_children INT DEFAULT 0,
    children_ages JSON,
    
    -- Step 3: Camp Selection
    selected_camps JSON NOT NULL,
    total_nights INT,
    
    -- Step 4: Experience Preferences
    selected_experiences JSON,
    wildlife_interests JSON,
    photography_level VARCHAR(50),
    
    -- Step 5: Special Requirements
    dietary_restrictions JSON,
    other_dietary TEXT,
    medical_conditions JSON,
    mobility_needs JSON,
    special_requests TEXT,
    
    -- Step 6: Emergency Contact
    emergency_contact_name VARCHAR(100) NOT NULL,
    emergency_contact_relationship VARCHAR(100) NOT NULL,
    emergency_contact_phone VARCHAR(50) NOT NULL,
    emergency_contact_email VARCHAR(255) NOT NULL,
    
    -- Step 7: Terms & Marketing
    agreed_to_terms BOOLEAN DEFAULT FALSE,
    marketing_consent BOOLEAN DEFAULT FALSE,
    
    -- Application Status & Timestamps
    status ENUM('pending', 'under_review', 'approved', 'rejected') DEFAULT 'pending',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP NULL,
    reviewed_by VARCHAR(100),
    notes TEXT,
    
    -- Indexes
    INDEX idx_application_id (application_id),
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_submitted_at (submitted_at)
);
