# Authentication Testing Guide

Follow these steps to test the Auth0 authentication flow:

## 1. Start the development server

```bash
npm run dev
```

## 2. Test User Authentication Flow

1. Visit the homepage (http://localhost:3000)
2. Click on "Sign In" in the navigation
3. You should be redirected to the Auth0 login page
4. Log in with your credentials
5. You should be redirected back to the application and see your user info in the navigation

## 3. Test Admin Access

1. Once logged in, try to access the Admin page (http://localhost:3000/admin)
2. If your user has the 'admin' role (configured in Auth0), you should see the admin dashboard
3. If your user does not have the 'admin' role, you should be redirected to the access denied page

## 4. Test Logout

1. Click "Sign Out" in the navigation
2. You should be logged out and redirected to the homepage
3. Try accessing the admin page again - you should be prompted to log in

## 5. Auth0 Role Setup

To assign the admin role to a user:

1. Go to the Auth0 Dashboard
2. Navigate to User Management > Users
3. Select the user you want to make an admin
4. Go to the "Roles" tab
5. Assign the "admin" role
6. Alternatively, you can use Auth0 Actions to add a custom namespace with roles:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  const namespace = 'https://safari-culture.com';
  
  // Add roles to the ID token and access token
  if (event.authorization) {
    api.idToken.setCustomClaim(`${namespace}/roles`, event.authorization.roles);
    api.accessToken.setCustomClaim(`${namespace}/roles`, event.authorization.roles);
  }
};
```

## 6. Troubleshooting

- If you experience "invalid state" errors, clear your browser cookies and try again
- Check that all environment variables are correctly set up
- Verify the Auth0 application settings match your local configuration
- Check browser console for any errors