// src/app/(auth)/login/page.tsx
'use client'

import { AuthForm } from '@/components/auth-form/AuthFom'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  // If user is already authenticated, redirect to dashboard
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard')
      return
    }
  }, [isAuthenticated, isLoading, router])

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
  if (isAuthenticated) {
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

  // Show login form if not authenticated
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
      {/* Damaraland camp background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg")`
        }}
      ></div>
      
      {/* Gradient overlay for better form visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 dark:from-black/50 dark:via-black/60 dark:to-black/70"></div>
      
      {/* Mobile-optimized login form with enhanced backdrop */}
      <div className="w-full max-w-md z-50 relative">
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl -m-2 border border-white/40 shadow-2xl"></div>
        <div className="relative z-10">
          <AuthForm 
            defaultTab="login" 
            redirectTo="/dashboard"
          />
        </div>
      </div>
    </div>
  )
}