import Image from "next/image";

export default function CampAccommodation() {
  return (
    <section id="accommodation" className="py-20 bg-gradient-to-br from-sand-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-6">
            Desert Tents
          </h2>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Sixteen spacious meru tents designed for ultimate comfort in Damaraland, 
            each featuring private outdoor showers and stunning desert views
          </p>
        </div>

        {/* Tent Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="safari-heading text-2xl text-stone-900 mb-4">Tent Features</h3>
              <div className="space-y-4">
                {[
                  "Spacious verandas with panoramic desert views",
                  "Wood, canvas, and thatch construction",
                  "Private outdoor shower experience",
                  "En-suite bathroom with luxury amenities",
                  "Comfortable seating area for relaxation",
                  "Desert-adapted climate control",
                  "Mini bar and coffee facilities",
                  "Direct access to stargazing areas"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sunset-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-stone-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-stone-200">
              <h4 className="safari-accent font-medium text-stone-900 mb-4">Camp Capacity</h4>
              <p className="text-stone-600 mb-4">
                Doro Nawas offers intimate accommodation with sixteen luxury meru tents 
                designed to accommodate couples and families in comfort while maintaining 
                connection to the surrounding Damaraland wilderness.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="safari-accent text-sunset-600">Max Occupancy: 32 guests</span>
                <span className="text-stone-400">•</span>
                <span className="safari-accent text-sunset-600">16 tents</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_3.jpg`}
                alt="Doro Nawas Tent Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_4.jpg`}
                  alt="Tent Veranda"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_2.jpg`}
                  alt="Outdoor Shower"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stargazing Experience */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="safari-heading text-3xl text-white mb-6">
              Stargazing Under Desert Skies
            </h3>
            <p className="text-stone-300 text-lg mb-8">
              Experience the magic of Damaraland&apos;s pristine night sky from the camp&apos;s 
              dedicated stargazing deck. The clear desert air and minimal light pollution 
              create perfect conditions for astronomical observation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Clear Desert Skies</h4>
                <p className="text-stone-400 text-sm">Exceptional stargazing conditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h12l1-7H5l1 7zM7 10V9a5 5 0 1 1 10 0v1h2l-1.5 9H6.5L5 10h2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Observatory Deck</h4>
                <p className="text-stone-400 text-sm">Dedicated stargazing facility</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Guided Sessions</h4>
                <p className="text-stone-400 text-sm">Expert astronomy guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}