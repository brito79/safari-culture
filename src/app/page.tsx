import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/ui/HeroSection";
import CampCarousel from "@/components/ui/CampCarousel";
import Footer from "@/components/ui/Footer";
import WhatYouNeedToKnow from "@/components/WhatYouNeedToKnow";
import FAQ from "@/components/FaQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50">
      <Navigation />
      
      {/* S3 Test Component - Testing fixed image names */}
      {/* <S3ImageTest /> */}

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
      <section className="py-20 bg-gradient-to-b from-transparent to-sand-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="safari-heading text-3xl sm:text-5xl text-neutral-900 mb-4">
              Our Desert Sanctuaries
            </h2>
            <p className="safari-body text-lg text-stone-600 max-w-2xl mx-auto">
              Four unique camps, each offering intimate encounters with Namibia&apos;s extraordinary landscapes and wildlife
            </p>
          </div>
           <CampCarousel />
          
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="safari-heading text-3xl sm:text-5xl text-neutral-900 mb-4">
              Extraordinary Experiences
            </h2>
            <p className="safari-body text-lg text-stone-600 max-w-2xl mx-auto">
              Every moment in Namibia&apos;s wilderness offers profound connection with pristine nature
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sunset-400 to-sunset-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🦏</span>
              </div>
              <h3 className="safari-heading text-xl text-neutral-900">Wildlife Tracking</h3>
              <p className="safari-body text-stone-600">
                Track desert-adapted elephants and endangered black rhinos with expert guides
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sand-400 to-sand-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🏜️</span>
              </div>
              <h3 className="safari-heading text-xl text-neutral-900">Dune Exploration</h3>
              <p className="safari-body text-stone-600">
                Climb the towering red dunes of Sossusvlei and witness ancient desert landscapes
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-400 to-earth-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="safari-heading text-xl text-neutral-900">Cultural Heritage</h3>
              <p className="safari-body text-stone-600">
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