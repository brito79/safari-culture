# 🦁 Safari Culture - Wilderness Namibia Platform

A luxury safari tourism platform showcasing premium camps in Namibia with sophisticated rate management, beautiful galleries, and comprehensive admin capabilities.

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Auth0](https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white)

## 🌍 About

Safari Culture is a technical assessment project that demonstrates modern web development skills through a luxury safari tourism platform. The application showcases 4 premium Namibian wilderness camps with sophisticated features including authentication, admin management, and beautiful user interfaces.

### 🏕️ Featured Camps
- **Wilderness Doro Nawas** (Damaraland) - Desert wildlife focus
- **Wilderness Damaraland Camp** - Cultural immersion experience
- **Wilderness Hoanib Skeleton Camp** - Skeleton Coast adventures
- **Wilderness Little Kulala** - Sossusvlei desert luxury

## ✨ Features

### 🎯 Core Features
- **🏕️ Camp Showcase** - Beautiful galleries and detailed information
- **💰 Rate Management** - Seasonal pricing with admin controls
- **🔐 Authentication** - Secure Auth0 integration with role-based access
- **📱 Responsive Design** - Mobile-first approach with dark/light themes
- **⚡ Performance** - Server-side rendering and optimized images
- **🎨 Modern UI** - shadcn/ui components with Tailwind CSS

### 👨‍💼 Admin Features
- **Dashboard** - Comprehensive admin panel with analytics
- **Camp Management** - Add, edit, and manage camp information
- **Rate Updates** - Seasonal pricing management
- **Image Gallery** - S3-powered image management
- **Guest Inquiries** - Contact form management
- **User Roles** - Admin authentication and permissions

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes (dark/light mode)

### Backend & Infrastructure
- **Authentication**: Auth0 + NextAuth.js
- **Database**: MySQL 8.x on AWS RDS
- **ORM**: Prisma (configured for future use)
- **Storage**: AWS S3 for images
- **Hosting**: AWS Amplify Gen 2
- **Monitoring**: AWS CloudWatch

### Development Tools
- **Package Manager**: npm
- **Bundler**: Turbopack (Next.js 15)
- **Linting**: ESLint with TypeScript rules
- **Git**: Conventional commits

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- AWS Account (for deployment)
- Auth0 Account

### Environment Variables
Create a `.env.local` file in the root directory:

```bash
# Auth0 Configuration
AUTH0_ISSUER=https://your-domain.auth0.com
AUTH0_CLIENT_ID_ID=your_client_id
AUTH0_CLIENT_ID_SECRET=your_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# AWS Configuration
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
NEXT_PUBLIC_S3_BUCKET_NAME=your_s3_bucket

# Database Configuration
DATABASE_URL=mysql://user:password@host:port/database
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brito79/safari-culture.git
   cd safari-culture
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
safari-culture/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/             # Auth pages (login/register)
│   │   ├── admin/              # Admin protected routes
│   │   ├── api/                # API routes
│   │   ├── camps/              # Camp showcase pages
│   │   ├── dashboard/          # Admin dashboard
│   │   ├── experiences/        # Experience pages
│   │   └── contact/            # Contact forms
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── auth/               # Authentication components
│   │   ├── admin/              # Admin-specific components
│   │   └── landing/            # Landing page components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
│   │   ├── auth/               # Authentication config
│   │   └── utils.ts            # Helper functions
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── amplify/                    # AWS Amplify configuration
└── docs/                       # Documentation
```

## 🔐 Authentication Flow

The application uses a hybrid authentication approach:

1. **Public Access**: Camp viewing, rate browsing, contact forms
2. **Admin Access**: Protected dashboard requires authentication
3. **Auth0 Integration**: OAuth flow with role-based permissions
4. **Session Management**: NextAuth.js with JWT tokens

### User Roles
- **Public**: View camps, rates, submit inquiries
- **Admin**: Full dashboard access, camp management, rate updates

## 🎨 Design System

### Color Palette
- **Primary**: Stone/Neutral tones for luxury feel
- **Accent**: Sunset colors (amber/orange) for warmth
- **UI**: Clean grays with proper contrast ratios
- **Status**: Standard semantic colors (red, green, blue)

### Typography
- **Headings**: Light weight fonts for elegance
- **Body**: Readable sans-serif with proper line height
- **UI**: Medium weight for buttons and labels

### Components
All UI components follow the shadcn/ui design system with custom theming for the safari/luxury aesthetic.

## 📊 Data Management

### Database Schema
- **Camps**: Core camp information and amenities
- **Rates**: Seasonal pricing with date ranges
- **Images**: S3 URLs with metadata
- **Inquiries**: Contact form submissions
- **Users**: Authentication and role data

### API Structure
```
/api/
├── auth/[...nextauth]          # NextAuth endpoints
├── camps/                      # Camp CRUD operations
├── rates/                      # Rate management
├── images/                     # S3 upload/management
└── inquiries/                  # Contact form handling
```

## 🚀 Deployment

### AWS Amplify Deployment
1. **Connect Repository**: Link your Git repository
2. **Environment Variables**: Configure in Amplify console
3. **Build Settings**: Automatic detection of Next.js
4. **Domain**: Custom domain configuration available

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🧪 Testing

### Available Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

### Testing Strategy
- **Unit Tests**: Utility functions and hooks
- **Integration Tests**: API endpoints
- **Component Tests**: UI component behavior
- **E2E Tests**: Critical user journeys

## 📈 Performance

### Optimizations
- **Image Optimization**: Next.js Image component with S3
- **Code Splitting**: Automatic with Next.js App Router
- **Server Components**: Default server-side rendering
- **Caching**: ISR for static content
- **Bundle Analysis**: Turbopack optimization

### Metrics Goals
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development

### Code Quality
- **TypeScript**: Strict mode enabled
- **ESLint**: Comprehensive rules
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks

### Branch Strategy
- **main**: Production releases
- **auth**: Authentication features
- **feature/***: Feature development
- **hotfix/***: Critical fixes

### Commit Convention
```
feat: add camp gallery component
fix: resolve authentication redirect issue
docs: update API documentation
style: improve dashboard responsive design
refactor: optimize image loading logic
test: add rate calculation tests
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is created as a technical assessment and is not licensed for commercial use.

## 🆘 Support

For support and questions:
- **Documentation**: Check the `/docs` folder
- **Issues**: GitHub Issues for bug reports
- **Discussions**: GitHub Discussions for questions

## 🙏 Acknowledgments

- **Wilderness Safaris**: Inspiration for luxury safari experiences
- **Namibia Tourism**: Beautiful destination showcase
- **Next.js Team**: Amazing framework and documentation
- **Vercel**: Hosting and deployment platform
- **shadcn**: Beautiful UI component library

---

**Built with ❤️ for luxury safari experiences in Namibia**

*This project demonstrates modern web development practices including authentication, cloud integration, and responsive design for the tourism industry.*
