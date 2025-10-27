import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/ui/HeroSection";
import CampCarousel from "@/components/ui/CampCarousel";
import Footer from "@/components/shared/Footer";
import WhatYouNeedToKnow from "@/components/WhatYouNeedToKnow";
import FAQ from "@/components/FaQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <Navigation />
      {/* Hero Section */}
      <HeroSection
        title="Discover Namibia's<span class='block text-sand-200'>Wilderness</span>"
        subtitle="Four Extraordinary Desert Camps"
        description="Experience the raw beauty of ancient dunes, desert-adapted wildlife, and endless horizons. Our luxury camps offer unparalleled comfort in Namibia's most pristine wilderness areas."
        backgroundImage={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hero-home/1741347488261_Final-Hoanib-11.jpg`}
        primaryCTA={{
          text: "Explore Our Camps",
          href: "/camps"
        }}
        secondaryCTA={{
          text: "Plan Your Journey", 
          href: "/contact"
        }}
      />
      

      {/* Featured Camps Carousel */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-transparent via-sand-50/30 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-sunset-100 dark:bg-sunset-900/20 text-sunset-700 dark:text-sunset-400 text-sm font-semibold rounded-full mb-2">
              EXPERIENCE NAMIBIA
            </span>
            <h2 className="safari-heading text-3xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-stone-100 mb-4 leading-tight px-4">
              Our Desert Sanctuaries
            </h2>
            <p className="safari-body text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto px-4 leading-relaxed">
              Four unique camps, each offering intimate encounters with Namibia&apos;s extraordinary landscapes and wildlife
            </p>
          </div>
           <CampCarousel />
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4">
            <span className="inline-block px-4 py-2 bg-earth-100 dark:bg-earth-900/20 text-earth-700 dark:text-earth-400 text-sm font-semibold rounded-full mb-2">
              WHAT AWAITS YOU
            </span>
            <h2 className="safari-heading text-3xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-stone-100 mb-4 leading-tight px-4">
              Extraordinary Experiences
            </h2>
            <p className="safari-body text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto px-4 leading-relaxed">
              Every moment in Namibia&apos;s wilderness offers profound connection with pristine nature
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-sunset-50/50 dark:hover:bg-sunset-900/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-sunset-400 to-sunset-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span className="text-3xl">🦏</span>
              </div>
              <h3 className="safari-heading text-xl lg:text-2xl text-stone-900 dark:text-stone-100 group-hover:text-sunset-600 transition-colors duration-300">Wildlife Tracking</h3>
              <p className="safari-body text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                Track desert-adapted elephants and endangered black rhinos with expert guides
              </p>
            </div>

            <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-sand-50/50 dark:hover:bg-sand-900/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-sand-400 to-sand-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span className="text-3xl">🏜️</span>
              </div>
              <h3 className="safari-heading text-xl lg:text-2xl text-stone-900 dark:text-stone-100 group-hover:text-sand-600 transition-colors duration-300">Dune Exploration</h3>
              <p className="safari-body text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                Climb the towering red dunes of Sossusvlei and witness ancient desert landscapes
              </p>
            </div>

            <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-earth-50/50 dark:hover:bg-earth-900/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-gradient-to-br from-earth-400 to-earth-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="safari-heading text-xl lg:text-2xl text-stone-900 dark:text-stone-100 group-hover:text-earth-600 transition-colors duration-300">Cultural Heritage</h3>
              <p className="safari-body text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                Discover ancient San rock art and connect with local Damara communities
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhatYouNeedToKnow />
      <FAQ/>
      <Footer />
    </div>
  );
}