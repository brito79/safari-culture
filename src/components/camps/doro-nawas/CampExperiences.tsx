"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CampExperiences() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: "Cultural Excursions",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_5.jpg`,
      description: "Gain rewarding insights into the local Damara community and their ancient traditions",
      details: [
        "Visit traditional Damara villages",
        "Learn about centuries-old customs",
        "Engage with local artisans",
        "Experience traditional music and dance",
        "Discover local cuisine and cooking methods"
      ],
      duration: "Half day",
      difficulty: "Easy"
    },
    {
      title: "Nature Drives",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_6.jpg`,
      description: "Track desert-adapted elephants and black rhinos while exploring Damaraland's unique geology",
      details: [
        "Desert-adapted elephant tracking",
        "Black rhino conservation areas",
        "Scenic river lunch experiences",
        "Guided geological formations tour",
        "Desert flora and fauna discovery"
      ],
      duration: "3-4 hours",
      difficulty: "Moderate"
    },
    {
      title: "Scorpion Walks",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_8.JPG`,
      description: "Discover fascinating desert creatures that come alive after dark using UV torches",
      details: [
        "UV light nocturnal creature spotting",
        "Scorpion and spider identification",
        "Desert-adapted insect discovery",
        "Night sounds of the Namib",
        "Constellation and stargazing"
      ],
      duration: "1.5 hours",
      difficulty: "Easy"
    },
    {
      title: "Stargazing",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_9.jpg`,
      description: "Marvel at the cosmic ocean above in one of the world's least light-polluted areas",
      details: [
        "Professional astronomy sessions",
        "Southern hemisphere constellations",
        "Planetary observation",
        "Milky Way photography opportunities",
        "Traditional star navigation stories"
      ],
      duration: "2 hours",
      difficulty: "Easy"
    },
    {
      title: "Twyfelfontein Rock Art",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_7.jpg`,
      description: "Explore Namibia's first UNESCO World Heritage Site with ancient San rock engravings",
      details: [
        "6,000-year-old rock art discovery",
        "San culture and history interpretation",
        "Petroglyphs and their meanings",
        "Archaeological site exploration",
        "Traditional hunting scene depictions"
      ],
      duration: "Full day",
      difficulty: "Moderate"
    },
    {
      title: "Geological Excursions",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_4.jpg`,
      description: "Discover the dramatic geological wonders including Burnt Mountain and Organ Pipes",
      details: [
        "Burnt Mountain volcanic formations",
        "Organ Pipes columnar basalt",
        "Petrified Forest ancient trees",
        "Geological timeline understanding",
        "Desert formation processes"
      ],
      duration: "Full day",
      difficulty: "Moderate"
    }
  ];

  const safariBenefits = [
    {
      icon: "🌍",
      title: "Conservation Impact",
      description: "Supporting local communities and wildlife protection through responsible tourism"
    },
    {
      icon: "🏛️",
      title: "Cultural Heritage",
      description: "Preserving ancient traditions and archaeological sites for future generations"
    },
    {
      icon: "🔬",
      title: "Scientific Discovery",
      description: "Contributing to research on desert adaptation and geological phenomena"
    },
    {
      icon: "🤝",
      title: "Community Partnership",
      description: "Direct economic benefits to local Damara communities through joint ventures"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-sand-50 via-stone-50 to-sunset-50">
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
            Doro Nawas Experiences
          </h2>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto">
            Be awe-struck on guided nature drives and walks, marvel at elephant, springbok, oryx, and zebra. 
            Drive across the plains to discover astounding San rock art and learn about Damara culture.
          </p>
        </motion.div>

        {/* Main Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
            >
              <div className="relative h-64">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="safari-accent text-xl text-white mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-stone-200">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-sunset-400 rounded-full mr-2"></span>
                      {experience.duration}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-sunset-400 rounded-full mr-2"></span>
                      {experience.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-stone-700 mb-4">{experience.description}</p>
                
                {selectedExperience === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-stone-200 pt-4"
                  >
                    <h4 className="safari-accent font-semibold text-stone-900 mb-3">
                      Experience Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {experience.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-stone-600">
                          <span className="w-2 h-2 bg-sunset-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                <button className="mt-4 text-sunset-600 hover:text-sunset-700 text-sm font-medium transition-colors">
                  {selectedExperience === index ? 'Show Less' : 'Learn More'} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safari Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="safari-accent text-2xl text-stone-900 mb-8 text-center">
            Your Safari Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safariBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="safari-accent font-semibold text-stone-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-stone-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-earth-900 to-stone-800 rounded-2xl p-12 text-center text-white">
            <h3 className="safari-heading text-3xl mb-6">
              Ready for Your Damaraland Adventure?
            </h3>
            <p className="text-earth-100 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Experience the magic of Namibia&apos;s most dramatic landscape where ancient history meets 
              extraordinary wildlife. Every experience at Doro Nawas contributes to conservation and 
              community development in this remarkable region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-sunset-600 hover:bg-sunset-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg"
              >
                Plan Your Safari
              </a>
              <a 
                href="#gallery" 
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-earth-900 rounded-full font-medium transition-colors duration-300"
              >
                View Gallery
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}