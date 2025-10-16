// Auth0 v4 type extensions
declare module '@auth0/nextjs-auth0' {
  interface Claims {
    // Custom claims that might be added to the ID token
    'https://safari-culture.com/roles'?: string[];
    'https://safari-culture.com/permissions'?: string[];
  }
}

// Extend the User type from Auth0
declare global {
  namespace Auth0 {
    interface User {
      // Standard Auth0 user properties are already included
      // Add any custom properties here if needed
      roles?: string[];
      permissions?: string[];
    }
  }
}