"use server";

import { auth0 } from '@/lib/auth0';

export async function checkUserPermissions() {
  try {
    const accessToken = await auth0.getAccessToken();
    
    if (!accessToken) {
      return { isAuthenticated: false, isAdmin: false, permissions: [] };
    }
    
    // Decode the JWT to access permissions
    const tokenPayload = JSON.parse(atob(accessToken.token.split('.')[1]));
    const permissions = tokenPayload.permissions || [];
    
    return {
      isAuthenticated: true,
      permissions,
      isAdmin: permissions.includes('admin:all') || permissions.includes('manage:users')
    };
  } catch (error) {
    console.error("Error checking user permissions:", error);
    return { isAuthenticated: false, isAdmin: false, permissions: [] };
  }
}
