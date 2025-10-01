// src/app/(auth)/register/page.tsx
import { AuthForm } from '@/components/auth-form/AuthFom'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="w-full max-w-md">
        <AuthForm 
          defaultTab="register" 
          redirectTo="/admin"
        />
      </div>
    </div>
  )
}