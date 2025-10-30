"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Cuisine() {
  return (
    <section id="cuisine" className="py-20 bg-gradient-to-br from-sand-50 via-stone-50 to-sunset-50">
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
            Traditional Flavors & Local Ingredients
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Experience authentic Namibian cuisine crafted from locally sourced ingredients and traditional recipes
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_8.JPG`}
                alt="Traditional dining under the Namibian stars at Doro Nawas"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-sunset-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-earth-200 rounded-full opacity-20 blur-xl"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            
            {/* Main Description */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-2xl p-8 shadow-lg">
              <h3 className="safari-accent text-2xl text-stone-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-sunset-500 rounded-full mr-3"></span>
                Farm-to-Table Philosophy
              </h3>
              <p className="text-stone-700 text-lg leading-relaxed">
                To reduce our foodprint, strengthen our ties with the community, and create a healthier 
                environment for all of us, we use locally grown ingredients in traditional recipes. During 
                your stay at Doro Nawas try indigenous produce like venison, dates, local spinach, and beans 
                cooked on an open fire in the boma, or served fresh from the BBQ on the rooftop, with the 
                stars close enough to touch.
              </p>
            </div>

            {/* Culinary Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Boma Dining */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-earth-100 to-sand-100 rounded-xl p-6 border border-earth-200"
              >
                <div className="text-3xl mb-3">🔥</div>
                <h4 className="safari-accent font-semibold text-stone-900 mb-3">Boma Fire Cooking</h4>
                <p className="text-stone-700 text-sm">
                  Authentic outdoor cooking experience around a traditional fire pit under the desert sky
                </p>
              </motion.div>

              {/* Rooftop Dining */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-sunset-100 to-sand-100 rounded-xl p-6 border border-sunset-200"
              >
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="safari-accent font-semibold text-stone-900 mb-3">Rooftop BBQ</h4>
                <p className="text-stone-700 text-sm">
                  Fresh grilled dishes served on the rooftop with panoramic desert views and star-filled skies
                </p>
              </motion.div>

            </div>

            {/* Local Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-r from-stone-100 to-earth-100 rounded-xl p-6 border border-stone-200"
            >
              <h4 className="safari-accent font-semibold text-stone-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🌿</span>
                Indigenous Ingredients
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Venison', 'Dates', 'Local Spinach', 'Traditional Beans'].map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/80 text-stone-700 rounded-full text-sm font-medium border border-stone-300"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-earth-900 to-stone-800 rounded-2xl p-12 text-white text-center">
            <h3 className="safari-heading text-3xl mb-6">
              Supporting Local Communities
            </h3>
            <p className="text-earth-100 text-lg leading-relaxed max-w-4xl mx-auto">
              Our culinary program directly supports local farmers and traditional food producers, 
              creating sustainable income for Damaraland communities while preserving ancient 
              culinary traditions and reducing our environmental impact.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
