import Link from "next/link";

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
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-sand-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sunset-400 to-sunset-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{logoLetter}</span>
              </div>
              <div>
                <h1 className="safari-heading text-xl text-stone-900">{campName}</h1>
                <p className="safari-accent text-xs text-stone-500 tracking-wider">{brandText}</p>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#overview" className="safari-accent text-sm text-stone-700 hover:text-sunset-500 transition-colors tracking-wider">
              Overview
            </a>
            <a href="#about" className="safari-accent text-sm text-stone-700 hover:text-sunset-500 transition-colors tracking-wider">
              About Us
            </a>
            <a href="#accommodation" className="safari-accent text-sm text-stone-700 hover:text-sunset-500 transition-colors tracking-wider">
              Stay
            </a>
            <a href="#gallery" className="safari-accent text-sm text-stone-700 hover:text-sunset-500 transition-colors tracking-wider">
              Gallery
            </a>
            <a href="#activities" className="safari-accent text-sm text-stone-700 hover:text-sunset-500 transition-colors tracking-wider">
              Enjoy
            </a>
            <a href="#contact" className="safari-accent text-sm text-stone-700 hover:text-sunset-500 transition-colors tracking-wider">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-stone-700 hover:text-sunset-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}