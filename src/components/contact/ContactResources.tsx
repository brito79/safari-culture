"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactResources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quickLinks = [
    { label: "Rate Sheet", href: "/rates" },
    { label: "Camp Availability", href: "#" },
    { label: "Group Bookings", href: "#" }
  ];

  return (
    <section ref={ref} className="py-16 relative">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{ 
          backgroundImage: 'url(/images/experiences/hot-air-balloon.jpg)' 
        }}
      />
      <div className="absolute inset-0 bg-stone-50/90" />
      
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-stone-900 mb-4">
            Quick Links
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Access important resources for your safari planning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="block p-8 bg-white/95 rounded-xl border border-stone-200 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">
                {link.label}
              </h3>
              <span className="text-stone-500 text-sm group-hover:text-stone-700 transition-colors">
                Click to access →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactResources;