# Database Recovery Guide

## Your Database Information

**Database Name:** `wilderness-namibia-db`  
**RDS Host:** `db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com`  
**Port:** 3306  
**User:** admin

## Tables You Had

1. **camps** - Camp information (4 camps: doro-nawas, little-kulala, hoanib-skeleton-coast, damaraland-camp)
2. **rates** - Camp pricing and rate periods
3. **contact** - Contact form inquiry submissions
4. **contact_us** - Your contact information (phone, email, office details)
5. **kyc_applications** - KYC application submissions
6. **experiences_camps** - Activities and experiences offered at camps

## How to Restore Your Database

### Option 1: Using MySQL Command Line (Recommended)

```bash
# Connect to your RDS instance
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com \
      -u admin \
      -p \
      -P 3306

# Then run this command inside MySQL:
source /path/to/00_setup_database.sql
```

### Option 2: Run Migrations Individually

```bash
# Connect to RDS
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p

# Create database
CREATE DATABASE IF NOT EXISTS `wilderness-namibia-db`;
USE `wilderness-namibia-db`;

# Run each migration file in order:
source camps.sql
source rates.sql
source contact.sql
source contact_us.sql
source kyc_applications.sql
source experiences_camps.sql

# Then seed your data:
source seed_camps.sql
source seed_rates.sql
source seed_experiences.sql
```

### Option 3: Using PowerShell (Windows)

```powershell
# Navigate to migrations folder
cd C:\Users\bshay\OneDrive\Desktop\safari-culture\src\lib\db\migrations

# Run the setup script
Get-Content 00_setup_database.sql | mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p
```

### Option 4: Import Each File Separately

```bash
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < camps.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < rates.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < contact.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < contact_us.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < kyc_applications.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < experiences_camps.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < seed_camps.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < seed_rates.sql
mysql -h db-wilderness-botswana.c36sfitmdma7.us-east-1.rds.amazonaws.com -u admin -p < seed_experiences.sql
```

## After Restoration

### Verify Your Database

```sql
USE `wilderness-namibia-db`;
SHOW TABLES;

-- Check camps
SELECT camp_id, name FROM camps;

-- Check rates
SELECT COUNT(*) FROM rates;

-- Verify structure
DESCRIBE camps;
DESCRIBE rates;
DESCRIBE contact;
DESCRIBE contact_us;
DESCRIBE kyc_applications;
```

## What Each Table Contains

### 1. camps
- Camp details (4 camps total)
- Features, images, descriptions
- Uses pipe-separated values for features and gallery URLs

### 2. rates
- Pricing information for each camp
- Rate periods (High Season, Green Season, etc.)
- Sharing and supplement rates
- FI (Fully Inclusive) and DBB (Dinner, Bed & Breakfast) types

### 3. contact
- Contact form submissions from visitors
- Travel preferences and inquiries
- Timestamps for tracking

### 4. contact_us
- Your business contact information
- Phone, email, office details
- Displayed in footer and contact pages

### 5. kyc_applications
- KYC (Know Your Customer) applications
- Multi-step form submissions
- Travel details, camp selections, emergency contacts
- Status tracking (pending, under_review, approved, rejected)

## Troubleshooting

If you get errors about database name with hyphens:
```sql
CREATE DATABASE IF NOT EXISTS `wilderness-namibia-db`;
USE `wilderness-namibia-db`;
```

If you need to drop and recreate:
```sql
DROP DATABASE IF EXISTS `wilderness-namibia-db`;
-- Then run the setup script again
```

## Contact Info Seed Data (Example)

After creating tables, you should add your contact information:

```sql
INSERT INTO contact_us (phone, phone_hours, email, email_response, office, office_details)
VALUES (
    '+264 61 123 4567',
    'Monday - Friday: 8:00 AM - 5:00 PM (CAT)',
    'info@wildernessbotswana.com',
    'We typically respond within 24 hours',
    'Windhoek Office',
    '123 Independence Ave, Windhoek, Namibia'
);
```
