"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DamaralandAccommodation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const accommodations = [
    {
      title: "Standard Twin/Double Tents",
      description: "Nine spacious adobe-style twin en-suite rooms under thatch, each built on a raised wooden platform with large deck to relax and soak in the endless desert landscape.",
      features: ["Twin or double beds", "En-suite facilities", "Raised wooden platform", "Large private deck", "Thatch roofing", "Gravel pathway access"],
      guests: "9 Rooms Available",
      image: "/images/damaraland/Wilderness Damaraland Camp_3.jpg"
    },
    {
      title: "Family Accommodation",
      description: "One family unit consisting of two bedrooms, each with two three-quarter beds and own en-suite facilities. Separate entrances with a shared outdoor deck connecting both units.",
      features: ["Two bedrooms", "Two three-quarter beds per room", "Separate en-suite facilities", "Individual entrances", "Shared outdoor deck"],
      guests: "1 Family Unit (4 guests)",
      image: "/images/damaraland/Wilderness Damaraland Camp_8.jpg"
    }
  ];

  const amenities = [
    {
      title: "Main Lodge",
      description: "Comfortable communal areas with spectacular valley views, perfect for relaxing between adventures.",
      icon: "🏛️"
    },
    {
      title: "Dining Area",
      description: "Open-air dining with locally inspired cuisine and panoramic mountain vistas.",
      icon: "🍽️"
    },
    {
      title: "Fire Pit",
      description: "Evening gathering spot under star-filled skies with traditional African hospitality.",
      icon: "🔥"
    },
    {
      title: "Viewing Deck",
      description: "Elevated platform for wildlife viewing and appreciating the dramatic landscape.",
      icon: "👁️"
    }
  ];

  return (
    <section ref={ref} id="accommodation" className="py-20 bg-gradient-to-b from-sand-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Desert Mountain Retreat
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Ten thoughtfully designed accommodations featuring nine spacious adobe-style tented suites 
            and one family unit, all built to harmonize with the ancient desert landscape while 
            providing modern comfort and spectacular mountain views.
          </p>
        </motion.div>

        {/* Main Accommodation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src={accommodation.image}
                  alt={accommodation.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
          
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <div className="bg-white/80 p-8 rounded-2xl border border-sand-200">
                <h3 className="text-3xl font-light text-stone-900 mb-4">
                  {accommodation.title}
                </h3>
                <p className="text-black mb-4">{accommodation.description}</p>
                <div className="text-black font-medium mb-6">{accommodation.guests}</div>
                
                <h4 className="text-lg font-medium text-stone-900 mb-4">Suite Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {accommodation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-earth-500 rounded-full mr-3"></div>
                      <span className="text-black">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Camp Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-light text-stone-900 text-center mb-12">
            Camp Facilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/60 p-6 rounded-xl border border-earth-200 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{amenity.icon}</div>
                <h4 className="text-lg font-medium text-stone-900 mb-3">{amenity.title}</h4>
                <p className="text-sm text-black leading-relaxed">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-earth-50 to-sand-50 p-8 rounded-2xl text-center"
        >
          <h4 className="text-2xl font-light text-stone-900 mb-4">
            Sustainable Mountain Retreat
          </h4>
          <p className="text-black max-w-4xl mx-auto leading-relaxed">
            Built using traditional techniques and local materials, Damaraland Camp integrates seamlessly 
            with its ancient mountain environment. Solar power, water conservation, and minimal environmental 
            impact ensure this remarkable landscape remains pristine for future generations to discover.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DamaralandAccommodation;