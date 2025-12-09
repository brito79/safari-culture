import Image from "next/image";
import Link from "next/link";
import { getCampsData, type Camp } from "@/app/actions/camps/camps";
import { campNameToSlug } from "@/lib/utils/camp-utils";

export default async function CampsPage() {
  // Fetch camps data from the database via server action
  const camps: Camp[] = await getCampsData();
  
  // Debug: Log the camps data structure in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Camps data received:', camps.length, 'camps');
    camps.forEach((camp, index) => {
      console.log(`Camp ${index + 1}:`, {
        id: camp.id,
        name: camp.name,
        featuresCount: camp.features?.length || 0,
        features: camp.features,
        galleryCount: camp.images?.gallery?.length || 0,
        galleryUrls: camp.images?.gallery
      });
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-sand to-neutral-50">
      {/* Page Header */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="safari-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-neutral-900">
              Wilderness Camps
            </h1>
            <p className="safari-accent text-base sm:text-lg md:text-xl text-earth-500 tracking-widest">
              Four Extraordinary Desert Sanctuaries
            </p>
            <p className="safari-body text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
              Each camp offers unique access to Namibia&apos;s most pristine wilderness areas, 
              combining luxury accommodation with authentic desert experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {camps.map((camp, index) => (
              <div 
                key={camp.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] group">
                    <Image
                      src={camp.images?.hero || ''}
                      alt={`${camp.name} - ${camp.description.slice(0, 100)}...`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                      <span className="safari-accent text-xs sm:text-sm text-white/90 bg-black/30 px-2.5 py-1 sm:px-3 rounded-full backdrop-blur-sm tracking-wider">
                        {camp.region.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Image Gallery Preview */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-3 sm:mt-4">
                    {camp.images?.gallery?.slice(0, 3).map((image, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-[4/3] overflow-hidden rounded-md sm:rounded-lg">
                        <Image
                          src={image}
                          alt={`${camp.name} gallery image ${imgIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 15vw"
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )) || []}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="safari-heading text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-3 sm:mb-4">
                      {camp.name}
                    </h2>
                    <p className="safari-body text-base sm:text-lg text-stone-600 leading-relaxed mb-4 sm:mb-6">
                      {camp.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="safari-heading text-lg sm:text-xl text-neutral-900 mb-2 sm:mb-3">
                      Experiences
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {camp.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sunset-500 rounded-full flex-shrink-0" />
                          <span className="safari-body text-stone-600 text-xs sm:text-sm">
                            {feature}
                          </span>
                        </div>
                      )) || []}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 py-3 sm:py-4 border-t border-stone-200">
                    <div>
                      <span className="safari-accent text-xs text-earth-500 tracking-wider block mb-1">
                        ACCOMMODATION
                      </span>
                      <span className="safari-body text-sm sm:text-base text-neutral-900 font-medium">
                        {camp.accommodation}
                      </span>
                    </div>
                    <div>
                      <span className="safari-accent text-xs text-earth-500 tracking-wider block mb-1">
                        FROM (PER PERSON)
                      </span>
                      <span className="safari-body text-sm sm:text-base text-neutral-900 font-medium">
                        {camp.fromPrice}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <Link 
                      href={`/camps/${camp.id}`}
                      className="safari-body px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-sunset-500 text-stone-700 rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                    >
                      Explore Camp
                    </Link>
                    <Link 
                      href={`/camps/${campNameToSlug(camp.name)}/rates`}
                      className="safari-body px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-stone-300 text-stone-700 rounded-full hover:border-sunset-500 hover:text-sunset-500 transition-all duration-300 text-center"
                    >
                      View Rates
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-sand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="safari-heading text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-4 sm:mb-6">
            Plan Your Wilderness Journey
          </h2>
          <p className="safari-body text-base sm:text-lg text-stone-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Our travel designers will help you create the perfect multi-camp experience, 
            combining luxury accommodation with authentic desert adventures.
          </p>
          <Link 
            href="/apply"
            className="inline-block safari-body px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-sunset-500 text-neutral-900 rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
}