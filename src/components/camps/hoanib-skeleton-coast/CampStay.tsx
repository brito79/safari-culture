import Image from "next/image";

export default function CampStay() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            Stay at Hoanib Skeleton Coast
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            9 canvas tents elevated above the Hoanib valley with panoramic desert-ocean views
          </p>
        </div>

        {/* Accommodation Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Elevated Coastal Pavilions
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Each canvas pavilion is thoughtfully positioned on elevated platforms to maximize 
                the extraordinary views across the Hoanib valley toward the dramatic Skeleton Coast. 
                The elevated design minimizes environmental impact while providing unparalleled 
                vantage points for wildlife observation.
              </p>
              <p>
                Our accommodation philosophy centers on bringing guests closer to the coastal desert 
                environment while maintaining the highest standards of comfort and luxury. Large 
                viewing decks extend the living space outdoors, creating seamless integration with 
                the surrounding wilderness.
              </p>
              <p>
                The camp&apos;s intimate scale of just 9 pavilions ensures exclusive access to this 
                pristine wilderness, allowing for personalized service and minimal environmental 
                footprint in one of Namibia&apos;s most sensitive ecosystems.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/standard-twin/Hoanib_Skeleton_Coast_2014-08-95e1.jpg`}
                alt="Elevated canvas pavilion with desert views"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="mb-20">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-12">
            Accommodation Options
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Standard Pavilions */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/standard-twin/Hoanib_Skeleton_Coast_2014-08-95e1.jpg`}
                  alt="Standard pavilion interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="safari-accent text-2xl text-stone-900 mb-4">Standard Pavilions</h3>
              <div className="space-y-4 text-stone-600">
                <p>
                  Seven beautifully appointed canvas pavilions feature either twin beds or a king-size bed, 
                  each with en-suite bathrooms and private viewing decks overlooking the valley.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Canvas construction with solid flooring
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    En-suite bathroom with shower
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Private deck with valley views
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Solar-powered lighting
                  </li>
                </ul>
              </div>
            </div>

            {/* Family Pavilions */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/family-accomodation/familytent_hoanib_088.jpg`}
                  alt="Family pavilion with mountain views"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="safari-accent text-2xl text-stone-900 mb-4">Family Pavilions</h3>
              <div className="space-y-4 text-stone-600">
                <p>
                  Two spacious family pavilions offer additional space and flexible sleeping arrangements, 
                  perfect for families or groups seeking extra comfort in the coastal wilderness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Larger canvas pavilion design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Flexible sleeping configurations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Extended private deck area
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Enhanced privacy and space
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Camp Facilities */}
        <div className="bg-stone-50 rounded-2xl p-12 mb-20">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-12">
            Camp Facilities & Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="safari-accent text-lg text-stone-900 mb-3">Central Areas</h3>
              <p className="text-stone-600 text-sm">
                Main lodge with dining area, lounge, and library featuring coastal wilderness literature 
                and research materials
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="safari-accent text-lg text-stone-900 mb-3">Sustainable Operations</h3>
              <p className="text-stone-600 text-sm">
                Solar power systems, water conservation, and minimal environmental impact 
                operations in this pristine ecosystem
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="safari-accent text-lg text-stone-900 mb-3">Exclusive Experience</h3>
              <p className="text-stone-600 text-sm">
                Maximum 18 guests ensures intimate wildlife encounters and personalized 
                service in this remote wilderness setting
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability Focus */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/day-excursions/1741347488261_Final-Hoanib-11.jpg`}
                alt="Desert landscape showcasing conservation efforts"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Conservation-Focused Hospitality
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Our approach to hospitality is guided by deep respect for this fragile coastal 
                desert ecosystem. Every aspect of camp design and operation prioritizes 
                environmental stewardship while delivering exceptional guest experiences.
              </p>
              <p>
                The elevated pavilion design minimizes ground disturbance, while solar power 
                and water conservation systems ensure minimal environmental impact. Our partnership 
                with local conservation organizations means your stay directly supports ongoing 
                research and habitat protection efforts.
              </p>
              <p>
                Guests become active participants in conservation through wildlife monitoring 
                activities, research center visits, and educational programs that foster deeper 
                understanding of this unique ecosystem&apos;s complexity and fragility.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Information */}
        <div className="mt-20 bg-stone-100 rounded-2xl p-12">
          <div className="text-center">
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Planning Your Coastal Wilderness Stay
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-stone-600">
              <div>
                <h3 className="safari-accent text-lg text-stone-900 mb-2">Access</h3>
                <p className="text-sm">Fly-in safari only via light aircraft to Hoanib airstrip</p>
              </div>
              <div>
                <h3 className="safari-accent text-lg text-stone-900 mb-2">Capacity</h3>
                <p className="text-sm">Maximum 18 guests in 9 canvas pavilions</p>
              </div>
              <div>
                <h3 className="safari-accent text-lg text-stone-900 mb-2">Best Time</h3>
                <p className="text-sm">May to October for optimal weather and wildlife viewing</p>
              </div>
              <div>
                <h3 className="safari-accent text-lg text-stone-900 mb-2">Stay Length</h3>
                <p className="text-sm">Minimum 2 nights (3+ recommended for Skeleton Coast excursions)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}