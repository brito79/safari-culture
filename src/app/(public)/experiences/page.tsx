"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";

export default function ExperiencesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const natureExperiences = [
    {
      id: 1,
      title: "Nature Drives",
      subtitle: "Desert Wildlife Encounters", 
      description: "Get close to rare wildlife, explore otherworldly landscapes and immerse yourself in uncharted territory on a nature drive through Namibia's pristine wilderness.",
      longDescription: "Experience the thrill of tracking desert-adapted elephants, black rhinos, and other wildlife in their natural habitat. Our expert guides navigate ancient riverbeds and dramatic landscapes, sharing intimate knowledge of animal behavior and desert survival strategies.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/Wilderness-Doro-Nawas_1.jpg`,
      duration: "3-4 hours",
      difficulty: "Easy to Moderate",
      bestTime: "Early morning & late afternoon",
      highlights: [
        "Desert-adapted elephant tracking", 
        "Black rhino conservation encounters",
        "Geological formation exploration",
        "Ancient riverbed navigation"
      ],
      camps: ["Doro Nawas", "Damaraland Camp", "Hoanib Skeleton Coast"]
    },
    {
      id: 2,
      title: "Skeleton Coast Expeditions",
      subtitle: "Where Desert Meets Ocean",
      description: "Explore the dramatic Skeleton Coast where the ancient Namib Desert meets the wild Atlantic Ocean, discovering shipwrecks and massive seal colonies.",
      longDescription: "Journey to one of the world's most remote coastlines, where powerful ocean currents have claimed countless vessels. Witness Cape fur seals in their thousands at Cape Cross, explore shipwreck sites, and marvel at the stark beauty of this untamed wilderness.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/1758191665162oevans-1636.jpg`,
      duration: "Full day",
      difficulty: "Easy",
      bestTime: "Year-round",
      highlights: [
        "Cape Cross seal colony (200,000+ seals)",
        "Historic shipwreck sites",
        "Dramatic coastal landscapes", 
        "Marine wildlife observation"
      ],
      camps: ["Hoanib Skeleton Coast"]
    },
    {
      id: 3,
      title: "Sossusvlei Dune Adventures", 
      subtitle: "Ancient Sand Seas",
      description: "Scale the world's highest sand dunes in the heart of the Namib Desert, witnessing sunrise over landscapes unchanged for millions of years.",
      longDescription: "Climb the iconic red dunes of Sossusvlei, including the famous Big Daddy and Dune 45. Experience the ethereal beauty of Dead Vlei's ancient camel thorn trees, perfectly preserved by the desert's dry climate for over 600 years.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/doronawas_02-19-27e.jpg`,
      duration: "Full day",
      difficulty: "Moderate to Challenging",
      bestTime: "Sunrise",
      highlights: [
        "Big Daddy dune climbing",
        "Dead Vlei ancient trees",
        "Sunrise photography",
        "Sand sea exploration"
      ],
      camps: ["Little Kulala"]
    },
    {
      id: 4,
      title: "Hot Air Balloon Safaris",
      subtitle: "Aerial Desert Perspectives", 
      description: "Float silently over the ancient Namib Desert for unparalleled aerial views of this moonlike landscape, followed by a champagne breakfast in the wilderness.",
      longDescription: "Rise with the sun for a magical hot air balloon journey over the world's oldest desert. Drift silently above red dunes, ancient riverbeds, and desert plains while spotting wildlife from a unique vantage point. Land for a champagne breakfast in the wilderness.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/Wilderness-Doro-Nawas_2.jpg`,
      duration: "Half day", 
      difficulty: "Easy",
      bestTime: "Early morning",
      highlights: [
        "Silent flight over desert",
        "Aerial wildlife viewing",
        "Champagne breakfast",
        "Sunrise desert vistas"
      ],
      camps: ["Little Kulala", "Doro Nawas"]
    },
    {
      id: 5,
      title: "Cultural Nature Walks",
      subtitle: "Living Heritage Encounters",
      description: "Walk with Himba communities through their ancestral lands, learning traditional tracking skills and desert survival techniques passed down through generations.",
      longDescription: "Join Himba guides for authentic cultural exchanges in their natural environment. Learn traditional plant uses, animal tracking, and survival skills while supporting community-based conservation efforts in this pristine wilderness.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/Wilderness-Doro-Nawas_2.jpg`,
      duration: "Half day",
      difficulty: "Easy",
      bestTime: "Morning or afternoon", 
      highlights: [
        "Traditional tracking skills",
        "Medicinal plant knowledge",
        "Cultural exchange",
        "Community conservation support"
      ],
      camps: ["Hoanib Skeleton Coast", "Damaraland Camp"]
    },
    {
      id: 6,
      title: "Geological Expeditions",
      subtitle: "Ancient Earth Stories",
      description: "Explore Namibia's fascinating geological heritage, from petrified forests to dramatic mountain formations that tell Earth's ancient stories.",
      longDescription: "Discover the Petrified Forest with trees over 280 million years old, explore the Burnt Mountain's colorful mineral deposits, and marvel at the Organ Pipes' geometric basalt columns. Each site reveals chapters of Earth's geological history.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/experiences/1758190858744doronawas-namibia07-25n-rix61.jpg`,
      duration: "Half day", 
      difficulty: "Easy to Moderate",
      bestTime: "Morning or afternoon",
      highlights: [
        "280-million-year-old petrified trees",
        "Burnt Mountain mineral formations",
        "Organ Pipes basalt columns", 
        "Geological history interpretation"
      ],
      camps: ["Damaraland Camp", "Doro Nawas"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with ExperiencesHero Component */}
      <ExperiencesHero />

      {/* Experiences Grid */}
      <section ref={ref} id="experiences" className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-sunset-100 dark:bg-sunset-900/20 text-sunset-700 dark:text-sunset-400 text-sm font-semibold rounded-full mb-4">
              EXPLORE NAMIBIA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-4 sm:mb-6 px-4">
              Wilderness Adventures
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
              From desert drives to coastal expeditions, each experience offers intimate encounters 
              with Namibia's pristine wilderness and remarkable wildlife.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {natureExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedExperience(experience.id)}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-stone-900 mb-2 group-hover:text-sunset-600 group-hover:translate-x-1 transition-all duration-500">
                      {experience.title}
                    </h3>
                    <p className="text-sunset-600 font-semibold text-xs sm:text-sm tracking-wide uppercase">
                      {experience.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 sm:pt-4 gap-2 sm:gap-0">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-stone-500 font-medium">
                      <span>{experience.duration}</span>
                      <span>•</span>
                      <span>{experience.difficulty}</span>
                    </div>
                    <button className="text-sunset-600 hover:text-white hover:bg-sunset-600 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-500 hover:scale-110 hover:shadow-lg">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedExperience(null)}
        >
          {(() => {
            const experience = natureExperiences.find(exp => exp.id === selectedExperience);
            if (!experience) return null;
            
            return (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-48 sm:h-64 lg:h-96">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-sunset-600 hover:scale-110 hover:rotate-90 transition-all duration-500 text-xl sm:text-2xl font-light"
                  >
                    ×
                  </button>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-12">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 mb-2">
                      {experience.title}
                    </h2>
                    <p className="text-sunset-600 font-semibold tracking-wide uppercase text-xs sm:text-sm">
                      {experience.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 sm:mb-8">
                    {experience.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div>
                      <h4 className="font-light text-lg text-stone-900 mb-3 sm:mb-4">Experience Details</h4>
                      <div className="space-y-2 sm:space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-stone-500">Duration:</span>
                          <span className="text-stone-900">{experience.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Difficulty:</span>
                          <span className="text-stone-900">{experience.difficulty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Best Time:</span>
                          <span className="text-stone-900">{experience.bestTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-light text-lg text-stone-900 mb-3 sm:mb-4">Available At</h4>
                      <div className="space-y-2">
                        {experience.camps.map((camp, idx) => (
                          <div key={idx} className="text-sm text-stone-600">
                            {camp}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-light text-lg text-stone-900 mb-3 sm:mb-4">Experience Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {experience.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-sunset-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-stone-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link 
                      href="/contact"
                      className="flex-1 bg-gradient-to-r from-sunset-500 via-orange-500 to-sunset-600 text-white text-center py-3 sm:py-4 px-4 sm:px-6 hover:from-sunset-600 hover:to-orange-600 hover:scale-105 hover:shadow-2xl transition-all duration-500 font-semibold rounded-lg text-sm sm:text-base"
                    >
                      BOOK THIS EXPERIENCE
                    </Link>
                    <Link 
                      href="/camps"
                      className="flex-1 border-2 border-stone-300 text-stone-900 text-center py-3 sm:py-4 px-4 sm:px-6 hover:bg-stone-900 hover:text-white hover:border-stone-900 hover:scale-105 hover:shadow-xl transition-all duration-500 font-semibold rounded-lg text-sm sm:text-base"
                    >
                      VIEW CAMPS
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })()
          }
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 mb-4 sm:mb-6">
              Ready for Adventure?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 mb-6 sm:mb-8 leading-relaxed">
              Our curated experiential journeys offer you a taste of once-in-a-lifetime adventures 
              filled with intimate encounters and dramatic landscapes.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sunset-500 via-orange-500 to-sunset-600 text-white hover:from-sunset-600 hover:to-orange-600 hover:scale-110 hover:shadow-2xl transition-all duration-500 font-semibold tracking-wide rounded-lg text-sm sm:text-base"
            >
              PLAN YOUR JOURNEY
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}