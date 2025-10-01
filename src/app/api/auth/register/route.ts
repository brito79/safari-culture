// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    // Since we're using Auth0, we don't actually create users here
    // Instead, we redirect to Auth0 sign-up or return an informational message
    return NextResponse.json(
      { 
        message: 'For this demo, please use the Auth0 sign-up flow',
        redirectTo: '/api/auth/signin/auth0',
        success: false
      },
      { status: 400 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}