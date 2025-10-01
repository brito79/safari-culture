'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

// Validation schemas
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type LoginState = {
  error?: string
  success?: boolean
}

export type RegisterState = {
  error?: string
  success?: boolean
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  try {
    const validatedFields = loginSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (!validatedFields.success) {
      return {
        error: 'Invalid form data. Please check your inputs.',
      }
    }

    const { email, password } = validatedFields.data

    // For server actions, we need to handle authentication server-side
    // This would typically involve your authentication logic
    // For now, we'll create a simple mock that you can replace with your actual auth logic
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      return {
        error: 'Invalid email or password',
      }
    }

    // On success, redirect will be handled by the component
    return { success: true }
  } catch (error) {
    console.error('Login error:', error)
    return {
      error: 'An error occurred during login. Please try again.',
    }
  }
}

export async function registerAction(
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  try {
    const validatedFields = registerSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    })

    if (!validatedFields.success) {
      return {
        error: 'Invalid form data. Please check your inputs.',
      }
    }

    const { name, email, password } = validatedFields.data

    // Create user registration
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        error: errorData.message || 'Registration failed. Please try again.',
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Registration error:', error)
    return {
      error: 'Registration failed. Please try again.',
    }
  }
}

export async function auth0LoginAction(redirectTo: string = '/dashboard') {
  // For Auth0, we'll still need to redirect to the auth endpoint
  redirect(`/api/auth/signin/auth0?callbackUrl=${encodeURIComponent(redirectTo)}`)
}