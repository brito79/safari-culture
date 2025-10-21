// lib/auth0.js

import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { NextResponse } from "next/server";

// Initialize the Auth0 client 
export const auth0 = new Auth0Client({
  async onCallback(error, context, session) {
    if (error) {
      console.error('Authentication error:', error);
      return NextResponse.redirect(
        new URL('/error', process.env.APP_BASE_URL)
      );
    }

    // Custom logic after successful authentication
    if (session) {
      console.log(`User ${session.user.sub} logged in successfully`);
    }

    return NextResponse.redirect(
      new URL(context.returnTo || "/", process.env.APP_BASE_URL)
    );
  }
});