"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DoroActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      title: "Cultural Excursions",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_5.jpg`,
      description: "Gain rewarding insights into the local Damara community. Visit traditional villages, learn about ancient customs, and engage with local artisans who maintain centuries-old traditions.",
      duration: "Half day",
      highlights: ["Village visits", "Traditional crafts", "Local cuisine", "Cultural stories"]
    },
    {
      title: "Nature Drives",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_6.jpg`, 
      description: "Combine game drives with scenic river lunches and guided walks. Track desert-adapted elephants and black rhinos while exploring the unique geology of Damaraland.",
      duration: "3-4 hours",
      highlights: ["Desert elephants", "Black rhino tracking", "Scenic lunches", "Geological wonders"]
    },
    {
      title: "Twyfelfontein Rock Art",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_7.jpg`,
      description: "Explore Namibia&apos;s first UNESCO World Heritage Site featuring over 6,000 ancient rock engravings and paintings created by San people thousands of years ago.",
      duration: "Half day",
      highlights: ["UNESCO World Heritage", "Ancient engravings", "Archaeological insights", "San culture"]
    },
    {
      title: "Stargazing Sessions",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_8.JPG`,
      description: "Look up at the cosmic ocean high above from our dedicated stargazing deck. The clear Damaraland skies offer exceptional views of constellations and celestial phenomena.",
      duration: "Evening", 
      highlights: ["Dark sky viewing", "Constellation tours", "Telescope access", "Astronomy guides"]
    },
    {
      title: "Scorpion Walks",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_9.jpg`,
      description: "Discover fascinating desert critters at night using UV lights. Learn about the remarkable adaptations of desert insects, arachnids, and small mammals.",
      duration: "1-2 hours",
      highlights: ["UV light exploration", "Desert adaptations", "Nocturnal wildlife", "Conservation education"]
    },
    {
      title: "Geological Excursions", 
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_10.jpg`,
      description: "Explore the incredible geological phenomena of Damaraland including ancient volcanic formations, petrified forests, and unique mineral deposits.",
      duration: "Full day",
      highlights: ["Volcanic formations", "Petrified forest", "Mineral specimens", "Earth history"]
    }
  ];

  return (
    <section ref={ref} id="activities" className="py-20 bg-gradient-to-b from-sand-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Ancient Adventures
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            From exploring 6,000-year-old rock art to tracking desert-adapted wildlife, 
            every activity reveals the rich cultural heritage and remarkable natural 
            adaptations that make Damaraland extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-earth-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {activity.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-stone-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-black leading-relaxed mb-4">
                  {activity.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-stone-700 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="text-xs bg-earth-100 text-earth-800 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white/60 backdrop-blur-sm border border-sand-200 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-medium text-stone-900 mb-2">Cultural Heritage</h3>
              <p className="text-stone-600 text-sm">
                Connect with ancient history and living Damara traditions
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🦏</div>
              <h3 className="font-medium text-stone-900 mb-2">Wildlife Tracking</h3>
              <p className="text-stone-600 text-sm">
                Expert guides with extensive knowledge of desert adaptations
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-medium text-stone-900 mb-2">Night Experiences</h3>
              <p className="text-stone-600 text-sm">
                Stargazing and nocturnal wildlife discoveries after dark
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoroActivities;