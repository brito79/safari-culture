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
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_1.jpg`,
      alt: "Little Kulala Villa Exterior",
      category: "accommodation"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_064.jpg`,
      alt: "Family Villa Interior",
      category: "accommodation"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_039.jpg`,
      alt: "Star Bed Experience",
      category: "accommodation"
    },
    // Activities
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/03_little_kulala_balloon_on_board_1094.jpg`,
      alt: "Hot Air Balloon Flight",
      category: "activities"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/quad-bikes/11_little_kulala_quad_bikes_0804.jpg`,
      alt: "Quad Biking Adventure",
      category: "activities"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/guided-nature-trails/ecozone_littlekulala_teagancunniffe_004.jpg`,
      alt: "Guided Nature Walk",
      category: "activities"
    },
    // Landscapes
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvlei-and-deadvlei-aerial-custom.jpg`,
      alt: "Aerial View of Sossusvlei",
      category: "landscapes"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/stargazing/kulala-namib_2014-12-121e.jpg`,
      alt: "Night Sky over Little Kulala",
      category: "landscapes"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scenic-sundowner/nam2019-1.jpg`,
      alt: "Desert Sunset",
      category: "landscapes"
    },
    // More images
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_2.jpg`,
      alt: "Desert Villa with Pool",
      category: "accommodation"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/nature-drives/sociable_weaver.jpg`,
      alt: "Sociable Weaver Bird",
      category: "wildlife"
    },
    {
      src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/barking_gecko_peeking_out_of_hole.jpg`,
      alt: "Barking Gecko",
      category: "wildlife"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-stone-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-6">
            Gallery
          </h2>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto mb-12">
            Explore the beauty and wonder of Little Kulala through our collection of stunning imagery
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`safari-accent px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-sunset-500 text-white shadow-lg"
                    : "bg-white text-stone-600 hover:bg-sunset-50 hover:text-sunset-600 border border-stone-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-20 bg-white rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-light text-sunset-500 mb-2">11</div>
              <div className="safari-accent text-stone-600">Desert Villas</div>
            </div>
            <div>
              <div className="text-4xl font-light text-sunset-500 mb-2">365</div>
              <div className="safari-accent text-stone-600">Days of Sunshine</div>
            </div>
            <div>
              <div className="text-4xl font-light text-sunset-500 mb-2">300M</div>
              <div className="safari-accent text-stone-600">Dune Heights</div>
            </div>
            <div>
              <div className="text-4xl font-light text-sunset-500 mb-2">5M</div>
              <div className="safari-accent text-stone-600">Years Old Desert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}