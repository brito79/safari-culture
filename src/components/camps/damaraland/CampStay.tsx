import Image from "next/image";

export default function CampStay() {
  return (
    <section className="py-20 bg-gradient-to-br from-sand-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            Stay at Damaraland Camp
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Ten thoughtfully designed accommodations featuring nine spacious adobe-style tented suites 
            and one family unit, all built to harmonize with the ancient desert landscape.
          </p>
        </div>

        {/* Accommodation Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="safari-heading text-3xl text-stone-900 mb-6">
                Desert Mountain Suites
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                Our nine standard twin/double accommodations are spacious adobe-style en-suite rooms 
                under thatch, each built on a raised wooden platform with large deck to relax and 
                soak in the endless desert landscape. Gravel pathways connect all accommodations to 
                the main lodge while maintaining the camp&apos;s integration with nature.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 p-4 rounded-xl">
                  <div className="text-2xl font-light text-earth-600 mb-2">9</div>
                  <div className="safari-accent text-stone-900 font-medium">Standard Suites</div>
                  <div className="text-sm text-stone-600">Twin or double beds</div>
                </div>
                <div className="bg-white/80 p-4 rounded-xl">
                  <div className="text-2xl font-light text-earth-600 mb-2">1</div>
                  <div className="safari-accent text-stone-900 font-medium">Family Unit</div>
                  <div className="text-sm text-stone-600">Up to 4 guests</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_3.jpg`}
                alt="Standard Suite Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Family Accommodation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative lg:order-2">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_8.jpg`}
                alt="Family Accommodation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:order-1">
            <h2 className="safari-heading text-3xl text-stone-900 mb-6">
              Family Accommodation
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              Our family unit consists of two bedrooms, each with two three-quarter beds and own 
              en-suite facilities. Both rooms have separate entrances but share a large outdoor 
              deck that connects them, perfect for families seeking privacy while staying together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-earth-500 rounded-full mr-4"></div>
                <span className="text-stone-700">Two separate bedrooms</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-earth-500 rounded-full mr-4"></div>
                <span className="text-stone-700">Individual en-suite facilities</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-earth-500 rounded-full mr-4"></div>
                <span className="text-stone-700">Shared outdoor deck connection</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-earth-500 rounded-full mr-4"></div>
                <span className="text-stone-700">Accommodates up to 4 guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suite Features */}
        <div className="bg-white/80 p-12 rounded-2xl mb-20">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-12">
            Suite Features & Amenities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛏️</span>
              </div>
              <h3 className="safari-accent text-lg font-medium text-stone-900 mb-2">Comfortable Bedding</h3>
              <p className="text-stone-600 text-sm">Twin or double beds with quality linens and mountain views</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚿</span>
              </div>
              <h3 className="safari-accent text-lg font-medium text-stone-900 mb-2">En-Suite Facilities</h3>
              <p className="text-stone-600 text-sm">Private bathrooms with hot water and eco-friendly amenities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="safari-accent text-lg font-medium text-stone-900 mb-2">Private Deck</h3>
              <p className="text-stone-600 text-sm">Elevated wooden platform for relaxation and wildlife viewing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="safari-accent text-lg font-medium text-stone-900 mb-2">Natural Materials</h3>
              <p className="text-stone-600 text-sm">Adobe-style construction with thatch roofing and local stone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="safari-accent text-lg font-medium text-stone-900 mb-2">Solar Power</h3>
              <p className="text-stone-600 text-sm">Eco-friendly energy with reliable power for essential needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌄</span>
              </div>
              <h3 className="safari-accent text-lg font-medium text-stone-900 mb-2">Mountain Views</h3>
              <p className="text-stone-600 text-sm">Spectacular vistas of ancient granite mountains and desert plains</p>
            </div>
          </div>
        </div>

        {/* Sustainability */}
        <div className="text-center bg-gradient-to-r from-earth-50 to-sand-50 p-12 rounded-2xl">
          <h2 className="safari-heading text-3xl text-stone-900 mb-6">
            Sustainable Desert Living
          </h2>
          <p className="safari-accent text-stone-700 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
            Built using traditional techniques and local materials, Damaraland Camp integrates seamlessly 
            with its ancient mountain environment. Solar power, water conservation, and minimal environmental 
            impact ensure this remarkable landscape remains pristine for future generations to discover.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/camps/damaraland-camp/activities"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 bg-earth-500 text-white hover:bg-earth-600 transition-all duration-300 text-sm tracking-widest hover:scale-105 rounded-lg"
            >
              EXPLORE ACTIVITIES
            </a>
            <a 
              href="/camps/damaraland-camp/contact"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 border-2 border-earth-500 text-earth-500 hover:bg-earth-500 hover:text-white transition-all duration-300 text-sm tracking-widest rounded-lg"
            >
              BOOK YOUR STAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}