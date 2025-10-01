// src/hooks/useAuth.ts
"use client";

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

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
  
  // Role & permissions
  userRole: UserRole;
  isAdmin: boolean;
  hasPermission: (permission: Permission) => boolean;
  hasRole: (role: UserRole) => boolean;
  
  // Auth actions
  login: (provider?: string, callbackUrl?: string) => Promise<void>;
  logout: (callbackUrl?: string) => Promise<void>;
  
  // Navigation helpers
  redirectToLogin: () => void;
  redirectToAdmin: () => void;
}

export function useAuth(): UseAuthReturn {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const isLoading = status === 'loading';
  const isAuthenticated = !!session?.user;
  const user = session?.user as AuthUser || null;
  
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

  // Auth actions
  const login = useCallback(async (provider: string = 'auth0', callbackUrl: string = '/admin') => {
    await signIn(provider, { callbackUrl });
  }, []);

  const logout = useCallback(async (callbackUrl: string = '/') => {
    await signOut({ callbackUrl });
  }, []);

  // Navigation helpers
  const redirectToLogin = useCallback(() => {
    router.push('/auth/login');
  }, [router]);

  const redirectToAdmin = useCallback(() => {
    router.push('/admin');
  }, [router]);

  return {
    // Session data
    user,
    isLoading,
    isAuthenticated,
    
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
