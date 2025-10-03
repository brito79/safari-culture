"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ExperiencesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experienceTypes = [
    {
      title: "Wildlife Encounters",
      description: "Track desert-adapted elephants, witness black rhino conservation, and discover unique desert wildlife.",
      icon: "🐘",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/1758190858744doronawas-namibia07-25n-rix61.jpg`,
      features: ["Desert Elephant Tracking", "Black Rhino Conservation", "Seal Colony Visits", "Desert Giraffe"]
    },
    {
      title: "Cultural Heritage",
      description: "Experience authentic encounters with local communities and discover ancient rock art treasures.",
      icon: "🎨",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/1758191665162oevans-1636.jpg`,
      features: ["Himba Cultural Visits", "Ancient Rock Art", "Traditional Crafts", "Community School Visits"]
    },
    {
      title: "Desert Adventures",
      description: "Scale towering dunes, explore dramatic landscapes, and experience the raw beauty of the Namib.",
      icon: "🏔️",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/doronawas_02-19-27e.jpg`,
      features: ["Dune Climbing", "Hot Air Ballooning", "Canyon Exploration", "Geological Tours"]
    },
    {
      title: "Scenic Journeys", 
      description: "Witness breathtaking landscapes from unique perspectives through drives and scenic flights.",
      icon: "✈️",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/Wilderness-Doro-Nawas_2.jpg`,
      features: ["Scenic Flights", "Nature Drives", "Sunset Views", "Coastal Exploration"]
    }
  ];

  return (
    <section ref={ref} id="overview" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Extraordinary Adventures
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Each of our four camps offers unique access to Namibia&apos;s most remarkable experiences. 
            From the towering dunes of Sossusvlei to the ancient rock art of Damaraland, 
            every adventure connects you deeper with this extraordinary landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {experienceTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group bg-white/80 rounded-2xl overflow-hidden border border-sand-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="text-4xl mb-2">{type.icon}</div>
                  <h3 className="text-2xl font-light text-white">{type.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-black leading-relaxed mb-6">
                  {type.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-stone-700 mb-3">Key Experiences</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-sunset-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-black text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">25+</div>
            <div className="text-black font-medium">Unique Experiences</div>
            <div className="text-sm text-black mt-1">Across four camps</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">4</div>
            <div className="text-black font-medium">Distinct Regions</div>
            <div className="text-sm text-black mt-1">Different landscapes</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">365</div>
            <div className="text-black font-medium">Days of Adventure</div>
            <div className="text-sm text-black mt-1">Year-round experiences</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">100%</div>
            <div className="text-black font-medium">Private Guiding</div>
            <div className="text-sm text-black mt-1">Personalized experiences</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesOverview;