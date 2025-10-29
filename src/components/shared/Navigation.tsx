"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0";


interface NavigationProps {
  className?: string;
}





export default function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user, isLoading, error } = useUser();

  const handleAdminClick = () => {
    if (!user) {
      // Redirect to login with returnTo dashboard
      window.location.href = "/auth/login";
    } else {
      // User is logged in, go to dashboard
      window.location.href = "/dashboard";
    }
  };


  const navigationItems = [
    { href: "/camps", label: "Camps" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" }
  ];

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme cycling function
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  // Theme icon component
  const getThemeIcon = () => {
    if (theme === 'light') {
      return <Sun className="h-4 w-4" />;
    } else if (theme === 'dark') {
      return <Moon className="h-4 w-4" />;
    } else {
      return (
        <div className="h-4 w-4 relative">
          <Sun className="h-3 w-3 absolute top-0 left-0" />
          <Moon className="h-2 w-2 absolute bottom-0 right-0" />
        </div>
      );
    }
  };

  return (
    <nav className={`sticky top-0 z-50 bg-stone-100 dark:bg-stone-800 backdrop-blur-md border-b-2 border-stone-200 dark:border-stone-700 shadow-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105">
            <h1 className="safari-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 dark:text-white font-bold tracking-tight group-hover:text-sunset-600 dark:group-hover:text-sunset-400 transition-colors duration-200">
              Namibian Wilderness
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Navigation */}
            <nav className="flex space-x-2 lg:space-x-4">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className="safari-body text-stone-700 dark:text-stone-200 text-base lg:text-lg font-medium hover:text-stone-900 dark:hover:text-stone-900 hover:bg-sunset-600 dark:hover:bg-sunset-600 hover:scale-110 hover:shadow-lg transition-all duration-300 px-4 py-2 rounded-lg"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
            
            {/* Admin Link - Show for authenticated users */}
            {user && (
              <div className="border-l-2 border-stone-300 dark:border-stone-600 pl-4 lg:pl-6">
                <Button
                  variant="ghost"
                  onClick={handleAdminClick}
                  disabled={isLoading}
                  className="safari-body text-sunset-600 dark:text-sunset-400 text-base lg:text-lg font-bold hover:text-stone-900 dark:hover:text-stone-900 hover:bg-sunset-600 dark:hover:bg-sunset-600 hover:scale-110 hover:shadow-xl transition-all duration-300 px-4 py-2 rounded-lg"
                >
                  Dashboard
                </Button>
              </div>
            )}
            
            {/* Login Button - Show for unauthenticated users */}
            {!user && !isLoading && (
              <div className="border-l-2 border-stone-300 dark:border-stone-600 pl-4 lg:pl-6">
                <Button
                  variant="ghost"
                  asChild
                  className="safari-body text-sunset-600 dark:text-sunset-400 text-base lg:text-lg font-bold hover:text-stone-900 dark:hover:text-stone-900 hover:bg-gradient-to-r hover:from-sunset-600 hover:to-sunset-700 hover:scale-110 hover:shadow-xl transition-all duration-300 px-5 py-2 rounded-lg"
                >
                  <Link href="/auth/login?returnTo=/dashboard">Login</Link>
                </Button>
              </div>
            )}

            {/* Theme Toggle */}
            {mounted ? (
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="border-2 border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 hover:scale-110 hover:shadow-lg transition-all duration-300 min-w-[100px] font-medium"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
              >
                {getThemeIcon()}
                <span className="ml-2 text-xs font-semibold capitalize">{theme || 'system'}</span>
              </Button>
            ) : (
              <div className="w-[100px] h-8 bg-gray-200 animate-pulse rounded"></div>
            )}
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Button */}
            {mounted ? (
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="border-2 border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
              >
                {getThemeIcon()}
              </Button>
            ) : (
              <div className="w-8 h-8 bg-gray-200 animate-pulse rounded"></div>
            )}
            
            {/* Mobile Menu Button */}
            <button
              className="p-2 text-stone-700 dark:text-stone-200 hover:text-sunset-600 dark:hover:text-sunset-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg hover:scale-110 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-neutral-800 shadow-inner">
            <div className="px-4 py-4 space-y-2">
              {/* Main Navigation */}
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block safari-body text-stone-800 dark:text-stone-100 font-medium hover:text-stone-900 dark:hover:text-stone-900 hover:bg-sunset-600 dark:hover:bg-sunset-600 hover:pl-4 hover:scale-105 hover:shadow-md transition-all duration-300 py-3 px-3 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Admin Link - Show for authenticated users */}
              {user && (
                <div className="border-t-2 border-stone-300 dark:border-stone-600 pt-3 mt-2">
                  <button
                    onClick={() => {
                      handleAdminClick();
                      setIsMobileMenuOpen(false);
                    }}
                    disabled={isLoading}
                    className="block w-full text-left safari-body text-sunset-600 dark:text-sunset-400 font-bold hover:text-stone-900 dark:hover:text-stone-900 hover:bg-sunset-600 dark:hover:bg-sunset-600 hover:pl-4 hover:scale-105 hover:shadow-md transition-all duration-300 py-3 px-3 rounded-lg"
                  >
                    Dashboard
                  </button>
                </div>
              )}
              
              {/* Login Button - Show for unauthenticated users */}
              {!user && !isLoading && (
                <div className="border-t-2 border-stone-300 dark:border-stone-600 pt-3 mt-2">
                  <Link
                    href="/auth/login?returnTo=/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block safari-body text-sunset-600 dark:text-sunset-400 font-bold hover:text-stone-900 dark:hover:text-stone-900 hover:bg-gradient-to-r hover:from-sunset-600 hover:to-sunset-700 hover:pl-4 hover:scale-105 hover:shadow-md transition-all duration-300 py-3 px-3 rounded-lg"
                  >
                    Login
                  </Link>
                </div>
              )}

              {/* Mobile Theme Options */}
              <div className="pt-3 mt-2 border-t-2 border-stone-300 dark:border-stone-600">
                <p className="text-sm font-bold text-stone-700 dark:text-stone-300 mb-3">Theme</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setTheme('light');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium flex-1 hover:scale-105 hover:shadow-md transition-all duration-300 ${
                      theme === 'light' ? 'bg-sunset-600 hover:bg-sunset-700' : 'hover:bg-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    <Sun className="h-4 w-4 mr-1" />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setTheme('dark');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium flex-1 hover:scale-105 hover:shadow-md transition-all duration-300 ${
                      theme === 'dark' ? 'bg-sunset-600 hover:bg-sunset-700' : 'hover:bg-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    <Moon className="h-4 w-4 mr-1" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setTheme('system');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium flex-1 hover:scale-105 hover:shadow-md transition-all duration-300 ${
                      theme === 'system' ? 'bg-sunset-600 hover:bg-sunset-700' : 'hover:bg-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    System
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}