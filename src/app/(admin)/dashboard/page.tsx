// src/app/dashboard/page.tsx
'use client'

import { Shield } from 'lucide-react'
import AdminDashboard from '@/components/admin/AdminDashboard'
import LogoutButton from '@/components/auth/logout-button'
import { useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

export default function DashboardPage() {
  const { user, isLoading, error } = useUser()

  // Redirect to login if not authenticated (using v4 route)
  useEffect(() => {
    if (!isLoading && !user) {
      window.location.href = '/auth/login?returnTo=/dashboard'
    }
  }, [user, isLoading])

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

  // If there's an error, show it
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Authentication Error: {error.message}
          </div>
          <LogoutButton className="bg-amber-600 hover:bg-amber-700">Try Again</LogoutButton>
        </div>
      </div>
    )
  }

  // If not authenticated, redirecting...
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Redirecting to login...</p>
        </div>
      </div>
    )
  }

  // Check if user has admin role (from Auth0 custom claims)
  const userRoles = user['https://safari-culture.com/roles'] as string[] || []
  const isAdmin = userRoles.includes('admin')
  
  // For now, allow any authenticated user to access dashboard (for testing)
  return (
    <div>
      {!isAdmin && (
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
                Signed in as: {user.email}
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Welcome bar with logout */}
      <div className="bg-white shadow-sm border-b p-4 mb-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name || user.email}</p>
          </div>
          <LogoutButton variant="outline" />
        </div>
      </div>
      
      <AdminDashboard />
    </div>
  )
}
