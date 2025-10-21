# Auth0 v4 Usage Examples

## 🎨 Client Components (Browser)

### Basic User Display
```tsx
'use client'

import { useUser } from '@auth0/nextjs-auth0'

export default function Profile() {
  const { user, isLoading, error } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!user) return <div>Not logged in</div>

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <img src={user.picture} alt={user.name} />
      <p>Email: {user.email}</p>
    </div>
  )
}
```

### Conditional Rendering Based on Auth
```tsx
'use client'

import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'

export default function Navigation() {
  const { user, isLoading } = useUser()

  return (
    <nav>
      {isLoading ? (
        <div>Loading...</div>
      ) : user ? (
        <>
          <span>Hello, {user.name}</span>
          <Link href="/auth/logout">Logout</Link>
        </>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </nav>
  )
}
```

### Login with Return URL
```tsx
<Link href="/auth/login?returnTo=/dashboard">
  Login to Dashboard
</Link>

// Or with button
<button onClick={() => {
  window.location.href = '/auth/login?returnTo=/profile'
}}>
  Login
</button>
```

## 🖥️ Server Components

### Get User in Server Component
```tsx
import { auth0 } from '@/lib/auth0'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const session = await auth0.getSession()
  
  if (!session) {
    redirect('/auth/login?returnTo=/profile')
  }

  return (
    <div>
      <h1>Server-side Profile</h1>
      <p>User ID: {session.user.sub}</p>
      <p>Email: {session.user.email}</p>
    </div>
  )
}
```

### Protected Server Component
```tsx
import { auth0 } from '@/lib/auth0'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = await auth0.getSession()
  
  if (!session) {
    redirect('/auth/login?returnTo=/admin')
  }

  // Additional server-side check (e.g., admin role)
  const isAdmin = // ... check roles
  
  if (!isAdmin) {
    redirect('/')
  }

  return <div>Admin Content</div>
}
```

## ⚙️ Server Actions

### Check Authentication
```tsx
'use server'

import { auth0 } from '@/lib/auth0'

export async function getUserData() {
  const session = await auth0.getSession()
  
  if (!session) {
    throw new Error('Not authenticated')
  }

  // Fetch user-specific data
  return {
    userId: session.user.sub,
    email: session.user.email
  }
}
```

### Protected Server Action
```tsx
'use server'

import { auth0 } from '@/lib/auth0'
import { isAdmin } from './isAdmin'

export async function deleteUser(userId: string) {
  const session = await auth0.getSession()
  
  if (!session) {
    throw new Error('Not authenticated')
  }

  const hasAdminAccess = await isAdmin()
  
  if (!hasAdminAccess) {
    throw new Error('Insufficient permissions')
  }

  // Perform admin action
  // ...
}
```

### Get Access Token for API Calls
```tsx
'use server'

import { auth0 } from '@/lib/auth0'

export async function callExternalAPI() {
  const session = await auth0.getSession()
  
  if (!session) {
    throw new Error('Not authenticated')
  }

  // Get access token for external API
  const { token } = await auth0.getAccessToken({
    scopes: ['read:data', 'write:data']
  })

  const response = await fetch('https://api.example.com/data', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.json()
}
```

## 🛡️ Middleware

### Custom Middleware Logic
```ts
// middleware.ts
import { auth0 } from '@/lib/auth0'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Let Auth0 handle auth routes
  const authRes = await auth0.middleware(request)

  // Add custom logic for specific routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = await auth0.getSession()
    
    if (!session) {
      return NextResponse.redirect(
        new URL('/auth/login?returnTo=/admin', request.url)
      )
    }
  }

  return authRes
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
}
```

## 🔄 API Routes (App Router)

### Protected API Route
```tsx
// app/api/data/route.ts
import { auth0 } from '@/lib/auth0'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await auth0.getSession()
  
  if (!session) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    )
  }

  // Fetch data for authenticated user
  const data = {
    userId: session.user.sub,
    // ... other data
  }

  return NextResponse.json(data)
}
```

### API Route with Role Check
```tsx
// app/api/admin/users/route.ts
import { auth0 } from '@/lib/auth0'
import { isAdmin } from '@/app/actions/isAdmin'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request) {
  const session = await auth0.getSession()
  
  if (!session) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    )
  }

  const hasAdminAccess = await isAdmin()
  
  if (!hasAdminAccess) {
    return NextResponse.json(
      { error: 'Insufficient permissions' },
      { status: 403 }
    )
  }

  // Perform admin action
  // ...

  return NextResponse.json({ success: true })
}
```

## 🎭 Custom Authorization Parameters

### Pass Custom Params to Auth0
```tsx
// Login with custom audience
<Link href="/auth/login?audience=https://api.example.com&scope=read:data write:data">
  Login with API Access
</Link>

// Or configure globally in auth0.ts
export const auth0 = new Auth0Client({
  authorizationParameters: {
    scope: 'openid profile email',
    audience: 'https://api.example.com'
  }
})
```

## 🧪 Testing Helpers

### Mock User for Tests
```tsx
// __tests__/helpers/mockAuth.ts
export function mockUser() {
  return {
    sub: 'auth0|123456',
    name: 'Test User',
    email: 'test@example.com',
    picture: 'https://example.com/avatar.jpg'
  }
}

// In your test
jest.mock('@auth0/nextjs-auth0', () => ({
  useUser: () => ({
    user: mockUser(),
    isLoading: false,
    error: null
  })
}))
```

## 🚨 Error Handling

### Client-Side Error Handling
```tsx
'use client'

import { useUser } from '@auth0/nextjs-auth0'

export default function Component() {
  const { user, isLoading, error } = useUser()

  if (error) {
    return (
      <div className="error-container">
        <h2>Authentication Error</h2>
        <p>{error.message}</p>
        <a href="/auth/logout">Try logging in again</a>
      </div>
    )
  }

  // ... rest of component
}
```

### Server-Side Error Handling
```tsx
import { auth0 } from '@/lib/auth0'

export default async function Page() {
  try {
    const session = await auth0.getSession()
    
    if (!session) {
      throw new Error('Not authenticated')
    }

    // ... rest of logic
  } catch (error) {
    console.error('Auth error:', error)
    // Handle error appropriately
    return <ErrorComponent message="Failed to load user data" />
  }
}
```

## 💡 Pro Tips

1. **Always check for null/undefined** when accessing user data
2. **Use server actions** for sensitive operations (role checks, API calls)
3. **Pass returnTo** parameter for better UX after login
4. **Handle loading states** to prevent layout shift
5. **Use TypeScript** for better type safety with user objects
6. **Cache expensive operations** (like role checks) when appropriate
7. **Log errors** but don't expose sensitive info to users
8. **Test both authenticated and unauthenticated states**
