// Auth0 API route handler for authentication flows
// Since Auth0 SDK v4 uses middleware-based approach, we'll implement basic redirect routes

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { auth0: route } = req.query;
  
  try {
    if (!route || !Array.isArray(route)) {
      res.status(400).json({ error: 'Invalid route' });
      return;
    }

    const [action] = route;

    switch (action) {
      case 'login':
        // Redirect to Auth0 login
        const loginUrl = new URL(`${process.env.AUTH0_ISSUER_BASE_URL}/authorize`);
        loginUrl.searchParams.set('response_type', 'code');
        loginUrl.searchParams.set('client_id', process.env.AUTH0_CLIENT_ID || '');
        loginUrl.searchParams.set('redirect_uri', `${process.env.AUTH0_BASE_URL}/api/auth/callback`);
        loginUrl.searchParams.set('scope', 'openid profile email');
        if (process.env.AUTH0_AUDIENCE) {
          loginUrl.searchParams.set('audience', process.env.AUTH0_AUDIENCE);
        }
        res.redirect(loginUrl.toString());
        return;
        
      case 'signup':
        // Redirect to Auth0 signup
        const signupUrl = new URL(`${process.env.AUTH0_ISSUER_BASE_URL}/authorize`);
        signupUrl.searchParams.set('response_type', 'code');
        signupUrl.searchParams.set('client_id', process.env.AUTH0_CLIENT_ID || '');
        signupUrl.searchParams.set('redirect_uri', `${process.env.AUTH0_BASE_URL}/api/auth/callback`);
        signupUrl.searchParams.set('scope', 'openid profile email');
        signupUrl.searchParams.set('screen_hint', 'signup');
        if (process.env.AUTH0_AUDIENCE) {
          signupUrl.searchParams.set('audience', process.env.AUTH0_AUDIENCE);
        }
        res.redirect(signupUrl.toString());
        return;
        
      case 'logout':
        // Redirect to Auth0 logout
        const logoutUrl = new URL(`${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout`);
        logoutUrl.searchParams.set('returnTo', process.env.AUTH0_BASE_URL || 'http://localhost:3000');
        logoutUrl.searchParams.set('client_id', process.env.AUTH0_CLIENT_ID || '');
        res.redirect(logoutUrl.toString());
        return;
        
      case 'callback':
        // The callback should be handled by the Auth0 middleware
        // For this demo, just redirect to home
        res.redirect('/');
        return;
        
      default:
        res.status(404).json({ error: 'Route not found' });
        return;
    }
  } catch (error) {
    console.error('Auth0 API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
    return;
  }
}