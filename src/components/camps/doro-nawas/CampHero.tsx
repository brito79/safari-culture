import Image from "next/image";

export default function CampHero() {
  return (
    <section id="overview" className="relative h-screen overflow-hidden">
      {/* Hero Images Carousel */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_1.jpg`}
            alt="Doro Nawas wilderness landscape in Damaraland"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 sm:px-8 max-w-4xl mx-auto">
          <h1 className="safari-heading text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">
            Doro Nawas
          </h1>
          <p className="safari-accent text-xl sm:text-2xl mb-8 text-stone-100 tracking-wide">
            Where Ancient Rock Art Meets Desert Wildlife
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="safari-accent text-stone-200 text-lg">
              <span className="inline-block w-2 h-2 bg-sunset-400 rounded-full mr-3"></span>
              Damaraland, Namibia
            </div>
            <div className="safari-accent text-stone-200 text-lg">
              <span className="inline-block w-2 h-2 bg-sunset-400 rounded-full mr-3"></span>
              16 Desert Tents
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}