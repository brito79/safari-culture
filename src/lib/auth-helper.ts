// Define types for better type safety
export type UserRole = 'admin' | 'user' | 'visitor';

export type Permission = 
  | 'view_dashboard'
  | 'manage_camps'
  | 'manage_rates'
  | 'manage_images'
  | 'view_inquiries'
  | 'manage_users'
  | 'view_analytics';

// Enhanced user interface
export interface User {
  email?: string;
  name?: string;
  picture?: string;
  sub?: string;
  roles?: string[];
}

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
  user: [], // Future scope
  visitor: []
};

/**
 * Extract roles from user object
 */
function extractUserRoles(user: User): string[] {
  return user.roles || [];
}

/**
 * Get user role from user object
 */
export function getUserRole(user: User | null): UserRole | null {
  if (!user) {
    return 'visitor';
  }

  const roles = extractUserRoles(user);
  
  if (Array.isArray(roles) && roles.includes('admin')) {
    return 'admin';
  }
  
  return 'user'; // Default for authenticated users
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(user: User | null): boolean {
  return !!user;
}

/**
 * Check if user has admin role
 */
export function isAdmin(user: User | null): boolean {
  if (!user) {
    return false;
  }
  
  const roles = extractUserRoles(user);
  return Array.isArray(roles) && roles.includes('admin');
}

/**
 * Check if user has specific role
 */
export function hasRole(user: User | null, role: UserRole): boolean {
  const userRole = getUserRole(user);
  return userRole === role;
}

/**
 * Check if user has specific permission
 */
export function hasPermission(user: User | null, permission: Permission): boolean {
  const userRole = getUserRole(user);
  if (!userRole) return false;
  
  return ROLE_PERMISSIONS[userRole].includes(permission);
}

/**
 * Get user permissions
 */
export function getUserPermissions(user: User | null): Permission[] {
  const userRole = getUserRole(user);
  return userRole ? ROLE_PERMISSIONS[userRole] : [];
}

/**
 * Client-side authentication guard (throws error if not authenticated)
 */
export function requireAuth(user: User | null) {
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

/**
 * Client-side admin guard (throws error if not admin)
 */
export function requireAdmin(user: User | null) {
  requireAuth(user);
  
  if (!isAdmin(user)) {
    throw new Error('Admin access required');
  }
  
  return user;
}

/**
 * Client-side permission guard (throws error if permission missing)
 */
export function requirePermission(user: User | null, permission: Permission) {
  requireAuth(user);
  
  if (!hasPermission(user, permission)) {
    throw new Error(`Permission required: ${permission}`);
  }
  
  return user;
}

export { ROLE_PERMISSIONS };