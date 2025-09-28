"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const ExperiencesCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Wildlife Encounters");

  const experiences = [
    {
      category: "Wildlife Encounters",
      color: "earth",
      experiences: [
        {
          name: "Desert-Adapted Elephant Tracking",
          description: "Follow ancient migration paths to encounter the legendary desert elephants of Namibia in their natural mountain habitat.",
          locations: ["Doro Nawas", "Hoanib Skeleton Coast", "Damaraland Camp"],
          difficulty: "Moderate",
          duration: "Half Day",
          highlights: ["Ancient migration routes", "Desert adaptations", "Photography opportunities"]
        },
        {
          name: "Black Rhino Conservation",
          description: "Support and witness rhino conservation efforts while tracking these critically endangered desert black rhino.",
          locations: ["Doro Nawas", "Damaraland Camp"],
          difficulty: "Easy",
          duration: "Full Day",
          highlights: ["Conservation education", "Tracking techniques", "Research support"]
        },
        {
          name: "Cape Cross Seal Colony",
          description: "Visit one of the world&apos;s largest fur seal colonies along the dramatic Skeleton Coast shoreline.",
          locations: ["Hoanib Skeleton Coast"],
          difficulty: "Easy",
          duration: "Half Day",
          highlights: ["200,000+ seals", "Coastal ecosystem", "Marine wildlife"]
        }
      ]
    },
    {
      category: "Desert Adventures",
      color: "sunset",
      experiences: [
        {
          name: "Sossusvlei Dune Climbing",
          description: "Scale the iconic red dunes including Big Daddy and Dune 45 at sunrise for breathtaking desert vistas.",
          locations: ["Little Kulala"],
          difficulty: "Challenging",
          duration: "Full Day",
          highlights: ["Ancient sand seas", "Sunrise photography", "Desert wilderness"]
        },
        {
          name: "Hot Air Ballooning",
          description: "Float silently over the ancient Namib Desert for unparalleled aerial views of this moonlike landscape.",
          locations: ["Little Kulala", "Doro Nawas"],
          difficulty: "Easy",
          duration: "Half Day",
          highlights: ["Aerial perspectives", "Silent flight", "Champagne breakfast"]
        },
        {
          name: "Shipwreck Coast Exploration", 
          description: "Discover haunting maritime history along the treacherous Skeleton Coast with expert guides.",
          locations: ["Hoanib Skeleton Coast"],
          difficulty: "Easy",
          duration: "Full Day",
          highlights: ["Maritime history", "Shipwreck sites", "Coastal geology"]
        }
      ]
    },
    {
      category: "Cultural Heritage",
      color: "stone",
      experiences: [
        {
          name: "Himba Cultural Visits",
          description: "Meet the semi-nomadic Himba people and learn about their traditional lifestyle and customs.",
          locations: ["Hoanib Skeleton Coast", "Damaraland Camp"],
          difficulty: "Easy",
          duration: "Half Day",
          highlights: ["Traditional lifestyle", "Cultural exchange", "Authentic encounters"]
        },
        {
          name: "Ancient Rock Art Tours",
          description: "Explore prehistoric rock engravings at Twyfelfontein UNESCO World Heritage sites with expert guides.",
          locations: ["Damaraland Camp"],
          difficulty: "Easy", 
          duration: "Full Day",
          highlights: ["6,000-year-old art", "UNESCO World Heritage", "Archaeological significance"]
        },
        {
          name: "Traditional Craft Workshops",
          description: "Learn traditional skills from local artisans and create unique handmade souvenirs.",
          locations: ["All Camps"],
          difficulty: "Easy",
          duration: "2-3 Hours",
          highlights: ["Local artisans", "Hands-on learning", "Take-home crafts"]
        }
      ]
    }
  ];

  const categories = experiences.map(exp => exp.category);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-700 bg-green-100";
      case "Moderate": return "text-yellow-700 bg-yellow-100";
      case "Challenging": return "text-red-700 bg-red-100";
      default: return "text-stone-700 bg-stone-100";
    }
  };

  const activeExperiences = experiences.find(exp => exp.category === activeCategory)?.experiences || [];

  return (
    <section ref={ref} id="experiences" className="py-20 bg-gradient-to-b from-neutral-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Experience Categories
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Choose from diverse adventure categories, each offering unique perspectives 
            on Namibia&apos;s extraordinary wilderness and cultural heritage.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-sunset-600 text-white shadow-lg"
                  : "bg-white/80 text-black hover:bg-sand-100 border border-sand-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Active Category Experiences */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 p-8 rounded-2xl border border-sand-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium text-stone-900 leading-tight group-hover:text-sunset-600 transition-colors">
                  {experience.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(experience.difficulty)}`}>
                  {experience.difficulty}
                </span>
              </div>
              
              <p className="text-black leading-relaxed mb-6">
                {experience.description}
              </p>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-medium text-stone-700 block mb-2">
                    Key Highlights
                  </span>
                  <div className="space-y-1">
                    {experience.highlights.map((highlight, hlIndex) => (
                      <div key={hlIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-sunset-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-black text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-xs font-medium text-stone-700 block mb-2">
                    Available At
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {experience.locations.map((location, locIndex) => (
                      <span key={locIndex} className="text-xs px-3 py-1 bg-earth-100 text-earth-700 rounded-full">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-sand-200">
                  <div>
                    <span className="text-xs font-medium text-stone-700 block">Duration</span>
                    <span className="text-black text-sm">{experience.duration}</span>
                  </div>
                  <Link 
                    href="/contact"
                    className="text-sunset-600 hover:text-sunset-700 text-sm font-medium transition-colors"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-black mb-6">
            Ready to create your perfect Namibian adventure?
          </p>
          <Link 
            href="/contact"
            className="px-8 py-4 bg-sunset-500 hover:bg-sunset-600 text-white rounded-full font-medium transition-colors duration-300 shadow-lg inline-block"
          >
            Plan My Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesCategories;