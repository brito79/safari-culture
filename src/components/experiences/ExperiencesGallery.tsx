"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const ExperiencesGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/experiences/Wilderness Doro Nawas_1.jpg",
      alt: "Wilderness Doro Nawas - Desert landscape with traditional accommodation",
      title: "Doro Nawas Wilderness",
      category: "Desert Landscapes"
    },
    {
      src: "/images/experiences/Wilderness Doro Nawas_2.jpg", 
      alt: "Wilderness Doro Nawas - Cultural heritage and traditional lifestyle",
      title: "Cultural Heritage",
      category: "Local Culture"
    },
    {
      src: "/images/experiences/Wilderness Doro Nawas_3.jpg",
      alt: "Wilderness Doro Nawas - Mountain vistas and geological formations",
      title: "Ancient Mountains", 
      category: "Geological Wonders"
    },
    {
      src: "/images/experiences/Wilderness Hoanib Skeleton Coast_1.jpg",
      alt: "Wilderness Hoanib Skeleton Coast - Dramatic coastal landscapes",
      title: "Skeleton Coast Wilderness",
      category: "Coastal Adventures"
    },
    {
      src: "/images/experiences/Wilderness Hoanib Skeleton Coast_2.jpg",
      alt: "Wilderness Hoanib Skeleton Coast - Marine wildlife and seal colonies", 
      title: "Marine Wildlife",
      category: "Wildlife Encounters"
    },
    {
      src: "/images/experiences/Wilderness Hoanib Skeleton Coast_3.jpg",
      alt: "Wilderness Hoanib Skeleton Coast - Desert meets ocean landscape",
      title: "Desert Meets Ocean",
      category: "Unique Ecosystems"
    },
    {
      src: "/images/experiences/Wilderness Little Kulala_1.jpg",
      alt: "Wilderness Little Kulala - Iconic red sand dunes of Sossusvlei",
      title: "Sossusvlei Dunes",
      category: "Desert Adventures"
    },
    {
      src: "/images/experiences/Wilderness Little Kulala_2.jpg",
      alt: "Wilderness Little Kulala - Hot air balloon over ancient desert",
      title: "Aerial Perspectives",
      category: "Adventure Activities"
    },
    {
      src: "/images/experiences/Wilderness Little Kulala_3.jpg",
      alt: "Wilderness Little Kulala - Sunrise over red sand dunes",
      title: "Desert Sunrise",
      category: "Natural Phenomena"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Visual Journey
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the breathtaking beauty of Namibia through our curated 
            gallery of authentic wilderness experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-medium leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20">
                    <svg 
                      className="w-6 h-6 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                priority
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <span className="text-white/80 text-sm font-medium block mb-1">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-white text-2xl font-medium">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Arrows */}
              {selectedImage > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {selectedImage < galleryImages.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperiencesGallery;