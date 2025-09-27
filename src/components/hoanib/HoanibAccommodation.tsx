"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const HoanibAccommodation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const accommodationTypes = [
    {
      type: "Family Accommodation",
      image: "/images/hoanib-skeleton/family-accomodation/familytent_hoanib_081.jpg",
      description: "Spacious family pavilion with interconnecting areas",
      guests: "Up to 4 guests",
      features: ["Two bedrooms", "Shared living area", "Family activities", "Child-friendly amenities"]
    },
    {
      type: "Standard Twin",
      image: "/images/hoanib-skeleton/standard-twin/Hoanib_Skeleton_Coast_2014-08-76e1.jpg", 
      description: "Elevated pavilion with twin beds and panoramic views",
      guests: "2 guests",
      features: ["Twin beds", "Private deck", "Desert views", "En-suite bathroom"]
    }
  ];

  const amenities = [
    { icon: "🏔️", title: "Panoramic Views", description: "Desert and mountain vistas from every pavilion" },
    { icon: "🚿", title: "Indoor/Outdoor Shower", description: "Luxurious bathroom with desert shower" },
    { icon: "🛏️", title: "Premium Comfort", description: "Quality linens and climate control" },
    { icon: "☀️", title: "Solar Power", description: "Sustainable energy with battery backup" },
    { icon: "🍷", title: "Private Deck", description: "Personal outdoor space with daybed" },
    { icon: "☕", title: "In-Room Amenities", description: "Mini bar and coffee station" }
  ];

  return (
    <section ref={ref} id="accommodation" className="py-20 bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6">
            Coastal Luxury
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Eight elevated pavilions offer intimate luxury in one of the world&apos;s most remote locations, 
            each designed to maximize the dramatic desert and mountain views while providing 
            exceptional comfort and privacy.
          </p>
        </motion.div>

        {/* Accommodation Types */}
        <div className="space-y-20 mb-20">
          {accommodationTypes.map((accommodation, index) => (
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
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-light text-slate-900 mb-4">
                    {accommodation.type}
                  </h3>
                  <p className="text-slate-600 mb-4">{accommodation.description}</p>
                  <div className="text-blue-600 font-medium mb-6">{accommodation.guests}</div>
                  
                  <div className="space-y-3">
                    {accommodation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        <span className="text-slate-600">{feature}</span>
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
          className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl font-light text-slate-900 mb-8 text-center">
            Pavilion Amenities
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="text-center p-6 rounded-xl bg-white/50 border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h4 className="font-medium text-slate-900 mb-2">{amenity.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{amenity.description}</p>
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
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg">
            Check Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HoanibAccommodation;