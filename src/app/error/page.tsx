// src/app/error/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

const errorMessages = {
  OAuthSignin: 'There was an error signing in with the OAuth provider.',
  OAuthCallback: 'There was an error in the OAuth callback.',
  OAuthCreateAccount: 'Could not create OAuth account.',
  EmailCreateAccount: 'Could not create email account.',
  Callback: 'There was an error in the callback.',
  OAuthAccountNotLinked: 'The OAuth account is not linked to any existing account.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin: 'Sign in failed. Check your credentials.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'An authentication error occurred.'
}

function AuthErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error') as keyof typeof errorMessages
  
  const errorMessage = errorMessages[error] || errorMessages.default

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-red-600">
            <AlertCircle className="w-6 h-6" />
            Authentication Error
          </CardTitle>
          <CardDescription>
            {errorMessage}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>Error code: <code className="bg-muted px-2 py-1 rounded">{error || 'Unknown'}</code></p>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/login">
              <Button className="w-full">
                Try Again
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <AuthErrorContent />
    </Suspense>
  )
}