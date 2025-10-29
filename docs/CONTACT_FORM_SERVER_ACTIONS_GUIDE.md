# Contact Form Server Actions Implementation Guide

## Overview

This document provides a comprehensive step-by-step guide for implementing server actions for the contact form in the Safari Culture platform. The implementation includes database integration, form validation, error handling, and user feedback mechanisms.

## Architecture Overview

The contact form implementation follows Next.js 15+ App Router patterns with:
- **Server Actions** for backend processing
- **Client Components** for interactive UI
- **Database Integration** with MySQL/AWS RDS
- **Type Safety** with TypeScript throughout
- **Error Handling** with user-friendly messages

## File Structure

```
safari-culture/
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── contact/
│   │   │       └── contact.ts              # Server actions
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts                # API endpoints
│   │       └── setup-contact-table/
│   │           └── route.ts                # Database setup
│   ├── components/
│   │   └── contact/
│   │       └── ContactForm.tsx             # Client component
│   └── lib/
│       └── db/
│           ├── db.ts                       # Database connection
│           ├── types.ts                    # TypeScript interfaces
│           └── migrations/
│               └── contact.sql             # Database schema
```

## Implementation Steps

### Step 1: Database Schema Design

**File**: `src/lib/db/migrations/contact.sql`

```sql
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
    
    -- Interested Camps & Requests
    camps_interested TEXT, 
    special_requests TEXT,
    
    -- Indexing for quick lookups
    INDEX idx_email (email),
    INDEX idx_country (country)
);
```

**Key Design Decisions:**
- `contact_id` as auto-increment primary key
- `email` field with UNIQUE constraint to prevent duplicates
- `camps_interested` as TEXT to store JSON array of selected camps
- Proper indexing on frequently queried fields
- Nullable fields for optional form data

### Step 2: TypeScript Interface Definitions

**File**: `src/lib/db/types.ts`

```typescript
// Database contact interface matching SQL schema
export interface Contact {
  contact_id?: number;
  submission_date?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  country: string;
  travel_dates?: string | null;
  group_size: string;
  experience_type: string;
  budget?: string | null;
  camps_interested?: string | null; // JSON string of array
  special_requests?: string | null;
}

// Frontend form data interface
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  travelDates: string;
  groupSize: string;
  experienceType: string;
  camps: string[];
  specialRequests: string;
  budget: string;
}

// Server action response interface
export interface ServerActionResponse {
  success: boolean;
  message: string;
  error?: string;
}
```

**Key Design Decisions:**
- Separate interfaces for database (`Contact`) and form data (`ContactFormData`)
- Database interface allows `null` values for MySQL compatibility
- Form interface uses frontend naming conventions (camelCase)
- Consistent response structure with `ServerActionResponse`

### Step 3: Server Actions Implementation

**File**: `src/app/actions/contact/contact.ts`

#### 3.1 Main Submission Handler

```typescript
'use server'

import { query } from '@/lib/db/db';
import { Contact, ContactFormData, ServerActionResponse } from '@/lib/db/types';

export async function submitContactForm(formData: ContactFormData): Promise<ServerActionResponse> {
  try {
    // 1. Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.country || !formData.groupSize || !formData.experienceType) {
      return {
        success: false,
        message: 'Please fill in all required fields',
        error: 'Missing required fields'
      };
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
        error: 'Invalid email format'
      };
    }

    // 3. Transform form data to database format
    const contactData: Omit<Contact, 'contact_id' | 'submission_date'> = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone?.trim() || null,
      country: formData.country.trim(),
      travel_dates: formData.travelDates?.trim() || null,
      group_size: formData.groupSize,
      experience_type: formData.experienceType,
      budget: formData.budget || null,
      camps_interested: formData.camps.length > 0 ? JSON.stringify(formData.camps) : null,
      special_requests: formData.specialRequests?.trim() || null
    };

    // 4. Insert into database
    const insertQuery = `
      INSERT INTO contact (
        first_name, last_name, email, phone, country,
        travel_dates, group_size, experience_type, budget,
        camps_interested, special_requests
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      contactData.first_name, contactData.last_name, contactData.email,
      contactData.phone, contactData.country, contactData.travel_dates,
      contactData.group_size, contactData.experience_type, contactData.budget,
      contactData.camps_interested, contactData.special_requests
    ];

    const [result] = await query(insertQuery, values);
    
    // 5. Verify insertion success
    if (result && 'insertId' in result && result.insertId) {
      return {
        success: true,
        message: 'Thank you for your application! Our safari specialists will contact you within 24 hours.'
      };
    } else {
      throw new Error('Failed to insert contact data');
    }

  } catch (error: unknown) {
    console.error('Contact form submission error:', error);
    
    // Handle duplicate email error
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ER_DUP_ENTRY') {
      return {
        success: false,
        message: 'An application with this email address already exists.',
        error: 'Duplicate email'
      };
    }

    return {
      success: false,
      message: 'There was an issue submitting your application. Please try again.',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}
```

#### 3.2 Administrative Functions

```typescript
// Retrieve all contact submissions (admin use)
export async function getContactSubmissions(): Promise<ServerActionResponse & { data?: Contact[] }> {
  try {
    const selectQuery = `
      SELECT contact_id, submission_date, first_name, last_name, email, 
             phone, country, travel_dates, group_size, experience_type, 
             budget, camps_interested, special_requests
      FROM contact 
      ORDER BY submission_date DESC
    `;

    const [rows] = await query<Contact>(selectQuery);

    return {
      success: true,
      message: `Retrieved ${rows.length} contact submissions`,
      data: rows
    };
  } catch (error: unknown) {
    console.error('Error retrieving contact submissions:', error);
    return {
      success: false,
      message: 'Failed to retrieve contact submissions',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
}
```

**Key Implementation Features:**
- **Input Validation**: Required fields and email format validation
- **Data Transformation**: Frontend camelCase to database snake_case
- **Error Handling**: Specific handling for duplicate emails and database errors
- **Type Safety**: Proper TypeScript typing throughout
- **Security**: Email normalization and input sanitization

### Step 4: Client Component Integration

**File**: `src/components/contact/ContactForm.tsx`

#### 4.1 Component Setup

```typescript
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { submitContactForm } from "@/app/actions/contact/contact";
import { ContactFormData } from "@/lib/db/types";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '', lastName: '', email: '', phone: '', country: '',
    travelDates: '', groupSize: '', experienceType: '', camps: [],
    specialRequests: '', budget: ''
  });
```

#### 4.2 Form Submission Handler

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Clear previous messages and set loading state
  setSubmitMessage(null);
  setIsSubmitting(true);

  try {
    // Call server action
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setSubmitMessage({ type: 'success', text: result.message });
      // Reset form on success
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', country: '',
        travelDates: '', groupSize: '', experienceType: '', camps: [],
        specialRequests: '', budget: ''
      });
    } else {
      setSubmitMessage({ type: 'error', text: result.message });
    }
  } catch (error) {
    setSubmitMessage({ 
      type: 'error', 
      text: 'An unexpected error occurred. Please try again.' 
    });
    console.error('Form submission error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

#### 4.3 UI Enhancements

```typescript
// Loading state and message display in render
{submitMessage && (
  <div className={`mb-4 p-4 rounded-lg ${
    submitMessage.type === 'success' 
      ? 'bg-green-50 border border-green-200 text-green-800' 
      : 'bg-red-50 border border-red-200 text-red-800'
  }`}>
    {submitMessage.text}
  </div>
)}

<button
  type="submit"
  disabled={isSubmitting}
  className={`w-full px-8 py-4 rounded-full transition-all duration-300 ${
    isSubmitting 
      ? 'bg-stone-400 cursor-not-allowed' 
      : 'bg-stone-900 hover:bg-stone-800 text-white'
  }`}
>
  {isSubmitting ? (
    <span className="flex items-center justify-center">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white">
        {/* Spinner SVG */}
      </svg>
      Submitting Application...
    </span>
  ) : (
    'Submit Application'
  )}
</button>
```

**Key UI Features:**
- **Loading States**: Visual feedback during submission
- **Success/Error Messages**: Clear user feedback
- **Form Reset**: Automatic reset on successful submission
- **Disabled State**: Prevents double submission

### Step 5: API Endpoints (Optional)

**File**: `src/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getContactSubmissions, submitContactForm } from '@/app/actions/contact/contact';

// GET - Retrieve submissions (admin)
export async function GET() {
  try {
    const result = await getContactSubmissions();
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        data: result.data,
        count: result.data?.length || 0
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error, message: result.message },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Alternative submission method
export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const result = await submitContactForm(formData);
    
    if (result.success) {
      return NextResponse.json({ success: true, message: result.message });
    } else {
      return NextResponse.json(
        { success: false, error: result.error, message: result.message },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Step 6: Database Setup Utility

**File**: `src/app/api/setup-contact-table/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { query } from '@/lib/db/db';

export async function POST() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact (
        contact_id INT AUTO_INCREMENT PRIMARY KEY,
        submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        country VARCHAR(100) NOT NULL,
        travel_dates VARCHAR(255),
        group_size VARCHAR(50) NOT NULL,
        experience_type VARCHAR(100) NOT NULL,
        budget VARCHAR(50),
        camps_interested TEXT, 
        special_requests TEXT,
        INDEX idx_email (email),
        INDEX idx_country (country),
        INDEX idx_submission_date (submission_date)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;

    await query(createTableQuery);
    
    return NextResponse.json({
      success: true,
      message: 'Contact table created/verified successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Database error' },
      { status: 500 }
    );
  }
}
```

## Testing and Validation

### 1. Database Setup
```bash
# Test table creation
curl -X POST http://localhost:3000/api/setup-contact-table

# Verify table exists
curl http://localhost:3000/api/setup-contact-table
```

### 2. Form Submission Testing
```bash
# Test via API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "country": "USA",
    "groupSize": "2",
    "experienceType": "Safari & Wildlife Viewing",
    "camps": ["Wilderness-Little-Kulala"]
  }'
```

### 3. Admin Data Retrieval
```bash
# Retrieve all submissions
curl http://localhost:3000/api/contact
```

## Error Handling Strategies

### 1. Validation Errors
- **Client-side**: Immediate feedback for required fields
- **Server-side**: Comprehensive validation with specific error messages

### 2. Database Errors
- **Duplicate Email**: User-friendly message suggesting direct contact
- **Connection Issues**: Generic error message with retry option
- **Query Failures**: Logged errors with fallback messaging

### 3. Network Errors
- **Timeout Handling**: Loading states with reasonable timeouts
- **Retry Mechanisms**: User-initiated retry options
- **Offline Support**: Consider implementing offline form caching

## Security Considerations

### 1. Input Sanitization
- **Email Normalization**: Lowercase and trim all emails
- **SQL Injection Prevention**: Parameterized queries throughout
- **XSS Prevention**: Proper data encoding on display

### 2. Rate Limiting
- Consider implementing rate limiting for form submissions
- Track submission frequency per IP/email

### 3. Data Privacy
- **GDPR Compliance**: Consider data retention policies
- **Secure Storage**: Encrypted sensitive data if required
- **Access Controls**: Admin-only access to submission data

## Performance Optimizations

### 1. Database Optimizations
- **Proper Indexing**: Email, country, and date indexes
- **Connection Pooling**: Reuse database connections
- **Query Optimization**: Efficient SELECT statements

### 2. Frontend Optimizations
- **Loading States**: Immediate user feedback
- **Form Validation**: Client-side validation for better UX
- **Error Recovery**: Clear error messages and retry options

## Maintenance and Monitoring

### 1. Logging
- **Error Logging**: Comprehensive error tracking
- **Submission Tracking**: Monitor form submission rates
- **Performance Monitoring**: Track response times

### 2. Database Maintenance
- **Regular Backups**: Automated backup strategies
- **Data Cleanup**: Consider archiving old submissions
- **Index Optimization**: Monitor and optimize query performance

## Integration with Admin Dashboard

The server actions can be easily integrated into an admin dashboard:

```typescript
// Admin component example
import { getContactSubmissions } from '@/app/actions/contact/contact';

export default async function AdminContactPage() {
  const result = await getContactSubmissions();
  
  if (!result.success) {
    return <div>Error loading submissions: {result.message}</div>;
  }
  
  return (
    <div>
      <h1>Contact Submissions ({result.data?.length})</h1>
      {result.data?.map(contact => (
        <div key={contact.contact_id}>
          {contact.first_name} {contact.last_name} - {contact.email}
        </div>
      ))}
    </div>
  );
}
```

## Conclusion

This implementation provides a robust, type-safe, and user-friendly contact form system with:

- ✅ **Complete Type Safety** throughout the stack
- ✅ **Comprehensive Error Handling** with user-friendly messages
- ✅ **Database Integration** with proper schema and indexing
- ✅ **Modern UX** with loading states and feedback
- ✅ **Security Best Practices** with input validation and sanitization
- ✅ **Administrative Tools** for managing submissions
- ✅ **Scalable Architecture** following Next.js 15+ patterns

The modular design allows for easy extension and maintenance while providing a solid foundation for future enhancements.