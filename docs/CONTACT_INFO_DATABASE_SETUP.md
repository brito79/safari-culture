# Contact Information Database Integration - Setup Guide

## Overview
Dynamic contact information fetched from MySQL database and displayed on the contact page.

## 📁 Files Created

### 1. Server Action
```
src/app/actions/contact/get-contact-info.ts
```
- Fetches contact info from database
- Returns structured data with success/error handling

### 2. API Route
```
src/app/api/contact-info/route.ts
```
- GET endpoint: `/api/contact-info`
- 60-second cache revalidation
- Returns contact information as JSON

### 3. Database Schema
```
database/create_contact_us_table.sql
```
- Creates `contact_us` table
- Inserts default contact data

### 4. Updated Component
```
src/components/contact/ContactInfo.tsx
```
- Fetches data from API on mount
- Displays loading skeleton
- Falls back to default values if fetch fails

## 🗄️ Database Schema

```sql
CREATE TABLE contact_us (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(50) NOT NULL,
  phone_hours VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  email_response VARCHAR(100) NOT NULL,
  office VARCHAR(255) NOT NULL,
  office_details VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🚀 Setup Instructions

### Step 1: Create Database Table
```bash
mysql -h YOUR_HOST -u YOUR_USER -p YOUR_DATABASE < database/create_contact_us_table.sql
```

Or run manually:
```sql
CREATE TABLE IF NOT EXISTS contact_us (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(50) NOT NULL,
  phone_hours VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  email_response VARCHAR(100) NOT NULL,
  office VARCHAR(255) NOT NULL,
  office_details VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

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
```

### Step 2: Verify Database Connection
Ensure your `.env.local` has correct RDS credentials:
```env
NEXT_PUBLIC_RDS_HOST=your-host
NEXT_PUBLIC_RDS_DATABASE=your-database
NEXT_PUBLIC_RDS_USER=your-user
NEXT_PUBLIC_RDS_PASSWORD=your-password
```

### Step 3: Test the API
```bash
# Start dev server
npm run dev

# Test API endpoint
curl http://localhost:3000/api/contact-info
```

Expected response:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "phone": "+27 11 807 1800",
    "phone_hours": "Mon-Fri: 8:00 - 17:00 CAT",
    "email": "info@wilderness-safaris.com",
    "email_response": "Response within 24 hours",
    "office": "Windhoek, Namibia",
    "office_details": "UTC+2 Timezone"
  },
  "message": "Contact information retrieved successfully"
}
```

### Step 4: View Contact Page
Navigate to: `http://localhost:3000/contact`

## 📊 Data Flow

```
Database (contact_us table)
  ↓
Server Action (get-contact-info.ts)
  ↓
API Route (/api/contact-info)
  ↓
Client Component (ContactInfo.tsx)
  ↓
User sees contact information
```

## 🎨 Features

### Loading State
- Skeleton loaders while fetching data
- Smooth animation when data loads

### Fallback Values
- If database fetch fails, displays default values
- Ensures page always shows contact info

### Caching
- API responses cached for 60 seconds
- Reduces database load
- Faster page loads

### Error Handling
- Graceful error handling at all levels
- Console logging for debugging
- User never sees error state

## 🔄 Updating Contact Information

### Via Database
```sql
UPDATE contact_us 
SET 
  phone = '+27 11 807 1900',
  email = 'contact@wilderness-safaris.com'
WHERE id = 1;
```

### Via Admin Panel (Future Enhancement)
Create an admin interface to update contact info without SQL.

## 🧪 Testing

### Test Database Query
```sql
SELECT * FROM contact_us ORDER BY id DESC LIMIT 1;
```

### Test Server Action
```typescript
import { getContactInfo } from '@/app/actions/contact/get-contact-info';

const result = await getContactInfo();
console.log(result);
```

### Test API Endpoint
```bash
curl http://localhost:3000/api/contact-info | jq
```

## 📝 Database Fields Mapping

| Database Field | Display Location | Description |
|---------------|------------------|-------------|
| `phone` | Phone card | Phone number |
| `phone_hours` | Phone card | Business hours |
| `email` | Email card | Email address |
| `email_response` | Email card | Response time |
| `office` | Office card | Office location |
| `office_details` | Office card | Timezone info |

## 🎯 Benefits

### Dynamic Content
- ✅ Update contact info without code changes
- ✅ Single source of truth in database
- ✅ Easy to maintain

### Performance
- ✅ API caching (60s)
- ✅ Optimized database queries
- ✅ Loading states for better UX

### Scalability
- ✅ Can add multiple contact locations
- ✅ Can add language translations
- ✅ Can track contact info changes

## 🔧 Troubleshooting

### Issue: No data displayed
**Solution**: Check database connection and verify table exists
```sql
SHOW TABLES LIKE 'contact_us';
SELECT * FROM contact_us;
```

### Issue: API returns 404
**Solution**: Ensure data exists in database
```sql
SELECT COUNT(*) FROM contact_us;
```

### Issue: Loading state never ends
**Solution**: Check browser console for fetch errors
```javascript
// Open DevTools Console
// Look for error messages
```

## 🚀 Next Steps (Optional Enhancements)

1. **Admin Interface**
   - Create admin page to edit contact info
   - Add form validation
   - Track change history

2. **Multiple Locations**
   - Support multiple office locations
   - Display based on user location
   - Add map integration

3. **Internationalization**
   - Add language field to database
   - Display contact info in user's language
   - Support multiple phone numbers per region

4. **Analytics**
   - Track which contact method is most viewed
   - A/B test different contact layouts
   - Monitor response times

## ✅ Verification Checklist

- [ ] Database table created
- [ ] Sample data inserted
- [ ] API endpoint returns data
- [ ] Contact page displays data
- [ ] Loading state works
- [ ] Fallback values work
- [ ] Console shows no errors

## 🎉 Summary

You now have a **fully dynamic contact information system** that:
- Fetches data from MySQL database
- Displays with loading states
- Has fallback values
- Caches for performance
- Is easy to update

**Total Files Created:** 4
- 1 Server Action
- 1 API Route
- 1 Database Schema
- 1 Updated Component

Ready to display dynamic contact information! 📞✉️📍
