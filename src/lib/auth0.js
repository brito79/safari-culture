// lib/auth0.js
import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Initialize the Auth0 client 
export const auth0 = new Auth0Client({
  // Options are loaded from environment variables by default
  // Ensure necessary environment variables are properly set:
  // AUTH0_SECRET, AUTH0_BASE_URL, AUTH0_ISSUER_BASE_URL, 
  // AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET
  
  authorizationParameters: {
    // In v4, the AUTH0_SCOPE and AUTH0_AUDIENCE environment variables 
    // for API authorized applications are no longer automatically picked up by the SDK.
    // We need to provide the values explicitly.
    scope: process.env.AUTH0_SCOPE || 'openid profile email',
    audience: process.env.AUTH0_AUDIENCE,
  }
});

// Export commonly used functions from Auth0Client
export const { 
  getSession,
  withApiAuthRequired,
  withPageAuthRequired,
  middleware,
  startInteractiveLogin
} = auth0;