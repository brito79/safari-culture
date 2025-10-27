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
  brandText = "WILDERNESS NAMIBIA",
  logoLetter = "W"
}: CampNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#overview", label: "Overview" },
    { href: "#about", label: "About Us" },
    { href: "#accommodation", label: "Stay" },
    { href: "#gallery", label: "Gallery" },
    { href: "#activities", label: "Enjoy" },
    { href: "#contact", label: "Contact" }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b-2 border-sand-200 dark:border-stone-700 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-2 sm:space-x-3 transition-all duration-500 ease-out hover:scale-110">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-sunset-400 via-sunset-500 to-sunset-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[0_0_25px_rgba(251,146,60,0.6)] group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-700 ease-out">
                <span className="text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-700 ease-out">{logoLetter}</span>
              </div>
              <div className="overflow-hidden">
                <h1 className="safari-heading text-base sm:text-lg lg:text-xl text-stone-900 dark:text-white font-extrabold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sunset-500 group-hover:via-orange-500 group-hover:to-sunset-600 transition-all duration-500 ease-out group-hover:translate-x-1 leading-tight">{campName}</h1>
                <p className="safari-accent text-[10px] sm:text-xs text-stone-600 dark:text-stone-400 tracking-wider uppercase font-bold group-hover:text-orange-500 transition-all duration-500 ease-out">{brandText}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative safari-accent text-base font-extrabold text-stone-800 dark:text-stone-200 hover:text-white px-5 py-2.5 rounded-xl hover:scale-125 hover:shadow-[0_10px_40px_rgba(251,146,60,0.5)] transition-all duration-500 ease-out tracking-wider uppercase overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-sunset-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-xl shadow-inner"></span>
                <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] group-hover:scale-110 inline-block transition-all duration-500 ease-out">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-stone-800 dark:text-stone-200 hover:text-white hover:bg-gradient-to-br hover:from-orange-400 hover:via-sunset-500 hover:to-red-500 rounded-xl hover:scale-125 hover:rotate-90 hover:shadow-[0_0_25px_rgba(251,146,60,0.6)] transition-all duration-500 ease-out"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7 transition-transform duration-500 ease-out stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-sand-200 dark:border-stone-700 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900 shadow-inner animate-fade-in max-h-[70vh] overflow-y-auto overscroll-contain">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="relative block safari-accent text-base font-extrabold text-stone-900 dark:text-stone-100 hover:text-white hover:pl-6 hover:scale-105 hover:shadow-[0_10px_30px_rgba(251,146,60,0.4)] transition-all duration-500 ease-out py-4 px-4 rounded-xl tracking-wider uppercase overflow-hidden group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-sunset-500 to-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"></span>
                  <span className="relative z-10 flex items-center">
                    <span className="inline-block w-0 group-hover:w-3 h-3 bg-white rounded-full mr-0 group-hover:mr-3 shadow-lg transition-all duration-500 ease-out"></span>
                    <span className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] break-words">{item.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}