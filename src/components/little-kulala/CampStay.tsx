import Image from "next/image";

export default function CampStay() {
  return (
    <section className="py-20 bg-gradient-to-br from-sand-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            Stay at Little Kulala
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Eleven spacious villas designed for ultimate comfort in the desert, 
            each featuring private rooftop star beds and stunning Namib views
          </p>
        </div>

        {/* Villa Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="safari-heading text-3xl text-stone-900 mb-6">Villa Features</h2>
              <div className="space-y-4">
                {[
                  "Private rooftop sleep-out deck with star bed",
                  "Spacious bedroom with luxury amenities",
                  "Large en-suite bathroom with outdoor shower",
                  "Private plunge pool for desert relaxation",
                  "Expansive deck with panoramic desert views",
                  "Air conditioning and under-floor heating",
                  "Mini bar and Nespresso coffee machine",
                  "Direct access to desert landscape"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sunset-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-stone-700 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_064.jpg`}
                alt="Little Kulala Villa Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_061.jpg`}
                  alt="Villa Bedroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_062.jpg`}
                  alt="Villa Bathroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Family Accommodation */}
        <div className="bg-white rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Family Accommodation
              </h3>
              <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
                <p>
                  Little Kulala offers family-friendly accommodation with special family villas 
                  designed to accommodate parents and children comfortably.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-sunset-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-sunset-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="safari-accent text-sunset-600 font-medium">Max Occupancy: 4 guests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-sunset-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-sunset-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="safari-accent text-sunset-600 font-medium">2 bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_0601.jpg`}
                alt="Family Villa Layout"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Star Bed Experience */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-12 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="safari-heading text-4xl text-white mb-6">
              Sleep Under the Stars
            </h3>
            <p className="text-stone-300 text-xl mb-12 leading-relaxed">
              Experience the magic of sleeping on your private rooftop under some of the world&apos;s 
              darkest skies. Each villa features a comfortable star bed where you can drift off 
              to sleep while gazing at the Milky Way in all its glory.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium text-lg mb-2">Dark Sky Reserve</h4>
                <p className="text-stone-400">Pristine conditions for stargazing</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h12l1-7H5l1 7zM7 10V9a5 5 0 1 1 10 0v1h2l-1.5 9H6.5L5 10h2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium text-lg mb-2">Private Comfort</h4>
                <p className="text-stone-400">Luxury bedding in open air</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium text-lg mb-2">Weather Protection</h4>
                <p className="text-stone-400">Retractable roof for comfort</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_039.jpg`}
                  alt="Star Bed Setup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/stargazing/starscapes_littlekulala_teagancunniffe_008.jpg`}
                  alt="Night Sky Stargazing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Villa Amenities Gallery */}
        <div className="mb-20">
          <h3 className="safari-heading text-3xl text-stone-900 mb-12 text-center">
            Villa Amenities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_0421.jpg`}
                  alt="Private Deck Area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="safari-accent font-medium text-stone-900 mb-2">Private Deck</h4>
                <p className="text-stone-600">Expansive outdoor space with desert views</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_2.jpg`}
                  alt="Private Pool"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="safari-accent font-medium text-stone-900 mb-2">Private Pool</h4>
                <p className="text-stone-600">Refreshing plunge pool for desert relaxation</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_0392.jpg`}
                  alt="Rooftop Star Bed"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="safari-accent font-medium text-stone-900 mb-2">Rooftop Star Bed</h4>
                <p className="text-stone-600">Sleep under the pristine desert sky</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Information */}
        <div className="bg-gradient-to-r from-sunset-50 to-sand-50 rounded-2xl p-12 text-center">
          <h3 className="safari-heading text-3xl text-stone-900 mb-6">
            Ready to Experience Little Kulala?
          </h3>
          <p className="text-stone-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Book your stay at this extraordinary desert retreat and discover the magic of the Namib Desert 
            from the comfort of your private villa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 bg-sunset-500 text-white hover:bg-sunset-600 transition-all duration-300 text-sm tracking-widest hover:scale-105 rounded-lg"
            >
              BOOK NOW
            </a>
            <a 
              href="#rates"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 border-2 border-sunset-500 text-sunset-600 hover:bg-sunset-500 hover:text-white transition-all duration-300 text-sm tracking-widest rounded-lg"
            >
              VIEW RATES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}