-- ============================================
-- Wilderness Namibia Database Setup Script
-- ============================================
-- Database: wilderness-namibia-db
-- RDS Host: db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com
-- ============================================

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS wilderness_namibia_db
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

USE wilderness_namibia_db;

-- ============================================
-- Run migrations in order
-- ============================================

-- 1. Create camps table
SOURCE camps.sql;

-- 2. Create rates table
SOURCE rates.sql;

-- 3. Create contact table (inquiry submissions)
SOURCE contact.sql;

-- 4. Create contact_us table (contact info)
SOURCE contact_us.sql;

-- 5. Create kyc_applications table
SOURCE kyc_applications.sql;

-- 6. Create experiences_camps table
SOURCE experiences_camps.sql;

-- ============================================
-- Seed data (optional)
-- ============================================

-- Seed camps
SOURCE seed_camps.sql;

-- Seed rates
SOURCE seed_rates.sql;

-- Seed experiences
SOURCE seed_experiences.sql;

-- ============================================
-- Verify tables were created
-- ============================================

SHOW TABLES;

SELECT 'Database setup complete!' as Status;
