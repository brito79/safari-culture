// src/app/dashboard/page.tsx
'use client'

import { useAuth } from '@/hooks/useAuth'
import { Shield } from 'lucide-react'
import AdminDashboard from '@/components/admin/AdminDashboard'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading, hasRole } = useAuth()
  const router = useRouter()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
      return
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  // If not authenticated, the useEffect will redirect to login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Redirecting to login...</p>
        </div>
      </div>
    )
  }

  // Check if user has admin role
  const isAdmin = hasRole('admin')
  
  // For now, allow any authenticated user to access dashboard (for testing)
  // In production, you may want to restrict this to admin only
  if (!isAdmin) {
    // Show a warning but still allow access for testing
    return (
      <div>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Shield className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm">
                Note: You are accessing the dashboard without admin privileges. 
                In production, admin role would be required.
              </p>
              <p className="text-xs mt-1">
                Signed in as: {user?.email}
              </p>
            </div>
          </div>
        </div>
        <AdminDashboard />
      </div>
    )
  }

  // User is authenticated and has admin role - show the AdminDashboard
  return <AdminDashboard />
}
