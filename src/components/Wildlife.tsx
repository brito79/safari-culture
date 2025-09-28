"use client";

import { useState } from 'react';
import Image from 'next/image';

interface WildlifeProps {
  className?: string;
}

interface WildlifeSpecies {
  id: number;
  title: string;
  description: string;
  image: string;
  keyFeatures: string[];
  detailedInfo: {
    scientificName: string;
    habitat: string;
    population: string;
    conservation: string;
    behavior: string;
    bestViewingTime: string;
    whereToSee: string[];
    funFacts: string[];
    threats: string[];
    conservationEfforts: string;
  };
}

const wildlifeData: WildlifeSpecies[] = [
  {
    id: 1,
    title: 'Desert Elephants',
    description: 'Magnificent giants specially adapted to traverse vast desert landscapes in search of water and food.',
    image: '/images/doro-nawas/Wilderness Doro Nawas_4.jpg',
    keyFeatures: ['Desert-adapted physiology', 'Long-distance migrations', 'Small family groups', 'Water-dependent behavior'],
    detailedInfo: {
      scientificName: 'Loxodonta africana',
      habitat: 'Arid and semi-arid regions of northwestern Namibia',
      population: '150-350 individuals',
      conservation: 'Vulnerable - Protected under community conservancies',
      behavior: 'These elephants have adapted to desert conditions with longer legs, wider feet, and the ability to go days without water. They follow ancient migration routes passed down through generations.',
      bestViewingTime: 'Early morning and late afternoon, dry season (May-October)',
      whereToSee: ['Hoanib Skeleton Coast', 'Damaraland Camp', 'Doro Nawas'],
      funFacts: [
        'Can detect water sources up to 20km away',
        'Have evolved larger feet to walk on sand',
        'Follow the same migration routes for centuries',
        'Can go up to 4 days without drinking water'
      ],
      threats: ['Human-elephant conflict', 'Climate change', 'Habitat fragmentation'],
      conservationEfforts: 'Community-based conservancies work with local populations to protect these magnificent creatures through sustainable tourism and anti-poaching efforts.'
    }
  },
  {
    id: 2,
    title: 'Black Rhino',
    description: 'Critically endangered giants that have found sanctuary in Namibia&apos;s world-renowned conservation areas.',
    image: '/images/doro-nawas/Wilderness Doro Nawas_5.jpg',
    keyFeatures: ['Critically endangered status', 'Browser feeding habits', 'Solitary behavior', 'Conservation success story'],
    detailedInfo: {
      scientificName: 'Diceros bicornis',
      habitat: 'Arid savannas and desert margins with scattered vegetation',
      population: 'Approximately 2,500 individuals (60% in Namibia)',
      conservation: 'Critically Endangered - Intensive protection and monitoring',
      behavior: 'Solitary and territorial animals, black rhinos are browsers that feed on shrubs, trees, and bushes. They have excellent hearing and smell but poor eyesight.',
      bestViewingTime: 'Early morning and evening, year-round with patience',
      whereToSee: ['Damaraland Camp', 'Doro Nawas', 'Palmwag Concession'],
      funFacts: [
        'Not actually black - their skin is grey',
        'Can run up to 50 km/h despite their size',
        'Have prehensile lips for browsing',
        'Mark territory with dung piles called &ldquo;middens&rdquo;'
      ],
      threats: ['Poaching for horns', 'Habitat loss', 'Human encroachment'],
      conservationEfforts: 'Namibia has achieved remarkable conservation success, increasing black rhino numbers from 707 in 1995 to over 2,500 today through community involvement and strict protection.'
    }
  },
  {
    id: 3,
    title: 'Desert-Adapted Wildlife',
    description: 'Remarkable species that have evolved extraordinary adaptations to thrive in one of Earth&apos;s harshest environments.',
    image: '/images/little-kulala/Wilderness Little Kulala_3.jpg',
    keyFeatures: ['Extreme desert adaptations', 'Water conservation abilities', 'Temperature regulation', 'Unique behavioral patterns'],
    detailedInfo: {
      scientificName: 'Various species including Oryx gazella, Aepyceros melampus',
      habitat: 'Hyper-arid desert environments and semi-desert regions',
      population: 'Varied - from common to near threatened depending on species',
      conservation: 'Generally stable with ongoing monitoring',
      behavior: 'Desert wildlife has evolved remarkable strategies including kidney adaptations for water conservation, behavioral thermoregulation, and efficient foraging patterns.',
      bestViewingTime: 'Early morning and late afternoon when temperatures are cooler',
      whereToSee: ['Little Kulala', 'All desert camps', 'Sossusvlei region'],
      funFacts: [
        'Oryx can raise their body temperature to 45°C to avoid sweating',
        'Many species get all water from their food',
        'Some can detect rainfall from hundreds of kilometers away',
        'Desert beetles collect water from fog on their bodies'
      ],
      threats: ['Climate change', 'Habitat degradation', 'Human development'],
      conservationEfforts: 'Protected through national parks and conservancies, with research ongoing to understand climate change impacts on desert ecosystems.'
    }
  }
];

export default function Wildlife({ className = "" }: WildlifeProps) {
  const [selectedSpecies, setSelectedSpecies] = useState<WildlifeSpecies | null>(null);

  return (
    <>
      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto ${className}`}>
        {wildlifeData.map((species) => (
          <div 
            key={species.id}
            onClick={() => setSelectedSpecies(species)}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-72 overflow-hidden">
              <Image
                src={species.image}
                alt={species.title}
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
              
              {/* Conservation status badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  species.title.includes('Black Rhino') 
                    ? 'bg-red-500/80 text-white' 
                    : species.title.includes('Desert Elephants')
                    ? 'bg-yellow-500/80 text-white'
                    : 'bg-green-500/80 text-white'
                }`}>
                  {species.title.includes('Black Rhino') ? 'Critically Endangered' : 
                   species.title.includes('Desert Elephants') ? 'Vulnerable' : 'Various Status'}
                </span>
              </div>
              
              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-light text-white mb-2 group-hover:text-sand-200 transition-colors">
                  {species.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-stone-600 leading-relaxed mb-4 group-hover:text-stone-800 transition-colors">
                {species.description}
              </p>

              <div className="space-y-2 mb-4">
                {species.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-sunset-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-stone-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-sunset-600 text-sm font-medium group-hover:text-sunset-700 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedSpecies && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedSpecies(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64">
              <Image
                src={selectedSpecies.image}
                alt={selectedSpecies.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <button
                onClick={() => setSelectedSpecies(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-light text-white mb-2">{selectedSpecies.title}</h2>
                <p className="text-white/90 italic">{selectedSpecies.detailedInfo.scientificName}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Habitat & Population</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-2">{selectedSpecies.detailedInfo.habitat}</p>
                    <p className="text-stone-600 text-sm"><strong>Population:</strong> {selectedSpecies.detailedInfo.population}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Behavior & Adaptations</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{selectedSpecies.detailedInfo.behavior}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Best Viewing</h3>
                    <p className="text-stone-600 text-sm">{selectedSpecies.detailedInfo.bestViewingTime}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-3">Where to See</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedSpecies.detailedInfo.whereToSee.map((location, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-sunset-500 rounded-full mr-3" />
                          <span className="text-stone-600 text-sm">{location}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-3">Conservation Status</h3>
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <p className="text-stone-600 text-sm leading-relaxed mb-2">{selectedSpecies.detailedInfo.conservation}</p>
                      <p className="text-stone-600 text-sm leading-relaxed">{selectedSpecies.detailedInfo.conservationEfforts}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-stone-900 mb-4">Fascinating Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSpecies.detailedInfo.funFacts.map((fact, idx) => (
                    <div key={idx} className="flex items-start bg-stone-50 p-4 rounded-lg">
                      <div className="w-2 h-2 bg-earth-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-stone-600 text-sm leading-relaxed">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Threats & Conservation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-3">Current Threats</h3>
                  <div className="space-y-2">
                    {selectedSpecies.detailedInfo.threats.map((threat, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                        <span className="text-stone-600 text-sm">{threat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">Key Features</h3>
                  <div className="space-y-2">
                    {selectedSpecies.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        <span className="text-stone-600 text-sm">{feature}</span>
                      </div>
                    ))}
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