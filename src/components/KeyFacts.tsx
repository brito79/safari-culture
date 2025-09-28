"use client";

interface KeyFactsProps {
  className?: string;
}

const keyFactsData = {
  title: 'Namibia at a Glance',
  description: 'Namibia is home to the last free-roaming black rhinos and desert elephants. It offers a fascinating medley of cultures and European influences in its art, exquisite cuisine and architecture.',
  facts: [
    { label: 'Population', value: '3 Million', icon: '👥' },
    { label: 'Currency', value: 'Namibian Dollar (NAD)', icon: '💰' },
    { label: 'Geographic Size', value: '824,292 km²', icon: '🗺️' },
    { label: 'Best Time to Visit', value: 'All year round', icon: '🌅' },
    { label: 'Official Language', value: 'English', icon: '🗣️' }
  ]
};

export default function KeyFacts({ className = "" }: KeyFactsProps) {
  return (
    <div className={`bg-stone-50 border border-stone-200 rounded-lg p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-light text-stone-900 mb-4">
          {keyFactsData.title}
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl mx-auto">
          {keyFactsData.description}
        </p>
      </div>
      
      {/* Facts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {keyFactsData.facts.map((fact, index) => (
          <div key={index} className="text-center group">
            {/* Icon */}
            <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {fact.icon}
            </div>
            
            {/* Label */}
            <div className="mb-2">
              <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                {fact.label}
              </span>
            </div>
            
            {/* Value */}
            <div className="text-lg font-medium text-stone-900">
              {fact.value}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <div className="mt-10 pt-8 border-t border-stone-200 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-stone-600">
          <span className="w-2 h-2 bg-sunset-500 rounded-full"></span>
          <span>Discover endless horizons and embrace total serenity</span>
          <span className="w-2 h-2 bg-sunset-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}