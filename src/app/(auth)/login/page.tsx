// src/app/(auth)/login/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function LoginPage() {
  const { user, isLoading, error } = useUser()
  const router = useRouter()

  // If user is already authenticated, redirect to dashboard
  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard')
    }
  }, [user, isLoading, router])

  // Handle login with Auth0 using v4 route
  const handleLogin = () => {
    window.location.href = '/auth/login?returnTo=/dashboard'
  }

  // Show loading while checking auth status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
        {/* Damaraland camp background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg")`
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        <div className="text-center z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-white font-medium bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">Loading...</p>
        </div>
      </div>
    )
  }

  // If already authenticated, show redirecting message
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
        {/* Damaraland camp background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg")`
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        <div className="text-center z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-white font-medium bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">Redirecting to dashboard...</p>
        </div>
      </div>
    )
  }

  // If there's an error, display it
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url("${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg")`
        }}></div>
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        <div className="text-center z-10 bg-white/90 dark:bg-gray-900/90 p-8 rounded-xl shadow-lg max-w-md">
          <div className="text-red-600 text-xl font-bold mb-4">Authentication Error</div>
          <div className="text-gray-700 dark:text-gray-200 mb-6">{error.message}</div>
          <Button onClick={handleLogin} className="bg-amber-600 hover:bg-amber-700">Try Again</Button>
        </div>
      </div>
    )
  }

  // Show login button that redirects to Auth0
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
      {/* Damaraland camp background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg")`
        }}
      ></div>
      
      {/* Gradient overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 dark:from-black/50 dark:via-black/60 dark:to-black/70"></div>
      
      {/* Login card with Auth0 button */}
      <div className="w-full max-w-md z-50 relative">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/40 shadow-2xl p-8">
          <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-white mb-2">
            Welcome to Wilderness Namibia
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-200 font-medium mb-8">
            Access your admin dashboard
          </p>
          
          <Button 
            onClick={handleLogin}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 text-lg"
          >
            Sign in with Auth0
          </Button>
          
          <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
            Secure authentication powered by Auth0
          </p>
        </div>
      </div>
    </div>
  )
}