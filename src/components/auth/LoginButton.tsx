'use client'

import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { LogIn, LogOut, User, Shield } from 'lucide-react'

interface LoginButtonProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  showRole?: boolean
}

export function LoginButton({ variant = 'default', size = 'default', showRole = false }: LoginButtonProps) {
  const { user, isAuthenticated, isLoading, login, logout, hasRole } = useAuth()

  if (isLoading) {
    return (
      <Button variant={variant} size={size} disabled>
        <User className="w-4 h-4 mr-2" />
        Loading...
      </Button>
    )
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-2">
        {showRole && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            {hasRole('admin') && <Shield className="w-3 h-3" />}
            <span className="capitalize">
              {user.roles?.[0] || 'user'}
            </span>
          </div>
        )}
        <Button variant={variant} size={size} onClick={() => logout()}>
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Button variant={variant} size={size} onClick={() => login()}>
      <LogIn className="w-4 h-4 mr-2" />
      Sign In
    </Button>
  )
}