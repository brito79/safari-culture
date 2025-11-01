"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ContactInfo as ContactInfoType } from "@/app/actions/contact/get-contact-info";

const ContactInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [contactData, setContactData] = useState<ContactInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const response = await fetch('/api/contact-info');
        const result = await response.json();
        
        if (result.success && result.data) {
          setContactData(result.data);
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchContactInfo();
  }, []);

  return (
    <section ref={ref} className="py-20 relative bg-white">
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-sunset-100 rounded-full mb-4">
            <span className="text-sunset-700 text-sm font-semibold tracking-wide">STEP 2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-900 mb-4">
            Or Contact Us Directly
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Prefer to speak with someone? Our safari specialists are ready to help you plan your adventure.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center p-6 bg-white/90 rounded-xl border border-stone-200 animate-pulse">
                <div className="w-16 h-16 mx-auto mb-4 bg-stone-200 rounded-full"></div>
                <div className="h-6 bg-stone-200 rounded w-20 mx-auto mb-2"></div>
                <div className="h-4 bg-stone-200 rounded w-32 mx-auto mb-1"></div>
                <div className="h-3 bg-stone-200 rounded w-28 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-white/90 rounded-xl border border-stone-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">Phone</h3>
              <p className="text-stone-700 font-medium mb-1">
                {contactData?.phone || '+27 11 807 1800'}
              </p>
              <p className="text-sm text-stone-500">
                {contactData?.phone_hours || 'Mon-Fri: 8:00 - 17:00 CAT'}
              </p>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-white/90 rounded-xl border border-stone-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">Email</h3>
              <p className="text-stone-700 font-medium mb-1">
                {contactData?.email || 'info@wilderness-safaris.com'}
              </p>
              <p className="text-sm text-stone-500">
                {contactData?.email_response || 'Response within 24 hours'}
              </p>
            </motion.div>

            {/* Office Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-white/90 rounded-xl border border-stone-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">Office</h3>
              <p className="text-stone-700 font-medium mb-1">
                {contactData?.office || 'Windhoek, Namibia'}
              </p>
              <p className="text-sm text-stone-500">
                {contactData?.office_details || 'UTC+2 Timezone'}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactInfo;