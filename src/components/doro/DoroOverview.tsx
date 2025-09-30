"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DoroOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: "🏛️",
      title: "Ancient Rock Art",
      description: "Explore Twyfelfontein&apos;s UNESCO World Heritage rock engravings"
    },
    {
      icon: "🦏",
      title: "Desert Rhino",
      description: "Track endangered black rhinos adapted to desert life"
    },
    {
      icon: "🐘",
      title: "Desert Elephants", 
      description: "Encounter legendary desert-adapted elephant herds"
    },
    {
      icon: "🏕️",
      title: "Cultural Heritage",
      description: "Connect with local Damara communities and traditions"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-sand-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Community, Culture & Curious Creatures
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Doro Nawas – &apos;the place where rhinos used to live&apos; in the Damara language – 
            rests on the edge of the dry Aba-Huab River. The camp is an excellent base for exploring 
            the astounding San rock art at Twyfelfontein, Namibia&apos;s first World Heritage Site.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_2.jpg`}
                alt="Doro Nawas camp in Damaraland landscape"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-stone-900 mb-4">
                Ancient Damaraland
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                This extraordinary region combines archaeological treasures with remarkable wildlife 
                adaptations. From ancient rock engravings that tell stories thousands of years old 
                to desert-adapted elephants that have learned to survive in this harsh environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sand-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl mb-3">{highlight.icon}</div>
                  <h4 className="font-medium text-stone-900 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-black leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/60 backdrop-blur-sm border border-sand-200 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">16</div>
              <div className="text-black font-medium">Luxury Suites</div>
              <div className="text-sm text-black mt-1">Wood, canvas & thatch</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">6,000</div>
              <div className="text-black font-medium">Years Old</div>
              <div className="text-sm text-black mt-1">Ancient rock engravings</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">1</div>
              <div className="text-black font-medium">World Heritage Site</div>
              <div className="text-sm text-black mt-1">Twyfelfontein nearby</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoroOverview;