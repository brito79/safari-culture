import React from 'react';
import { Auth0Provider } from '@auth0/nextjs-auth0';
import { AuthProvider } from './auth-context';

export default function UserProvider({ children }: { children: React.ReactNode }) {
  return (
    <Auth0Provider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Auth0Provider>
  );
}
