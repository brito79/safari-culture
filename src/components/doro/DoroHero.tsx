"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DoroHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_1.jpg`}
          alt="Doro Nawas wilderness landscape in Damaraland"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/70 via-sunset-900/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
                Doro
                <span className="block text-sand-200 font-normal">Nawas</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl text-earth-100 font-light tracking-wide mb-8">
                Where Ancient Rock Art Meets Desert Wildlife
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-white/90 max-w-2xl leading-relaxed mb-12">
                Feast your eyes on otherworldly panoramas populated by intriguing desert-adapted wildlife 
                and unusual flora. Engage with the local Doro Nawas community and discover the fascinating 
                ancient history of Damaraland.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-sunset-600 hover:bg-sunset-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg">
                Explore Experiences
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-earth-900 rounded-full font-medium transition-colors duration-300">
                View Accommodation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DoroHero;