import Image from "next/image";

export default function CampOverview() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-8">
              Where Desert Meets Ocean
            </h2>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Hoanib Skeleton Coast Camp offers an extraordinary wilderness experience at the intersection 
                of the Namib Desert and the Atlantic Ocean, where unique ecosystems create one of the 
                world&apos;s most remarkable wildlife destinations.
              </p>
              <p>
                The Hoanib River creates a green ribbon through the desert, supporting remarkable 
                desert-adapted wildlife including elephants, giraffes, and rhinos that have evolved 
                to survive in this harsh yet stunning coastal environment.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
                alt="Hoanib Skeleton Coast Camp Overview"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                  alt="Coastal Desert Landscape"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
                  alt="Camp Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marine Wildlife Feature */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                alt="Skeleton Coast Marine Life"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Skeleton Coast Adventures
              </h3>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Explore the legendary Skeleton Coast with its massive seal colonies, dramatic shipwrecks, 
                  and unique marine ecosystems. Experience scenic flights over the coast and guided 
                  excursions to Cape Cross seal colony.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Scenic Flights Available:</strong> Experience breathtaking aerial views of the 
                    coastline, shipwrecks, and marine wildlife.
                  </p>
                  <p className="text-blue-700 text-sm mt-2">
                    <strong>NOTE:</strong> Coastal activities subject to weather conditions and seasonal wildlife patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desert Experience */}
        <div className="mb-20">
          <h3 className="safari-heading text-3xl text-stone-900 mb-8 text-center">
            Coastal Desert Experience
          </h3>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                <p>
                  Track legendary desert-adapted elephants in the Hoanib River valley as they migrate 
                  between inland water sources and coastal feeding areas. These remarkable giants have 
                  adapted unique behaviors for surviving in this harsh coastal desert.
                </p>
                <p>
                  Discover unique geological formations including clay castles, ancient riverbeds, and 
                  dramatic landscapes where the oldest desert meets the Atlantic Ocean. Experience the 
                  contrasts of this extraordinary ecosystem.
                </p>
                <p>
                  Guided nature walks reveal fascinating adaptations of coastal desert flora and fauna, 
                  while scenic flights offer breathtaking perspectives of this remote wilderness where 
                  few humans have ventured.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                  alt="Desert-adapted Elephants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
                    alt="Coastal Landscapes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                    alt="Scenic Flights"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geological Wonder */}
        <div className="bg-gradient-to-br from-stone-50 to-slate-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h3 className="safari-heading text-3xl text-stone-900 mb-4">
              Coastal Desert Wilderness
            </h3>
            <p className="text-stone-700 text-lg leading-relaxed max-w-4xl mx-auto">
              The Skeleton Coast represents one of Earth&apos;s most dramatic landscapes, where the world&apos;s 
              oldest desert meets the Atlantic Ocean, creating unique ecosystems and geological formations 
              found nowhere else on the planet.
            </p>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
              alt="Skeleton Coast Landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Purpose & Conservation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
              alt="Conservation Efforts"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="safari-heading text-3xl text-stone-900 mb-6">
              Remote Wilderness Conservation
            </h3>
            <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
              <p>
                Hoanib Skeleton Coast operates in one of Africa&apos;s most remote and untouched wilderness areas, 
                supporting critical conservation efforts for desert-adapted species and coastal ecosystems. 
                The camp&apos;s presence helps protect this unique environment for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Wildlife Section */}
        <div className="mb-20">
          <h3 className="safari-heading text-3xl text-stone-900 mb-8 text-center">
            Coastal Desert Wildlife
          </h3>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                The area is home to the legendary desert-adapted elephants that migrate along ancient 
                pathways between the Hoanib River and coastal feeding areas. These remarkable giants 
                have developed unique survival strategies for this harsh environment.
              </p>
              <p>
                Marine wildlife includes massive fur seal colonies at Cape Cross, occasional whale sightings, 
                and diverse seabird populations. The contrast between desert and marine ecosystems creates 
                extraordinary wildlife viewing opportunities.
              </p>
              <p>
                Desert species include oryx, springbok, ostrich, and a variety of smaller desert-adapted 
                creatures. The intersection of desert and ocean creates microclimates supporting diverse 
                plant and animal communities.
              </p>
              <p>
                During migration seasons, the Hoanib River valley comes alive with wildlife movements as 
                animals traverse between inland and coastal areas following ancient migration routes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                  alt="Desert Elephants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
                    alt="Marine Wildlife"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                    alt="Coastal Ecosystem"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Camp Highlights */}
        <div className="bg-gradient-to-r from-stone-900 to-slate-800 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="safari-heading text-3xl mb-6">
                Wilderness Hoanib Skeleton Coast
              </h3>
              <div className="space-y-4 leading-relaxed">
                <p>
                  A remote coastal desert retreat offering unparalleled access to one of the world&apos;s 
                  most dramatic wilderness areas. Nine elevated canvas tents provide comfort while 
                  maintaining complete immersion in this extraordinary landscape.
                </p>
                <p>
                  Each tent features elevated positioning for panoramic views of the Hoanib River valley 
                  and surrounding desert mountains, with private decks perfect for witnessing dramatic 
                  sunsets and pristine night skies.
                </p>
                <p>
                  Highlights include scenic flights over the Skeleton Coast, desert elephant tracking, 
                  visits to Cape Cross seal colony, and guided explorations of this unique ecosystem 
                  where desert meets ocean.
                </p>
                <p>
                  The camp&apos;s central areas feature comfortable lounges, dining spaces, and observation 
                  decks designed to maximize wildlife viewing and landscape appreciation in this remote 
                  and pristine wilderness setting.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
                  alt="Elevated Accommodation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                    alt="Camp Facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/Wilderness-Hoanib-Skeleton-Coast-Camp.jpg`}
                    alt="Wilderness Views"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}