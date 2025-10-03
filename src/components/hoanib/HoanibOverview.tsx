"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const HoanibOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: "🐘",
      title: "Desert Elephants",
      description: "Track legendary desert-adapted elephants in the Hoanib River valley"
    },
    {
      icon: "🏖️",
      title: "Skeleton Coast",
      description: "Explore shipwrecks and seal colonies along this legendary coastline"
    },
    {
      icon: "🏔️",
      title: "Remote Wilderness",
      description: "Experience one of Africa&apos;s most untouched landscapes"
    },
    {
      icon: "🦭",
      title: "Marine Life",
      description: "Witness massive seal colonies at Cape Cross and coastal wildlife"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6">
            Where Desert Meets Ocean
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hoanib Skeleton Coast Camp offers an extraordinary wilderness experience at the intersection 
            of the Namib Desert and the Atlantic Ocean, where unique ecosystems create one of the 
            world&apos;s most remarkable wildlife destinations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                alt="Hoanib landscape with desert and mountains"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">
                A Unique Ecosystem
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                The Hoanib River creates a green ribbon through the desert, supporting remarkable 
                desert-adapted wildlife including elephants, giraffes, and rhinos that have evolved 
                to survive in this harsh environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl mb-3">{highlight.icon}</div>
                  <h4 className="font-medium text-slate-900 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">8</div>
              <div className="text-slate-600 font-medium">Elevated Pavilions</div>
              <div className="text-sm text-slate-500 mt-1">Maximum 16 guests</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">6</div>
              <div className="text-slate-600 font-medium">Unique Activities</div>
              <div className="text-sm text-slate-500 mt-1">Land, sea & air adventures</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">365</div>
              <div className="text-slate-600 font-medium">Days of Wonder</div>
              <div className="text-sm text-slate-500 mt-1">Open year-round</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoanibOverview;