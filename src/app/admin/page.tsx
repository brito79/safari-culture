// src/app/admin/page.tsx
'use client'

import { useAuth } from '@/hooks/useAuth'
import { LoginButton } from '@/components/auth/LoginButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, User, Settings, LogOut } from 'lucide-react'

export default function AdminPage() {
  const { user, isAuthenticated, isLoading, hasRole, logout } = useAuth()

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Shield className="w-6 h-6" />
              Admin Access Required
            </CardTitle>
            <CardDescription>
              Please sign in to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <LoginButton size="lg" />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="flex justify-between items-center mb-8 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Safari Culture Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">{user?.name || user?.email}</p>
              <p className="text-sm text-muted-foreground capitalize">
                {user?.roles?.[0] || 'user'}
              </p>
            </div>
            <Button variant="outline" onClick={() => logout()}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                User Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Name:</strong> {user?.name || 'Not provided'}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>ID:</strong> {user?.id}</p>
                <p><strong>Roles:</strong> {user?.roles?.join(', ') || 'None'}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Permissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Admin Access</span>
                  <span className={hasRole('admin') ? 'text-green-600' : 'text-red-600'}>
                    {hasRole('admin') ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>User Access</span>
                  <span className={hasRole('user') ? 'text-green-600' : 'text-red-600'}>
                    {hasRole('user') ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Visitor Access</span>
                  <span className="text-green-600">✓</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="outline" disabled={!hasRole('admin')}>
                Manage Users
              </Button>
              <Button className="w-full" variant="outline" disabled={!hasRole('admin')}>
                View Reports
              </Button>
              <Button className="w-full" variant="outline">
                Update Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Authentication Status</CardTitle>
            <CardDescription>Current session information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
                <p><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p><strong>User Object:</strong> {user ? 'Present' : 'Missing'}</p>
                <p><strong>Session Active:</strong> {user ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}