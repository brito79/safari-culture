
'use client'

import AdminDashboard from '@/components/admin/AdminDashboard'
import AccessDenied from '@/components/auth/AccessDenied'
import LogoutButton from '@/components/auth/logout-button'
import { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { isAdmin } from '@/app/actions/isAdmin'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { user, isLoading, error } = useUser()
  const router = useRouter()
  const [checkingPermissions, setCheckingPermissions] = useState(true)
  const [hasAdminAccess, setHasAdminAccess] = useState(false)

  useEffect(() => {
    async function checkPermission() {
      if (!user && !isLoading) {
        // Not authenticated, redirect to login
        router.push('/auth/login?returnTo=/dashboard')
        return
      }

      if (user) {
        try {
          const adminStatus = await isAdmin()
          setHasAdminAccess(adminStatus)
        } catch (error) {
          console.error('Error checking admin status:', error)
          setHasAdminAccess(false)
        } finally {
          setCheckingPermissions(false)
        }
      }
    }

    checkPermission()
  }, [user, isLoading, router])
  
  // Show loading while Auth0 is loading OR while checking server permissions
  if (isLoading || checkingPermissions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>{isLoading ? 'Loading user...' : 'Checking permissions...'}</p>
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

  // Handle unauthenticated state
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

  // Show access denied if authenticated but not admin
  if (user && !hasAdminAccess && !checkingPermissions) {
    return (
      <AccessDenied
        title="Admin Access Required"
        message="You need admin permissions to access this dashboard. Please log in with an admin account or contact your administrator for access."
        showLogout={true}
        showHomeLink={true}
        onClose={() => router.push('/')}
      />
    )
  }

  return (
    <div> 
      <AdminDashboard isAdmin={hasAdminAccess} />
    </div>
  )
}
