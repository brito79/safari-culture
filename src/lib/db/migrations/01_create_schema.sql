-- ============================================================================
-- Wilderness Namibia - Complete Database Schema
-- ============================================================================
-- Purpose: Create all tables for luxury safari platform matching actual app structure
-- Database: MySQL 8.x (Amazon RDS)
-- Tool: MySQL Workbench
-- Primary Keys: CHAR(36) UUIDs
-- Character Set: utf8mb4_unicode_ci
-- Engine: InnoDB
-- 
-- Execution Instructions:
-- 1. Open MySQL Workbench
-- 2. Connect to your RDS instance (wilderness-namibia-db)
-- 3. Open this file (File → Open SQL Script)
-- 4. Execute entire script (Query → Execute)
-- 5. Verify: SELECT * FROM migrations;
-- 
-- Author: Wilderness Namibia Platform
-- Date: 2025-10-27
-- Version: 1.0
-- ============================================================================

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS wilderness_namibia
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE wilderness_namibia;

-- Enable safe updates (optional safety for MySQL Workbench)
SET SQL_SAFE_UPDATES = 0;

START TRANSACTION;

-- ============================================================================
-- MIGRATIONS TABLE (Track applied migrations)
-- ============================================================================
CREATE TABLE IF NOT EXISTS migrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  version VARCHAR(50) NOT NULL UNIQUE,
  description VARCHAR(255),
  executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_version (version)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Tracks database migration history';

-- ============================================================================
-- ROLES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS roles (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  name ENUM('public', 'admin') NOT NULL UNIQUE,
  permissions JSON NOT NULL COMMENT 'Permissions object per resource',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='User roles and permissions (public, admin)';

-- ============================================================================
-- USERS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  auth0_sub VARCHAR(255) NOT NULL UNIQUE COMMENT 'Auth0 user ID (sub claim)',
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role_id CHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL,
  INDEX idx_auth0_sub (auth0_sub),
  INDEX idx_email (email),
  INDEX idx_role_id (role_id),
  CONSTRAINT fk_users_role FOREIGN KEY (role_id) 
    REFERENCES roles(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='System users linked to Auth0';

-- ============================================================================
-- REGIONS TABLE (Lookup)
-- ============================================================================
CREATE TABLE IF NOT EXISTS regions (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  name VARCHAR(100) NOT NULL UNIQUE COMMENT 'Region name (e.g., Damaraland)',
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Geographic regions where camps are located';

-- ============================================================================
-- CAMPS TABLE (Main entity)
-- ============================================================================
CREATE TABLE IF NOT EXISTS camps (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  name VARCHAR(255) NOT NULL COMMENT 'Camp name (e.g., Doro Nawas)',
  slug VARCHAR(255) NOT NULL UNIQUE COMMENT 'URL-friendly identifier',
  region_id CHAR(36) NOT NULL,
  description TEXT COMMENT 'List view summary description',
  accommodation_summary VARCHAR(100) COMMENT 'e.g., "11 Desert Villas"',
  from_price_amount DECIMAL(10,2) COMMENT 'Starting price for display',
  from_price_currency CHAR(3) DEFAULT 'ZAR' COMMENT 'ISO currency code',
  capacity_total INT COMMENT 'Maximum guest capacity',
  min_stay_default INT DEFAULT 2 COMMENT 'Minimum nights required',
  location JSON COMMENT 'Full location details {country, coordinates, altitude, etc}',
  hero_image_id CHAR(36) NULL COMMENT 'FK to images table',
  status ENUM('draft', 'published') DEFAULT 'published',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_region_id (region_id),
  INDEX idx_status (status),
  CONSTRAINT fk_camps_region FOREIGN KEY (region_id) 
    REFERENCES regions(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Safari camps (Doro Nawas, Damaraland, Hoanib, Little Kulala)';

-- ============================================================================
-- CAMP_FEATURES TABLE (Key highlights for list view)
-- ============================================================================
CREATE TABLE IF NOT EXISTS camp_features (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  label VARCHAR(255) NOT NULL COMMENT 'Feature text (e.g., "Desert-adapted wildlife")',
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_camp_id (camp_id),
  INDEX idx_display_order (display_order),
  UNIQUE KEY uk_camp_feature (camp_id, label),
  CONSTRAINT fk_features_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Feature bullets for camp listing pages';

-- ============================================================================
-- CAMP_SECTIONS TABLE (Rich content blocks)
-- ============================================================================
CREATE TABLE IF NOT EXISTS camp_sections (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  section_type ENUM('overview', 'accommodation_intro', 'activities_intro', 'contact_notes', 'custom') NOT NULL,
  title VARCHAR(255) NULL COMMENT 'Section heading',
  body MEDIUMTEXT COMMENT 'Rich text content (HTML/Markdown)',
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_camp_section (camp_id, section_type),
  INDEX idx_display_order (display_order),
  CONSTRAINT fk_sections_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Flexible content sections per camp (overview, accommodation, etc)';

-- ============================================================================
-- EXPERIENCES TABLE (Nature experiences shared across camps)
-- ============================================================================
CREATE TABLE IF NOT EXISTS experiences (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  title VARCHAR(255) NOT NULL COMMENT 'e.g., "Nature Drives"',
  subtitle VARCHAR(255) COMMENT 'Tagline',
  description TEXT COMMENT 'Short description for cards',
  long_description TEXT COMMENT 'Full description for detail page',
  image_url VARCHAR(500) COMMENT 'S3 path or full URL',
  duration VARCHAR(100) COMMENT 'e.g., "3-4 hours", "Half day"',
  difficulty ENUM('Easy', 'Easy to Moderate', 'Moderate', 'Moderate to Challenging', 'Challenging'),
  best_time VARCHAR(255) COMMENT 'Optimal timing',
  highlights JSON COMMENT 'Array of highlight strings',
  status ENUM('draft', 'published') DEFAULT 'published',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_title (title)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Shared experiences (Nature Drives, Balloon Safaris, etc)';

-- ============================================================================
-- CAMP_EXPERIENCES TABLE (Many-to-many junction)
-- ============================================================================
CREATE TABLE IF NOT EXISTS camp_experiences (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  experience_id CHAR(36) NOT NULL,
  display_order INT DEFAULT 0,
  additional_notes TEXT COMMENT 'Camp-specific notes about this experience',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_camp_id (camp_id),
  INDEX idx_experience_id (experience_id),
  INDEX idx_display_order (display_order),
  UNIQUE KEY uk_camp_experience (camp_id, experience_id),
  CONSTRAINT fk_camp_exp_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_camp_exp_experience FOREIGN KEY (experience_id) 
    REFERENCES experiences(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Links camps to experiences they offer';

-- ============================================================================
-- ACTIVITIES TABLE (Camp-specific activities - detail page)
-- ============================================================================
CREATE TABLE IF NOT EXISTS activities (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_id CHAR(36) NULL COMMENT 'FK to images',
  duration VARCHAR(100) COMMENT 'e.g., "2 hours"',
  difficulty VARCHAR(50) COMMENT 'Easy, Moderate, Challenging',
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_camp_id (camp_id),
  INDEX idx_display_order (display_order),
  CONSTRAINT fk_activities_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Camp-specific activities from detail pages';

-- ============================================================================
-- ACTIVITY_HIGHLIGHTS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS activity_highlights (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  activity_id CHAR(36) NOT NULL,
  label VARCHAR(255) NOT NULL,
  display_order INT DEFAULT 0,
  INDEX idx_activity_id (activity_id),
  UNIQUE KEY uk_activity_highlight (activity_id, label),
  CONSTRAINT fk_highlights_activity FOREIGN KEY (activity_id) 
    REFERENCES activities(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Highlight points for activities';

-- ============================================================================
-- ACCOMMODATION_TYPES TABLE (Rooms/Villas)
-- ============================================================================
CREATE TABLE IF NOT EXISTS accommodation_types (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL COMMENT 'e.g., "Desert Villa", "Family Villa"',
  max_occupancy INT,
  bedrooms INT,
  description TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_camp_id (camp_id),
  INDEX idx_display_order (display_order),
  CONSTRAINT fk_accommodation_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Types of accommodation units per camp';

-- ============================================================================
-- ACCOMMODATION_FEATURES TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS accommodation_features (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  accommodation_type_id CHAR(36) NOT NULL,
  label VARCHAR(255) NOT NULL,
  display_order INT DEFAULT 0,
  INDEX idx_accommodation_id (accommodation_type_id),
  UNIQUE KEY uk_accommodation_feature (accommodation_type_id, label),
  CONSTRAINT fk_acc_features_type FOREIGN KEY (accommodation_type_id) 
    REFERENCES accommodation_types(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Amenity features per accommodation type';

-- ============================================================================
-- RATE_SEASONS TABLE (Date-specific rate periods)
-- ============================================================================
CREATE TABLE IF NOT EXISTS rate_seasons (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  name VARCHAR(100) NOT NULL COMMENT 'e.g., "High Season", "Festive Season"',
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  priority INT DEFAULT 100 COMMENT 'Lower = higher priority (for overlaps)',
  min_nights INT DEFAULT 2,
  blackout BOOLEAN DEFAULT FALSE COMMENT 'Block bookings if TRUE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_camp_dates (camp_id, start_date, end_date),
  INDEX idx_priority (priority),
  CONSTRAINT fk_seasons_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT chk_season_dates CHECK (start_date <= end_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Rate periods with date ranges (not recurring patterns)';

-- ============================================================================
-- RATES TABLE (Actual pricing - simplified structure)
-- ============================================================================
CREATE TABLE IF NOT EXISTS rates (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  season_id CHAR(36) NOT NULL,
  board_basis ENUM('FI', 'DBB') NOT NULL COMMENT 'FI=Fully Inclusive, DBB=Dinner Bed Breakfast',
  currency_code CHAR(3) NOT NULL DEFAULT 'ZAR' COMMENT 'ISO currency (ZAR, USD, etc)',
  sharing_rate DECIMAL(10,2) NOT NULL COMMENT 'Per person sharing rate',
  single_supplement DECIMAL(10,2) NOT NULL DEFAULT 0.00 COMMENT 'Additional fee for single occupancy',
  effective_from DATE NOT NULL,
  effective_to DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_camp_season (camp_id, season_id),
  INDEX idx_effective_dates (camp_id, effective_from, effective_to),
  INDEX idx_currency (currency_code),
  UNIQUE KEY uk_camp_season_board (camp_id, season_id, board_basis),
  CONSTRAINT fk_rates_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_rates_season FOREIGN KEY (season_id) 
    REFERENCES rate_seasons(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT chk_rate_dates CHECK (effective_from <= effective_to),
  CONSTRAINT chk_sharing_rate CHECK (sharing_rate >= 0),
  CONSTRAINT chk_supplement CHECK (single_supplement >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Pricing: sharing rate + single supplement per season';

-- ============================================================================
-- IMAGES TABLE (S3-backed images)
-- ============================================================================
CREATE TABLE IF NOT EXISTS images (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NULL,
  experience_id CHAR(36) NULL,
  activity_id CHAR(36) NULL,
  s3_key VARCHAR(500) NOT NULL COMMENT 'S3 object key',
  s3_url VARCHAR(500) NOT NULL COMMENT 'Full S3 URL or CloudFront URL',
  alt_text VARCHAR(255),
  caption TEXT,
  category ENUM('hero', 'accommodation', 'activities', 'landscapes', 'wildlife', 'gallery', 'amenity', 'other') DEFAULT 'other',
  kind ENUM('hero', 'gallery', 'inline') DEFAULT 'gallery',
  display_order INT DEFAULT 0,
  width INT,
  height INT,
  file_size INT COMMENT 'Bytes',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_camp_id (camp_id),
  INDEX idx_experience_id (experience_id),
  INDEX idx_activity_id (activity_id),
  INDEX idx_category (category),
  INDEX idx_kind (kind),
  INDEX idx_display_order (display_order),
  CONSTRAINT fk_images_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_images_experience FOREIGN KEY (experience_id) 
    REFERENCES experiences(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_images_activity FOREIGN KEY (activity_id) 
    REFERENCES activities(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='All images stored in S3 with metadata';

-- ============================================================================
-- GALLERIES TABLE (Optional curated collections)
-- ============================================================================
CREATE TABLE IF NOT EXISTS galleries (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL,
  name VARCHAR(100) NOT NULL COMMENT 'e.g., "Landscapes", "Wildlife"',
  description TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_camp_id (camp_id),
  INDEX idx_display_order (display_order),
  CONSTRAINT fk_galleries_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Curated image galleries per camp';

-- ============================================================================
-- GALLERY_IMAGES TABLE (Junction)
-- ============================================================================
CREATE TABLE IF NOT EXISTS gallery_images (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  gallery_id CHAR(36) NOT NULL,
  image_id CHAR(36) NOT NULL,
  display_order INT DEFAULT 0,
  INDEX idx_gallery_id (gallery_id),
  INDEX idx_image_id (image_id),
  INDEX idx_display_order (display_order),
  UNIQUE KEY uk_gallery_image (gallery_id, image_id),
  CONSTRAINT fk_gallery_img_gallery FOREIGN KEY (gallery_id) 
    REFERENCES galleries(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_gallery_img_image FOREIGN KEY (image_id) 
    REFERENCES images(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Links images to galleries';

-- ============================================================================
-- CONTACTS TABLE (One per camp)
-- ============================================================================
CREATE TABLE IF NOT EXISTS contacts (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NOT NULL UNIQUE COMMENT 'One-to-one with camps',
  location_line1 VARCHAR(255),
  location_line2 VARCHAR(255),
  region_text VARCHAR(100),
  country VARCHAR(100) DEFAULT 'Namibia',
  email VARCHAR(255),
  phone VARCHAR(50),
  website VARCHAR(255),
  skype VARCHAR(100),
  best_time_notes TEXT COMMENT 'Best time to visit information',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_contacts_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Contact information per camp';

-- ============================================================================
-- INQUIRIES TABLE (Contact form submissions)
-- ============================================================================
CREATE TABLE IF NOT EXISTS inquiries (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  camp_id CHAR(36) NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  travel_dates JSON COMMENT '{checkin, checkout, flexible}',
  guest_count JSON COMMENT '{adults, children, child_ages}',
  message TEXT,
  status ENUM('new', 'contacted', 'quoted', 'closed') DEFAULT 'new',
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  admin_notes TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_camp_id (camp_id),
  INDEX idx_status (status),
  INDEX idx_submitted (submitted_at),
  INDEX idx_email (email),
  CONSTRAINT fk_inquiries_camp FOREIGN KEY (camp_id) 
    REFERENCES camps(id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Customer inquiry form submissions';

-- ============================================================================
-- AUDIT_LOGS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS audit_logs (
  id CHAR(36) PRIMARY KEY COMMENT 'UUID v4',
  user_id CHAR(36) NULL COMMENT 'NULL for system actions',
  action VARCHAR(100) NOT NULL COMMENT 'e.g., CREATE_CAMP, UPDATE_RATE',
  entity_type VARCHAR(50) NOT NULL COMMENT 'e.g., camp, rate, season',
  entity_id CHAR(36) NOT NULL,
  metadata JSON COMMENT 'Additional context',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_id (user_id),
  INDEX idx_entity (entity_type, entity_id),
  INDEX idx_action (action),
  INDEX idx_created (created_at),
  CONSTRAINT fk_audit_user FOREIGN KEY (user_id) 
    REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Audit trail for all admin actions';

-- ============================================================================
-- RECORD MIGRATION
-- ============================================================================
INSERT INTO migrations (version, description) 
VALUES ('01', 'Create complete schema matching actual application structure')
ON DUPLICATE KEY UPDATE executed_at = CURRENT_TIMESTAMP;

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES (Run after migration to verify)
-- ============================================================================
-- Show all tables
SELECT 
  TABLE_NAME, 
  TABLE_ROWS, 
  ROUND(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2) AS 'Size_MB',
  CREATE_TIME
FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = 'wilderness_namibia' 
ORDER BY TABLE_NAME;

-- Show foreign key relationships
SELECT 
  TABLE_NAME,
  CONSTRAINT_NAME,
  REFERENCED_TABLE_NAME
FROM information_schema.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = 'wilderness_namibia'
  AND REFERENCED_TABLE_NAME IS NOT NULL
ORDER BY TABLE_NAME, CONSTRAINT_NAME;

-- ============================================================================
-- NOTES FOR MYSQL WORKBENCH USERS
-- ============================================================================
-- 1. To view ER diagram: Database → Reverse Engineer
-- 2. To export schema: Server → Data Export → wilderness_namibia
-- 3. To view indexes: Right-click table → Table Inspector → Indexes
-- 4. Connection pool settings for app: see .env.local template
-- ============================================================================