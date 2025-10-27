import Image from "next/image";

export default function CampOverview() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-8">
              Ancient Mountain Sanctuary
            </h2>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Damaraland Camp sits in one of Africa&apos;s most remarkable landscapes, where 
                ancient granite mountains rise dramatically from desert plains. This is home to the world&apos;s 
                largest population of free-roaming desert elephants and serves as a sanctuary for 
                the critically endangered desert black rhino.
              </p>
              <p>
                The region&apos;s geological wonders and cultural treasures make it a destination unlike any other. 
                Built using traditional techniques and local materials, our adobe-style accommodations feature 
                modern amenities without compromising the area&apos;s pristine character.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_2.jpg`}
                alt="Damaraland Camp Mountain Views"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`}
                  alt="Desert Elephants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_3.jpg`}
                  alt="Camp Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desert Elephants Feature */}
        <div className="bg-gradient-to-r from-earth-50 to-sand-50 rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`}
                alt="Desert-adapted elephants in Damaraland"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Desert-Adapted Elephants
              </h3>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Track the legendary desert-adapted elephants that roam ancient migration routes through 
                  spectacular mountain landscapes. These remarkable creatures have adapted to survive in 
                  one of Africa&apos;s harshest environments.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Best viewing:</strong> Morning and afternoon drives offer optimal opportunities 
                    for elephant encounters along the Huab River, depending on seasonal rainfall patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UNESCO Heritage Feature */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="safari-heading text-3xl text-stone-900 mb-6">
              UNESCO World Heritage
            </h3>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Explore Twyfelfontein&apos;s ancient rock engravings, a UNESCO World Heritage Site with 
                6,000-year-old petroglyphs. The region also features the famous Burnt Mountain and 
                remarkable Organ Pipes geological formations.
              </p>
              <p>
                Experience authentic encounters with the Himba people and discover their traditional 
                semi-nomadic lifestyle in this extraordinary cultural landscape.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_6.jpg`}
                alt="Twyfelfontein Rock Art"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">10</div>
            <div className="safari-accent text-stone-900 font-medium">Accommodations</div>
            <div className="text-sm text-stone-600 mt-1">Desert suites</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">120</div>
            <div className="safari-accent text-stone-900 font-medium">Desert Elephants</div>
            <div className="text-sm text-stone-600 mt-1">Free-roaming population</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">6,000</div>
            <div className="safari-accent text-stone-900 font-medium">Years Old</div>
            <div className="text-sm text-stone-600 mt-1">Ancient rock art</div>
          </div>
          <div className="bg-gradient-to-br from-earth-50 to-sand-50 p-8 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-light text-earth-600 mb-2">50</div>
            <div className="safari-accent text-stone-900 font-medium">Black Rhino</div>
            <div className="text-sm text-stone-600 mt-1">Desert-adapted</div>
          </div>
        </div>
      </div>
    </section>
  );
}