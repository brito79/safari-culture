"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CampFacts() {
  const facts = [
    {
      icon: "🏕️",
      title: "16 Tents",
      description: "Wood, canvas, and thatch guest rooms",
      detail: "Each with private outdoor shower and veranda"
    },
    {
      icon: "👥",
      title: "32 Guests",
      description: "Maximum capacity",
      detail: "Intimate setting for exclusive experiences"
    },
    {
      icon: "🏊",
      title: "Swimming Pool",
      description: "Refreshing desert oasis",
      detail: "Take a dip for respite from the African sun"
    },
    {
      icon: "🛏️",
      title: "Sleep-out Deck",
      description: "Star bed experience",
      detail: "Rest under a blanket of infinite stars"
    },
    {
      icon: "🏪",
      title: "Safari Store",
      description: "Local crafts & keepsakes",
      detail: "Locally crafted reminders of your desert safari"
    },
    {
      icon: "📶",
      title: "Wi-Fi Access",
      description: "Stay connected",
      detail: "Share your sightings with friends and family"
    }
  ];

  const wildlife = [
    {
      name: "Desert Elephant",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_6.jpg`,
      description: "A unique and special sighting on the dusty plains"
    },
    {
      name: "Black Rhino", 
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_5.jpg`,
      description: "Critically endangered giants in their desert habitat"
    },
    {
      name: "Kudu",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_7.jpg`,
      description: "Their spiral horns are an iconic sight on safari"
    },
    {
      name: "Damara Hornbill",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_4.jpg`,
      description: "A bright-beaked endemic of the Namibian desert"
    }
  ];

  const areaFacts = [
    {
      stat: "6,000 Years",
      label: "Ancient Rock Art",
      description: "Twyfelfontein UNESCO World Heritage Site"
    },
    {
      stat: "UNESCO",
      label: "World Heritage",
      description: "First World Heritage Site in Namibia"
    },
    {
      stat: "Desert-Adapted",
      label: "Wildlife",
      description: "Unique creatures surviving in arid conditions"
    },
    {
      stat: "Community",
      label: "Partnership",
      description: "Joint venture with Doro !Nawas Conservancy"
    }
  ];

  return (
    <section id="facts" className="py-20 bg-gradient-to-br from-stone-50 via-sand-50 to-earth-50">
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
            Camp Facts & Facilities
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Discover the details that make Doro Nawas an exceptional desert retreat
          </p>
        </motion.div>

        {/* Camp Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="safari-accent text-2xl text-stone-900 mb-8 text-center">
            Facilities & Amenities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{fact.icon}</div>
                <h4 className="safari-accent font-semibold text-stone-900 mb-2">
                  {fact.title}
                </h4>
                <p className="text-stone-700 mb-2">{fact.description}</p>
                <p className="text-stone-600 text-sm">{fact.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wildlife Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="safari-accent text-2xl text-stone-900 mb-8 text-center">
            Wildlife Encounters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlife.map((animal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="safari-accent font-semibold text-stone-900 mb-2">
                    {animal.name}
                  </h4>
                  <p className="text-stone-600 text-sm">{animal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Area Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-earth-900 to-stone-800 rounded-2xl p-12">
            <h3 className="safari-heading text-3xl text-white mb-8 text-center">
              Damaraland Heritage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {areaFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-light text-sunset-300 mb-2">
                    {fact.stat}
                  </div>
                  <div className="text-white font-medium mb-1">{fact.label}</div>
                  <div className="text-earth-200 text-sm">{fact.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}