"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DoroAccommodation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const accommodationFeatures = [
    {
      type: "Luxury Suites",
      image: "/images/doro-nawas/Wilderness Doro Nawas_3.jpg",
      description: "Wood, canvas, and thatch suites with panoramic desert views",
      guests: "32 guests maximum",
      features: ["Private outdoor shower", "Spacious verandas", "Desert views", "En-suite bathroom"]
    },
    {
      type: "Camp Facilities",
      image: "/images/doro-nawas/Wilderness Doro Nawas_4.jpg", 
      description: "Central areas designed for relaxation and stargazing",
      guests: "Shared spaces",
      features: ["Inviting swimming pool", "Star gazing deck", "Communal dining", "Fire pit areas"]
    }
  ];

  const amenities = [
    { icon: "🏔️", title: "Desert Views", description: "Panoramic vistas of Damaraland&apos;s landscapes" },
    { icon: "🚿", title: "Outdoor Showers", description: "Private bathrooms with outdoor shower experience" },
    { icon: "🛏️", title: "Comfort Design", description: "Wood, canvas and thatch construction" },
    { icon: "⭐", title: "Stargazing Deck", description: "Dedicated area for cosmic observation" },
    { icon: "🏊", title: "Swimming Pool", description: "Refreshing pool with desert views" },
    { icon: "🔥", title: "Fire Pit Areas", description: "Evening gathering spaces under the stars" }
  ];

  return (
    <section ref={ref} id="accommodation" className="py-20 bg-gradient-to-b from-earth-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Desert Luxury
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Sixteen luxury suites constructed from wood, canvas, and thatch blend seamlessly 
            with the Damaraland landscape. Each suite offers intimate comfort while maintaining 
            a connection to the ancient desert environment.
          </p>
        </motion.div>

        {/* Accommodation Types */}
        <div className="space-y-20 mb-20">
          {accommodationFeatures.map((accommodation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={accommodation.image}
                    alt={accommodation.type}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-light text-stone-900 mb-4">
                    {accommodation.type}
                  </h3>
                  <p className="text-black mb-4">{accommodation.description}</p>
                  <div className="text-black font-medium mb-6">{accommodation.guests}</div>
                  
                  <div className="space-y-3">
                    {accommodation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-earth-600 rounded-full mr-3" />
                        <span className="text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm border border-sand-200 rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl font-light text-stone-900 mb-8 text-center">
            Camp Amenities
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="text-center p-6 rounded-xl bg-white/50 border border-sand-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h4 className="font-medium text-stone-900 mb-2">{amenity.title}</h4>
                <p className="text-sm text-black leading-relaxed">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-sunset-500 hover:bg-sunset-600 text-white rounded-full font-medium transition-colors duration-300 shadow-lg">
            Check Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DoroAccommodation;