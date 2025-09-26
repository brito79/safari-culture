"use client";

interface WeatherProps {
    className?: string;
}

export default function Weather({ className = "" }: WeatherProps) {
    return (
        <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 via-stone-200 to-stone-400 p-8 sm:p-12 lg:p-16 animate-fade-in ${className}`}>
            {/* Weather Header */}
            <div className="mb-12 text-center">
                <h3 className="safari-accent text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-6">
                    Weather
                </h3>
                <p className="safari-body text-black text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                    Namibia is a true year-round destination with fewer extreme seasonal changes than other parts of Southern Africa, enjoying 300 beautiful days of sunshine a year. It has a typical semi-desert climate, with hot days and cool nights. The weather can vary greatly in the Namib, as dictated by the Benguela current and south-westerly winds.
                </p>
            </div>

            {/* Weather Seasons Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
                {/* Dry Season */}
                <div className="text-center lg:text-right transform hover:scale-105 transition-all duration-500">
                    <div className="mb-6">
                        <span className="safari-accent text-xs text-black uppercase tracking-widest font-medium opacity-80">
                            DRY SEASON
                        </span>
                    </div>
                    <h4 className="safari-accent text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
                        June to October
                    </h4>
                    <div className="text-black text-sm sm:text-base leading-relaxed">
                        18-25°C days<br />5-15°C nights
                    </div>
                </div>

                {/* Summer Season */}
                <div className="text-center transform hover:scale-105 transition-all duration-500">
                    <div className="mb-6">
                        <span className="safari-accent text-xs text-black uppercase tracking-widest font-medium opacity-80">
                            SUMMER SEASON
                        </span>
                    </div>
                    <h4 className="safari-accent text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
                        December to March
                    </h4>
                    <div className="text-black text-sm sm:text-base leading-relaxed">
                        25-35°C days<br />15-20°C nights
                    </div>
                </div>

                {/* Transitional Season */}
                <div className="text-center lg:text-left transform hover:scale-105 transition-all duration-500">
                    <div className="mb-6">
                        <span className="safari-accent text-xs text-black uppercase tracking-widest font-medium opacity-80">
                            TRANSITIONAL SEASON
                        </span>
                    </div>
                    <h4 className="safari-accent text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
                        May & November
                    </h4>
                    <div className="text-black text-sm sm:text-base leading-relaxed">
                        20-30°C days<br />10-18°C nights
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-orange-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-2 h-2 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
    );
}