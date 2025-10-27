export default function CampContact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="text-white">
            <h2 className="safari-heading text-4xl lg:text-5xl text-white mb-8">
              Plan Your Visit
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-12">
              Contact our travel specialists to plan your unforgettable journey to Damaraland Camp 
              and experience the ancient landscapes and cultural heritage of this remarkable region.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">📧</span>
                </div>
                <div>
                  <h3 className="safari-accent text-lg font-medium text-white mb-2">Email Reservations</h3>
                  <p className="text-stone-300">info@wilderness-safaris.com</p>
                  <p className="text-stone-300">damaraland@wilderness-safaris.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">📞</span>
                </div>
                <div>
                  <h3 className="safari-accent text-lg font-medium text-white mb-2">Phone</h3>
                  <p className="text-stone-300">+264 61 274 500</p>
                  <p className="text-stone-300">24/7 Emergency: +264 81 142 1112</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">📍</span>
                </div>
                <div>
                  <h3 className="safari-accent text-lg font-medium text-white mb-2">Location</h3>
                  <p className="text-stone-300">Palmwag Concession</p>
                  <p className="text-stone-300">Damaraland, Namibia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="safari-heading text-2xl text-stone-900 mb-6">Send Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="safari-accent block text-sm font-medium text-stone-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="safari-accent block text-sm font-medium text-stone-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="safari-accent block text-sm font-medium text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="safari-accent block text-sm font-medium text-stone-700 mb-2">
                    Preferred Dates
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
                  />
                </div>
                <div>
                  <label className="safari-accent block text-sm font-medium text-stone-700 mb-2">
                    Number of Guests
                  </label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="safari-accent block text-sm font-medium text-stone-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
                  placeholder="Tell us about any special requirements or interests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="safari-accent w-full bg-earth-500 hover:bg-earth-600 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Camp Information Stats */}
        <div className="mt-20 pt-16 border-t border-stone-700">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-earth-400 mb-2">10</div>
              <div className="safari-accent text-stone-400">Accommodations</div>
            </div>
            <div>
              <div className="text-3xl font-light text-earth-400 mb-2">Year-round</div>
              <div className="safari-accent text-stone-400">Access</div>
            </div>
            <div>
              <div className="text-3xl font-light text-earth-400 mb-2">4x4</div>
              <div className="safari-accent text-stone-400">Vehicle Required</div>
            </div>
            <div>
              <div className="text-3xl font-light text-earth-400 mb-2">120</div>
              <div className="safari-accent text-stone-400">Desert Elephants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}