"use client";

import Image from 'next/image';

interface HabitatsProps {
  className?: string;
}

const habitatsData = [
  {
    title: 'Ephemeral rivers',
    description: 'Marienfluss, Hoanib Skeleton Coast, Damaraland regions.',
    image: '/images/doro-nawas/Wilderness Doro Nawas_3.jpg',
    regions: ['Marienfluss', 'Hoanib Skeleton Coast', 'Damaraland']
  },
  {
    title: 'Semi-desert',
    description: 'Doro Nawas, Kulala, Palmwag, Torra regions.',
    image: '/images/damaraland/Wilderness Damaraland Camp_2.jpg',
    regions: ['Doro Nawas', 'Kulala', 'Palmwag', 'Torra']
  },
  {
    title: 'Desert',
    description: 'The iconic Marienfluss and Kulala regions.',
    image: '/images/little-kulala/Wilderness Little Kulala_2.jpg',
    regions: ['Marienfluss', 'Kulala']
  }
];

export default function Habitats({ className = "" }: HabitatsProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${className}`}>
      {habitatsData.map((item, index) => (
        <div 
          key={index}
          className="group transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 group-hover:shadow-xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60" />
            
            {/* Enhanced overlay for habitats */}
            <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="safari-heading text-xl sm:text-2xl transition-all duration-300 text-stone-900 group-hover:text-sunset-600 group-hover:scale-105 origin-left">
              {item.title}
            </h3>
            <p className="safari-body text-sm sm:text-base leading-relaxed transition-colors duration-300 text-stone-600 group-hover:text-stone-800">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.regions.map((region, regionIndex) => (
                <span 
                  key={regionIndex} 
                  style={{ animationDelay: `${regionIndex * 100}ms` }}
                  className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-sunset-100 to-sunset-50 text-sunset-700 text-xs font-medium rounded-full border border-sunset-200 hover:from-sunset-200 hover:to-sunset-100 hover:scale-105 hover:shadow-md transition-all duration-300 transform animate-fade-in cursor-default"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}