USE wilderness_namibia_db;

CREATE TABLE contact (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Personal Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50),
    country VARCHAR(100) NOT NULL,
    
    -- Travel Preferences
    travel_dates VARCHAR(255),
    group_size VARCHAR(50) NOT NULL,
    experience_type VARCHAR(100) NOT NULL,
    budget VARCHAR(50),
    
    -- Interested Camps & Requests (Requires special handling for 'camps' array)
    camps_interested TEXT, 
    special_requests TEXT,
    
    -- Indexing for quick lookups
    INDEX idx_email (email),
    INDEX idx_country (country)
);