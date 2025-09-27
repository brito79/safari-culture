export default function CampContact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="text-white">
            <h2 className="safari-heading text-4xl lg:text-5xl text-white mb-8">
              Enquiries
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-12">
              Contact our travel specialists to plan your unforgettable journey to Little Kulala 
              and experience the magic of the Namib Desert.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sunset-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Location</h3>
                  <p className="text-stone-300">Sossusvlei, Namib Desert</p>
                  <p className="text-stone-300">Namibia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sunset-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Email Enquiries</h3>
                  <a href="mailto:kirsty@anywhereinafrica.com" className="text-sunset-300 hover:text-sunset-200 transition-colors">
                    kirsty@anywhereinafrica.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sunset-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Telephone</h3>
                  <a href="tel:+27794745119" className="text-sunset-300 hover:text-sunset-200 transition-colors">
                    +27 79 474 5119
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sunset-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Website</h3>
                  <a 
                    href="http://www.anywhereinafrica.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sunset-300 hover:text-sunset-200 transition-colors"
                  >
                    www.anywhereinafrica.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sunset-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Skype</h3>
                  <span className="text-sunset-300">kirsty-gordon</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sunset-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Best Time to Visit</h3>
                  <p className="text-stone-300">Year-round destination</p>
                  <p className="text-stone-300">Cooler months: May - September</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="safari-heading text-2xl text-stone-900 mb-6">
              Request Information
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Travel Dates
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Number of Guests
                  </label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-colors">
                    <option>Select guests</option>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Special Requirements or Questions
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about any special requirements or questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sunset-500 to-sunset-600 text-white py-4 px-6 rounded-lg font-medium hover:from-sunset-600 hover:to-sunset-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                Send Inquiry
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-stone-200 text-center">
              <p className="text-stone-600 text-sm">
                Our travel specialists will respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Desert Stats */}
        <div className="mt-20 pt-16 border-t border-stone-700">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-sunset-400 mb-2">80km</div>
              <div className="safari-accent text-stone-400">To Sossusvlei</div>
            </div>
            <div>
              <div className="text-3xl font-light text-sunset-400 mb-2">45min</div>
              <div className="safari-accent text-stone-400">Flight from Windhoek</div>
            </div>
            <div>
              <div className="text-3xl font-light text-sunset-400 mb-2">-5°C to 45°C</div>
              <div className="safari-accent text-stone-400">Temperature Range</div>
            </div>
            <div>
              <div className="text-3xl font-light text-sunset-400 mb-2">22</div>
              <div className="safari-accent text-stone-400">Max Guests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}