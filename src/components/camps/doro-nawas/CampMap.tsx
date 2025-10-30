"use client";

import { motion } from "framer-motion";

export default function CampMap() {
  const locationFacts = [
    {
      title: "Damaraland Region",
      description: "Located in northwestern Namibia, a UNESCO World Heritage landscape",
      icon: "🗺️"
    },
    {
      title: "Aba-Huab River",
      description: "Positioned on the edge of this ancient dry riverbed",
      icon: "🏞️"
    },
    {
      title: "Twyfelfontein Access",
      description: "Direct access to Namibia's first World Heritage Site",
      icon: "🏛️"
    },
    {
      title: "Desert Wilderness",
      description: "Surrounded by pristine Namib Desert landscapes",
      icon: "🏜️"
    }
  ];

  const nearbyAttractions = [
    {
      name: "Twyfelfontein",
      distance: "20 km",
      description: "Ancient San rock art and petroglyphs - UNESCO World Heritage Site",
      activities: ["Rock art tours", "Archaeological exploration", "Cultural interpretation"],
      coordinates: [-20.5833, 14.3667] as [number, number]
    },
    {
      name: "Burnt Mountain",
      distance: "25 km",
      description: "Dramatic volcanic formations with vibrant mineral colors",
      activities: ["Geological tours", "Photography", "Scenic drives"],
      coordinates: [-20.5500, 14.3500] as [number, number]
    },
    {
      name: "Organ Pipes",
      distance: "30 km",
      description: "Columnar basalt formations resembling church organ pipes",
      activities: ["Geological exploration", "Rock formations study", "Landscape photography"],
      coordinates: [-20.5200, 14.3300] as [number, number]
    },
    {
      name: "Petrified Forest",
      distance: "35 km",
      description: "Ancient fossilized trees over 280 million years old",
      activities: ["Fossil discovery", "Paleontological interpretation", "Desert walks"],
      coordinates: [-20.5000, 14.3000] as [number, number]
    },
    {
      name: "Brandberg Mountain",
      distance: "80 km",
      description: "Namibia's highest peak with the famous White Lady rock painting",
      activities: ["Mountain hiking", "Rock art viewing", "Cultural tours"],
      coordinates: [-21.1333, 14.5667] as [number, number]
    },
    {
      name: "Damara Living Museum",
      distance: "45 km",
      description: "Experience authentic traditional Damara culture and lifestyle",
      activities: ["Cultural immersion", "Traditional crafts", "Local cuisine"],
      coordinates: [-20.4500, 14.4000] as [number, number]
    }
  ];

  const accessibility = [
    {
      method: "Fly-in Safari",
      description: "Private airstrip for chartered flights",
      duration: "1.5 hours from Windhoek",
      recommended: true
    },
    {
      method: "Self-Drive",
      description: "4x4 vehicle recommended for gravel roads",
      duration: "4-5 hours from Windhoek",
      recommended: false
    },
    {
      method: "Guided Transfer",
      description: "Professional guide with scenic route stops",
      duration: "5-6 hours from Windhoek",
      recommended: true
    }
  ];

  return (
    <section id="map" className="py-20 bg-gradient-to-br from-earth-50 via-sand-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-6">
            Location & Access
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Discover Doro Nawas in the heart of Damaraland, perfectly positioned for exploring 
            Namibia&apos;s most spectacular geological and cultural attractions.
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 h-96 rounded-2xl overflow-hidden shadow-xl border border-earth-200"
        >
          <div className="relative h-full w-full bg-gradient-to-br from-earth-100 to-sand-100 flex items-center justify-center">
            {/* Map placeholder with styled appearance */}
            <div className="absolute inset-4 bg-white/90 rounded-xl shadow-inner flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="safari-accent text-xl text-stone-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Doro Nawas Camp location in Damaraland, Namibia<br />
                  <span className="text-stone-500">Coordinates: -20.5°S, 14.35°E</span>
                </p>
                
                {/* Simulated map elements */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <div className="text-red-600 font-semibold text-sm">📍 Camp Location</div>
                    <div className="text-red-500 text-xs">Doro Nawas</div>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <div className="text-orange-600 font-semibold text-sm">🏛️ Twyfelfontein</div>
                    <div className="text-orange-500 text-xs">20km away</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner attribution */}
            <div className="absolute bottom-2 right-2 text-xs text-stone-500 bg-white/80 px-2 py-1 rounded">
              Map data ©2024
            </div>
          </div>
        </motion.div>

        {/* Location Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locationFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-earth-200 hover:bg-white/90 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{fact.icon}</div>
                <h4 className="safari-accent font-semibold text-stone-900 text-sm mb-1">
                  {fact.title}
                </h4>
                <p className="text-stone-600 text-xs">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Attractions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="safari-accent text-2xl text-stone-900 mb-8 text-center">
            Nearby Attractions & Excursions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sand-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="safari-accent font-semibold text-stone-900">
                    {attraction.name}
                  </h4>
                  <span className="px-3 py-1 bg-sunset-100 text-sunset-700 rounded-full text-sm font-medium">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-stone-600 text-sm mb-4">{attraction.description}</p>
                <div className="space-y-2">
                  <h5 className="text-stone-900 font-medium text-sm">Activities:</h5>
                  <div className="flex flex-wrap gap-2">
                    {attraction.activities.map((activity, actIndex) => (
                      <span
                        key={actIndex}
                        className="px-2 py-1 bg-earth-100 text-earth-700 rounded text-xs"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Getting There */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-stone-900 to-earth-800 rounded-2xl p-12">
            <h3 className="safari-heading text-3xl text-white mb-8 text-center">
              Getting to Doro Nawas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessibility.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className={`p-6 rounded-xl border-2 ${
                    option.recommended 
                      ? 'border-sunset-400 bg-sunset-900/20' 
                      : 'border-stone-600 bg-stone-800/50'
                  }`}
                >
                  {option.recommended && (
                    <div className="flex items-center mb-3">
                      <span className="px-2 py-1 bg-sunset-500 text-white text-xs rounded-full font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  <h4 className="safari-accent font-semibold text-white mb-3">
                    {option.method}
                  </h4>
                  <p className="text-stone-300 text-sm mb-3">{option.description}</p>
                  <div className="flex items-center text-sunset-300 text-sm">
                    <span className="w-2 h-2 bg-sunset-400 rounded-full mr-2"></span>
                    {option.duration}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 text-center"
            >
              <p className="text-earth-200 text-sm">
                Our travel specialists can arrange all transfers and provide detailed route information. 
                Contact us for personalized travel planning assistance.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
