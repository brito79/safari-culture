// src/lib/auth.ts
import Auth0Provider from "next-auth/providers/auth0"

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
  ],
  
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, account, profile }: any) {
      // Persist the OAuth access_token and user info to the token
      if (account && profile) {
        // Extract roles from Auth0 custom claims
        const profileData = profile as Record<string, unknown>
        const customClaims = profileData['https://safari-culture.com/roles'] as string[] || []
        const appMetadata = (profileData.app_metadata as Record<string, unknown>)?.roles as string[] || []
        const userMetadata = (profileData.user_metadata as Record<string, unknown>)?.roles as string[] || []
        
        const roles = customClaims.length > 0 ? customClaims : 
                     appMetadata.length > 0 ? appMetadata : 
                     userMetadata
        
        token.accessToken = account.access_token
        token.roles = Array.isArray(roles) ? roles : []
        token.userId = profile.sub
      }
      return token
    },
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      // Send properties to the client
      if (token && session.user) {
        session.accessToken = token.accessToken as string
        session.user.id = token.userId as string
        session.user.roles = token.roles as string[]
      }
      return session
    },
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async redirect({ url, baseUrl }: any) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return `${baseUrl}/admin`
    },
  },
  
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  
  // Enable debug in development
  debug: process.env.NODE_ENV === "development",
}