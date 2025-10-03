// src/lib/auth/config.ts
import Auth0Provider from "next-auth/providers/auth0"
import CredentialsProvider from "next-auth/providers/credentials"

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
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log("Missing credentials")
            return null
          }

          console.log("Attempting to authenticate:", credentials.email)

          // For demo purposes, we'll allow a test user
          // In production, you'd validate against your database
          if (credentials.email === "admin@wilderness-namibia.com" && credentials.password === "password123") {
            console.log("Authentication successful for admin user")
            return {
              id: "1",
              email: "admin@wilderness-namibia.com",
              name: "Admin User",
              roles: ["admin"]
            }
          }

          // You can also check against a database here
          // const user = await validateUser(credentials.email, credentials.password)
          // if (user) return user

          console.log("Authentication failed: Invalid credentials")
          return null
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      }
    }),
  ],
  
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Handle production vs development URLs
      const isProduction = process.env.NODE_ENV === 'production'
      const productionUrl = 'https://dev.d30fngzgv4r9dp.amplifyapp.com'
      const currentBaseUrl = isProduction ? productionUrl : baseUrl
      
      console.log('Redirect callback:', { url, baseUrl, currentBaseUrl, isProduction })
      
      // If url is relative, make it absolute
      if (url.startsWith('/')) {
        return `${currentBaseUrl}${url}`
      }
      
      // If url is absolute and matches our domain
      try {
        const urlObj = new URL(url)
        const baseUrlObj = new URL(currentBaseUrl)
        if (urlObj.origin === baseUrlObj.origin) {
          return url
        }
      } catch (error) {
        console.error('URL parsing error:', error)
      }
      
      // Default redirect to dashboard
      return `${currentBaseUrl}/dashboard`
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, account, profile, user }: { token: any; account: any; profile: any; user?: any }) {
      // Persist the OAuth access_token and user info to the token
      if (account && profile) {
        // Handle Auth0 users
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
      } else if (user && account?.provider === 'credentials') {
        // Handle credentials users
        token.userId = user.id
        token.roles = user.roles || []
      }
      return token
    },
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: any; token: any }) {
      // Send properties to the client
      if (token && session.user) {
        session.accessToken = token.accessToken as string
        session.user.id = token.userId as string
        session.user.roles = token.roles as string[]
      }
      return session
    },
  },
  
  pages: {
    signIn: "/login",
    error: "/login",
  },
  
  // Enable debug in development
  debug: process.env.NODE_ENV === "development",
}