"use client";

interface WeatherProps {
    className?: string;
}

export default function Weather({ className = "" }: WeatherProps) {
    const seasons = [
        {
            label: "Dry Season",
            period: "June to October",
            dayTemp: "18-25°C",
            nightTemp: "5-15°C",
            description: "Clear skies, minimal rainfall, excellent wildlife viewing",
            icon: "☀️"
        },
        {
            label: "Summer Season", 
            period: "December to March",
            dayTemp: "25-35°C",
            nightTemp: "15-20°C",
            description: "Warm temperatures, occasional rainfall, lush landscapes",
            icon: "🌤️"
        },
        {
            label: "Transitional Season",
            period: "May & November", 
            dayTemp: "20-30°C",
            nightTemp: "10-18°C",
            description: "Mild weather, perfect for most activities",
            icon: "🌅"
        }
    ];

    return (
        <div className={`relative bg-white border border-stone-200 rounded-lg p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
            {/* Weather Header */}
            <div className="mb-10 text-center">
                <h3 className="text-2xl font-light text-stone-900 mb-4">
                    Weather & Climate
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed max-w-3xl mx-auto">
                    Namibia offers a year-round destination with 300+ days of sunshine annually. 
                    The semi-desert climate features warm days and cool nights, with variations 
                    influenced by the Benguela current and seasonal winds.
                </p>
            </div>

            {/* Weather Seasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {seasons.map((season, index) => (
                    <div key={index} className="text-center group">
                        {/* Season Icon */}
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            {season.icon}
                        </div>
                        
                        {/* Season Label */}
                        <div className="mb-3">
                            <span className="text-xs text-stone-500 uppercase tracking-wider font-normal">
                                {season.label}
                            </span>
                        </div>
                        
                        {/* Period */}
                        <h4 className="text-lg font-light text-stone-900 mb-3">
                            {season.period}
                        </h4>
                        
                        {/* Temperature Info */}
                        <div className="space-y-1 mb-3">
                            <div className="flex justify-center items-center gap-2 text-sm text-stone-600">
                                <span className="w-2 h-2 bg-sunset-400 rounded-full"></span>
                                <span>Days: {season.dayTemp}</span>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-sm text-stone-300">
                                <span className="w-2 h-2 bg-stone-400 rounded-full"></span>
                                <span>Nights: {season.nightTemp}</span>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-stone-500 leading-relaxed">
                            {season.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom Info */}
            <div className="mt-10 pt-8 border-t border-stone-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                        <div className="text-2xl font-light text-stone-900">300+</div>
                        <div className="text-xs text-stone-500 uppercase tracking-wide">Sunny Days/Year</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl font-light text-stone-900">Semi-Desert</div>
                        <div className="text-xs text-stone-500 uppercase tracking-wide">Climate Type</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl font-light text-stone-900">Year-Round</div>
                        <div className="text-xs text-stone-500 uppercase tracking-wide">Travel Season</div>
                    </div>
                </div>
            </div>

            {/* Subtle Background Pattern */}
            <div className="absolute top-4 right-4 w-1 h-1 bg-stone-300/50 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-stone-300/50 rounded-full"></div>
        </div>
    );
}