# Auth0 Setup Guide - Keys, Configuration & Best Practices

Based on the latest Auth0 documentation and current SDK patterns, here's what you need to know:

## 🔑 Required Keys & Setup Steps

### 1. **Auth0 Account Setup**
You'll need to create an Auth0 account and configure the following:

#### **Get Your Application Keys** (Required)
From your Auth0 Dashboard → Applications → Settings:
- **Domain** (e.g., `your-tenant.auth0.com`)
- **Client ID** (public identifier)
- **Client Secret** (private key - keep secure!)

#### **Configure URLs in Auth0 Dashboard**
In Application Settings, you MUST set:
- **Allowed Callback URLs**: `http://localhost:3000/auth/callback`
- **Allowed Logout URLs**: `http://localhost:3000`
- **Allowed Web Origins**: `http://localhost:3000`

### 2. **Environment Variables** (Required)
Create `.env.local` with these exact variables:

```bash
# Required Auth0 Configuration
AUTH0_SECRET='use-openssl-rand-hex-32-to-generate'  # Generate with: openssl rand -hex 32
AUTH0_BASE_URL='http://localhost:3000'              # Your app URL
AUTH0_ISSUER_BASE_URL='https://your-tenant.auth0.com'  # Your Auth0 domain
AUTH0_CLIENT_ID='your-client-id'                    # From Auth0 dashboard
AUTH0_CLIENT_SECRET='your-client-secret'            # From Auth0 dashboard

# Optional - For API authorization
AUTH0_AUDIENCE='your-api-identifier'                # If you have an API
AUTH0_SCOPE='openid profile email'                 # Default scopes
```

### 3. **Generate AUTH0_SECRET**
This is CRITICAL for security. Run this command:
```bash
openssl rand -hex 32
```
Use the output as your `AUTH0_SECRET` value.

## 📦 Package Installation & SDK Setup

### **Current SDK Version (v4.10.0)**
Based on your installed version, the setup is:

```bash
npm install @auth0/nextjs-auth0
```

### **Key Changes in SDK v4**
The documentation shows these important changes:

1. **New Client Initialization Pattern**:
```javascript
// lib/auth0.js
import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  authorizationParameters: {
    scope: process.env.AUTH0_SCOPE,
    audience: process.env.AUTH0_AUDIENCE,
  }
});
```

2. **Updated Middleware Pattern**:
```javascript
// middleware.ts
import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  return await auth0.middleware(request);
}
```

3. **Auto-configured Routes** (provided by SDK):
- `/auth/login` - Login route
- `/auth/logout` - Logout route  
- `/auth/callback` - Auth0 callback
- `/auth/profile` - User profile
- `/auth/access-token` - Access token endpoint

## 🔧 Implementation Steps for Your Project

### **Step 1: Update Your Auth0 Client Setup**
Based on the documentation, you should create `lib/auth0.js`:

```javascript
import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  authorizationParameters: {
    scope: process.env.AUTH0_SCOPE || 'openid profile email',
    audience: process.env.AUTH0_AUDIENCE,
  }
});
```

### **Step 2: Update Your API Routes**
Replace your current API route with:

```javascript
// pages/api/auth/[...auth0].js
import { auth0 } from '@/lib/auth0';

export default auth0.handleAuth();
```

### **Step 3: Update Your Middleware**
```javascript
// middleware.ts
import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
```

### **Step 4: Update Client Components**
```javascript
'use client';
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, isLoading } = useUser();
  
  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in</p>;
  
  return (
    <div>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

### **Step 5: Update Server Components**
```javascript
import { auth0 } from "@/lib/auth0";

export default async function ProfileServer() {
  const session = await auth0.getSession();
  const user = session?.user;
  
  return user ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : null;
}
```

## 🚨 Critical Security Considerations

### **Environment Variables Security**
- ✅ **DO**: Keep `AUTH0_CLIENT_SECRET` secure and never expose it client-side
- ✅ **DO**: Use a strong, randomly generated `AUTH0_SECRET`
- ✅ **DO**: Use `.env.local` for local development (auto-ignored by git)
- ❌ **DON'T**: Commit secrets to version control
- ❌ **DON'T**: Use weak or predictable secrets

### **Production Deployment**
For production (AWS Amplify), set environment variables in:
- AWS Amplify Console → App → Environment Variables
- Or use AWS Systems Manager Parameter Store for secrets

## 🔍 What You Need to Do NOW

### **Immediate Action Items:**

1. **Create Auth0 Account**: Go to https://auth0.com and sign up
2. **Create Application**: Set up a "Regular Web Application"
3. **Configure URLs**: Set callback/logout URLs in Auth0 dashboard
4. **Get Keys**: Copy Domain, Client ID, Client Secret
5. **Generate Secret**: Run `openssl rand -hex 32`
6. **Create .env.local**: Add all required environment variables
7. **Update Code**: Replace your mock auth system with real Auth0 SDK

### **Testing Checklist:**
- [ ] Can access `/auth/login` and see Auth0 login page
- [ ] Can log in with test credentials
- [ ] Gets redirected back to your app after login
- [ ] Can access protected routes when logged in
- [ ] Can log out successfully
- [ ] User data displays correctly in components

## 💡 Key Insights from Documentation

1. **SDK v4 Changes**: The package structure and exports have changed significantly
2. **Auto-configuration**: Much of the setup is now automatic when environment variables are set correctly
3. **Simplified API**: The new `Auth0Client` pattern is cleaner than previous versions
4. **Better TypeScript Support**: Improved typing throughout the SDK

## 🎯 Next Steps

Once you complete the Auth0 setup:
1. Your existing auth infrastructure will work with real authentication
2. Role-based access control will function with Auth0 user metadata
3. All your protected routes and admin features will be secured
4. The permission system you built will work with real user roles

The authentication system you already have is well-architected and will integrate seamlessly with Auth0 once the keys are configured!