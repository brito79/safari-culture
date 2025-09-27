"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HoanibContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: ["Hoanib River Valley", "Skeleton Coast, Namibia", "Remote wilderness setting"]
    },
    {
      icon: "✈️", 
      title: "Access",
      details: ["Charter flights to camp airstrip", "4x4 transfers available", "Helicopter scenic options"]
    },
    {
      icon: "📅",
      title: "Season",
      details: ["Open year-round", "Peak: May - October", "Excellent wildlife viewing"]
    },
    {
      icon: "👥",
      title: "Capacity",
      details: ["Maximum 16 guests", "8 elevated pavilions", "Intimate wilderness experience"]
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6">
              Plan Your Wilderness Adventure
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ready to experience the legendary Skeleton Coast? Contact our team to plan 
              your journey to one of the world&apos;s most remote wilderness destinations.
            </p>

            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Preferred Dates</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Number of Guests</label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors">
                      <option>Select guests</option>
                      <option>2 guests</option>
                      <option>4 guests</option>
                      <option>6 guests</option>
                      <option>8+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Special Requirements</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about any special requirements, dietary needs, or questions about your visit..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg"
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
              <h3 className="text-2xl font-light text-slate-900 mb-6">
                Camp Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6"
                  >
                    <div className="text-2xl mb-3">{info.icon}</div>
                    <h4 className="font-medium text-slate-900 mb-3">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency & Important Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8"
            >
              <h4 className="font-medium text-slate-900 mb-4">Important Information</h4>
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <strong className="text-slate-700">Remote Location:</strong> 
                  <p>Hoanib Skeleton Coast is extremely remote. All transfers are by charter aircraft.</p>
                </div>
                <div>
                  <strong className="text-slate-700">Minimum Stay:</strong>
                  <p>3 nights minimum recommended for Skeleton Coast excursions.</p>
                </div>
                <div>
                  <strong className="text-slate-700">What&apos;s Included:</strong>
                  <p>All meals, beverages (excluding premium brands), activities, and transfers from camp airstrip.</p>
                </div>
                <div>
                  <strong className="text-slate-700">Conservation Fee:</strong>
                  <p>A conservation fee supports local wildlife research and community programs.</p>
                </div>
              </div>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 text-center"
            >
              <h4 className="font-medium text-slate-900 mb-4">Prefer to Call?</h4>
              <p className="text-slate-600 mb-4">
                Speak directly with our wilderness specialists
              </p>
              <div className="space-y-2">
                <p className="text-xl font-medium text-blue-600">+264 61 274 500</p>
                <p className="text-slate-600">reservations@wilderness-safaris.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HoanibContact;