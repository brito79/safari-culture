# Auth0 Admin Setup Guide - Fixing Registration & Admin Rights

## 🚨 Issue Fixed: Registration "Not Found" Error

**Problem**: The API route `/api/auth/[...auth0].ts` was missing the signup handler.

**Solution**: ✅ Added signup route that redirects to Auth0 with `screen_hint=signup` parameter.

Now when users click "Register", they'll be redirected to Auth0's signup flow instead of getting a 404 error.

## 🔐 Setting Up Admin Rights in Auth0 (No Hardcoding)

Here's how to properly give yourself admin rights through the Auth0 dashboard:

### Step 1: Create Admin Role in Auth0

1. **Go to Auth0 Dashboard** → User Management → Roles
2. **Click "Create Role"**
3. **Set up the role**:
   - **Name**: `admin`
   - **Description**: `Administrator with full access to the platform`
4. **Click "Create"**

### Step 2: Create Permissions (Optional but Recommended)

1. **Go to** User Management → Roles → Your "admin" role
2. **Click "Permissions" tab**
3. **Add permissions** (these match your app's permission system):
   ```
   view:dashboard
   manage:camps
   manage:rates
   manage:images
   view:inquiries
   manage:users
   view:analytics
   ```

### Step 3: Assign Admin Role to Your User

#### **Option A: Assign to Existing User**
1. **Go to** User Management → Users
2. **Find your user** (or create one by signing up first)
3. **Click on the user**
4. **Go to "Roles" tab**
5. **Click "Assign Roles"**
6. **Select "admin"** and click "Assign"

#### **Option B: Auto-assign Admin Role with Rules/Actions**
Create an Auth0 Action to automatically assign admin role:

1. **Go to** Actions → Library
2. **Click "Create Action"**
3. **Choose "Login / Post Login"**
4. **Name it**: `Auto Assign Admin Role`
5. **Add this code**:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  // Auto-assign admin role to specific email (replace with yours)
  const adminEmails = ['your-email@example.com', 'admin@yourcompany.com'];
  
  if (adminEmails.includes(event.user.email)) {
    api.user.setAppMetadata('roles', ['admin']);
    
    // Also set as custom claim for your app
    const namespace = 'https://safari-culture.com/';
    api.idToken.setCustomClaim(`${namespace}roles`, ['admin']);
    api.accessToken.setCustomClaim(`${namespace}roles`, ['admin']);
  }
};
```

6. **Deploy the Action**
7. **Go to** Actions → Flows → Login
8. **Drag your action** into the flow between "Start" and "Complete"

### Step 4: Configure Custom Claims (Important!)

Your app looks for roles in custom claims. Add this Action:

1. **Create another Action** (Login / Post Login)
2. **Name**: `Add Custom Claims`
3. **Code**:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  const namespace = 'https://safari-culture.com/';
  
  // Get user roles
  const roles = event.authorization?.roles || [];
  
  // Add roles to tokens
  if (roles.length > 0) {
    api.idToken.setCustomClaim(`${namespace}roles`, roles);
    api.accessToken.setCustomClaim(`${namespace}roles`, roles);
  }
};
```

4. **Deploy and add to Login flow**

## 🔧 Environment Variables Setup

Make sure your `.env.local` has these values:

```bash
# Generate with: openssl rand -hex 32
AUTH0_SECRET='your-generated-secret'

# Your app URL
AUTH0_BASE_URL='http://localhost:3000'

# From Auth0 Dashboard → Applications → Your App
AUTH0_ISSUER_BASE_URL='https://your-tenant.auth0.com'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'

# Optional - for API access
AUTH0_AUDIENCE='your-api-identifier'
AUTH0_SCOPE='openid profile email'
```

## 🧪 Testing the Setup

### Test Registration Flow:
1. Click "Admin" in your navigation
2. Click "Register here" on the sign-in screen
3. Should redirect to Auth0 signup page (not 404!)
4. Create account with your email
5. Sign in after registration

### Test Admin Access:
1. Go to Auth0 Dashboard → Users → Your user
2. Verify admin role is assigned
3. Sign out and sign back in to your app
4. Should see "Admin" badge in navigation
5. Should have access to dashboard

## 🔍 Troubleshooting

### If you don't see admin role in your app:

1. **Check Custom Claims**: Make sure the Action is deployed and active
2. **Check Token**: In browser dev tools, check the JWT token for custom claims
3. **Check Role Assignment**: Verify in Auth0 dashboard that user has admin role
4. **Clear Cookies**: Sign out completely and sign back in

### If registration still shows 404:

1. **Restart your Next.js server**: `npm run dev`
2. **Check environment variables**: Make sure Auth0 config is correct
3. **Check API route**: Verify the file is at `src/pages/api/auth/[...auth0].ts`

## 🎯 Quick Setup Summary

1. ✅ **Fixed registration error** - API route now handles signup
2. 🔧 **Create "admin" role** in Auth0 dashboard
3. 👤 **Assign admin role** to your user account
4. ⚙️ **Add custom claims Action** to include roles in tokens
5. 🧪 **Test the flow** - register, assign role, sign in

No hardcoding needed - everything is managed through Auth0 dashboard! 🚀

## 🚀 Next Steps

Once this is set up:
- Your app will automatically detect admin users
- Role-based permissions will work correctly
- You can manage admin access through Auth0 dashboard
- New admins can be added without code changes