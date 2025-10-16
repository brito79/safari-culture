import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { auth0 } from "./lib/auth0"

// Define protected routes that require authentication
const protectedRoutes = [
  '/admin',
  '/dashboard',
  '/api/admin'
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // First, let Auth0 middleware handle all auth routes and session management
  const authRes = await auth0.middleware(request)

  // Ensure we don't interfere with Auth0's auto-mounted routes
  if (pathname.startsWith("/auth")) {
    return authRes
  }

  // Allow access to public routes without requiring a session
  const publicRoutes = [
    '/',
    '/camps',
    '/experiences', 
    '/rates',
    '/contact',
  ]
  
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  )
  
  if (isPublicRoute) {
    return authRes
  }

  // For protected routes, check if user has a session
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  if (isProtectedRoute) {
    const session = await auth0.getSession(request)
    
    // If the user does not have a session, redirect to login
    if (!session) {
      const { origin } = new URL(request.url)
      return NextResponse.redirect(`${origin}/auth/login?returnTo=${pathname}`)
    }
  }

  // Return the Auth0 middleware response for all other cases
  return authRes
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ]
};