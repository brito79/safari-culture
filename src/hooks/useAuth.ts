// src/hooks/useAuth.ts
"use client";

import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

// User roles as per business requirements
export type UserRole = 'admin' | 'user' | 'visitor';

// Permissions for role-based access control
export type Permission = 
  | 'VIEW_CAMPS'
  | 'VIEW_RATES' 
  | 'SUBMIT_INQUIRY'
  | 'MANAGE_CAMPS'
  | 'MANAGE_RATES'
  | 'MANAGE_IMAGES'
  | 'VIEW_INQUIRIES'
  | 'VIEW_ANALYTICS';

// Role to permissions mapping
const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    'VIEW_CAMPS',
    'VIEW_RATES',
    'SUBMIT_INQUIRY',
    'MANAGE_CAMPS',
    'MANAGE_RATES',
    'MANAGE_IMAGES',
    'VIEW_INQUIRIES',
    'VIEW_ANALYTICS'
  ],
  user: [
    'VIEW_CAMPS',
    'VIEW_RATES',
    'SUBMIT_INQUIRY'
  ],
  visitor: [
    'VIEW_CAMPS',
    'VIEW_RATES',
    'SUBMIT_INQUIRY'
  ]
};

export interface AuthUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  roles?: string[];
}

export interface UseAuthReturn {
  // Session data
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error?: Error;
  
  // Role & permissions
  userRole: UserRole;
  isAdmin: boolean;
  hasPermission: (permission: Permission) => boolean;
  hasRole: (role: UserRole) => boolean;
  
  // Auth actions
  login: (provider?: string, callbackUrl?: string) => void;
  logout: (callbackUrl?: string) => void;
  
  // Navigation helpers
  redirectToLogin: () => void;
  redirectToAdmin: () => void;
}

export function useAuth(): UseAuthReturn {
  const { user: auth0User, error, isLoading } = useUser();
  const router = useRouter();
  
  const isAuthenticated = !!auth0User;
  
  // Convert Auth0 user to our AuthUser format with useMemo
  const user: AuthUser | null = useMemo(() => {
    return auth0User ? {
      id: auth0User.sub,
      name: auth0User.name,
      email: auth0User.email,
      image: auth0User.picture,
      roles: auth0User['https://safari-culture.com/roles'] as string[] || []
    } : null;
  }, [auth0User]);
  
  // Determine user role
  const getUserRole = useCallback((): UserRole => {
    if (!user) return 'visitor';
    
    const roles = user.roles || [];
    if (roles.includes('admin')) return 'admin';
    
    return isAuthenticated ? 'user' : 'visitor';
  }, [user, isAuthenticated]);

  const userRole = getUserRole();
  const isAdmin = userRole === 'admin';
  
  // Check if user has specific permission
  const hasPermission = useCallback((permission: Permission): boolean => {
    return ROLE_PERMISSIONS[userRole].includes(permission);
  }, [userRole]);

  // Check if user has specific role
  const hasRole = useCallback((role: UserRole): boolean => {
    return userRole === role;
  }, [userRole]);

  // Auth actions using Auth0 v4 routes (no /api prefix)
  const login = useCallback((provider: string = 'auth0', callbackUrl: string = '/admin') => {
    // For Auth0 v4, we use the auto-mounted routes without /api prefix
    let loginUrl = '/auth/login';
    
    // Add provider and callback URL as query parameters
    const params = new URLSearchParams();
    if (callbackUrl) params.append('returnTo', callbackUrl);
    if (provider !== 'auth0') params.append('connection', provider);
    
    if (params.toString()) {
      loginUrl += `?${params.toString()}`;
    }
    
    window.location.href = loginUrl;
  }, []);

  const logout = useCallback((callbackUrl: string = '/') => {
    const params = new URLSearchParams();
    if (callbackUrl) params.append('returnTo', callbackUrl);
    
    const logoutUrl = `/auth/logout${params.toString() ? `?${params.toString()}` : ''}`;
    window.location.href = logoutUrl;
  }, []);

  // Navigation helpers
  const redirectToLogin = useCallback(() => {
    router.push('/login');
  }, [router]);

  const redirectToAdmin = useCallback(() => {
    router.push('/admin');
  }, [router]);

  return {
    // Session data
    user,
    isLoading,
    isAuthenticated,
    error,
    
    // Role & permissions
    userRole,
    isAdmin,
    hasPermission,
    hasRole,
    
    // Auth actions
    login,
    logout,
    
    // Navigation helpers
    redirectToLogin,
    redirectToAdmin,
  };
}
