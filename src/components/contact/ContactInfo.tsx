"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 relative">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: 'url(/images/experiences/nature-drives.jpg)' 
        }}
      />
      <div className="absolute inset-0 bg-white/80" />
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-stone-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Contact our safari specialists to plan your perfect Namibian wilderness experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center p-6 bg-white/90 rounded-xl border border-stone-200"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-2">Phone</h3>
            <p className="text-stone-700 font-medium mb-1">+27 11 807 1800</p>
            <p className="text-sm text-stone-500">Mon-Fri: 8:00 - 17:00 CAT</p>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-6 bg-white/90 rounded-xl border border-stone-200"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">✉️</span>
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-2">Email</h3>
            <p className="text-stone-700 font-medium mb-1">info@wilderness-safaris.com</p>
            <p className="text-sm text-stone-500">Response within 24 hours</p>
          </motion.div>

          {/* Office Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6 bg-white/90 rounded-xl border border-stone-200"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-medium text-stone-900 mb-2">Office</h3>
            <p className="text-stone-700 font-medium mb-1">Windhoek, Namibia</p>
            <p className="text-sm text-stone-500">UTC+2 Timezone</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;