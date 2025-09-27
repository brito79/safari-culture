"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DamaralandContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rates = [
    {
      season: "High Season",
      period: "Jul - Oct",
      rate: "R9,931",
      supplement: "50%"
    },
    {
      season: "Mid Season", 
      period: "May - Jun, Nov",
      rate: "R8,440",
      supplement: "40%"
    },
    {
      season: "Low Season",
      period: "Dec - Apr",
      rate: "R7,450",
      supplement: "35%"
    }
  ];

  const packageDetails = [
    "Full board accommodation",
    "All local beverages & house wines", 
    "Game drives & cultural activities",
    "Twyfelfontein rock art excursions",
    "Return airstrip transfers",
    "Conservation & community fees"
  ];

  return (
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-b from-white to-sand-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8"
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
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-600 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-600 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Travel Dates
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Number of Guests
                    </label>
                    <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-600 focus:border-transparent">
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-600 focus:border-transparent"
                    placeholder="Tell us about dietary requirements, special occasions, or specific interests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-sunset-500 hover:bg-sunset-600 text-white rounded-lg font-medium transition-colors duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>

          {/* Rates & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Seasonal Rates */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8">
              <h3 className="text-2xl font-light text-stone-900 mb-6">
                Seasonal Rates 2024
              </h3>
              <div className="space-y-4">
                {rates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-sand-50 rounded-lg">
                    <div>
                      <div className="font-medium text-stone-900">{rate.season}</div>
                      <div className="text-sm text-black">{rate.period}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-medium text-stone-900">{rate.rate}</div>
                      <p className="text-xs text-black">{rate.period}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-black">Single: +{rate.supplement}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-black mt-4">
                *Rates are per person per night sharing. Single supplements apply.
                All rates subject to change and availability.
              </p>
            </div>

            {/* What&apos;s Included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-earth-50 border border-earth-200 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-light text-stone-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-3">
                {packageDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-sunset-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-black text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8 text-center"
            >
              <h4 className="font-medium text-stone-900 mb-4">Reservation / Enquiries</h4>
              <p className="text-black mb-4">
                Contact us to plan your Damaraland adventure
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Email</p>
                  <p className="text-lg text-black">enquiry@wildernessdestinations.com</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Tel</p>
                  <p className="text-lg text-black">27112575000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Location</p>
                  <p className="text-black">Outjo, Namibia</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-700 mb-1">Website</p>
                  <a 
                    href="https://www.wildernessdestinations.com/africa/namibia/damaraland/damaraland-camp"
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

export default DamaralandContact;