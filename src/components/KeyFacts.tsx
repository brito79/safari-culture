"use client";

import Image from 'next/image';

interface KeyFactsProps {
  className?: string;
}

const keyFactsData = {
  title: 'Namibia Key Facts',
  description: 'Namibia is home to the last free-roaming black rhinos and desert elephants. It offers a fascinating medley of cultures and European influences in its art, exquisite cuisine and architecture. Here you can explore miles and miles of untouched land in every direction. And embrace total serenity.',
  image: '/images/little-kulala/Wilderness Little Kulala_1.jpg',
  facts: [
    'POPULATION SIZE|3 Million',
    'CURRENCY|Namibian Dollar (NAD)',
    'GEOGRAPHIC SIZE|824,292 km²',
    'BEST TIME TO GO|All year round',
    'LANGUAGE|English'
  ]
};

export default function KeyFacts({ className = "" }: KeyFactsProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden sm:p-12 lg:p-16 ${className}`}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src={keyFactsData.image}
          alt={keyFactsData.title}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Title and Description */}
        <div className="space-y-6">
          <h3 className="safari-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            {keyFactsData.title}
          </h3>
          <p className="safari-body text-base sm:text-lg text-stone-200 leading-relaxed">
            {keyFactsData.description}
          </p>
        </div>
        
        {/* Right: Key Facts */}
        <div className="space-y-6 lg:space-y-8">
          {keyFactsData.facts.map((fact, factIndex) => {
            const [label, value] = fact.split('|');
            return (
              <div key={factIndex} className="border-l-2 border-stone-400/30 pl-6">
                <dt className="safari-accent text-xs sm:text-sm text-stone-400 uppercase tracking-wider mb-2">
                  {label}
                </dt>
                <dd className="safari-heading text-xl sm:text-2xl lg:text-3xl text-white font-normal">
                  {value}
                </dd>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}