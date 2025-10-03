// src/app/api/auth/debug/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const envCheck = {
      NODE_ENV: process.env.NODE_ENV,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      hasNEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
      hasAUTH0_CLIENT_ID: !!process.env.AUTH0_CLIENT_ID,
      hasAUTH0_CLIENT_SECRET: !!process.env.AUTH0_CLIENT_SECRET,
      hasAUTH0_ISSUER: !!process.env.AUTH0_ISSUER,
      timestamp: new Date().toISOString(),
    }

    console.log('Auth Debug Check:', envCheck)

    return NextResponse.json({
      success: true,
      environment: envCheck,
      message: 'Environment variables checked successfully'
    })
  } catch (error) {
    console.error('Debug endpoint error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to check environment',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}