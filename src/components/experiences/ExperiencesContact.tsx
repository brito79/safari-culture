"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ExperiencesContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      description: "Speak directly with our travel experts",
      contact: "+264 61 274 500",
      action: "Call Now"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Send us your detailed requirements",
      contact: "experiences@safari-culture.com",
      action: "Send Email"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "WhatsApp",
      description: "Quick responses via messaging",
      contact: "+264 81 123 4567",
      action: "Message Us"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book my experience?",
      answer: "We recommend booking 3-6 months in advance, especially for peak season (April-October). This ensures availability at your preferred camps and allows time for proper trip planning."
    },
    {
      question: "What is included in the experience packages?",
      answer: "All packages include accommodation, meals, guided activities, park fees, and internal transfers between camps. International flights, personal expenses, and optional activities are additional."
    },
    {
      question: "Are the experiences suitable for all fitness levels?",
      answer: "We offer experiences for various fitness levels. Most activities are moderate, but we can customize itineraries to match your physical capabilities and preferences."
    },
    {
      question: "What is the best time to visit for wildlife viewing?",
      answer: "Wildlife viewing is excellent year-round, but dry season (April-October) offers the best game viewing as animals concentrate around water sources. Each season has unique highlights."
    }
  ];

  const testimonials = [
    {
      quote: "The most incredible wildlife experience of our lives. Every detail was perfectly organized.",
      author: "Sarah & David Johnson",
      experience: "7-Day Multi-Camp Adventure"
    },
    {
      quote: "The cultural encounters and desert landscapes exceeded all expectations. Truly transformative.",
      author: "Maria Santos",
      experience: "Cultural Heritage Experience"
    },
    {
      quote: "Professional guides, luxury accommodations, and once-in-a-lifetime memories.",
      author: "Robert Chen",
      experience: "Photography Safari"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-neutral-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Start Your Adventure
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Ready to experience the magic of Namibia? Contact our expert team to begin 
            planning your unforgettable wilderness journey.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 p-8 rounded-2xl border border-sand-200 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-sunset-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sunset-600 transition-colors duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">{method.title}</h3>
              <p className="text-black mb-4">{method.description}</p>
              <p className="text-sunset-600 font-medium mb-4">{method.contact}</p>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-sunset-500 hover:bg-sunset-600 text-white rounded-full font-medium transition-colors duration-300"
              >
                {method.action}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-light text-stone-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                className="bg-white/90 p-6 rounded-2xl border border-sand-200"
              >
                <h4 className="text-lg font-medium text-stone-900 mb-3">{faq.question}</h4>
                <p className="text-black leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light text-stone-900 mb-8 text-center">What Our Guests Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                className="bg-white/90 p-6 rounded-2xl border border-sand-200 text-center"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-sunset-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-black mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div>
                  <p className="text-stone-900 font-medium">{testimonial.author}</p>
                  <p className="text-sunset-600 text-sm">{testimonial.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-earth-600 to-sunset-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-light mb-4">Your Namibian Adventure Awaits</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of travelers who have discovered the magic of Namibia&apos;s 
                wilderness through our carefully crafted experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-earth-600 rounded-full font-medium hover:bg-sand-50 transition-colors duration-300 shadow-lg inline-block"
                >
                  Book Your Experience
                </Link>
                <Link 
                  href="/camps"
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-earth-600 transition-all duration-300 inline-block"
                >
                  View All Camps
                </Link>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesContact;