import Image from "next/image";

export default function CampAccommodation() {
  return (
    <section id="accommodation" className="py-20 bg-gradient-to-br from-sand-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-6">
            Desert Mountain Suites
          </h2>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Ten thoughtfully designed accommodations featuring nine spacious adobe-style tented suites 
            and one family unit, built to harmonize with the ancient desert landscape
          </p>
        </div>

        {/* Suite Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="safari-heading text-2xl text-stone-900 mb-4">Suite Features</h3>
              <div className="space-y-4">
                {[
                  "Adobe-style construction with thatch roofing",
                  "Raised wooden platform with large private deck",
                  "Twin or double bed configurations available",
                  "En-suite facilities with hot water",
                  "Solar power with reliable energy supply",
                  "Spectacular mountain and desert views",
                  "Gravel pathway access to main lodge",
                  "Integration with natural environment"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-stone-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-stone-200">
              <h4 className="safari-accent font-medium text-stone-900 mb-4">Family Accommodation</h4>
              <p className="text-stone-600 mb-4">
                One family unit consisting of two bedrooms, each with two three-quarter beds and own 
                en-suite facilities. Separate entrances with shared outdoor deck connection.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="safari-accent text-earth-600">Max Occupancy: 4 guests</span>
                <span className="text-stone-400">•</span>
                <span className="safari-accent text-earth-600">2 bedrooms</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_3.jpg`}
                alt="Damaraland Camp Suite Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_8.jpg`}
                  alt="Family Unit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_2.jpg`}
                  alt="Suite Deck View"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              title: "Main Lodge",
              description: "Comfortable communal areas with spectacular valley views",
              icon: "🏛️"
            },
            {
              title: "Dining Area", 
              description: "Open-air dining with locally inspired cuisine",
              icon: "🍽️"
            },
            {
              title: "Fire Pit",
              description: "Evening gathering spot under star-filled skies",
              icon: "🔥"
            },
            {
              title: "Viewing Deck",
              description: "Elevated platform for wildlife viewing",
              icon: "👁️"
            }
          ].map((amenity, index) => (
            <div key={index} className="bg-white/80 p-6 rounded-xl border border-sand-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">{amenity.icon}</div>
              <h4 className="safari-accent text-lg font-medium text-stone-900 mb-3">{amenity.title}</h4>
              <p className="text-sm text-stone-700 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Sustainability Note */}
        <div className="bg-gradient-to-r from-earth-50 to-sand-50 p-12 rounded-2xl text-center">
          <h4 className="safari-heading text-2xl font-light text-stone-900 mb-4">
            Sustainable Mountain Retreat
          </h4>
          <p className="safari-accent text-stone-700 max-w-4xl mx-auto leading-relaxed">
            Built using traditional techniques and local materials, Damaraland Camp integrates seamlessly 
            with its ancient mountain environment. Solar power, water conservation, and minimal environmental 
            impact ensure this remarkable landscape remains pristine for future generations.
          </p>
        </div>
      </div>
    </section>
  );
}