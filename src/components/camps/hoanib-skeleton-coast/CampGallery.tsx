"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/nature-drives/1741348647313_Activities_Hiking_008-1.jpg`,
    alt: "Desert elephants in the Hoanib valley",
    category: "Wildlife"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/skeleton-coast-excursions/1741348847438_Activities_SkeletonCoast_Graveyard_001.jpg`, 
    alt: "Skeleton Coast landscape",
    category: "Landscapes"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/standard-twin/Hoanib_Skeleton_Coast_2014-08-95e1.jpg`,
    alt: "Pavilion interior with desert views", 
    category: "Accommodation"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`,
    alt: "Desert landscape during guided walk",
    category: "Activities"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp_1.jpg`,
    alt: "Gemsbok in desert landscape",
    category: "Wildlife"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/family-accomodation/familytent_hoanib_088.jpg`,
    alt: "Family pavilion with mountain views",
    category: "Accommodation"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/day-excursions/1741347488261_Final-Hoanib-11.jpg`,
    alt: "Damaraland rock formations",
    category: "Landscapes"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/birding/b_lark-1.jpg`,
    alt: "Bird watching in desert environment",
    category: "Activities"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/wilderlife-researchers/b_lark-1.jpg`,
    alt: "Wildlife research in action",
    category: "Conservation"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/skeleton-coast-excursions/1741348847441_Activities_SkeletonCoast_SealColony_021.jpg`,
    alt: "Cape Cross seal colony",
    category: "Wildlife"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/day-excursions/1741347436974_Final-Hoanib-64.jpg`,
    alt: "Desert landscapes and geological formations",
    category: "Landscapes"
  },
  {
    src: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/birding/korhaan-1.jpg`,
    alt: "Karoo korhaan in natural habitat",
    category: "Wildlife"
  }
];

const categories = ["All", "Wildlife", "Landscapes", "Accommodation", "Activities", "Conservation"];

export default function CampGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 safari-heading">
            Coastal Wilderness Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the dramatic beauty of the Hoanib region through images that capture 
            the essence of this unique ecosystem where desert meets ocean.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-gray-600 hover:bg-yellow-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-light"
              >
                ✕ Close
              </button>
              <div className="relative aspect-video max-h-[80vh]">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white/90">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Photography Guidelines</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Professional photography equipment available for guest use</p>
              <p>• Guided photography walks during golden hour lighting</p>
              <p>• Wildlife photography ethics strictly observed</p>
              <p>• Skeleton Coast excursions offer exceptional photographic opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}