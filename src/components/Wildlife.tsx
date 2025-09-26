"use client";

import Image from 'next/image';

interface WildlifeProps {
  className?: string;
}

const wildlifeData = [
  {
    title: 'Desert Elephants',
    description: 'Specially adapted elephants that traverse vast distances across the desert in search of water.',
    image: '/images/doro-nawas/Wilderness Doro Nawas_4.jpg',
    wildlife: ['Desert-adapted elephants', 'Small family groups', 'Long-distance migrations', 'Water-dependent']
  },
  {
    title: 'Black Rhino',
    description: 'Critically endangered black rhinos find sanctuary in Namibia\'s conservancy areas.',
    image: '/images/doro-nawas/Wilderness Doro Nawas_5.jpg',
    wildlife: ['Critically endangered', 'Browser feeding habits', 'Solitary animals', 'Conservation success story']
  },
  {
    title: 'Desert Wildlife',
    description: 'Unique species that have evolved to thrive in one of the world\'s harshest environments.',
    image: '/images/little-kulala/Wilderness Little Kulala_3.jpg',
    wildlife: ['Oryx (Gemsbok)', 'Springbok', 'Brown hyena', 'Desert-adapted species']
  }
];

export default function Wildlife({ className = "" }: WildlifeProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${className}`}>
      {wildlifeData.map((item, index) => (
        <div 
          key={index}
          className="group"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="safari-heading text-xl sm:text-2xl transition-all duration-300 text-stone-900 group-hover:text-sunset-600">
              {item.title}
            </h3>
            <p className="safari-body text-sm sm:text-base leading-relaxed transition-colors duration-300 text-stone-700">
              {item.description}
            </p>

            <ul className="space-y-1.5 sm:space-y-2">
              {item.wildlife.map((animal, animalIndex) => (
                <li key={animalIndex} className="safari-body text-xs sm:text-sm text-stone-600 flex items-start">
                  <span className="text-sunset-500 mr-2 flex-shrink-0">•</span>
                  <span className="flex-1">{animal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}