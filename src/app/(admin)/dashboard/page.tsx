// src/app/(admin)/dashboard/page.tsx
'use client'

import { Shield } from 'lucide-react'
import AdminDashboard from '@/components/admin/AdminDashboard'
import LogoutButton from '@/components/auth/logout-button'
import { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { isUserAdmin } from '@/app/actions/isAdmin'

export default function DashboardPage() {
  const { user, isLoading, error } = useUser()
  const [isAdmin, setIsAdmin] = useState(false)
  const [checkingAdmin, setCheckingAdmin] = useState(true)
  
  // Check admin status
  useEffect(() => {
    async function checkAdminStatus() {
      if (user) {
        try {
          const adminStatus = await isUserAdmin()
          setIsAdmin(adminStatus)
        } catch (err) {
          console.error("Failed to check admin status:", err)
        } finally {
          setCheckingAdmin(false)
        }
      }
    }
    
    if (!isLoading && user) {
      checkAdminStatus()
    }
  }, [user, isLoading])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      window.location.href = '/auth/login'
    }
  }, [user, isLoading])

  if (isLoading || (user && checkingAdmin)) {
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

  return (
    <div> 
      {/* Welcome bar with logout */}
      {/* <div className="bg-white shadow-sm border-b p-4 mb-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name || user.email}</p>
          </div>
          <LogoutButton className="border border-gray-300" />
        </div>
      </div> */}
      
      <AdminDashboard />
    </div>
  )
}
