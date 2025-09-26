# Safari Culture - Complete Implementation Guide

## 🎯 Project Overview
Building a luxury safari tourism platform for Wilderness Namibia showcasing 4 premium camps with sophisticated rate management, beautiful galleries, and admin capabilities. This is a **technical assessment project** following specific AWS and Next.js requirements.

**Target Completion**: ~2-3 weeks  
**Complexity Level**: Medium - robust but maintainable  
**Tech Stack**: Next.js 15, TypeScript, AWS Amplify Gen 2, MySQL RDS, Auth0

---

## 📋 Implementation Phases

### ✅ Phase 1: Foundation Setup (COMPLETED)
- [x] Project scaffolding with Next.js 15
- [x] TypeScript configuration
- [x] Tailwind CSS + desert color palette
- [x] Montserrat font system
- [x] Basic project structure

### ✅ Phase 2: Frontend Scaffolding (COMPLETED)
- [x] Landing page with hero section
- [x] All 4 camp detail pages
- [x] Camps listing page
- [x] Contact page with inquiry forms
- [x] Experiences page
- [x] Admin dashboard mockup
- [x] Responsive navigation

### 🔄 Phase 3: Authentication & Security (IN PROGRESS)
**Current Priority**: Set up Auth0 + NextAuth.js

### 🔄 Phase 4: Database & Backend (NEXT)
**Coming Up**: AWS RDS MySQL + Prisma setup

---

## 🚀 Step-by-Step Implementation Plan

### Phase 3: Authentication & Security (Week 1)

#### Step 3.1: Auth0 Setup
**Estimated Time**: 2-3 hours

1. **Create Auth0 Account & Application**
   ```bash
   # Visit auth0.com and create account
   # Create new "Regular Web Application"
   # Note down: Domain, Client ID, Client Secret
   ```

2. **Configure Auth0 Application**
   ```
   Allowed Callback URLs: http://localhost:3000/api/auth/callback/auth0
   Allowed Logout URLs: http://localhost:3000
   Allowed Web Origins: http://localhost:3000
   ```

3. **Install Authentication Dependencies**
   ```bash
   npm install next-auth@beta @auth0/nextjs-auth0
   npm install @types/jsonwebtoken
   ```

#### Step 3.2: NextAuth.js Configuration
**Estimated Time**: 2-3 hours

1. **Create Auth Configuration**
   ```bash
   # Create: src/pages/api/auth/[...nextauth].ts
   # Follow Pages Router pattern (required by assessment)
   ```

2. **Environment Variables Setup**
   ```env
   AUTH0_CLIENT_ID=your_client_id
   AUTH0_CLIENT_SECRET=your_client_secret
   AUTH0_ISSUER=https://your-domain.auth0.com
   NEXTAUTH_SECRET=generate_random_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

3. **Create Auth Provider Component**
   ```bash
   # Create: src/components/auth/AuthProvider.tsx
   # Wrap app with session provider
   ```

#### Step 3.3: Protected Admin Routes
**Estimated Time**: 2-3 hours

1. **Create Admin Layout with Auth Check**
   ```bash
   # Update: src/app/admin/layout.tsx
   # Add authentication middleware
   ```

2. **Login/Logout Components**
   ```bash
   # Create: src/components/auth/LoginButton.tsx
   # Create: src/components/auth/LogoutButton.tsx
   # Update navigation with auth state
   ```

3. **Test Authentication Flow**
   ```bash
   npm run dev
   # Test login/logout functionality
   # Verify admin protection
   ```

**✅ Phase 3 Checklist:**
- [ ] Auth0 application configured
- [ ] NextAuth.js setup complete
- [ ] Environment variables configured
- [ ] Admin routes protected
- [ ] Login/logout functionality working

---

### Phase 4: Database & Backend (Week 1-2)

#### Step 4.1: AWS RDS MySQL Setup
**Estimated Time**: 3-4 hours

1. **Create AWS RDS MySQL Instance**
   ```bash
   # AWS Console → RDS → Create Database
   # Engine: MySQL 8.0
   # Instance: db.t3.micro (free tier)
   # Database name: safari_culture
   # Username: admin
   # Auto-generate password
   ```

2. **Configure Security Groups**
   ```bash
   # Allow inbound MySQL (3306) from your IP
   # Later: Configure for Amplify deployment
   ```

3. **Test Database Connection**
   ```bash
   # Use MySQL Workbench or CLI
   mysql -h your-rds-endpoint -u admin -p
   ```

#### Step 4.2: Prisma ORM Setup
**Estimated Time**: 2-3 hours

1. **Install Prisma**
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

2. **Configure Database Schema**
   ```bash
   # Edit: prisma/schema.prisma
   # Define Camp, SeasonalRate, Inquiry, User models
   ```

3. **Database Migration**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

#### Step 4.3: API Routes Development
**Estimated Time**: 4-5 hours

1. **Public API Routes**
   ```bash
   # Create: src/app/api/camps/route.ts
   # Create: src/app/api/camps/[id]/route.ts
   # Create: src/app/api/camps/[id]/rates/route.ts
   # Create: src/app/api/inquiries/route.ts
   ```

2. **Protected Admin API Routes**
   ```bash
   # Create: src/app/api/admin/camps/route.ts
   # Create: src/app/api/admin/rates/route.ts
   # Create: src/app/api/admin/inquiries/route.ts
   ```

3. **Database Seed Data**
   ```bash
   # Create: prisma/seed.ts
   # Add sample data for 4 camps and seasonal rates
   npx prisma db seed
   ```

**✅ Phase 4 Checklist:**
- [ ] AWS RDS MySQL instance created
- [ ] Prisma schema defined
- [ ] Database migrated
- [ ] API routes implemented
- [ ] Seed data loaded
- [ ] API testing complete

---

### Phase 5: AWS Integration (Week 2)

#### Step 5.1: AWS S3 Image Storage
**Estimated Time**: 3-4 hours

1. **Create S3 Bucket**
   ```bash
   # AWS Console → S3 → Create Bucket
   # Bucket name: safari-culture-images
   # Region: us-east-1 (or your preferred)
   # Configure public read access for images
   ```

2. **AWS SDK Setup**
   ```bash
   npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
   npm install multer @types/multer
   ```

3. **Image Upload API**
   ```bash
   # Create: src/app/api/admin/images/upload/route.ts
   # Implement S3 upload with presigned URLs
   ```

#### Step 5.2: AWS Amplify Gen 2 Setup
**Estimated Time**: 2-3 hours

1. **Initialize Amplify**
   ```bash
   npm install @aws-amplify/cli-extensibility
   npx amplify init
   # Choose: Existing project
   # Framework: Next.js
   ```

2. **Configure Amplify Hosting**
   ```bash
   npx amplify add hosting
   # Choose: Amazon CloudFront and S3
   npx amplify publish
   ```

3. **Environment Configuration**
   ```bash
   # Add production environment variables
   # Configure RDS connection for production
   ```

**✅ Phase 5 Checklist:**
- [ ] S3 bucket configured
- [ ] Image upload functionality
- [ ] Amplify hosting setup
- [ ] Production deployment successful

---

### Phase 6: Real Data Integration (Week 2-3)

#### Step 6.1: Camp Data Population
**Estimated Time**: 3-4 hours

1. **Real Camp Information**
   ```bash
   # Research Wilderness Namibia camps
   # Collect accurate descriptions, amenities, activities
   # Update database with real data
   ```

2. **Seasonal Rate Structure**
   ```bash
   # Implement 5-season rate structure
   # High/Medium/Low/Green/Shoulder seasons
   # ZAR pricing with USD conversion
   ```

3. **Dynamic Rate Display**
   ```bash
   # Update camp pages to show current rates
   # Implement rate comparison tools
   ```

#### Step 6.2: Image Asset Integration
**Estimated Time**: 4-5 hours

1. **Source High-Quality Images**
   ```bash
   # Collect camp photos (32+ high-res images)
   # Landscape photography
   # Wildlife photography
   # Accommodation photos
   ```

2. **Image Optimization**
   ```bash
   # Resize and optimize for web
   # Create multiple sizes (thumbnail, medium, full)
   # Upload to S3 with proper naming convention
   ```

3. **Replace Placeholders**
   ```bash
   # Update all pages with real images
   # Implement image galleries
   # Add proper alt tags for SEO
   ```

**✅ Phase 6 Checklist:**
- [ ] Real camp data integrated
- [ ] Seasonal rates implemented
- [ ] High-quality images uploaded
- [ ] Image placeholders replaced
- [ ] SEO optimization complete

---

### Phase 7: Form Functionality (Week 3)

#### Step 7.1: Contact Form Backend
**Estimated Time**: 2-3 hours

1. **Email Service Setup**
   ```bash
   # AWS SES configuration
   # Or alternative: SendGrid, Resend
   npm install @aws-sdk/client-ses
   ```

2. **Form Validation**
   ```bash
   npm install react-hook-form @hookform/resolvers zod
   # Implement client and server-side validation
   ```

3. **Database Storage**
   ```bash
   # Store inquiries in database
   # Email notifications to admin
   # Auto-response to customers
   ```

#### Step 7.2: Admin Dashboard Enhancement
**Estimated Time**: 3-4 hours

1. **Real Data Integration**
   ```bash
   # Connect dashboard to real database
   # Display actual inquiries and statistics
   ```

2. **Rate Management Interface**
   ```bash
   # Create forms for updating seasonal rates
   # Bulk upload functionality
   # Rate validation and preview
   ```

3. **Content Management**
   ```bash
   # Edit camp descriptions and amenities
   # Image upload and management
   # Activity management
   ```

**✅ Phase 7 Checklist:**
- [ ] Contact forms functional
- [ ] Email notifications working
- [ ] Admin dashboard connected to database
- [ ] Rate management implemented
- [ ] Content management tools ready

---

### Phase 8: Testing & Polish (Week 3)

#### Step 8.1: Comprehensive Testing
**Estimated Time**: 3-4 hours

1. **Functionality Testing**
   ```bash
   # Test all user flows
   # Authentication flows
   # Form submissions
   # Admin functionality
   ```

2. **Performance Testing**
   ```bash
   # Lighthouse audit
   # Image optimization verification
   # Mobile performance testing
   ```

3. **Cross-browser Testing**
   ```bash
   # Chrome, Firefox, Safari, Edge
   # Mobile browsers (iOS Safari, Chrome Mobile)
   ```

#### Step 8.2: Final Polish
**Estimated Time**: 2-3 hours

1. **SEO Optimization**
   ```bash
   # Meta tags and descriptions
   # Open Graph tags
   # Structured data markup
   ```

2. **Error Handling**
   ```bash
   # 404 page
   # Error boundaries
   # Graceful fallbacks
   ```

3. **Loading States**
   ```bash
   # Skeleton loaders
   # Progress indicators
   # Optimistic updates
   ```

**✅ Phase 8 Checklist:**
- [ ] All functionality tested
- [ ] Performance optimized
- [ ] SEO implemented
- [ ] Error handling complete
- [ ] Loading states polished

---

## 🔧 Technical Implementation Details

### Database Schema (Prisma)
```prisma
model Camp {
  id          String   @id @default(cuid())
  name        String
  location    String
  description String   @db.Text
  type        String   // 'FI' | 'DBI'
  region      String
  maxGuests   Int
  images      String[] // S3 URLs
  amenities   String[]
  wildlife    String[]
  activities  String[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  rates       SeasonalRate[]
}

model SeasonalRate {
  id                  String   @id @default(cuid())
  campId              String
  seasonName          String
  startDate           DateTime
  endDate             DateTime
  perPersonSharing    Decimal  @db.Decimal(10,2)
  singleSupplement    Decimal  @db.Decimal(10,2)
  currency            String   @default("ZAR")
  year                Int
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
  camp                Camp     @relation(fields: [campId], references: [id])
  
  @@unique([campId, seasonName, year])
}

model Inquiry {
  id            String   @id @default(cuid())
  firstName     String
  lastName      String
  email         String
  phone         String?
  country       String?
  travelDates   String?
  interestedCamps String[]
  message       String   @db.Text
  status        String   @default("New")
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      String   @default("admin")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Environment Variables Checklist
```env
# Database
DATABASE_URL="mysql://admin:password@your-rds-endpoint:3306/safari_culture"

# Authentication
AUTH0_CLIENT_ID="your_auth0_client_id"
AUTH0_CLIENT_SECRET="your_auth0_client_secret"
AUTH0_ISSUER="https://your-domain.auth0.com"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

# AWS
AWS_ACCESS_KEY_ID="your_aws_access_key"
AWS_SECRET_ACCESS_KEY="your_aws_secret_key"
AWS_REGION="us-east-1"
S3_BUCKET_NAME="safari-culture-images"

# Email (optional)
AWS_SES_FROM_EMAIL="info@safari-culture.com"
```

### Deployment Checklist
- [ ] Production database configured
- [ ] Environment variables set in Amplify
- [ ] Custom domain configured
- [ ] SSL certificate installed
- [ ] CDN configured for images
- [ ] Error monitoring setup (Sentry)
- [ ] Analytics setup (Google Analytics)

---

## 🚨 Common Issues & Solutions

### Authentication Issues
**Problem**: NextAuth.js session not persisting  
**Solution**: Check NEXTAUTH_SECRET and NEXTAUTH_URL configuration

### Database Connection Issues
**Problem**: Cannot connect to RDS from local development  
**Solution**: Update RDS security group to allow your IP address

### Image Upload Issues
**Problem**: S3 upload permissions denied  
**Solution**: Verify IAM user has S3 write permissions and bucket policy

### Deployment Issues
**Problem**: Amplify build fails  
**Solution**: Check environment variables and build settings in Amplify console

---

## 📚 Resources & Documentation

### Official Documentation
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Auth0 Documentation](https://auth0.com/docs)
- [AWS Amplify Gen 2 Guide](https://docs.amplify.aws)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Project-Specific Resources
- [Wilderness Namibia Website](https://wilderness-safaris.com) - Reference for content and imagery
- [Instructions File](./instructions.md) - Detailed project requirements
- [Font Setup Guide](./font-setup.md) - Typography implementation details

---

## 🎯 Success Criteria

### Technical Requirements ✅
- [x] Next.js 15 with App Router (hybrid with Pages Router for auth)
- [x] TypeScript with strict mode
- [x] AWS Amplify Gen 2 hosting
- [ ] AWS RDS MySQL database
- [ ] Auth0 + NextAuth.js authentication
- [ ] AWS S3 image storage
- [x] Responsive design (mobile-first)
- [x] Professional UI with luxury aesthetic

### Business Requirements
- [x] 4 camp showcase pages
- [x] Beautiful image galleries (placeholders ready)
- [ ] Functional contact forms
- [ ] Admin rate management
- [x] Professional appearance
- [x] User-friendly interface

### Assessment Goals
- [ ] Clean, maintainable codebase
- [ ] Good performance metrics (< 3s load time)
- [ ] Proper error handling
- [ ] Security best practices
- [ ] Modern development patterns

---

## 📅 Weekly Milestones

### Week 1 Goals
- [ ] Authentication fully implemented
- [ ] Database schema finalized
- [ ] Basic API routes functional
- [ ] S3 image storage working

### Week 2 Goals
- [ ] Real camp data integrated
- [ ] Image assets uploaded and integrated
- [ ] Admin dashboard connected to database
- [ ] Contact forms functional

### Week 3 Goals
- [ ] Production deployment successful
- [ ] All testing completed
- [ ] SEO optimization finished
- [ ] Project ready for assessment submission

---

## 🔍 Final Review Checklist

Before submitting the assessment:

### Code Quality
- [ ] TypeScript strict mode with no 'any' types
- [ ] Consistent code formatting (Prettier)
- [ ] Proper error boundaries and handling
- [ ] Clean component architecture
- [ ] Proper prop typing

### Functionality
- [ ] All user flows tested and working
- [ ] Authentication flow complete
- [ ] Forms submit and store data
- [ ] Admin dashboard fully functional
- [ ] Mobile responsiveness verified

### Performance
- [ ] Lighthouse score > 90
- [ ] Images optimized and lazy-loaded
- [ ] Bundle size optimized
- [ ] Loading states implemented

### Security
- [ ] Admin routes properly protected
- [ ] Form validation (client and server)
- [ ] Environment variables secured
- [ ] No sensitive data in client code

### Business Value
- [ ] Accurately represents luxury safari tourism
- [ ] Professional appearance throughout
- [ ] Clear user experience flow
- [ ] Demonstrates modern development skills

---

**Remember**: This is a technical assessment. Focus on demonstrating clean code, modern patterns, and proper architecture while building a functional, beautiful safari tourism platform. Keep the scope manageable but showcase your expertise with the required technologies.

Good luck! 🚀