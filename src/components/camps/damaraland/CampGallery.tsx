"use client";

import Image from "next/image";
import { useState } from "react";

export default function CampGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryCategories = [
    { id: "all", name: "All Images" },
    { id: "accommodation", name: "Accommodation" },
    { id: "activities", name: "Activities" },
    { id: "landscapes", name: "Landscapes" },
    { id: "wildlife", name: "Wildlife" }
  ];

  const galleryImages = [
    // Accommodation
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_1.jpg`,
      alt: "Damaraland Camp Main View",
      category: "accommodation"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_3.jpg`,
      alt: "Tented Suite Interior",
      category: "accommodation"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_8.jpg`,
      alt: "Family Accommodation",
      category: "accommodation"
    },
    // Activities
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`,
      alt: "Nature Drive Experience",
      category: "activities"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_5.jpg`,
      alt: "Cultural Excursion",
      category: "activities"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_6.jpg`,
      alt: "Twyfelfontein Rock Art",
      category: "activities"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_7.jpg`,
      alt: "Guided Nature Walk",
      category: "activities"
    },
    // Landscapes
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_2.jpg`,
      alt: "Desert Mountain Landscape",
      category: "landscapes"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Camp Gallery
          </h2>
          <p className="safari-accent text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Discover the beauty of Damaraland through our curated collection of images showcasing 
            the camp&apos;s unique accommodations, diverse activities, and stunning natural landscapes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`safari-accent px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-earth-500 text-white"
                  : "bg-white text-stone-700 hover:bg-earth-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative h-80 group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="safari-accent font-medium text-lg">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}