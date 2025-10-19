import { auth0 } from "@/lib/auth0";
import type { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request);

  // Intercept specific auth routes
  if (request.nextUrl.pathname === '/auth/logout') {
    // Custom logout logic runs BEFORE the actual logout
    console.log('User is logging out');
    
    // Example: Set custom cookies
    authRes.cookies.set('logoutTime', new Date().toISOString());
  }
  
  if (request.nextUrl.pathname === '/auth/login') {
    // Custom login logic runs BEFORE the actual login
    console.log('User is attempting to login');
  }

  return authRes;
}



export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};