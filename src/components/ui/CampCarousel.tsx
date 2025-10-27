"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Camp {
  id: string;
  name: string;
  location: string;
  region: string;
  description: string;
  images: string[];
  href: string;
  highlights: string[];
}

const camps: Camp[] = [
  {
    id: "doro-nawas",
    name: "Wilderness Doro Nawas",
    location: "Damaraland, Namibia",
    region: "DAMARALAND",
    description: "A fortress on a rocky outcrop with sweeping views across ancient plains. Track desert-adapted elephants and black rhinos in this UNESCO World Heritage landscape.",
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_1.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_2.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_3.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_4.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_5.jpg`
    ],
    href: "/camps/doro-nawas",
    highlights: ["Desert-adapted elephants", "Black rhino tracking", "Ancient rock art", "Luxury suites"]
  },
  {
    id: "little-kulala",
    name: "Wilderness Little Kulala",
    location: "Sossusvlei, Namibia", 
    region: "SOSSUSVLEI",
    description: "Gateway to the towering red dunes of Sossusvlei. Wake to sunrise over the Namib Desert, the world's oldest desert stretching endlessly to the horizon.",
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_1.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_2.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_3.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_4.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala.jpg`
    ],
    href: "/camps/little-kulala",
    highlights: ["Sossusvlei dunes", "Hot air ballooning", "Desert activities", "Climate-controlled suites"]
  },
  {
    id: "hoanib-skeleton-coast",
    name: "Wilderness Hoanib Skeleton Coast",
    location: "Skeleton Coast, Namibia",
    region: "SKELETON COAST", 
    description: "Remote wilderness at the edge of the world. Explore the mysterious Skeleton Coast where desert meets ocean in dramatic fashion.",
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp_1.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp_2.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp_3.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`
    ],
    href: "/camps/hoanib-skeleton-coast",
    highlights: ["Seal colonies", "Shipwreck exploration", "Desert elephants", "Coastal wilderness"]
  },
  {
    id: "damaraland-camp",
    name: "Wilderness Damaraland Camp",
    location: "Damaraland, Namibia",
    region: "DAMARALAND",
    description: "A luxury camp in the heart of ancient Damaraland, famous for desert-adapted elephants and rich cultural heritage with stunning mountain views.",
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_1.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_2.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_3.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_5.jpg`
    ],
    href: "/camps/damaraland-camp",
    highlights: ["Cultural encounters", "Mountain landscapes", "Elephant tracking", "Rock art sites"]
  }
];

interface CampCarouselProps {
  className?: string;
}

export default function CampCarousel({ className = "" }: CampCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % camps.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % camps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + camps.length) % camps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentCamp = camps[currentSlide];

  return (
    <div className={`relative ${className}`}>
      {/* Main Carousel Container */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={currentCamp.images[0]}
            alt={`${currentCamp.name} - ${currentCamp.description}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover transition-all duration-1000 ease-in-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-neutral-900/80 via-neutral-900/50 to-transparent" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-xl"
          aria-label="Previous camp"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-xl"
          aria-label="Next camp"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 sm:pb-0">
            <div className="max-w-full sm:max-w-2xl">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div>
                  <p className="safari-accent text-xs sm:text-sm lg:text-base text-sand-200 tracking-widest mb-2 font-semibold">
                    {currentCamp.region}
                  </p>
                  <h2 className="safari-heading text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight font-bold drop-shadow-2xl">
                    {currentCamp.name.replace("Wilderness ", "")}
                  </h2>
                </div>
                
                <p className="safari-body text-sm sm:text-base lg:text-lg xl:text-xl text-white/95 leading-relaxed drop-shadow-lg">
                  {currentCamp.description}
                </p>

                {/* Highlights */}
                <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3">
                  {currentCamp.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="safari-accent text-xs px-3 py-1.5 bg-white/25 backdrop-blur-md text-white rounded-full tracking-wider font-medium shadow-lg"
                    >
                      {highlight.toUpperCase()}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Link
                    href={currentCamp.href}
                    className="safari-body text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-sunset-500 text-white rounded-full hover:bg-sunset-600 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl text-center"
                  >
                    Explore {currentCamp.name.replace("Wilderness ", "")}
                  </Link>
                  <Link
                    href="/contact"
                    className="safari-body text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/80 text-white rounded-full hover:bg-white hover:text-stone-900 hover:scale-105 transition-all duration-500 text-center backdrop-blur-md shadow-lg hover:shadow-2xl"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {camps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-white scale-110 shadow-lg"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/60 hover:bg-white/80 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {camps.map((camp, index) => (
          <button
            key={camp.id}
            onClick={() => goToSlide(index)}
            className={`group relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl ${
              index === currentSlide
                ? "ring-3 sm:ring-4 ring-sunset-500 ring-offset-2 scale-105"
                : "hover:ring-2 hover:ring-sunset-400 hover:ring-offset-2 hover:scale-105"
            }`}
          >
            <Image
              src={camp.images[0]}
              alt={camp.name}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
              <h3 className="safari-heading text-xs sm:text-sm text-white leading-tight font-bold drop-shadow-lg">
                {camp.name.replace("Wilderness ", "")}
              </h3>
              <p className="safari-accent text-[10px] sm:text-xs text-sand-200 tracking-wider font-medium mt-0.5">
                {camp.region}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}