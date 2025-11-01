"use client";

import Link from "next/link";
import { useState } from "react";

interface CampNavigationProps {
  campName: string;
  brandText?: string;
  logoLetter?: string;
}

export default function CampNavigation({ 
  campName, 
  // brandText = "WILDERNESS NAMIBIA",
  logoLetter = "W"
}: CampNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#accommodation", label: "Accommodation" },
    { href: "#cuisine", label: "Cuisine" },
    { href: "#facts", label: "Facts" },
    { href: "#experiences", label: "Experiences" },
    { href: "#map", label: "Map" }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/98 dark:bg-stone-900/98 backdrop-blur-lg border-b border-stone-200/50 dark:border-stone-700/50 sticky top-0 z-50 shadow-lg shadow-stone-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link href="/" className="group flex items-center space-x-3 transition-all duration-300 ease-out hover:scale-105">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/30 group-hover:rotate-3 transition-all duration-300 ease-out">
                <span className="text-white font-bold text-lg md:text-xl">{logoLetter}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <h1 className="text-lg md:text-xl xl:text-2xl text-stone-900 dark:text-white font-bold tracking-tight truncate group-hover:text-orange-600 transition-colors duration-300">{campName}</h1>
                {/* <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 tracking-widest uppercase font-medium truncate">{brandText}</p> */}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
                <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2.5 xl:px-6 xl:py-3 text-sm xl:text-base text-stone-700 dark:text-stone-300 hover:text-white rounded-lg transition-all duration-300 ease-out group"
                >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-out rounded-lg"></span>
                <span className="relative z-10">{item.label}</span>
                </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 dark:text-stone-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 ease-out"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              className="w-6 h-6 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 border-t border-stone-200/50 dark:border-stone-700/50' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 bg-gradient-to-b from-stone-50/50 to-stone-100/50 dark:from-stone-800/50 dark:to-stone-900/50">
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-3 text-base font-medium text-stone-700 dark:text-stone-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-lg mx-2 transition-all duration-200 ease-out"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}