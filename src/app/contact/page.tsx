import Link from "next/link";
import Navigation from "@/components/ui/Navigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      {/* Navigation */}
      {/* <nav className="relative z-10 p-6 sm:p-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="safari-heading text-2xl sm:text-3xl text-neutral-900">
              Safari Culture
            </h1>
            <span className="safari-accent text-sm text-earth-500">Namibia</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/camps" className="safari-body text-stone-600 hover:text-sunset-500 transition-colors">
              Camps
            </Link>
            <Link href="/experiences" className="safari-body text-stone-600 hover:text-sunset-500 transition-colors">
              Experiences
            </Link>
            <Link href="/contact" className="safari-body text-sunset-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav> */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="safari-heading text-4xl sm:text-6xl lg:text-7xl text-neutral-900 mb-6">
            Plan Your Journey
          </h1>
          <p className="safari-accent text-lg sm:text-xl text-earth-500 tracking-widest mb-6">
            Let&apos;s Create Your Namibian Adventure
          </p>
          <p className="safari-body text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Our travel designers are ready to craft your perfect wilderness experience. 
            From single camp stays to multi-camp journeys, we&apos;ll help you discover the magic of Namibia.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/80 p-8 rounded-2xl backdrop-blur-sm border border-stone-200">
              <h2 className="safari-heading text-3xl text-neutral-900 mb-8">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-sunset-500 focus:ring-1 focus:ring-sunset-500 safari-body"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-sunset-500 focus:ring-1 focus:ring-sunset-500 safari-body"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-sunset-500 focus:ring-1 focus:ring-sunset-500 safari-body"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-sunset-500 focus:ring-1 focus:ring-sunset-500 safari-body"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                    COUNTRY OF RESIDENCE
                  </label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-sunset-500 focus:ring-1 focus:ring-sunset-500 safari-body">
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                    PREFERRED TRAVEL DATES
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-sunset-500 focus:ring-1 focus:ring-sunset-500 safari-body"
                    placeholder="e.g., June 2025 or Flexible"
                  />
                </div>

                <div>
                  <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                    INTERESTED CAMPS
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Wilderness Doro Nawas",
                      "Wilderness Little Kulala", 
                      "Wilderness Hoanib Skeleton Coast",
                      "Wilderness Damaraland Camp"
                    ].map((camp) => (
                      <label key={camp} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-sunset-500 border-stone-300 rounded focus:ring-sunset-500"
                        />
                        <span className="safari-body text-stone-700 text-sm">{camp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-sunset-500 focus:ring-1 focus:ring-sunset-500 safari-body resize-none"
                    placeholder="Tell us about your dream Namibian adventure..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full safari-body px-8 py-4 bg-sunset-500 text-white rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-sand-50/80 p-8 rounded-2xl border border-sand-200">
                <h3 className="safari-heading text-2xl text-neutral-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="safari-accent text-xs text-earth-500 tracking-wider mb-2">
                      EMAIL
                    </h4>
                    <p className="safari-body text-neutral-900">
                      info@safari-culture.com
                    </p>
                  </div>
                  <div>
                    <h4 className="safari-accent text-xs text-earth-500 tracking-wider mb-2">
                      PHONE
                    </h4>
                    <p className="safari-body text-neutral-900">
                      +264 61 123 4567
                    </p>
                  </div>
                  <div>
                    <h4 className="safari-accent text-xs text-earth-500 tracking-wider mb-2">
                      OFFICE HOURS
                    </h4>
                    <p className="safari-body text-neutral-900">
                      Monday - Friday: 8:00 AM - 5:00 PM (CAT)<br />
                      Saturday: 9:00 AM - 1:00 PM (CAT)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Travel Planning Info */}
              <div className="bg-stone-50/80 p-8 rounded-2xl border border-stone-200">
                <h3 className="safari-heading text-2xl text-neutral-900 mb-6">
                  Planning Your Visit
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="safari-heading text-lg text-neutral-900 mb-2">
                      Best Time to Visit
                    </h4>
                    <p className="safari-body text-stone-600 text-sm">
                      Namibia is a year-round destination. Dry season (May-October) offers excellent wildlife viewing, 
                      while green season (November-April) brings dramatic landscapes and fewer crowds.
                    </p>
                  </div>
                  <div>
                    <h4 className="safari-heading text-lg text-neutral-900 mb-2">
                      Advance Booking
                    </h4>
                    <p className="safari-body text-stone-600 text-sm">
                      We recommend booking 6-12 months in advance, especially for peak season travel (June-October).
                    </p>
                  </div>
                  <div>
                    <h4 className="safari-heading text-lg text-neutral-900 mb-2">
                      Multi-Camp Journeys
                    </h4>
                    <p className="safari-body text-stone-600 text-sm">
                      Combine 2-4 camps for the ultimate Namibian experience. Our travel designers will create 
                      seamless itineraries with private air transfers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-earth-50/80 p-8 rounded-2xl border border-earth-200">
                <h3 className="safari-heading text-2xl text-neutral-900 mb-6">
                  Useful Resources
                </h3>
                <div className="space-y-3">
                  <Link href="/camps" className="block safari-body text-stone-700 hover:text-sunset-500 transition-colors">
                    → Explore All Camps
                  </Link>
                  <Link href="/camps/doro-nawas/rates" className="block safari-body text-stone-700 hover:text-sunset-500 transition-colors">
                    → View Rates & Seasons
                  </Link>
                  <a href="#" className="block safari-body text-stone-700 hover:text-sunset-500 transition-colors">
                    → Travel Requirements
                  </a>
                  <a href="#" className="block safari-body text-stone-700 hover:text-sunset-500 transition-colors">
                    → What to Pack Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <p className="safari-body text-neutral-400">
              © 2025 Safari Culture - Wilderness Namibia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}