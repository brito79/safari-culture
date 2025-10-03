"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DamaralandOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "Desert Elephants",
      description: "Track the legendary desert-adapted elephants that roam ancient migration routes through spectacular mountain landscapes.",
      icon: "🐘"
    },
    {
      title: "Cultural Heritage",
      description: "Experience authentic encounters with the Himba people and discover their traditional semi-nomadic lifestyle.",
      icon: "🏛️"
    },
    {
      title: "Rock Art Sites",
      description: "Explore Twyfelfontein's ancient rock engravings, a UNESCO World Heritage Site with 6,000-year-old petroglyphs.",
      icon: "🎨"
    },
    {
      title: "Geological Wonders",
      description: "Marvel at dramatic geological formations including the Burnt Mountain and famous Organ Pipes.",
      icon: "⛰️"
    }
  ];

  return (
    <section ref={ref} id="overview" className="py-20 bg-gradient-to-b from-white to-sand-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Ancient Damaraland
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Discover a landscape where ancient mountains tell stories spanning millions of years, 
            where remarkable wildlife has adapted to desert conditions, and where vibrant cultures 
            continue their timeless traditions in this extraordinary UNESCO World Heritage region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_2.jpg`}
                alt="Damaraland Camp mountain views"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-light text-stone-900 mb-6">
              Where Mountains Meet Desert
            </h3>
            <p className="text-black leading-relaxed mb-6">
              Damaraland Camp sits in one of Africa&apos;s most remarkable landscapes, where 
              ancient granite mountains rise from desert plains. This is home to the world&apos;s 
              largest population of free-roaming desert elephants, as well as the critically 
              endangered desert black rhino. The region&apos;s geological wonders and cultural 
              treasures make it a destination unlike any other.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/60 p-4 rounded-xl">
                <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">10</div>
                <div className="text-black font-medium">Tented Suites</div>
                <div className="text-sm text-black mt-1">Canvas & stone luxury</div>
              </div>
              <div className="bg-white/60 p-4 rounded-xl">
                <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">120</div>
                <div className="text-black font-medium">Desert Elephants</div>
                <div className="text-sm text-black mt-1">Free-roaming population</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white/80 p-6 rounded-xl border border-sand-200 text-center group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h4 className="text-xl font-medium text-stone-900 mb-3">{highlight.title}</h4>
              <p className="text-sm text-black leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">6,000</div>
            <div className="text-black font-medium">Years Old</div>
            <div className="text-sm text-black mt-1">Ancient rock engravings</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">1</div>
            <div className="text-black font-medium">UNESCO Site</div>
            <div className="text-sm text-black mt-1">World Heritage status</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">50</div>
            <div className="text-black font-medium">Black Rhino</div>
            <div className="text-sm text-black mt-1">Desert-adapted population</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DamaralandOverview;