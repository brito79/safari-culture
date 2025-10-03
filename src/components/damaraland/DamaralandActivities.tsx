"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DamaralandActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      title: "Nature Drives",
      description: "Morning and afternoon nature drives reveal the dramatic scenery and fascinating wildlife of the region. Desert-adapted elephant are the highlight of the area, although the natural cycle of rainfall dictates the seasonal movements of wildlife along the Huab River.",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Desert-adapted elephants", "Dramatic scenery", "Huab River wildlife", "Morning & afternoon options"],
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`
    },
    {
      title: "Guided Nature Walks",
      description: "Learn more about the ancient geological wonders of Damaraland, as well as the unique plants, birds and reptiles that have superbly adapted to this arid area. Weather permitting and subject to the availability of a qualified walking guide.",
      duration: "2-3 Hours",
      difficulty: "Moderate",
      highlights: ["Geological wonders", "Adapted flora & fauna", "Birds & reptiles", "Weather dependent"],
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_7.jpg`
    },
    {
      title: "Full Day Twyfelfontein Excursion",
      description: "Damaraland is known for its ancient rock art. Guests on stays of three nights or more can take a day drive to Twyfelfontein, and visit some of these remains and marvel at the artists of ages past. Picnic lunch provided. Subject to guide and vehicle availability.",
      duration: "Full Day", 
      difficulty: "Easy",
      highlights: ["Ancient rock art", "UNESCO World Heritage", "Picnic lunch included", "3+ night stays only"],
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_6.jpg`
    },
    {
      title: "Cultural Excursion",
      description: "Learn about the unique heritage of the local peoples, which include Nama-Damara, Herero, Owambo, and the displaced Riemvasmaakers of South Africa. This activity allows you to respectfully engage with these communities, and includes a visit to the local school when available as per the school calendar.",
      duration: "Half Day",
      difficulty: "Easy",
      highlights: ["Local heritage", "Community engagement", "School visits", "Cultural respect"],
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_5.jpg`
    }
  ];

  const timeSlots = [
    {
      time: "Early Morning",
      period: "5:30 - 9:00",
      activity: "Elephant tracking & wildlife viewing"
    },
    {
      time: "Late Morning",
      period: "9:30 - 12:30",
      activity: "Cultural visits & rock art exploration"
    },
    {
      time: "Afternoon",
      period: "15:30 - 18:30",
      activity: "Geological tours & scenic drives"
    }
  ];

  return (
    <section ref={ref} id="activities" className="py-20 bg-gradient-to-b from-earth-50 to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Cultural & Wildlife Adventures
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in authentic cultural experiences and extraordinary wildlife encounters 
            that reveal the ancient secrets and natural wonders of this remarkable UNESCO World Heritage landscape.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="space-y-16 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`relative h-80 rounded-2xl overflow-hidden ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className={`bg-white/80 p-8 rounded-2xl border border-sand-200 ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                    {activity.duration}
                  </span>
                  <span className="px-3 py-1 bg-sand-100 text-sand-700 rounded-full text-sm font-medium">
                    {activity.difficulty}
                  </span>
                </div>
                
                <h3 className="text-2xl font-light text-stone-900 mb-4">
                  {activity.title}
                </h3>
                
                <p className="text-black leading-relaxed mb-4">
                  {activity.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium text-stone-700 mb-3">Highlights</h4>
                  <div className="space-y-2">
                    {activity.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-sunset-500 rounded-full mr-3"></div>
                        <span className="text-black text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-sand-50 to-earth-50 p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-light text-stone-900 text-center mb-8">
            Daily Adventure Schedule
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeSlots.map((slot, index) => (
              <div key={index} className="text-center bg-white/60 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-stone-900 mb-2">
                  {slot.time}
                </h4>
                <p className="text-earth-600 font-medium mb-3">{slot.period}</p>
                <p className="text-black text-sm">
                  {slot.activity}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-black text-sm mt-6">
            All activities are weather dependent and can be customized based on wildlife movements and cultural availability
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DamaralandActivities;