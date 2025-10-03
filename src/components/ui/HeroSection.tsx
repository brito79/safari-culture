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
        <section className={`relative min-h-screen flex items-center overflow-hidden ${className}`}>
            {/* Background Image */}
            {backgroundImage && (
                <>
                    <div className="absolute inset-0">
                        <Image
                            src={backgroundImage}
                            alt="Namibian wilderness landscape"
                            fill
                            unoptimized
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                </>
            )}
            
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
                <div className={`text-center space-y-8 ${backgroundImage ? 'text-white' : ''}`}>
                    <div className="space-y-4">
                        <h1 
                            className={`safari-heading text-4xl sm:text-6xl lg:text-8xl leading-tight ${
                                backgroundImage ? 'text-white' : 'text-neutral-900'
                            }`}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        {subtitle && (
                            <p className={`safari-accent text-lg sm:text-xl tracking-widest ${
                                backgroundImage ? 'text-sand-200' : 'text-black'
                            }`}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                    
                    <p className={`safari-body text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed ${
                        backgroundImage ? 'text-white/90' : 'text-stone-600'
                    }`}>
                        {description}
                    </p>

                    {(primaryCTA || secondaryCTA) && (
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            {primaryCTA && (
                                <Link 
                                    href={primaryCTA.href}
                                    className={`safari-body px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${
                                        backgroundImage 
                                            ? 'bg-sunset-500 text-white hover:bg-sunset-600'
                                            : 'bg-sunset-500 text-black hover:bg-sunset-600'
                                    }`}
                                >
                                    {primaryCTA.text}
                                </Link>
                            )}
                            {secondaryCTA && (
                                <Link 
                                    href={secondaryCTA.href}
                                    className={`safari-body px-8 py-4 border-2 rounded-full transition-all duration-300 ${
                                        backgroundImage
                                            ? 'border-white/80 text-white hover:bg-white/10 backdrop-blur-sm'
                                            : 'border-stone-300 text-black hover:border-sunset-500 hover:text-sunset-500'
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