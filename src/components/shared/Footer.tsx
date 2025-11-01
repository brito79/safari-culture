import Link from 'next/link';
import { getContactInfo } from '@/app/actions/contact/get-contact-info';

interface FooterProps {
  className?: string;
}

export default async function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  // Fetch contact info from database
  const contactResult = await getContactInfo();
  const contactData = contactResult.success ? contactResult.data : null;

  return (
    <footer className={`relative bg-gradient-to-b from-stone-900 via-stone-950 to-black text-white ${className}`}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sunset-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light tracking-wide text-white">
              Wilderness Namibia
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Experience the untamed beauty of Namibia's wilderness through luxury safari adventures.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sunset-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sunset-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sunset-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/camps" 
                  className="text-stone-400 hover:text-sunset-500 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Our Camps
                </Link>
              </li>
              <li>
                <Link 
                  href="/experiences" 
                  className="text-stone-400 hover:text-sunset-500 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Experiences
                </Link>
              </li>
              <li>
                <Link 
                  href="/rates" 
                  className="text-stone-400 hover:text-sunset-500 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Rates & Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/apply" 
                  className="text-stone-400 hover:text-sunset-500 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-stone-400">
                <span className="text-sunset-500 mt-0.5">📞</span>
                <div>
                  <div>{contactData?.phone || '+27 11 807 1800'}</div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {contactData?.phone_hours || 'Mon-Fri: 8:00 - 17:00 CAT'}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <span className="text-sunset-500 mt-0.5">✉️</span>
                <div>
                  <div>{contactData?.email || 'info@wilderness-safaris.com'}</div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {contactData?.email_response || 'Response within 24 hours'}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <span className="text-sunset-500 mt-0.5">📍</span>
                <div>
                  <div>{contactData?.office || 'Windhoek, Namibia'}</div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {contactData?.office_details || 'UTC+2 Timezone'}
                  </div>
                </div>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-sunset-500 to-orange-600 text-white rounded-lg hover:from-sunset-600 hover:to-orange-700 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-stone-400 text-sm mb-4">
              Subscribe for safari tips and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-sunset-500 transition-all text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-stone-800 hover:bg-sunset-600 text-white rounded-lg transition-all duration-300 text-sm font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm text-center sm:text-left">
              &copy; {currentYear} Wilderness Namibia. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-stone-500 hover:text-sunset-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-stone-500 hover:text-sunset-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
    </footer>
  );
}