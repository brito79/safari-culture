"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DoroContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-b from-sand-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
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
                    <label className="block text-stone-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-600 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Preferred Dates</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Number of Guests</label>
                    <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-600 focus:border-transparent transition-colors">
                      <option>Select guests</option>
                      <option>2 guests</option>
                      <option>4 guests</option>
                      <option>6 guests</option>
                      <option>8+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">Special Interests</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sunset-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your interests (rock art, wildlife, cultural experiences, stargazing, etc.)..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-sunset-600 hover:bg-sunset-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg"
                >
                  Send Enquiry
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-stone-900 mb-6">
                Camp Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-xl p-6"
                  >
                    <div className="text-2xl mb-3">{info.icon}</div>
                    <h4 className="font-medium text-stone-900 mb-3">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-black text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Rates Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-sand-50/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8"
            >
              <h4 className="font-medium text-stone-900 mb-4">Rates (Per Person Sharing)</h4>
              <div className="space-y-4">
                {rates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-sand-200 pb-2">
                    <div>
                      <span className="text-stone-900 font-medium">{rate.season}</span>
                      <p className="text-xs text-black">{rate.period}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-earth-700 font-medium">{rate.price}</span>
                      <p className="text-xs text-black">Single: +{rate.supplement}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-black mt-4">
                Rates include accommodation, all meals, beverages (excluding premium brands), and activities.
              </p>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8 text-center"
            >
              <h4 className="font-medium text-stone-900 mb-4">Reservation / Enquiries</h4>
              <p className="text-black mb-4">
                Contact us to plan your Doro Nawas adventure
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Email</p>
                  <p className="text-lg text-black">enquiry@wildernessdestinations.com</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Tel</p>
                  <p className="text-lg text-black">+27 11 257 5000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Address</p>
                  <p className="text-black">H822+5X De Riet Namibia</p>
                  <p className="text-black">Outjo, Namibia</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Website</p>
                  <a 
                    href="https://www.wildernessdestinations.com/africa/namibia/damaraland/doro-nawas-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sunset-600 hover:text-sunset-700 transition-colors duration-300 break-all"
                  >
                    wildernessdestinations.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoroContact;