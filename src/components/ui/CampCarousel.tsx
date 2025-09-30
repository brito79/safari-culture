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
      <div className="relative h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-neutral-900/40 to-transparent" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Previous camp"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Next camp"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <div className="max-w-2xl">
              <div className="space-y-6">
                <div>
                  <p className="safari-accent text-sm sm:text-base text-sand-200 tracking-widest mb-2">
                    {currentCamp.region}
                  </p>
                  <h2 className="safari-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                    {currentCamp.name.replace("Wilderness ", "")}
                  </h2>
                </div>
                
                <p className="safari-body text-lg sm:text-xl text-white/90 leading-relaxed">
                  {currentCamp.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {currentCamp.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="safari-accent text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full tracking-wider"
                    >
                      {highlight.toUpperCase()}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href={currentCamp.href}
                    className="safari-body px-8 py-4 bg-sunset-500 text-white rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Explore {currentCamp.name.replace("Wilderness ", "")}
                  </Link>
                  <Link
                    href="/contact"
                    className="safari-body px-8 py-4 border-2 border-white/60 text-white rounded-full hover:bg-white/20 hover:border-white transition-all duration-300 text-center backdrop-blur-sm"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {camps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {camps.map((camp, index) => (
          <button
            key={camp.id}
            onClick={() => goToSlide(index)}
            className={`group relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentSlide
                ? "ring-4 ring-sunset-500 ring-offset-2"
                : "hover:ring-2 hover:ring-sunset-300 hover:ring-offset-2"
            }`}
          >
            <Image
              src={camp.images[0]}
              alt={camp.name}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <h3 className="safari-heading text-sm text-white leading-tight">
                {camp.name.replace("Wilderness ", "")}
              </h3>
              <p className="safari-accent text-xs text-sand-200 tracking-wider">
                {camp.region}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}