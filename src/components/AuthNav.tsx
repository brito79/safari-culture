

import { auth0 } from "@/lib/auth0";


export default async function AuthNav() {
    const user = await auth0.getSession();


    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <a href="" className="text-xl font-bold text-gray-900">
                            Safari Culture
                        </a>

                        <div className="flex space-x-6">
                            <a 
                                href="/protected-client" 
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                Protected Client Routes
                            </a>

                            <a
                                href="/protected-server"    
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                Protected Server Routes
                            </a>

                            <a
                                href="/middleware"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                Middleware Routes
                            </a>

                            <a
                                href=""
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                Home
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-700">
                                    Welcome,Me
                                </span>
                                <a
                                    href="/auth/logout"
                                    className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                    Logout
                                </a>
                            </div>
                        ) : (
                            <a
                                href="/api/auth/login"
                                className="text-sm text-gray-700 hover:text-gray-900"
                            >
                                Login
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}