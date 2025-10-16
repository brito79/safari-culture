'use client'

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface LogoutButtonProps {
  showIcon?: boolean
  children?: React.ReactNode
  className?: string
}

export default function LogoutButton({ 
  showIcon = true, 
  className = "", 
  children, 
  ...props 
}: LogoutButtonProps) {
  // Handle logout using v4 route (no /api prefix)
  const handleLogout = () => {
    window.location.href = '/auth/logout?returnTo=/'
  }

  return (
    <Button
      onClick={handleLogout}
      className={className}
      {...props}
    >
      {showIcon && <LogOut className="h-4 w-4 mr-2" />}
      {children || "Sign Out"}
    </Button>
  )
}