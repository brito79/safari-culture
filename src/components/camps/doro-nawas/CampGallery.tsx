"use client";

import { useState } from "react";
import Image from "next/image";

export default function CampGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_2.jpg`,
      alt: "Doro Nawas camp overview in Damaraland",
      category: "Camp"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_3.jpg`, 
      alt: "Luxury suite with desert views",
      category: "Accommodation"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_4.jpg`,
      alt: "Camp facilities and communal areas", 
      category: "Facilities"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_5.jpg`,
      alt: "Cultural excursion with local community",
      category: "Culture"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_6.jpg`,
      alt: "Nature drive in Damaraland landscape",
      category: "Wildlife"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_7.jpg`,
      alt: "Ancient rock art at Twyfelfontein",
      category: "Culture"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_8.JPG`,
      alt: "Stargazing deck and night sky",
      category: "Activities"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_9.jpg`,
      alt: "Desert landscape and geological formations",
      category: "Landscape"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_10.jpg`,
      alt: "Damaraland wilderness and wildlife",
      category: "Wildlife"
    }
  ];

  const categories = ["All", "Camp", "Accommodation", "Wildlife", "Culture", "Activities", "Landscape", "Facilities"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="safari-heading text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Damaraland Gallery
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Experience the diverse beauty of Doro Nawas through images that capture 
            the essence of this unique destination where ancient culture meets desert wilderness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-sunset-600 text-white"
                  : "bg-white/80 text-black hover:bg-sand-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={`${activeCategory}-${index}`}
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
                  <p className="text-sm font-medium text-stone-900">{image.alt}</p>
                  <span className="text-xs text-black">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
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
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm border border-sand-200 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-medium text-stone-900 mb-2">Professional Photography</h3>
              <p className="text-stone-600 text-sm">
                All images captured by experienced wildlife and landscape photographers
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-medium text-stone-900 mb-2">Authentic Experiences</h3>
              <p className="text-stone-600 text-sm">
                Real moments from guests exploring Damaraland&apos;s natural wonders
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-medium text-stone-900 mb-2">Cultural Heritage</h3>
              <p className="text-stone-600 text-sm">
                Ancient rock art and modern Damara traditions beautifully documented
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}