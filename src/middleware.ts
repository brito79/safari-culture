import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(_request: NextRequest) {
  // For now, let the auth context handle the protection
  // This middleware can be expanded later for additional security
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match admin routes only
     */
    "/admin/:path*",
  ],
};