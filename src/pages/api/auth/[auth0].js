// src/pages/api/auth/[auth0].js
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  login: handleLogin({
    returnTo: '/admin'
  })
});