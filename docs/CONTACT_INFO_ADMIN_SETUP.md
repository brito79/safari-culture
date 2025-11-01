# Contact Information Admin Panel - Complete Setup

## 🎯 Overview
Admin interface to edit contact information with PUT API endpoint and authentication.

## ✅ Files Created

### 1. Server Action (UPDATE)
```
src/app/actions/contact/update-contact-info.ts
```
- Updates contact info in database
- Returns updated data

### 2. API Route (Enhanced with PUT)
```
src/app/api/contact-info/route.ts
```
- **GET**: Fetch contact info (public)
- **PUT**: Update contact info (admin only, requires Auth0 session)

### 3. Admin Page
```
src/app/(admin)/dashboard/contact-info/page.tsx
```
- Protected route (requires Auth0 session)
- Renders edit form

### 4. Admin Form Component
```
src/components/admin/contact/EditContactInfoForm.tsx
```
- Client component with form
- Real-time preview
- Loading states
- Success/error messages

## 🔐 Authentication

Using **Auth0 v4** with proper server-side session check:

```typescript
// Server-side (API Route & Pages)
import { auth0 } from '@/lib/auth0';

const session = await auth0.getSession();
if (!session || !session.user) {
  // Unauthorized
}
```

### Auth0 v4 Exports Used:
- **Server**: `Auth0Client` from `@auth0/nextjs-auth0/server`
- **Client**: `useUser` from `@auth0/nextjs-auth0/client`

## 📊 API Endpoints

### GET /api/contact-info
**Public endpoint** - No authentication required

```bash
curl http://localhost:3000/api/contact-info
```

Response:
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

### PUT /api/contact-info
**Protected endpoint** - Requires Auth0 session

```bash
curl -X PUT http://localhost:3000/api/contact-info \
  -H "Content-Type: application/json" \
  -H "Cookie: appSession=..." \
  -d '{
    "phone": "+27 11 807 1900",
    "phone_hours": "Mon-Fri: 9:00 - 18:00 CAT",
    "email": "contact@wilderness-safaris.com",
    "email_response": "Response within 12 hours",
    "office": "Windhoek, Namibia",
    "office_details": "UTC+2 Timezone"
  }'
```

Success Response (200):
```json
{
  "success": true,
  "data": { /* updated data */ },
  "message": "Contact information updated successfully"
}
```

Error Responses:
- **401 Unauthorized**: Not logged in
- **400 Bad Request**: Missing required fields
- **500 Internal Server Error**: Database error

## 🚀 Usage

### Step 1: Access Admin Panel
1. Login as admin: `http://localhost:3000/api/auth/login`
2. Navigate to: `http://localhost:3000/dashboard/contact-info`

### Step 2: Edit Contact Information
1. Form loads with current data
2. Edit any field
3. Click "Save Changes"
4. See success message
5. Changes reflect immediately on `/contact` page

### Step 3: Preview Changes
- Real-time preview shows below form
- See exactly how it will appear on contact page

## 🎨 Admin Form Features

### Form Fields
- ✅ Phone Number
- ✅ Phone Hours
- ✅ Email Address
- ✅ Email Response Time
- ✅ Office Location
- ✅ Office Details

### UI Features
- ✅ Loading skeleton on initial load
- ✅ Form validation (required fields)
- ✅ Success/error messages
- ✅ Save button with loading state
- ✅ Reset button to reload data
- ✅ Real-time preview cards
- ✅ Responsive design
- ✅ Beautiful animations (Framer Motion)

### User Experience
- Auto-loads current data
- Shows saving spinner
- Displays success/error feedback
- Refreshes data after save
- Preview updates as you type

## 🔄 Data Flow

```
Admin Form
  ↓
PUT /api/contact-info
  ↓
Auth0 Session Check
  ↓
Server Action (update-contact-info.ts)
  ↓
MySQL Database UPDATE
  ↓
Return Updated Data
  ↓
Form Shows Success
  ↓
Public Page Updates (next visit)
```

## 🧪 Testing

### Test GET Endpoint
```bash
curl http://localhost:3000/api/contact-info | jq
```

### Test PUT Endpoint (requires login)
1. Login to admin panel
2. Open browser DevTools
3. Go to Application > Cookies
4. Copy `appSession` cookie value
5. Use in curl:

```bash
curl -X PUT http://localhost:3000/api/contact-info \
  -H "Content-Type: application/json" \
  -H "Cookie: appSession=YOUR_SESSION_COOKIE" \
  -d '{
    "phone": "+27 11 807 1900",
    "phone_hours": "Mon-Fri: 9:00 - 18:00 CAT",
    "email": "test@wilderness-safaris.com",
    "email_response": "Response within 12 hours",
    "office": "Windhoek, Namibia",
    "office_details": "UTC+2 Timezone"
  }'
```

### Test Admin Page
1. Navigate to `/dashboard/contact-info`
2. Should redirect to login if not authenticated
3. After login, should show edit form
4. Edit a field and save
5. Check `/contact` page for changes

## 🔧 Database Schema

The `contact_us` table structure:

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

## 📝 Code Examples

### Update Contact Info Programmatically

```typescript
// Server-side
import { updateContactInfo } from '@/app/actions/contact/update-contact-info';

const result = await updateContactInfo({
  phone: '+27 11 807 1900',
  phone_hours: 'Mon-Fri: 9:00 - 18:00 CAT',
  email: 'new@wilderness-safaris.com',
  email_response: 'Response within 12 hours',
  office: 'Windhoek, Namibia',
  office_details: 'UTC+2 Timezone'
});

if (result.success) {
  console.log('Updated:', result.data);
}
```

### Fetch Contact Info

```typescript
// Client-side
const response = await fetch('/api/contact-info');
const result = await response.json();

if (result.success) {
  console.log('Contact Info:', result.data);
}
```

## 🛡️ Security

### Authentication
- ✅ PUT endpoint requires Auth0 session
- ✅ Checks `session.user` exists
- ✅ Returns 401 if unauthorized

### Validation
- ✅ All fields required
- ✅ Returns 400 if missing fields
- ✅ SQL injection prevention via parameterized queries

### Best Practices
- ✅ Server-side session check
- ✅ No sensitive data in client
- ✅ Proper error handling
- ✅ Logging for debugging

## 🎯 Admin Dashboard Integration

Add link to admin dashboard:

```typescript
// In your admin dashboard cards
{
  title: 'Contact Information',
  description: 'Edit contact details',
  href: '/dashboard/contact-info',
  icon: '📞',
  color: 'from-blue-500 to-cyan-600'
}
```

## 📱 Responsive Design

- ✅ Mobile: Single column layout
- ✅ Tablet: 2-column grid
- ✅ Desktop: Full 2-column grid with preview

## ⚡ Performance

- ✅ API caching (60s for GET)
- ✅ Optimistic UI updates
- ✅ Loading states prevent multiple submissions
- ✅ Efficient database queries

## 🐛 Troubleshooting

### Issue: 401 Unauthorized
**Solution**: Ensure you're logged in as admin
```bash
# Check if logged in
curl http://localhost:3000/api/auth/me
```

### Issue: Changes not reflecting
**Solution**: Clear cache or wait 60 seconds for revalidation

### Issue: Form not loading
**Solution**: Check database connection and table exists
```sql
SELECT * FROM contact_us;
```

## 🎉 Summary

You now have a **complete admin interface** to edit contact information:

### Features
- ✅ Secure PUT API endpoint
- ✅ Auth0 v4 authentication
- ✅ Beautiful admin form
- ✅ Real-time preview
- ✅ Success/error feedback
- ✅ Loading states
- ✅ Responsive design

### Security
- ✅ Session-based auth
- ✅ Server-side validation
- ✅ Protected routes

### User Experience
- ✅ Easy to use
- ✅ Clear feedback
- ✅ Preview before save
- ✅ Mobile friendly

**Total Files Created:** 4
- 1 Server Action (UPDATE)
- 1 Enhanced API Route (GET + PUT)
- 1 Admin Page
- 1 Admin Form Component

Ready to manage contact information from the admin panel! 📞✉️📍✨
