"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const HoanibGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/hoanib-skeleton/nature-drives/1741348647313_Activities_Hiking_008-1.jpg",
      alt: "Desert elephants in the Hoanib valley",
      category: "Wildlife"
    },
    {
      src: "/images/hoanib-skeleton/skeleton-coast-excursions/1741348847438_Activities_SkeletonCoast_Graveyard_001.jpg", 
      alt: "Skeleton Coast landscape",
      category: "Landscapes"
    },
    {
      src: "/images/hoanib-skeleton/standard-twin/Hoanib_Skeleton_Coast_2014-08-95e1.jpg",
      alt: "Pavilion interior with desert views", 
      category: "Accommodation"
    },
    {
      src: "/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg",
      alt: "Desert landscape during guided walk",
      category: "Activities"
    },
    {
      src: "/images/hoanib-skeleton/Wilderness Hoanib Skeleton Coast Camp_1.jpg",
      alt: "Gemsbok in desert landscape",
      category: "Wildlife"
    },
    {
      src: "/images/hoanib-skeleton/family-accomodation/familytent_hoanib_088.jpg",
      alt: "Family pavilion with mountain views",
      category: "Accommodation"
    },
    {
      src: "/images/hoanib-skeleton/day-excursions/1741347488261_Final-Hoanib-11.jpg",
      alt: "Damaraland rock formations",
      category: "Landscapes"
    },
    {
      src: "/images/hoanib-skeleton/birding/b_lark-1.jpg",
      alt: "Bird watching in desert environment",
      category: "Activities"
    },
    {
      src: "/images/hoanib-skeleton/wilderlife-researchers/b_lark-1.jpg",
      alt: "Wildlife research in action",
      category: "Conservation"
    }
  ];

  const categories = ["All", "Wildlife", "Landscapes", "Accommodation", "Activities", "Conservation"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section ref={ref} id="gallery" className="py-20 bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6">
            Coastal Wilderness Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the dramatic beauty of the Hoanib region through images that capture 
            the essence of this unique ecosystem where desert meets ocean.
          </p>
        </motion.div>

        {/* Category Filter */}
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
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white/80 text-slate-600 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-slate-900">{image.alt}</p>
                  <span className="text-xs text-blue-600">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                ×
              </button>
              {selectedImage > 0 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  ←
                </button>
              )}
              {selectedImage < filteredImages.length - 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  →
                </button>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Gallery Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">
            Experience these moments for yourself at Hoanib Skeleton Coast Camp
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg">
            Plan Your Visit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HoanibGallery;