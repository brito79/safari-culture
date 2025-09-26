import Link from "next/link";

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
    className?: string;
}

export default function HeroSection({
    title,
    subtitle,
    description,
    primaryCTA,
    secondaryCTA,
    className = ""
}: HeroSectionProps) {
    return (
        <section className={`relative py-20 sm:py-32 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h1 
                            className="safari-heading text-4xl sm:text-6xl lg:text-8xl text-neutral-900 leading-tight"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        {subtitle && (
                            <p className="safari-accent text-lg sm:text-xl text-black tracking-widest">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    
                    <p className="safari-body text-xl sm:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    {(primaryCTA || secondaryCTA) && (
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            {primaryCTA && (
                                <Link 
                                    href={primaryCTA.href}
                                    className="safari-body px-8 py-4 bg-sunset-500 text-black rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {primaryCTA.text}
                                </Link>
                            )}
                            {secondaryCTA && (
                                <Link 
                                    href={secondaryCTA.href}
                                    className="safari-body px-8 py-4 border-2 border-stone-300 text-black rounded-full hover:border-sunset-500 hover:text-sunset-500 transition-all duration-300"
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