import Image from "next/image";

export default function CampAccommodation() {
  return (
    <section id="accommodation" className="py-20 bg-gradient-to-br from-sand-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-6">
            Desert Villas
          </h2>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Eleven spacious villas designed for ultimate comfort in the desert, 
            each featuring private rooftop star beds and stunning Namib views
          </p>
        </div>

        {/* Villa Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="safari-heading text-2xl text-stone-900 mb-4">Villa Features</h3>
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
                    <p className="text-stone-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-stone-200">
              <h4 className="safari-accent font-medium text-stone-900 mb-4">Family Accommodation</h4>
              <p className="text-stone-600 mb-4">
                Little Kulala offers family-friendly accommodation with special family villas 
                designed to accommodate parents and children comfortably.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="safari-accent text-sunset-600">Max Occupancy: 4 guests</span>
                <span className="text-stone-400">•</span>
                <span className="safari-accent text-sunset-600">2 bedrooms</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_064.jpg`}
                alt="Little Kulala Villa Interior"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_061.jpg`}
                  alt="Villa Bedroom"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/family-accomodation/units_family_littlekulala_teagancunniffe_062.jpg`}
                  alt="Villa Bathroom"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Star Bed Experience */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="safari-heading text-3xl text-white mb-6">
              Sleep Under the Stars
            </h3>
            <p className="text-stone-300 text-lg mb-8">
              Experience the magic of sleeping on your private rooftop under some of the world&apos;s 
              darkest skies. Each villa features a comfortable star bed where you can drift off 
              to sleep while gazing at the Milky Way in all its glory.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Dark Sky Reserve</h4>
                <p className="text-stone-400 text-sm">Pristine conditions for stargazing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h12l1-7H5l1 7zM7 10V9a5 5 0 1 1 10 0v1h2l-1.5 9H6.5L5 10h2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Private Comfort</h4>
                <p className="text-stone-400 text-sm">Luxury bedding in open air</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Weather Protection</h4>
                <p className="text-stone-400 text-sm">Retractable roof for comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}