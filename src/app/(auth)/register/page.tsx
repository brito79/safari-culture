'use client'

import { useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function RegisterPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()

  // If user is already authenticated, redirect to dashboard
  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard')
    }
  }, [user, isLoading, router])

  // Handle signup with Auth0 using screen_hint parameter
  const handleSignup = () => {
    window.location.href = '/auth/login?screen_hint=signup&returnTo=/dashboard'
  }

  // Handle login redirect
  const handleLogin = () => {
    window.location.href = '/auth/login?returnTo=/dashboard'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-700">Redirecting to dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_8.jpg")`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 dark:from-black/50 dark:via-black/60 dark:to-black/70" />
      
      {/* Signup card */}
      <div className="w-full max-w-md z-50 relative">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/40 shadow-2xl p-8">
          <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-white mb-2">
            Join Wilderness Namibia
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-200 font-medium mb-8">
            Create your admin account
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={handleSignup}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 text-lg"
            >
              Create Account
            </Button>
            
            <div className="text-center">
              <span className="text-gray-500 dark:text-gray-400">Already have an account? </span>
              <button 
                onClick={handleLogin}
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Sign in
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
            Secure authentication powered by Auth0
          </p>
        </div>
      </div>
    </div>
  )
}