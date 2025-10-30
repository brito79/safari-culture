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
- **Must Use**: Auth0 (App Router pattern for auth) and AWS Amplify Gen 2, RDS MySQL, S3 (as per test requirements)
- **Preference**: Always try implement server components and server-side rendering where possible

## 🏗️ Architecture Guidelines

### Tech Stack (APPROVED)
```typescript
// Core Framework
✅ Next.js 15+ (latest) with App Router
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
✅ Auth0 (App Router pattern)

// Database & Storage
✅ MySQL 8.x on AWS RDS (as specified in test)
✅ AWS S3 (image storage)

// Additional Tools
✅ TypeScript + Zod for end-to-end type safety

```

### Project Structure (HYBRID ROUTER APPROACH)
```
safari-culture/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── api/              # Route handlers (Next.js API routes)
│   │   │   ├── upload/route.ts      # S3 upload endpoint
│   │   │   ├── logs/route.ts        # CloudWatch logs endpoint
│   │   │   └── db/route.ts          # RDS query endpoint
│   │   ├── (public)/               # Public pages
│   │   │   ├── page.tsx            # Home with all camps overview
│   │   │   ├── camps/
│   │   │   │   ├── page.tsx        # Camps listing
│   │   │   │   └── [slug]/page.tsx # Individual camp details
│   │   ├── (admin)/                # Admin section (protected routes)
│   │   │   ├── dashboard/page.tsx  # Admin dashboard
│   │   │   ├── camps/
│   │   │   │   ├── page.tsx        # Manage camps
│   │   │   │   ├── [id]/edit/page.tsx # Edit camp
│   │   │   │   └── new/page.tsx    # Create new camp
│   │   │   ├── images/page.tsx     # Image management
│   │   ├── layout.tsx              # App layout
│   │   ├── global-error.tsx        # Global error boundary
│   │   └── loading.tsx             # Loading state
│   ├── lib/                        # AWS SDK wrappers
│   │   ├── s3.ts                   # S3 upload/download logic
│   │   ├── rds.ts                  # RDS connection/query logic
│   │   ├── amplify.ts              # Amplify config
│   │   └── cloudwatch.ts           # CloudWatch logging
│   ├── components/                 # Reusable UI components
│   ├── hooks/                      # Custom React hooks
│   └── types/                      # TypeScript types
├── amplify/                        # Amplify Gen 2 backend (auth, data, storage)
│   ├── auth/
│   ├── data/
│   ├── storage/
│   └── backend.ts
├── public/                         # Static assets
├── .env.local                      # AWS credentials and config
├── next.config.js
├── package.json
└── tsconfig.json


```

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


### Auth Implementation (REQUIRED PATTERN)
```typescript
// Must use Auth0 as specified in test
// App Router components use getServerSession()
```

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

## 📁 File Organization

### Naming Conventions
- Components: PascalCase (`CampCard.tsx`)
- Files/folders: kebab-case (`camp-details/`)
- Functions: camelCase (`calculateRate()`)
- Constants: UPPER_SNAKE_CASE (`MAX_UPLOAD_SIZE`)


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


### Integration Strategy
- Use context7 MCP proactively during development
- Reference real-time documentation rather than assumptions
- Validate implementation patterns before coding
- Ensure compatibility with latest versions of all dependencies

        

Remember: This is a **technical assessment**. Balance following requirements exactly with showcasing modern development skills using the most current and reliable patterns.