"use client";

import { useState } from 'react';
import Weather from './Weather';
import KeyFacts from './KeyFacts';
import Habitats from './Habitats';
import Wildlife from './Wildlife';

interface TabData {
  id: string;
  title: string;
  content: {
    title: string;
    description: string;
    image: string;
    facts?: string[];
    wildlife?: string[];
    regions?: string[];
    weather?: {
      season: string;
      temperature: string;
      rainfall: string;
    }[];
  }[];
}

const tabsData: TabData[] = [
  {
    id: 'key-facts',
    title: 'KEY FACTS',
    content: [
      {
        title: 'Namibia Key Facts',
        description: 'Namibia is home to the last free-roaming black rhinos and desert elephants. It offers a fascinating medley of cultures and European influences in its art, exquisite cuisine and architecture. Here you can explore miles and miles of untouched land in every direction. And embrace total serenity.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_1.jpg`,
        facts: [
          'POPULATION SIZE|3 Million',
          'CURRENCY|Namibian Dollar (NAD)',
          'GEOGRAPHIC SIZE|824,292 km²',
          'BEST TIME TO GO|All year round',
          'LANGUAGE|English'
        ]
      }
    ]
  },
  {
    id: 'habitats',
    title: 'HABITATS',
    content: [
      {
        title: 'Ephemeral rivers',
        description: 'Marienfluss, Hoanib Skeleton Coast, Damaraland regions.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_3.jpg`,
        regions: ['Marienfluss', 'Hoanib Skeleton Coast', 'Damaraland']
      },
      {
        title: 'Semi-desert',
        description: 'Doro Nawas, Kulala, Palmwag, Torra regions.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_2.jpg`,
        regions: ['Doro Nawas', 'Kulala', 'Palmwag', 'Torra']
      },
      {
        title: 'Desert',
        description: 'The iconic Marienfluss and Kulala regions.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_2.jpg`,
        regions: ['Marienfluss', 'Kulala']
      }
    ]
  },
  {
    id: 'wildlife',
    title: 'WILDLIFE',
    content: [
      {
        title: 'Desert Elephants',
        description: 'Specially adapted elephants that traverse vast distances across the desert in search of water.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_4.jpg`,
        wildlife: ['Desert-adapted elephants', 'Small family groups', 'Long-distance migrations', 'Water-dependent']
      },
      {
        title: 'Black Rhino',
        description: 'Critically endangered black rhinos find sanctuary in Namibia\'s conservancy areas.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_5.jpg`,
        wildlife: ['Critically endangered', 'Browser feeding habits', 'Solitary animals', 'Conservation success story']
      },
      {
        title: 'Desert Wildlife',
        description: 'Unique species that have evolved to thrive in one of the world\'s harshest environments.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_3.jpg`,
        wildlife: ['Oryx (Gemsbok)', 'Springbok', 'Brown hyena', 'Desert-adapted species']
      }
    ]
  },
  {
    id: 'weather',
    title: 'WEATHER',
    content: [
      {
        title: 'Dry Season',
        description: 'Clear skies and mild temperatures make this the ideal time for wildlife viewing and photography.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp_1.jpg`,
        weather: [
          { season: 'May - October', temperature: '20-25°C', rainfall: '< 5mm' },
          { season: 'Best for', temperature: 'Wildlife viewing', rainfall: 'Clear skies' }
        ]
      },
      {
        title: 'Hot Season',
        description: 'Summer months bring higher temperatures but spectacular thunderstorms and dramatic skies.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_3.jpg`,
        weather: [
          { season: 'November - April', temperature: '25-35°C', rainfall: '50-150mm' },
          { season: 'Best for', temperature: 'Dramatic skies', rainfall: 'Green landscapes' }
        ]
      },
      {
        title: 'Cool Season',
        description: 'Winter brings cooler temperatures and excellent conditions for outdoor activities.',
        image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_4.jpg`,
        weather: [
          { season: 'June - August', temperature: '5-20°C', rainfall: '0mm' },
          { season: 'Best for', temperature: 'Hiking & activities', rainfall: 'Star gazing' }
        ]
      }
    ]
  }
];

export default function WhatYouNeedToKnow() {
  const [activeTab, setActiveTab] = useState(0);

  const currentTabData = tabsData[activeTab];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h2 className="safari-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 mb-4 sm:mb-6">
              What You Need to Know
            </h2>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <p className="safari-body text-stone-700 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              Going off the beaten track comes with questions.
              When is the best season to view wildlife in Namibia?
              How cold does it get at night and what languages are spoken?
              To help you prepare for your journey, we have put together
              a few key facts to encourage your adventurous spirit.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {tabsData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative safari-accent text-xs sm:text-sm font-semibold tracking-wider transition-all duration-500 ease-out pb-2 sm:pb-3 px-3 sm:px-4 border-b-2 touch-manipulation min-w-0 group ${
                  activeTab === index
                    ? 'text-sunset-500 border-sunset-500 scale-110 drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]'
                    : 'text-stone-800 border-transparent hover:text-orange-600 hover:border-orange-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] active:text-stone-500'
                }`}
              >
                {/* Hover background effect */}
                <span className={`absolute inset-0 -top-2 bg-gradient-to-r from-orange-50 via-sunset-50 to-red-50 dark:from-orange-900/20 dark:via-sunset-900/20 dark:to-red-900/20 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out ${
                  activeTab === index ? 'opacity-0' : ''
                }`} />
                <span className="relative z-10">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>



        {/* Component Rendering Based on Active Tab */}
        {currentTabData.id === 'weather' && <Weather />}
        {currentTabData.id === 'key-facts' && <KeyFacts />}
        {currentTabData.id === 'habitats' && <Habitats />}
        {currentTabData.id === 'wildlife' && <Wildlife />}


      </div>
    </section>
  );
}
