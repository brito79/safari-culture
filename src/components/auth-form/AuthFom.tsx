'use client'

import { useState, useActionState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Loader2, Eye, EyeOff } from 'lucide-react'
import { registerAction, type RegisterState } from '@/lib/actions/auth'
import { toast } from 'sonner'

interface AuthFormProps {
    defaultTab?: 'login' | 'register'
    onSuccess?: () => void
    redirectTo?: string
}

export function AuthForm({ 
    defaultTab = 'login', 
    onSuccess,
    redirectTo = '/dashboard' 
}: AuthFormProps) {
    const [activeTab, setActiveTab] = useState(defaultTab)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isAuth0Loading, setIsAuth0Loading] = useState(false)
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const router = useRouter()

    // Use useActionState for register (server action)
    const [registerState, registerFormAction, isRegisterPending] = useActionState<RegisterState, FormData>(
        registerAction,
        { error: undefined, success: undefined }
    )

    // Handle successful register
    useEffect(() => {
        if (registerState.success) {
            toast.success('Account created successfully!')
            onSuccess?.()
            router.push(redirectTo)
        } else if (registerState.error) {
            toast.error(registerState.error)
        }
    }, [registerState.success, registerState.error, onSuccess, router, redirectTo])

    // Handle login with NextAuth
    const handleLogin = async (formData: FormData) => {
        setIsLoginLoading(true)
        try {
            const email = formData.get('email') as string
            const password = formData.get('password') as string

            if (!email || !password) {
                toast.error('Please enter both email and password')
                return
            }

            // Debug environment information
            console.log('Environment check:', {
                nodeEnv: process.env.NODE_ENV,
                nextauthUrl: process.env.NEXTAUTH_URL,
                currentUrl: typeof window !== 'undefined' ? window.location.href : 'server',
                hasAuth0ClientId: !!process.env.AUTH0_CLIENT_ID
            })

            console.log('Attempting login with:', email)

            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            console.log('SignIn result:', result)

            if (result?.error) {
                console.error('Login error:', result.error)
                toast.error('Invalid email or password')
            } else if (result?.ok) {
                toast.success('Signed in successfully!')
                onSuccess?.()
                router.push(redirectTo)
            } else {
                console.error('Unexpected login result:', result)
                toast.error('Login failed. Please try again.')
            }
        } catch (error) {
            console.error('Login error:', error)
            toast.error('An error occurred during sign in')
        } finally {
            setIsLoginLoading(false)
        }
    }

    const handleAuth0Login = async () => {
        setIsAuth0Loading(true)
        try {
            toast.loading('Redirecting to Auth0...')
            await signIn('auth0', { callbackUrl: redirectTo })
        } catch (error) {
            console.error('Auth0 login error:', error)
            toast.error('Authentication failed')
        } finally {
            setIsAuth0Loading(false)
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 shadow-2xl border-2 border-gray-300 dark:border-gray-600 relative z-10">
            <CardHeader className="space-y-1 bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 rounded-t-lg">
                <CardTitle className="text-2xl text-center font-bold text-gray-800 dark:text-white">
                    Welcome to Wilderness Namibia
                </CardTitle>
                <CardDescription className="text-center text-gray-600 dark:text-gray-200 font-medium">
                    Access your admin dashboard
                </CardDescription>
            </CardHeader>
            <CardContent className="bg-white dark:bg-gray-800 p-6 relative z-10">
                <Tabs value={activeTab} onValueChange={(value: string) => setActiveTab(value as 'login' | 'register')}>
                    <TabsList className="grid w-full grid-cols-2 bg-amber-50 dark:bg-gray-700 p-1 rounded-lg">
                        <TabsTrigger 
                            value="login" 
                            className="text-gray-600 dark:text-gray-200 data-[state=active]:bg-white data-[state=active]:text-amber-800 dark:data-[state=active]:bg-gray-600 dark:data-[state=active]:text-white font-medium"
                        >
                            Login
                        </TabsTrigger>
                        <TabsTrigger 
                            value="register"
                            className="text-gray-600 dark:text-gray-200 data-[state=active]:bg-white data-[state=active]:text-amber-800 dark:data-[state=active]:bg-gray-600 dark:data-[state=active]:text-white font-medium"
                        >
                            Register
                        </TabsTrigger>
                    </TabsList>

                    {/* Display errors */}
                    {registerState.error && (
                        <div className="mt-4 p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md font-medium">
                            {registerState.error}
                        </div>
                    )}

                    <TabsContent value="login" className="space-y-4">
                        <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-700 p-3 text-sm">
                            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-200">
                                <div className="rounded-full bg-blue-200 dark:bg-blue-700 p-1">
                                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-bold">Test Credentials</span>
                            </div>
                            <p className="mt-1 text-blue-700 dark:text-blue-200 font-medium">
                                Email: admin@wilderness-namibia.com<br />
                                Password: password123
                            </p>
                        </div>
                        
                        <form action={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="login-email" className="text-gray-700 dark:text-gray-200 font-semibold text-sm">
                                    Email
                                </label>
                                <Input
                                    id="login-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="login-password" className="text-gray-700 dark:text-gray-200 font-semibold text-sm">
                                    Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="login-password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        required
                                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-300 pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-300"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5" 
                                disabled={isLoginLoading}
                            >
                                {isLoginLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Sign In
                            </Button>
                        </form>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4">
                        <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-900/30 dark:border-amber-700 p-4 text-sm">
                            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-200">
                                <div className="rounded-full bg-amber-200 dark:bg-amber-700 p-1">
                                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-bold">Quick Registration</span>
                            </div>
                            <p className="mt-2 text-amber-700 dark:text-amber-200 font-medium">
                                Create your Wilderness Namibia admin account. You can register here or use Auth0 for enhanced security.
                            </p>
                        </div>
                        
                        <form action={registerFormAction} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="register-name" className="text-gray-700 dark:text-gray-200 font-semibold text-sm">
                                    Full Name
                                </label>
                                <Input
                                    id="register-name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="register-email" className="text-gray-700 dark:text-gray-200 font-semibold text-sm">
                                    Email
                                </label>
                                <Input
                                    id="register-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="register-password" className="text-gray-700 dark:text-gray-200 font-semibold text-sm">
                                    Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="register-password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Create a password"
                                        required
                                        minLength={8}
                                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-300 pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-300"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="register-confirm-password" className="text-gray-700 dark:text-gray-200 font-semibold text-sm">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="register-confirm-password"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Confirm your password"
                                        required
                                        minLength={8}
                                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-300 pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-300"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5" 
                                disabled={isRegisterPending}
                            >
                                {isRegisterPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Create Account
                            </Button>
                        </form>
                    </TabsContent>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-200 dark:border-gray-500" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-300 font-medium">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            type="button"
                            className="w-full mt-4 bg-amber-50 dark:bg-gray-700 border-amber-200 dark:border-gray-500 text-amber-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-gray-600 font-semibold py-2.5"
                            onClick={handleAuth0Login}
                            disabled={isAuth0Loading}
                        >
                            {isAuth0Loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Auth0
                        </Button>
                    </div>
                </Tabs>
            </CardContent>
        </Card>
    )
}