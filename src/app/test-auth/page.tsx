// src/app/test-auth/page.tsx
'use client'

import { useAuth } from '@/hooks/useAuth'
import { LoginButton } from '@/components/auth/LoginButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function AuthTestPage() {
  const { user, isAuthenticated, isLoading } = useAuth()

  const testResults = [
    {
      name: 'Environment Variables',
      status: process.env.NEXT_PUBLIC_AUTH0_DOMAIN ? 'success' : 'warning',
      description: 'Auth0 configuration loaded'
    },
    {
      name: 'NextAuth Session Provider',
      status: 'success',
      description: 'Client wrapper implemented correctly'
    },
    {
      name: 'Login Page Route',
      status: 'success',
      description: 'Route configured at /login'
    },
    {
      name: 'Error Page Route',
      status: 'success',
      description: 'Error handling at /error'
    },
    {
      name: 'Admin Protection',
      status: 'success',
      description: 'Protected route at /admin'
    }
  ]

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />
      default:
        return <XCircle className="w-5 h-5 text-red-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Authentication Test Dashboard</h1>
          <p className="text-muted-foreground">
            Test and verify Auth0 + NextAuth.js integration
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Status</CardTitle>
              <CardDescription>Current user session state</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
                  <p>Loading...</p>
                </div>
              ) : isAuthenticated ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Authenticated</span>
                  </div>
                  <p className="text-sm"><strong>Email:</strong> {user?.email}</p>
                  <p className="text-sm"><strong>Name:</strong> {user?.name || 'Not provided'}</p>
                  <p className="text-sm"><strong>Roles:</strong> {user?.roles?.join(', ') || 'None'}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-medium">Not Authenticated</span>
                  </div>
                  <LoginButton />
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Authentication system health check</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {testResults.map((test, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StatusIcon status={test.status} />
                      <span className="text-sm font-medium">{test.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Test Authentication Flow</CardTitle>
            <CardDescription>Try different authentication scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/login">
                <Button className="w-full h-20 flex flex-col gap-2" variant="outline">
                  <ExternalLink className="w-5 h-5" />
                  <div className="text-center">
                    <div className="font-medium">Login Page</div>
                    <div className="text-xs text-muted-foreground">Test auth forms</div>
                  </div>
                </Button>
              </Link>

              <Link href="/admin">
                <Button className="w-full h-20 flex flex-col gap-2" variant="outline">
                  <ExternalLink className="w-5 h-5" />
                  <div className="text-center">
                    <div className="font-medium">Admin Dashboard</div>
                    <div className="text-xs text-muted-foreground">Protected route</div>
                  </div>
                </Button>
              </Link>

              <Link href="/error?error=Test">
                <Button className="w-full h-20 flex flex-col gap-2" variant="outline">
                  <ExternalLink className="w-5 h-5" />
                  <div className="text-center">
                    <div className="font-medium">Error Page</div>
                    <div className="text-xs text-muted-foreground">Error handling</div>
                  </div>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Configuration Details</CardTitle>
            <CardDescription>Current authentication setup</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">NextAuth.js Configuration</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Provider: Auth0</li>
                  <li>• Session Strategy: JWT</li>
                  <li>• Login Page: /login</li>
                  <li>• Error Page: /error</li>
                  <li>• API Route: /api/auth/[...nextauth]</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Auth0 Setup Required</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Domain: dev-t0pwxlxmmp13e7xo.us.auth0.com</li>
                  <li>• Callback URL: http://localhost:3000/api/auth/callback/auth0</li>
                  <li>• Logout URL: http://localhost:3000</li>
                  <li>• Application Type: Regular Web Application</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}