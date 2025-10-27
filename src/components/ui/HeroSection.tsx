import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    description: string;
    primaryCTA?: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    backgroundImage?: string;
    className?: string;
}

export default function HeroSection({
    title,
    subtitle,
    description,
    primaryCTA,
    secondaryCTA,
    backgroundImage,
    className = ""
}: HeroSectionProps) {
    return (
        <section className={`relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
            {/* Background Image */}
            {backgroundImage && (
                <>
                    <div className="absolute inset-0">
                        <Image
                            src={backgroundImage}
                            alt="Namibian wilderness landscape"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                </>
            )}
            
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className={`text-center space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in ${backgroundImage ? 'text-white' : ''}`}>
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                        <h1 
                            className={`safari-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-bold drop-shadow-2xl ${
                                backgroundImage ? 'text-white' : 'text-stone-900'
                            }`}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        {subtitle && (
                            <p className={`safari-accent text-base sm:text-lg lg:text-xl tracking-widest uppercase font-semibold ${
                                backgroundImage ? 'text-sand-200' : 'text-stone-700'
                            }`}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                    
                    <p className={`safari-body text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 ${
                        backgroundImage ? 'text-white/95 drop-shadow-lg' : 'text-stone-600'
                    }`}>
                        {description}
                    </p>

                    {(primaryCTA || secondaryCTA) && (
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 lg:pt-10 px-4">
                            {primaryCTA && (
                                <Link 
                                    href={primaryCTA.href}
                                    className={`w-full sm:w-auto safari-body text-base sm:text-lg font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-110 transform ${
                                        backgroundImage 
                                            ? 'bg-sunset-500 text-white hover:bg-sunset-600 hover:text-stone-900'
                                            : 'bg-sunset-500 text-white hover:bg-sunset-600'
                                    }`}
                                >
                                    {primaryCTA.text}
                                </Link>
                            )}
                            {secondaryCTA && (
                                <Link 
                                    href={secondaryCTA.href}
                                    className={`w-full sm:w-auto safari-body text-base sm:text-lg font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 rounded-full transition-all duration-500 hover:scale-110 transform ${
                                        backgroundImage
                                            ? 'border-white/90 text-white hover:bg-white hover:text-stone-900 backdrop-blur-sm shadow-lg hover:shadow-2xl'
                                            : 'border-stone-400 text-stone-700 hover:border-sunset-500 hover:bg-sunset-500 hover:text-white shadow-md hover:shadow-xl'
                                    }`}
                                >
                                    {secondaryCTA.text}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}