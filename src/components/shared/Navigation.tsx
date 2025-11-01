"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0";


interface NavigationProps {
  className?: string;
}





export default function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoading } = useUser();

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

  return (
    <nav className={`sticky top-0 z-50 bg-stone-100 backdrop-blur-md border-b-2 border-stone-200 shadow-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105">
            <h1 className="safari-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 font-bold tracking-tight group-hover:text-sunset-600 transition-colors duration-200">
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
                    className="safari-body text-stone-700 text-base lg:text-lg font-medium hover:text-stone-900 hover:bg-sunset-600 hover:scale-110 hover:shadow-lg transition-all duration-300 px-4 py-2 rounded-lg"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
            
            {/* Admin Link - Show for authenticated users */}
            {user && (
              <div className="border-l-2 border-stone-300 pl-4 lg:pl-6">
                <Button
                  variant="ghost"
                  onClick={handleAdminClick}
                  disabled={isLoading}
                  className="safari-body text-sunset-600 text-base lg:text-lg font-bold hover:text-stone-900 hover:bg-sunset-600 hover:scale-110 hover:shadow-xl transition-all duration-300 px-4 py-2 rounded-lg"
                >
                  Dashboard
                </Button>
              </div>
            )}
            
            {/* Login Button - Show for unauthenticated users */}
            {!user && !isLoading && (
              <div className="border-l-2 border-stone-300 pl-4 lg:pl-6">
                <Button
                  variant="ghost"
                  asChild
                  className="safari-body text-sunset-600 text-base lg:text-lg font-bold hover:text-stone-900 hover:bg-gradient-to-r hover:from-sunset-600 hover:to-sunset-700 hover:scale-110 hover:shadow-xl transition-all duration-300 px-5 py-2 rounded-lg"
                >
                  <Link href="/auth/login?returnTo=/dashboard">Login</Link>
                </Button>
              </div>
            )}

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-stone-700 hover:text-sunset-600 hover:bg-stone-100 rounded-lg hover:scale-110 transition-all duration-300"
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
          <div className="md:hidden border-t-2 border-stone-200 bg-stone-50 shadow-inner">
            <div className="px-4 py-4 space-y-2">
              {/* Main Navigation */}
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block safari-body text-stone-800 font-medium hover:text-stone-900 hover:bg-sunset-600 hover:pl-4 hover:scale-105 hover:shadow-md transition-all duration-300 py-3 px-3 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Admin Link - Show for authenticated users */}
              {user && (
                <div className="border-t-2 border-stone-300 pt-3 mt-2">
                  <button
                    onClick={() => {
                      handleAdminClick();
                      setIsMobileMenuOpen(false);
                    }}
                    disabled={isLoading}
                    className="block w-full text-left safari-body text-sunset-600 font-bold hover:text-stone-900 hover:bg-sunset-600 hover:pl-4 hover:scale-105 hover:shadow-md transition-all duration-300 py-3 px-3 rounded-lg"
                  >
                    Dashboard
                  </button>
                </div>
              )}
              
              {/* Login Button - Show for unauthenticated users */}
              {!user && !isLoading && (
                <div className="border-t-2 border-stone-300 pt-3 mt-2">
                  <Link
                    href="/auth/login?returnTo=/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block safari-body text-sunset-600 font-bold hover:text-stone-900 hover:bg-gradient-to-r hover:from-sunset-600 hover:to-sunset-700 hover:pl-4 hover:scale-105 hover:shadow-md transition-all duration-300 py-3 px-3 rounded-lg"
                  >
                    Login
                  </Link>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}