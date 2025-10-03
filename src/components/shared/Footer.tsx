import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-neutral-900 text-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-6">
          {/* Quick Links */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <Link 
              href="/camps" 
              className="safari-body text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Our Camps
            </Link>
            <Link 
              href="/experiences" 
              className="safari-body text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Experiences
            </Link>
            <Link 
              href="/rates" 
              className="safari-body text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Rates
            </Link>
            <Link 
              href="/contact" 
              className="safari-body text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="safari-body text-neutral-400">
            © 2025 Safari Culture - Wilderness Namibia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}