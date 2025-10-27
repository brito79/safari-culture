export default function CampContact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 safari-heading">
            Plan Your Coastal Desert Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Begin your journey to the remote Hoanib valley where ancient landscapes meet the untamed Atlantic Ocean.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 safari-heading">
                Hoanib Skeleton Coast Camp
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Located in the remote Hoanib River valley, our camp offers privileged access to one of 
                  Namibia&apos;s most pristine wilderness areas where the Namib Desert dramatically meets the Atlantic Ocean.
                </p>
                <p className="leading-relaxed">
                  This extraordinary location provides unparalleled opportunities to encounter desert-adapted 
                  elephants, explore the legendary Skeleton Coast, and witness the remarkable adaptations 
                  of life in this coastal desert ecosystem.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Camp Details</h4>
                <div className="space-y-2 text-gray-600">
                  <p><span className="safari-accent">Accommodation:</span> 9 Canvas Tents</p>
                  <p><span className="safari-accent">Location:</span> Hoanib River Valley, Skeleton Coast</p>
                  <p><span className="safari-accent">Access:</span> Fly-in safari only (light aircraft)</p>
                  <p><span className="safari-accent">Best Time:</span> May to October</p>
                  <p><span className="safari-accent">Minimum Stay:</span> 2 nights (3+ nights for Skeleton Coast excursions)</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Unique Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Desert-adapted elephant tracking in their natural habitat
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Exclusive access to Skeleton Coast seal colonies and shipwrecks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Wildlife research encounters with conservation scientists
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Cultural insights into Strandloper maritime history
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Conservation Partnership</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Hoanib Skeleton Coast Camp works closely with the Hoanib Research Centre and supports 
                    ongoing research into desert-adapted lions, elephants, and the unique ecosystem dynamics 
                    of this coastal desert environment. Guest stays directly contribute to conservation efforts 
                    and scientific research in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-light text-gray-900 mb-6 safari-heading">
              Reserve Your Experience
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Check-in
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="nights" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Nights
                  </label>
                  <select
                    id="nights"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select nights</option>
                    <option value="2">2 nights</option>
                    <option value="3">3 nights (recommended for Skeleton Coast)</option>
                    <option value="4">4 nights</option>
                    <option value="5">5+ nights</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select guests</option>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5+ guests</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Interests or Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Please share any special interests (photography, research encounters, specific wildlife) or dietary requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition-colors duration-300 font-medium"
              >
                Submit Inquiry
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                Our safari specialists will respond within 24 hours with detailed information about 
                availability, rates, and connecting flights to the Hoanib airstrip. All rates include 
                full board, beverages, and guided activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}