"use client";

import { useState } from 'react';
import Image from 'next/image';

interface HabitatsProps {
  className?: string;
}

interface Habitat {
  id: number;
  title: string;
  description: string;
  image: string;
  regions: string[];
  detailedInfo: {
    ecosystem: string;
    wildlife: string[];
    bestSeason: string;
    activities: string[];
    characteristics: string;
  };
}

const habitatsData: Habitat[] = [
  {
    id: 1,
    title: 'Ephemeral Rivers',
    description: 'Seasonal waterways that support unique desert-adapted wildlife and vegetation.',
    image: '/images/doro-nawas/Wilderness Doro Nawas_3.jpg',
    regions: ['Marienfluss', 'Hoanib Skeleton Coast', 'Damaraland'],
    detailedInfo: {
      ecosystem: 'Riverine desert environment with seasonal water flow',
      wildlife: ['Desert elephants', 'Giraffe', 'Springbok', 'Oryx', 'Brown hyena'],
      bestSeason: 'Dry season (May-October) for wildlife concentrations',
      activities: ['Wildlife tracking', 'Photography', 'Nature walks'],
      characteristics: 'These ancient riverbeds come alive during rare rainfall, creating lush corridors through the desert that support incredible biodiversity.'
    }
  },
  {
    id: 2,
    title: 'Semi-Desert',
    description: 'Transitional zones where grassland meets desert, supporting diverse ecosystems.',
    image: '/images/damaraland/Wilderness Damaraland Camp_2.jpg', 
    regions: ['Doro Nawas', 'Kulala', 'Palmwag', 'Torra'],
    detailedInfo: {
      ecosystem: 'Mixed grassland and desert scrub environment',
      wildlife: ['Black rhino', 'Lion', 'Cheetah', 'Elephant', 'Various antelope species'],
      bestSeason: 'Year-round, with different seasonal highlights',
      activities: ['Game drives', 'Rhino tracking', 'Cultural visits'],
      characteristics: 'These transitional landscapes offer the best of both worlds, with varied terrain supporting exceptional wildlife diversity.'
    }
  },
  {
    id: 3,
    title: 'Pure Desert',
    description: 'Ancient sand seas and rocky outcrops representing the world\'s oldest desert.',
    image: '/images/little-kulala/Wilderness Little Kulala_2.jpg',
    regions: ['Sossusvlei', 'Marienfluss', 'Kulala'],
    detailedInfo: {
      ecosystem: 'Hyper-arid environment with specialized flora and fauna',
      wildlife: ['Oryx', 'Ostrich', 'Desert beetles', 'Geckos', 'Snakes'],
      bestSeason: 'Cooler months (April-September) for comfort',
      activities: ['Dune climbing', 'Hot air ballooning', 'Stargazing'],
      characteristics: 'The Namib Desert, over 80 million years old, showcases remarkable adaptations of life to extreme conditions.'
    }
  }
];

export default function Habitats({ className = "" }: HabitatsProps) {
  const [selectedHabitat, setSelectedHabitat] = useState<Habitat | null>(null);

  return (
    <>
      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto ${className}`}>
        {habitatsData.map((habitat) => (
          <div 
            key={habitat.id}
            onClick={() => setSelectedHabitat(habitat)}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-72 overflow-hidden">
              <Image
                src={habitat.image}
                alt={habitat.title}
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Click indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              
              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-light text-white mb-2 group-hover:text-sand-200 transition-colors">
                  {habitat.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-stone-600 leading-relaxed mb-4 group-hover:text-stone-800 transition-colors">
                {habitat.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {habitat.regions.map((region, regionIndex) => (
                  <span 
                    key={regionIndex} 
                    className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded-full border border-stone-200 group-hover:bg-sunset-50 group-hover:text-sunset-700 group-hover:border-sunset-200 transition-colors duration-300"
                  >
                    {region}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-sunset-600 text-sm font-medium group-hover:text-sunset-700 transition-colors">
                <span>Explore Details</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedHabitat && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedHabitat(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64">
              <Image
                src={selectedHabitat.image}
                alt={selectedHabitat.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <button
                onClick={() => setSelectedHabitat(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-light text-white mb-2">{selectedHabitat.title}</h2>
                <p className="text-white/90">{selectedHabitat.description}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Ecosystem</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{selectedHabitat.detailedInfo.ecosystem}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Characteristics</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{selectedHabitat.detailedInfo.characteristics}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Best Season</h3>
                    <p className="text-stone-600 text-sm">{selectedHabitat.detailedInfo.bestSeason}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-3">Wildlife</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedHabitat.detailedInfo.wildlife.map((animal, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-sunset-500 rounded-full mr-3" />
                          <span className="text-stone-600 text-sm">{animal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-3">Activities</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedHabitat.detailedInfo.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-earth-500 rounded-full mr-3" />
                          <span className="text-stone-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Regions</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedHabitat.regions.map((region, idx) => (
                        <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-700 text-xs rounded-full border">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}