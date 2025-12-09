USE wilderness_namibia_db;

CREATE TABLE contact_us (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(50) NOT NULL,
    phone_hours VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    email_response VARCHAR(255),
    office VARCHAR(255),
    office_details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email)
);
