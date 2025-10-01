"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

// Define role types for scalability
export type UserRole = 'admin' | 'user' | 'visitor';

// Define permissions for role-based access control
export type Permission = 
  | 'view_dashboard'
  | 'manage_camps'
  | 'manage_rates'
  | 'manage_images'
  | 'view_inquiries'
  | 'manage_users'
  | 'view_analytics';

// Role to permissions mapping
const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    'view_dashboard',
    'manage_camps',
    'manage_rates', 
    'manage_images',
    'view_inquiries',
    'manage_users',
    'view_analytics'
  ],
  user: [], // Future scope - end users will have limited permissions
  visitor: [] // Future scope - visitors/guests
};

// Enhanced user interface for Auth0 user
interface User {
  sub?: string;
  email?: string;
  name?: string;
  picture?: string;
  roles?: string[];
  [key: string]: unknown;
}

// Auth0 user type with metadata
interface Auth0User extends User {
  'https://safari-culture.com/roles'?: string[];
  app_metadata?: {
    roles?: string[];
  };
  user_metadata?: {
    roles?: string[];
  };
}

interface AuthContextType {
  // Auth state from Auth0
  user: User | undefined;
  error: Error | undefined;
  isLoading: boolean;
  
  // Enhanced auth state
  isAuthenticated: boolean;
  userRole: UserRole | null;
  
  // Permission checking
  hasPermission: (permission: Permission) => boolean;
  hasRole: (role: UserRole) => boolean;
  
  // Auth actions
  login: () => void;
  logout: () => void;
  signup: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user: auth0User, error, isLoading } = useUser();
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  // Extract user role from Auth0 user metadata
  useEffect(() => {
    if (auth0User) {
      // Check for roles in different possible locations in Auth0 user object
      const typedUser = auth0User as Auth0User;
      const roles = typedUser['https://safari-culture.com/roles'] || 
                   typedUser.roles || 
                   typedUser.app_metadata?.roles || 
                   typedUser.user_metadata?.roles ||
                   [];
      
      // For V1, we only check for admin role
      if (Array.isArray(roles) && roles.includes('admin')) {
        setUserRole('admin');
      } else if (auth0User) {
        // For now, any authenticated user without admin role is considered 'user'
        // In V1, we'll primarily work with admin role
        setUserRole('user');
      } else {
        setUserRole('visitor');
      }
    } else {
      setUserRole('visitor');
    }
  }, [auth0User]);

  // Check if user has specific permission
  const hasPermission = (permission: Permission): boolean => {
    if (!userRole) return false;
    return ROLE_PERMISSIONS[userRole].includes(permission);
  };

  // Check if user has specific role
  const hasRole = (role: UserRole): boolean => {
    return userRole === role;
  };

  // Auth action handlers - use Auth0's built-in routes
  const login = () => {
    window.location.assign('/api/auth/login');
  };

  const logout = () => {
    window.location.assign('/api/auth/logout');
  };

  const signup = () => {
    window.location.assign('/api/auth/signup');
  };

  const contextValue: AuthContextType = {
    // Auth0 state
    user: auth0User || undefined,
    error: error || undefined,
    isLoading,
    
    // Enhanced state
    isAuthenticated: !!auth0User,
    userRole,
    
    // Permission checking
    hasPermission,
    hasRole,
    
    // Auth actions
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Higher-order component for protecting routes
export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole?: UserRole,
  requiredPermissions?: Permission[]
) {
  return function AuthenticatedComponent(props: P) {
    const { isLoading, isAuthenticated, hasRole, hasPermission } = useAuth();

    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-900 mx-auto mb-4"></div>
            <p className="text-stone-600">Loading...</p>
          </div>
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sunset-50 to-stone-100">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sunset-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-light text-stone-900 mb-2">
                  Admin Access Required
                </h1>
                <p className="text-stone-600 mb-6">
                  Please sign in to access the admin dashboard and manage your Namibian Wilderness platform.
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.assign('/api/auth/login')}
                  className="w-full px-6 py-3 bg-sunset-600 text-white rounded-lg hover:bg-sunset-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Sign In</span>
                </button>
                
                <p className="text-sm text-stone-500">
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => window.location.assign('/api/auth/signup')}
                    className="text-sunset-600 hover:text-sunset-700 font-medium"
                  >
                    Register here
                  </button>
                </p>
                
                <div className="pt-4 border-t border-stone-200">
                  <button
                    onClick={() => window.location.assign('/')}
                    className="text-stone-500 hover:text-stone-700 text-sm"
                  >
                    ← Back to main site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Check role requirement
    if (requiredRole && !hasRole(requiredRole)) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-stone-100">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-light text-stone-900 mb-2">
                  Access Denied
                </h2>
                <p className="text-stone-600 mb-6">
                  You don&apos;t have the required permissions to access this page. Contact an administrator if you believe this is an error.
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.assign('/')}
                  className="w-full px-6 py-3 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors font-medium"
                >
                  Return to Main Site
                </button>
                
                <button
                  onClick={() => window.location.assign('/api/auth/logout')}
                  className="text-stone-500 hover:text-stone-700 text-sm"
                >
                  Sign out and try different account
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Check permission requirements
    if (requiredPermissions && !requiredPermissions.every(hasPermission)) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-light text-stone-900 mb-2">
                  Insufficient Permissions
                </h2>
                <p className="text-stone-600 mb-6">
                  You don&apos;t have the required permissions to perform this action. Please contact an administrator to request access.
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.assign('/admin')}
                  className="w-full px-6 py-3 bg-sunset-600 text-white rounded-lg hover:bg-sunset-700 transition-colors font-medium"
                >
                  Back to Dashboard
                </button>
                
                <button
                  onClick={() => window.location.assign('/')}
                  className="text-stone-500 hover:text-stone-700 text-sm"
                >
                  Return to Main Site
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

// Hook for checking permissions in components
export function usePermissions() {
  const { hasPermission, hasRole, userRole } = useAuth();
  
  return {
    hasPermission,
    hasRole,
    userRole,
    isAdmin: hasRole('admin'),
    canViewDashboard: hasPermission('view_dashboard'),
    canManageCamps: hasPermission('manage_camps'),
    canManageRates: hasPermission('manage_rates'),
    canManageImages: hasPermission('manage_images'),
    canViewInquiries: hasPermission('view_inquiries'),
    canManageUsers: hasPermission('manage_users'),
    canViewAnalytics: hasPermission('view_analytics'),
  };
}