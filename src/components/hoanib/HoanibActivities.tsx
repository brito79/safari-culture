"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const HoanibActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      title: "Nature Drives",
      image: "/images/hoanib-skeleton/nature-drives/1741348647312_Activities_Hiking_007-1.jpg",
      description: "Explore the Hoanib River valley in search of desert-adapted elephants, gemsbok, giraffe, and springbok. These specialized game drives reveal how wildlife has adapted to survive in this harsh desert environment.",
      duration: "3-4 hours",
      highlights: ["Desert-adapted elephants", "Gemsbok & springbok", "Desert-adapted giraffe", "Unique ecosystem"]
    },
    {
      title: "Guided Nature Walks",
      image: "/images/hoanib-skeleton/guided-nature-walks/1741348647312_Activities_Hiking_007-1.jpg", 
      description: "Discover the intricate desert ecosystem on foot with expert guides who share insights into Strandloper history, desert plant adaptations, and the remarkable survival strategies of local wildlife.",
      duration: "2-3 hours",
      highlights: ["Strandloper history", "Desert plant life", "Tracking skills", "Cultural insights"]
    },
    {
      title: "Skeleton Coast Excursions",
      image: "/images/hoanib-skeleton/skeleton-coast-excursions/1741348847441_Activities_SkeletonCoast_SealColony_021.jpg",
      description: "For guests staying 3+ nights, embark on a 4x4 journey to the legendary Skeleton Coast. Witness massive seal colonies and explore haunting shipwreck remains, with return flights offering aerial perspectives.",
      duration: "Full day",
      highlights: ["Cape Cross seal colony", "Shipwreck exploration", "4x4 adventure", "Return scenic flights"]
    },
    {
      title: "Day Excursions",
      image: "/images/hoanib-skeleton/day-excursions/1741347436974_Final-Hoanib-64.jpg",
      description: "Journey to Mudorib Springs and explore Damaraland&apos;s geological wonders. These excursions often include opportunities to track desert-adapted black rhino in their natural habitat.",
      duration: "Full day", 
      highlights: ["Mudorib Springs", "Damaraland geology", "Desert-adapted rhino", "Rock formations"]
    },
    {
      title: "Wildlife Research Encounters",
      image: "/images/hoanib-skeleton/wilderlife-researchers/desert_rhino_camp_2014-08-108e.jpg",
      description: "Meet researchers from the Hoanib Research Centre and learn about Dr Philip Stander&apos;s groundbreaking work with desert-adapted lions and the ongoing conservation efforts in this unique ecosystem.",
      duration: "2-3 hours",
      highlights: ["Desert lion research", "Conservation projects", "Research center visit", "Wildlife tracking"]
    },
    {
      title: "Birding Expeditions", 
      image: "/images/hoanib-skeleton/birding/korhaan-1.jpg",
      description: "Discover endemic species including Rüppell&apos;s korhaan, Benguela long-billed lark, and Verreaux&apos;s eagle. The diverse habitats from desert to coast create exceptional birding opportunities.",
      duration: "3-4 hours",
      highlights: ["Endemic species", "Rüppell's korhaan", "Benguela lark", "Verreaux's eagle"]
    }
  ];

  return (
    <section ref={ref} id="activities" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6">
            Wilderness Adventures
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From tracking desert-adapted elephants to exploring the legendary Skeleton Coast, 
            every activity reveals the remarkable adaptations of life in this unique ecosystem 
            where the Namib Desert meets the Atlantic Ocean.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {activity.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-slate-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {activity.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">🦌</div>
              <h3 className="font-medium text-slate-900 mb-2">Wildlife Viewing</h3>
              <p className="text-slate-600 text-sm">
                All activities include opportunities to encounter desert-adapted wildlife
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="font-medium text-slate-900 mb-2">Expert Guides</h3>
              <p className="text-slate-600 text-sm">
                Professional guides with extensive local knowledge and research experience
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-medium text-slate-900 mb-2">Conservation Focus</h3>
              <p className="text-slate-600 text-sm">
                Learn about ongoing research and conservation efforts in the region
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoanibActivities;