export default function CampContact() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: ["Aba-Huab River Valley", "Damaraland, Namibia", "Near Twyfelfontein World Heritage Site"]
    },
    {
      icon: "✈️", 
      title: "Access",
      details: ["Scheduled flights to Damaraland", "Private charter available", "Road transfers from Windhoek"]
    },
    {
      icon: "📅",
      title: "Season",
      details: ["Open year-round", "Best wildlife: May - October", "Cultural activities available daily"]
    },
    {
      icon: "👥",
      title: "Capacity",
      details: ["Maximum 32 guests", "16 luxury suites", "Intimate cultural experiences"]
    }
  ];

  const rates = [
    { season: "Green Season", period: "Jan-Mar", price: "R7,318", supplement: "R1,832" },
    { season: "High Season", period: "Apr-May, Nov-Dec", price: "R9,147", supplement: "R2,287" },
    { season: "Peak Season", period: "Jun-Oct", price: "R10,976", supplement: "R2,744" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sand-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="safari-heading text-4xl sm:text-5xl font-light text-stone-900 mb-6">
              Plan Your Cultural Journey
            </h2>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Ready to explore ancient rock art and encounter desert wildlife? Contact our team 
              to plan your adventure to this remarkable corner of Damaraland.
            </p>

            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="arrival" className="block text-sm font-medium text-stone-700 mb-2">
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      id="arrival"
                      name="arrival"
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="departure" className="block text-sm font-medium text-stone-700 mb-2">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      id="departure"
                      name="departure"
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Special Requests or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your interests in rock art, wildlife, or cultural experiences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-sunset-500 hover:bg-sunset-600 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8">
              <h3 className="text-2xl font-light text-stone-900 mb-6">Camp Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{info.icon}</div>
                    <h4 className="font-medium text-stone-900 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-black">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seasonal Rates */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8">
              <h3 className="text-2xl font-light text-stone-900 mb-6">Seasonal Rates</h3>
              <p className="text-sm text-black mb-6">
                Per person per night sharing, including full board and activities
              </p>
              
              <div className="space-y-4">
                {rates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-sand-200 last:border-b-0">
                    <div>
                      <h4 className="font-medium text-stone-900">{rate.season}</h4>
                      <p className="text-sm text-black">{rate.period}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-stone-900">{rate.price}</p>
                      <p className="text-sm text-black">+{rate.supplement} single</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-earth-50 rounded-lg">
                <p className="text-xs text-black">
                  * Rates are subject to change and availability. All rates include full board, 
                  selected beverages, guided activities, and conservation contributions.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8">
              <h3 className="text-2xl font-light text-stone-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-xl mr-3">📧</span>
                  <div>
                    <p className="font-medium text-stone-900">Email</p>
                    <p className="text-black">reservations@wilderness-safaris.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-3">📞</span>
                  <div>
                    <p className="font-medium text-stone-900">Phone</p>
                    <p className="text-black">+264 61 274 500</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-3">🌐</span>
                  <div>
                    <p className="font-medium text-stone-900">Website</p>
                    <p className="text-black">wilderness-safaris.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}