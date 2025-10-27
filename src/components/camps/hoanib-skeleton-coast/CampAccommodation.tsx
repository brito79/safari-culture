import Image from "next/image";

export default function CampAccommodation() {
  return (
    <section id="accommodation" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-6">
            Coastal Pavilions
          </h2>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Nine elevated canvas pavilions designed for ultimate comfort in the coastal desert, 
            each featuring panoramic views of the Hoanib River valley and surrounding wilderness
          </p>
        </div>

        {/* Pavilion Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="safari-heading text-2xl text-stone-900 mb-4">Pavilion Features</h3>
              <div className="space-y-4">
                {[
                  "Elevated positioning for panoramic desert views",
                  "Canvas construction with wooden framework",
                  "Private deck with outdoor seating and daybed",
                  "Indoor/outdoor shower with luxury amenities",
                  "Climate control adapted for coastal desert",
                  "Solar power with battery backup systems",
                  "Mini bar and premium coffee facilities",
                  "Direct access to wilderness viewing areas"
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
                Hoanib Skeleton Coast offers intimate accommodation with nine elevated pavilions 
                designed to accommodate couples and families while maintaining complete immersion 
                in this extraordinary coastal desert wilderness.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="safari-accent text-sunset-600">Max Occupancy: 18 guests</span>
                <span className="text-stone-400">•</span>
                <span className="safari-accent text-sunset-600">9 pavilions</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/family-accomodation/familytent_hoanib_081.jpg`}
                alt="Hoanib Pavilion Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/standard-twin/Hoanib_Skeleton_Coast_2014-08-76e1.jpg`}
                  alt="Pavilion Deck"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
                  alt="Desert Views"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wilderness Experience */}
        <div className="bg-gradient-to-r from-stone-900 to-slate-800 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="safari-heading text-3xl text-white mb-6">
              Remote Wilderness Immersion
            </h3>
            <p className="text-stone-300 text-lg mb-8">
              Experience complete immersion in one of Africa&apos;s most remote wilderness areas. 
              Each pavilion is positioned to maximize wildlife viewing and landscape appreciation 
              while maintaining the highest standards of comfort and sustainability.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Remote Location</h4>
                <p className="text-stone-400 text-sm">Complete wilderness isolation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h12l1-7H5l1 7zM7 10V9a5 5 0 1 1 10 0v1h2l-1.5 9H6.5L5 10h2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Elevated Comfort</h4>
                <p className="text-stone-400 text-sm">Panoramic views from every pavilion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sunset-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Sustainable Luxury</h4>
                <p className="text-stone-400 text-sm">Solar-powered eco-comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}