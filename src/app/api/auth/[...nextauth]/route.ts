// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth/config"

let handler
let GET
let POST

try {
  // @ts-expect-error - NextAuth v4 typing issue
  handler = NextAuth(authOptions)
  
  GET = handler
  POST = handler
  
  console.log('NextAuth handler initialized successfully')
} catch (error) {
  console.error('NextAuth initialization error:', error)
  
  // Fallback error handler
  const errorHandler = () => {
    return new Response(
      JSON.stringify({ 
        error: 'Authentication service unavailable',
        message: 'Please check server configuration',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
  
  GET = errorHandler
  POST = errorHandler
}

export { GET, POST }