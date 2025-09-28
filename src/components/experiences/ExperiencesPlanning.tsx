"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ExperiencesPlanning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const planningSteps = [
    {
      step: "01",
      title: "Choose Your Adventure Style",
      description: "Select from luxury desert experiences, cultural immersion, or wildlife expeditions based on your interests.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: "02", 
      title: "Select Your Camps",
      description: "Pick from our four distinctive camps, each offering unique landscapes and experiences across Namibia.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Customize Your Itinerary", 
      description: "Work with our experts to craft the perfect journey length, activities, and seasonal timing for your adventure.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Book & Prepare",
      description: "Secure your dates, receive detailed preparation guides, and get ready for the adventure of a lifetime.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const seasonalGuide = [
    {
      season: "Summer",
      months: "Dec - Mar",
      weather: "Hot & Humid",
      highlights: ["Lush landscapes", "Migratory birds", "Desert blooms", "Photography opportunities"],
      considerations: ["Higher temperatures", "Occasional rainfall", "Best for photography"],
      color: "sunset"
    },
    {
      season: "Autumn", 
      months: "Apr - May",
      weather: "Warm & Dry",
      highlights: ["Perfect weather", "Clear skies", "Excellent wildlife viewing", "Comfortable temperatures"],
      considerations: ["Peak season", "Book early", "Higher demand"],
      color: "earth"
    },
    {
      season: "Winter",
      months: "Jun - Aug", 
      weather: "Cool & Dry",
      highlights: ["Cool mornings", "Clear nights", "Excellent stargazing", "Comfortable walking"],
      considerations: ["Cooler temperatures", "Warm clothing needed", "Dry conditions"],
      color: "stone"
    },
    {
      season: "Spring",
      months: "Sep - Nov",
      weather: "Warming Up",
      highlights: ["Warming temperatures", "Wildlife activity", "Great for all activities", "Shoulder season"],
      considerations: ["Variable weather", "Good value", "Increasing temperatures"],
      color: "sand"
    }
  ];

  const essentials = [
    {
      category: "Clothing",
      items: ["Neutral-colored clothing", "Warm layers for winter", "Sun protection", "Comfortable walking shoes", "Hat and sunglasses"]
    },
    {
      category: "Equipment", 
      items: ["Camera with extra batteries", "Binoculars", "Sunscreen SPF 30+", "Insect repellent", "Flashlight/headlamp"]
    },
    {
      category: "Documents",
      items: ["Valid passport", "Travel insurance", "Emergency contacts", "Medical information", "Vaccination certificates"]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-sand-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Plan Your Journey
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            From initial inspiration to unforgettable memories, we guide you through 
            every step of planning your perfect Namibian wilderness adventure.
          </p>
        </motion.div>

        {/* Planning Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-stone-900 mb-8 text-center">How to Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sunset-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-sunset-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-medium text-stone-900 mb-3">{step.title}</h4>
                <p className="text-black leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seasonal Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-light text-stone-900 mb-8 text-center">When to Visit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalGuide.map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                className="bg-white/90 p-6 rounded-2xl border border-sand-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <h4 className="text-xl font-medium text-stone-900 mb-1">{season.season}</h4>
                  <p className="text-sunset-600 font-medium">{season.months}</p>
                  <p className="text-sm text-black mt-1">{season.weather}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-stone-700 block mb-2">Highlights</span>
                    <ul className="space-y-1">
                      {season.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-sunset-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-black text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <span className="text-xs font-medium text-stone-700 block mb-2">Considerations</span>
                    <ul className="space-y-1">
                      {season.considerations.map((consideration, cIndex) => (
                        <li key={cIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-earth-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-black text-sm">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packing Essentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light text-stone-900 mb-8 text-center">What to Pack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentials.map((essential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                className="bg-white/90 p-6 rounded-2xl border border-sand-200"
              >
                <h4 className="text-xl font-medium text-stone-900 mb-4 text-center">{essential.category}</h4>
                <ul className="space-y-3">
                  {essential.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-sunset-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sunset-500 to-earth-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-medium mb-4">Ready to Start Planning?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our travel experts are here to help you create the perfect Namibian adventure 
              tailored to your interests, schedule, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-sunset-600 rounded-full font-medium hover:bg-sand-50 transition-colors duration-300 shadow-lg"
              >
                Start Planning Now
              </Link>
              <Link 
                href="/camps"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-sunset-600 transition-all duration-300"
              >
                Explore All Camps
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesPlanning;