# Authentication & Authorization Setup Guide

## Overview
This project implements a robust authentication and authorization system using Auth0 with role-based access control (RBAC). The system is designed for scalability and follows security best practices.

## Features
- ✅ Auth0 integration for identity management
- ✅ Role-based access control (Admin-only for V1)
- ✅ Permission-based authorization
- ✅ Protected routes with middleware
- ✅ Server-side and client-side auth guards
- ✅ Secure token management
- ✅ Scalable for future role expansion

## Setup Instructions

### 1. Auth0 Configuration

1. **Create Auth0 Account**
   - Go to [Auth0.com](https://auth0.com) and create an account
   - Create a new tenant for your application

2. **Create Application**
   - In Auth0 Dashboard, go to Applications
   - Create a new "Regular Web Application"
   - Note down the Client ID and Client Secret

3. **Configure Application Settings**
   ```
   Allowed Callback URLs: http://localhost:3000/api/auth/callback
   Allowed Logout URLs: http://localhost:3000
   Allowed Web Origins: http://localhost:3000
   ```

4. **Set up User Roles**
   - Go to User Management > Roles
   - Create an "admin" role
   - Add permissions as needed

5. **Configure Rules/Actions (Optional)**
   - Add custom claims to tokens for roles
   - Example Action code:
   ```javascript
   exports.onExecutePostLogin = async (event, api) => {
     const namespace = 'https://safari-culture.com/';
     if (event.authorization) {
       api.idToken.setCustomClaim(`${namespace}roles`, event.authorization.roles);
       api.accessToken.setCustomClaim(`${namespace}roles`, event.authorization.roles);
     }
   };
   ```

### 2. Environment Variables

1. **Copy the example file**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your Auth0 credentials**
   ```env
   AUTH0_SECRET='your-generated-secret'
   AUTH0_BASE_URL='http://localhost:3000'
   AUTH0_ISSUER_BASE_URL='https://your-domain.auth0.com'
   AUTH0_CLIENT_ID='your-client-id'
   AUTH0_CLIENT_SECRET='your-client-secret'
   ```

3. **Generate AUTH0_SECRET**
   ```bash
   openssl rand -hex 32
   ```

### 3. User Management

**Creating Admin Users:**
1. Go to Auth0 Dashboard > User Management > Users
2. Create a new user or use an existing one
3. Assign the "admin" role to the user
4. The user can now access admin features

## Architecture

### Authentication Flow
1. User clicks login → redirected to Auth0
2. Auth0 handles authentication
3. User redirected back with tokens
4. Tokens contain user info and roles
5. Application checks roles for authorization

### Role-Based Access Control

**Current Roles (V1):**
- `admin`: Full access to dashboard and management features
- `user`: Future scope for end-users
- `visitor`: Unauthenticated users

**Permissions:**
- `view_dashboard`: Access admin dashboard
- `manage_camps`: Create/edit/delete camps
- `manage_rates`: Update pricing
- `manage_images`: Upload/manage images
- `view_inquiries`: View contact form submissions
- `manage_users`: Manage admin users
- `view_analytics`: Access analytics data

### Protected Routes
- `/admin/*` - Requires admin role
- `/api/admin/*` - Requires admin role (API routes)

## Usage Examples

### Client-Side Protection
```tsx
// Protect a component with role
const AdminComponent = withAuth(MyComponent, 'admin');

// Protect with specific permissions
const CampManager = withAuth(MyComponent, 'admin', ['manage_camps']);

// Check permissions in components
function MyComponent() {
  const { isAdmin, canManageCamps } = usePermissions();
  
  return (
    <div>
      {isAdmin && <AdminPanel />}
      {canManageCamps && <CampEditor />}
    </div>
  );
}
```

### Server-Side Protection
```tsx
// In API routes or server components
import { requireAdmin, requirePermission } from '@/lib/auth';

export async function POST() {
  await requireAdmin(); // Throws if not admin
  // Handle admin-only logic
}

export async function GET() {
  await requirePermission('view_analytics');
  // Handle permission-specific logic
}
```

## Security Features

1. **Token Security**
   - Secure HTTP-only cookies
   - Automatic token refresh
   - CSRF protection

2. **Route Protection**
   - Middleware-level protection
   - Server-side validation
   - Client-side guards

3. **Role Validation**
   - Server-side role checking
   - Permission-based access
   - Secure role extraction

## Development Tips

1. **Testing Auth**
   - Create test admin user in Auth0
   - Use Auth0 logs for debugging
   - Check browser network tab for token issues

2. **Adding New Permissions**
   - Update permission types in `auth.ts`
   - Add to role mappings
   - Update components using `usePermissions`

3. **Adding New Roles**
   - Update `UserRole` type
   - Add to `ROLE_PERMISSIONS` mapping
   - Update Auth0 role configuration

## Troubleshooting

**Common Issues:**
1. **"Authentication required" errors**
   - Check if AUTH0_SECRET is set
   - Verify Auth0 configuration URLs
   - Check browser cookies

2. **"Access denied" for admin users**
   - Verify user has admin role in Auth0
   - Check role claim configuration
   - Verify custom claims in token

3. **Middleware redirect loops**
   - Check middleware matcher patterns
   - Verify AUTH0_BASE_URL is correct
   - Check for conflicting redirects

## Future Enhancements

**Planned for V2:**
- End-user role for customers
- Guest booking system
- Enhanced permission granularity
- Multi-tenant support
- API rate limiting
- Enhanced audit logging

## Security Considerations

1. **Never expose secrets** in client-side code
2. **Always validate roles** on the server side
3. **Use HTTPS** in production
4. **Implement rate limiting** for auth endpoints
5. **Monitor auth logs** for suspicious activity
6. **Regular security audits** of permissions and roles

## Support

For issues with this authentication system:
1. Check Auth0 logs in dashboard
2. Review browser console for errors
3. Verify environment variables
4. Check middleware configuration
5. Test with different browsers/incognito mode