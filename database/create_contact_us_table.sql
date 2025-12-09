-- Create Contact Us Table
-- This table stores contact information displayed on the contact page

CREATE TABLE IF NOT EXISTS contact_us (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(50) NOT NULL,
  phone_hours VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  email_response VARCHAR(100) NOT NULL,
  office VARCHAR(255) NOT NULL,
  office_details VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_id (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default contact information
INSERT INTO contact_us (
  phone, 
  phone_hours, 
  email, 
  email_response, 
  office, 
  office_details
) VALUES (
  '+27 11 807 1800',
  'Mon-Fri: 8:00 - 17:00 CAT',
  'info@wilderness-safaris.com',
  'Response within 24 hours',
  'Windhoek, Namibia',
  'UTC+2 Timezone'
);

-- Verify table creation and data
SELECT 'Contact Us table created successfully!' AS message;
SELECT * FROM contact_us;
