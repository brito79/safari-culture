"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigationItems = [
    { href: "/camps", label: "Camps" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" }
  ];

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-4 w-4" />;
    } else {
      return <Sun className="h-4 w-4" />;
    }
  };

  // Debug logging
  console.log('Theme debug:', { theme, mounted });

  return (
    <nav className={`relative z-10 p-6 sm:p-8 ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="safari-heading text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-100">
            Namibian Wilderness
          </h1>
          <span className="safari-accent text-sm text-earth-500 dark:text-earth-400">Namibia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 hover:text-sunset-500">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className="safari-body text-stone-600 text-2xl font-black-500 hover:text-sunset-500 dark:hover:text-sunset-400 hover:bg-sunset-50 dark:hover:bg-sunset-950/20 transition-all duration-200 px-4 py-2 rounded-md"
              >
                {item.label}
              </Button>
            </Link>
          ))}
          
          {/* Theme Toggle */}
          {mounted ? (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="border-blue-500 bg-blue-50 text-blue-900 hover:bg-blue-100 transition-all shadow-md min-w-[100px]"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
            >
              {getThemeIcon()}
              <span className="ml-2 text-xs capitalize">{theme || 'system'}</span>
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
              className="border-blue-500 bg-blue-50 text-blue-900 hover:bg-blue-100 transition-all shadow-md"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
            >
              {getThemeIcon()}
            </Button>
          ) : (
            <div className="w-8 h-8 bg-gray-200 animate-pulse rounded"></div>
          )}
          
          {/* Mobile Menu Button */}
          <button
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-t border-stone-200 dark:border-stone-700 md:hidden">
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block safari-body text-stone-600 dark:text-stone-300 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Theme Options */}
              <div className="pt-3 border-t border-stone-200 dark:border-stone-700">
                <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mb-2">Theme</p>
                <div className="flex space-x-2">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setTheme('light');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xs"
                  >
                    <Sun className="h-3 w-3 mr-1" />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setTheme('dark');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xs"
                  >
                    <Moon className="h-3 w-3 mr-1" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setTheme('system');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xs"
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