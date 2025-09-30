---
applyTo: '**, **.tsx, **.ts, **.md'
---

# Safari Culture - Wilderness Namibia Platform Instructions

## Project Overview
Building a luxury safari tourism platform for Wilderness Namibia showcasing 4 premium camps with sophisticated rate management, beautiful galleries, and admin capabilities. This is a **technical assessment project** following specific AWS and Next.js requirements.

## 🎯 Project Scope & Complexity
- **Complexity Level**: Medium - robust but maintainable
- **Focus**: Clean, professional, performant, preferably with a luxury aesthetic
- **Avoid**: Over-engineering, feature creep, excessive complexity
- **Goal**: Showcase modern development skills within manageable scope
- **Must Use**: Auth0 + NextAuth.js (Pages Router pattern for auth) and AWS Amplify Gen 2, RDS MySQL, S3 (as per test requirements)
- **Preference**: Always try implement server components and server-side rendering where possible

## 🏗️ Architecture Guidelines

### Tech Stack (APPROVED)
```typescript
// Core Framework
✅ Next.js 15+ (latest) with App Router (hybrid with Pages Router for auth)
✅ TypeScript (strict mode enabled)
✅ AWS Amplify Gen 2 (hosting & CI/CD)

// Frontend
✅ shadcn/ui + Radix UI (component library)
✅ Tailwind CSS (styling)
✅ Framer Motion (animations)
✅ React Hook Form + Zod (forms & validation)

// State Management
✅ useState() + useReducer() + Context API (no external libs)

// Authentication (REQUIRED by test)
✅ Auth0 + NextAuth.js (Pages Router pattern required)

// Database & Storage
✅ MySQL 8.x on AWS RDS (as specified in test)
✅ Prisma ORM (modern database access)
✅ AWS S3 (image storage)

// Additional Tools
✅ v0.dev for rapid UI prototyping
✅ TypeScript + Zod for end-to-end type safety
```

### Project Structure (HYBRID ROUTER APPROACH)
```
src/
├── app/                    # App Router (modern approach)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── camps/             # Camp catalog & details
│   ├── admin/             # Admin dashboard
│   └── components/        # Shared components
├── pages/                 # Pages Router (auth only)
│   └── api/
│       └── auth/          # NextAuth.js (required pattern)
│           └── [...nextauth].ts
├── components/            # shadcn/ui components
├── lib/                   # Utilities, Prisma client
└── types/                 # TypeScript definitions
```

## 🏕️ Business Domain Understanding

### Camp Portfolio
1. **Wilderness Doro Nawas** (Damaraland) - Desert wildlife focus
2. **Wilderness Damaraland Camp** - Cultural immersion  
3. **Wilderness Hoanib Skeleton Camp** - Skeleton Coast
4. **Wilderness Little Kulala** - Sossusvlei desert

### Key Business Rules
- **Luxury Market**: $5,000+ USD per person packages
- **Exclusive**: Max 16 suites per camp
- **Seasonal Pricing**: 5 distinct seasons with complex rate structures
- **Multi-camp Journeys**: Guests often visit multiple camps
- **Currency**: South African Rand (ZAR) primary, USD conversion for display

## 📊 Data Model Standards

### Core Entities
```typescript
interface Camp {
  id: string
  name: string
  description: string
  type: 'FI' | 'DBI' // Full Inclusive vs Dinner/Bed/Breakfast
  location: string
  region: 'Damaraland' | 'Sossusvlei' | 'Skeleton Coast'
  maxGuests: number
  images: string[] // S3 URLs
  amenities: string[]
  wildlife: string[]
  activities: string[]
}

interface SeasonalRate {
  id: string
  campId: string
  seasonName: string
  startDate: Date
  endDate: Date
  perPersonSharing: number
  singleSupplement: number
  currency: 'ZAR'
  year: number
}
```

### Database Schema Rules
- Use UUIDs for primary keys
- Implement proper foreign key constraints
- Include audit fields (createdAt, updatedAt, createdBy)
- Use Prisma schema for type safety
- Handle seasonal rate gaps validation

## 🎨 UI/UX Standards

### Design Principles
- **Luxury Feel**: High-quality imagery, sophisticated typography
- **Mobile-First**: Tourism sites get heavy mobile traffic
- **Performance**: < 3s load times, optimized images
- **Accessibility**: WCAG compliance via Radix UI

### Component Standards
```typescript
// Use shadcn/ui patterns
- Consistent spacing (Tailwind scale)
- Proper loading states
- Error boundary handling
- Responsive design (320px, 640px, 1024px breakpoints)
- Dark/light mode support
```

### Image Guidelines
- Use Next.js Image component with S3 loader
- Implement proper alt tags for SEO
- Support multiple formats (WebP preferred)
- Lazy loading for galleries

## 🔐 Authentication & Authorization

### User Roles
```typescript
interface UserRoles {
  public: 'VIEW_CAMPS' | 'VIEW_RATES' | 'SUBMIT_INQUIRY'
  admin: 'MANAGE_CAMPS' | 'MANAGE_RATES' | 'MANAGE_IMAGES' | 'VIEW_INQUIRIES'
}
```

### Auth Implementation (REQUIRED PATTERN)
```typescript
// Must use Auth0 + NextAuth.js as specified in test
// Pages Router pattern required for auth routes
// App Router components use getServerSession()
```

## 💻 Development Standards

### Code Quality
```typescript
// TypeScript Rules
- Strict mode enabled
- No 'any' types
- Proper interface definitions
- Use Zod for runtime validation

// Component Standards
- Functional components only
- Custom hooks for complex logic
- Proper prop typing
- Error boundaries for admin components

// State Management
- Local state (useState) for UI state
- Context for global app state (user, theme)
- useReducer for complex state logic (admin forms)
- No external state libraries (keep it simple)
```

### Performance Guidelines
- Use React.memo for expensive components
- Implement proper loading states
- Optimize bundle size with dynamic imports
- Use Next.js Image optimization
- Implement ISR for camp pages

### Error Handling
```typescript
// Consistent error patterns
- Use Error Boundaries
- Implement proper try/catch in async operations
- User-friendly error messages
- Admin error logging to CloudWatch
```

## 🚀 API Design Standards

### Endpoint Patterns
```typescript
// Public API (read-only)
GET /api/camps
GET /api/camps/[id]
GET /api/camps/[id]/rates
POST /api/inquiries

// Admin API (protected)
POST /api/admin/camps
PUT /api/admin/camps/[id]
POST /api/admin/rates/bulk-upload
POST /api/admin/images/upload
```

### Response Standards
```typescript
// Consistent API responses
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
```

## 📁 File Organization

### Naming Conventions
- Components: PascalCase (`CampCard.tsx`)
- Files/folders: kebab-case (`camp-details/`)
- Functions: camelCase (`calculateRate()`)
- Constants: UPPER_SNAKE_CASE (`MAX_UPLOAD_SIZE`)

### Import Organization
```typescript
// Import order
1. React/Next.js imports
2. Third-party libraries
3. Internal components
4. Types/interfaces
5. Utilities/helpers
```

## 🔧 Development Workflow

### Branch Strategy (As Per Test Requirements)
- `main`: Production releases (protected)
- `dev`: Integration branch (auto-deploy to dev environment)
- `feature/*`: Feature branches off dev

### Commit Standards
- Use conventional commits
- Clear, descriptive messages
- Reference issues/tasks when applicable

## 🎯 Feature Priorities

### V1 Core Features (Must Have)
```typescript
✅ Camp catalog with beautiful imagery
✅ Camp detail pages with rates display
✅ Admin authentication (Auth0)
✅ Admin rate management (upload/edit)
✅ Admin image management (S3)
✅ Contact/inquiry forms
✅ Responsive design
✅ AWS deployment (Amplify)
```

### V1 Nice-to-Have (If Time Permits)
```typescript
⚡ Advanced filtering/search
⚡ Rate comparison tools
⚡ Guest testimonials display
⚡ Newsletter signup
⚡ Enhanced animations
```

### V2+ Future Features (Don't Build Now)
```typescript
❌ Multi-camp journey builder
❌ Real booking/payment system
❌ Advanced analytics dashboard
❌ Multi-currency support
❌ Real-time availability
❌ Customer portal
```

## 🚨 Critical Don'ts

### Technical Don'ts
- ❌ Don't over-engineer the solution
- ❌ Don't add unnecessary dependencies
- ❌ Don't build complex booking systems
- ❌ Don't implement real payment processing
- ❌ Don't create overly complex admin workflows
- ❌ Don't use client-side state management libraries
- ❌ Don't bypass the required Auth0 + NextAuth.js pattern

### Business Don'ts
- ❌ Don't assume real booking functionality
- ❌ Don't build inventory management
- ❌ Don't create customer accounts beyond admin
- ❌ Don't implement complex pricing calculations
- ❌ Don't build multi-currency support initially

## 📋 Testing Guidelines

### Test Requirements
- Unit tests for utility functions
- Integration tests for API routes
- Component testing for critical UI
- E2E tests for core user flows
- Admin functionality testing

### Test Tools
- Jest for unit tests
- React Testing Library for components
- Playwright for E2E (if time permits)

## 🌍 AWS Deployment Standards

### Required AWS Services (Per Test)
- **Amplify Gen 2**: Hosting & CI/CD
- **RDS MySQL**: Database
- **S3**: Image storage with public-read ACLs
- **CloudWatch**: Logging & monitoring
- **Parameter Store**: Environment variables

### Environment Variables
```typescript
// Required environment variables
DATABASE_URL
AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET
AUTH0_ISSUER
NEXTAUTH_SECRET
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
S3_BUCKET_NAME
```

## 📚 Documentation Standards

### Code Documentation
- JSDoc for complex functions
- README with setup instructions
- Component prop documentation
- API endpoint documentation

### Comments
- Explain "why" not "what"
- Document business logic
- Mark TODO items clearly
- Explain complex algorithms

## 🎉 Success Criteria

### Technical Success
- ✅ Follows test requirements exactly
- ✅ Clean, maintainable codebase
- ✅ Good performance metrics
- ✅ Proper error handling
- ✅ Responsive design
- ✅ Successful AWS deployment

### Business Success
- ✅ Beautiful camp showcase
- ✅ Functional admin panel
- ✅ Professional appearance
- ✅ User-friendly interface
- ✅ Demonstrates modern development practices

## 🤖 AI Assistant Guidelines

When working on this project:
1. **Stay Focused**: Keep solutions simple and maintainable
2. **Follow Standards**: Use the approved tech stack and patterns
3. **Think Business**: Remember this is luxury tourism, not e-commerce
4. **Be Practical**: Medium complexity, not over-engineered
5. **Test Requirements**: Don't deviate from specified AWS/Auth patterns
6. **Code Quality**: Write clean, documented, type-safe code
7. **Performance**: Optimize for mobile and fast loading
8. **User Experience**: Prioritize beauty and usability
9. **Use Context7 MCP**: When uncertain about implementations, deprecations, or best practices, always reference context7 MCP for current documentation and standards

## 🔍 Context7 MCP Usage Guidelines

### When to Use Context7 MCP
- **Latest API patterns**: Verify current Next.js, React, or AWS implementation patterns
- **Deprecation checks**: Ensure no deprecated methods or patterns are used
- **Best practices validation**: Cross-reference architectural decisions with current standards
- **Library updates**: Check for new features in shadcn/ui, Framer Motion, Tailwind, etc.
- **TypeScript patterns**: Validate modern TypeScript and Zod implementation approaches
- **Performance optimizations**: Reference latest optimization techniques and patterns

### Examples of Context7 MCP Queries
```typescript
// Instead of guessing, query context7 for:
- "Latest Next.js 15 Image optimization patterns"
- "Current Auth0 + NextAuth.js integration best practices"
- "Modern Prisma connection pooling patterns"
- "New shadcn/ui components for data tables"
- "Current AWS Amplify Gen 2 configuration patterns"
- "Latest React Server Components patterns"
```

### Integration Strategy
- Use context7 MCP proactively during development
- Reference real-time documentation rather than assumptions
- Validate implementation patterns before coding
- Ensure compatibility with latest versions of all dependencies


pages/
├── index.tsx                    // Home with all camps overview
├── camps/
│   ├── [slug].tsx              // Individual camp pages
│   └── index.tsx               // All camps listing
├── admin/
│   ├── index.tsx               // Admin dashboard
│   ├── camps/
│   │   ├── index.tsx           // Manage camps
│   │   ├── [id]/edit.tsx       // Edit camp details
│   │   └── new.tsx             // Create new camp
│   └── images.tsx              // Image management
└── api/
    ├── camps/
    │   ├── index.ts            // GET/POST camps
    │   └── [id].ts             // GET/PUT/DELETE specific camp
    ├── images/
    │   ├── upload.ts           // S3 upload endpoint
    │   └── [campId].ts         // Get camp images
    └── rates/
        └── [campId].ts         // Camp pricing
        

Remember: This is a **technical assessment**. Balance following requirements exactly with showcasing modern development skills using the most current and reliable patterns.