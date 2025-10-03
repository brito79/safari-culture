"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ExperiencesHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/Wilderness-Doro-Nawas_1.jpg`}
          alt="Namibian desert experiences and adventures"
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl sm:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                Desert
                <span className="block text-sand-200">Experiences</span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl text-sand-100 tracking-wide mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              Adventure Awaits in Every Direction
            </motion.p>
            
            <motion.p 
              className="text-xl text-white/90 max-w-3xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              From tracking desert elephants to climbing ancient dunes, from cultural encounters 
              to scenic flights over dramatic landscapes - discover the full spectrum of Namibian adventures 
              across our four luxury wilderness camps.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <a 
                href="#experiences"
                className="px-8 py-4 bg-sunset-500 hover:bg-sunset-600 text-white rounded-full font-medium transition-colors duration-300 shadow-lg text-center"
              >
                Explore Experiences
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 border-2 border-white/80 text-white hover:bg-white/10 rounded-full font-medium transition-colors duration-300 backdrop-blur-sm text-center"
              >
                Plan Your Journey
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default ExperiencesHero;