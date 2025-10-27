import Image from "next/image";

export default function CampEnjoy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            Enjoy Hoanib Skeleton Coast
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Discover unique experiences where coastal desert meets conservation science
          </p>
        </div>

        {/* Signature Experiences */}
        <div className="mb-20">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-12">
            Signature Coastal Desert Experiences
          </h2>
          <div className="grid gap-16">
            {/* Skeleton Coast Excursions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="safari-accent text-2xl text-stone-900 mb-6">
                  Skeleton Coast Expeditions
                </h3>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Embark on legendary full-day expeditions to the Skeleton Coast, one of the world&apos;s 
                    most dramatic and remote coastlines. These exclusive excursions reveal the haunting 
                    beauty of shipwrecks, massive seal colonies, and the remarkable intersection of 
                    desert and ocean ecosystems.
                  </p>
                  <p>
                    Available for guests staying three or more nights, these adventures include 4x4 
                    desert crossings, Cape Cross seal colony visits, and return scenic flights that 
                    provide aerial perspectives of this legendary coastline.
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="safari-accent text-lg text-stone-900 mb-3">Experience Highlights:</h4>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Cape Cross fur seal colony (up to 200,000 seals)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Historic shipwreck exploration and maritime history
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Scenic return flights over coastal landscapes
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Desert-ocean ecosystem interactions
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/skeleton-coast-excursions/1741348847441_Activities_SkeletonCoast_SealColony_021.jpg`}
                    alt="Cape Cross seal colony on Skeleton Coast"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Desert Elephant Tracking */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/nature-drives/1741348647313_Activities_Hiking_008-1.jpg`}
                    alt="Desert-adapted elephants in Hoanib valley"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="safari-accent text-2xl text-stone-900 mb-6">
                  Desert Elephant Encounters
                </h3>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Track the remarkable desert-adapted elephants that traverse the ephemeral Hoanib 
                    River valley. These extraordinary animals have developed unique survival strategies 
                    for life in one of the world&apos;s most arid environments, demonstrating remarkable 
                    behavioral adaptations to desert conditions.
                  </p>
                  <p>
                    Expert guides share insights into elephant social structures, migration patterns, 
                    and the delicate balance between wildlife conservation and sustainable tourism 
                    in this fragile ecosystem.
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="safari-accent text-lg text-stone-900 mb-3">Wildlife Insights:</h4>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Desert adaptation behavioral observations
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Family group dynamics and social structures
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Water source navigation and survival strategies
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Conservation challenges and success stories
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conservation Research */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="safari-accent text-2xl text-stone-900 mb-6">
                  Conservation Science Encounters
                </h3>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Gain exclusive insights into groundbreaking conservation research through visits 
                    to the Hoanib Research Centre. Meet the scientists studying desert-adapted lions, 
                    including Dr. Philip Stander&apos;s pioneering work with these remarkable predators.
                  </p>
                  <p>
                    These educational encounters provide rare opportunities to understand current 
                    conservation challenges, participate in wildlife monitoring activities, and 
                    learn about the complex ecosystem relationships that sustain life in this 
                    coastal desert environment.
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="safari-accent text-lg text-stone-900 mb-3">Research Focus Areas:</h4>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Desert-adapted lion behavior and territory mapping
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Elephant movement patterns and habitat usage
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Coastal-desert ecosystem interaction studies
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></div>
                      Climate change impact assessments
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/wilderlife-researchers/desert_rhino_camp_2014-08-108e.jpg`}
                    alt="Wildlife research in the Hoanib region"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Options */}
        <div className="bg-stone-50 rounded-2xl p-12 mb-20">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-12">
            Additional Desert Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647313_Activities_Hiking_008-1.jpg`}
                  alt="Guided nature walks in desert landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="safari-accent text-xl text-stone-900 mb-4">Guided Nature Walks</h3>
              <p className="text-stone-600">
                Discover desert plant adaptations, Strandloper history, and intricate ecosystem 
                relationships on expert-guided walking expeditions.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/birding/korhaan-1.jpg`}
                  alt="Desert bird watching activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="safari-accent text-xl text-stone-900 mb-4">Specialized Birding</h3>
              <p className="text-stone-600">
                Spot over 200 desert-adapted bird species, including endangered Karoo korhaan 
                and specialized raptors unique to coastal desert environments.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/day-excursions/1741347488261_Final-Hoanib-11.jpg`}
                  alt="Geological exploration in Damaraland"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="safari-accent text-xl text-stone-900 mb-4">Geological Expeditions</h3>
              <p className="text-stone-600">
                Explore dramatic rock formations, Mudorib Springs, and ancient geological processes 
                that shaped this unique coastal-desert landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Heritage */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/skeleton-coast-excursions/1741348847438_Activities_SkeletonCoast_Graveyard_001.jpg`}
                alt="Skeleton Coast maritime heritage site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Maritime & Cultural Heritage
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                The Skeleton Coast holds centuries of maritime history, from ancient Strandloper 
                settlements to modern shipwrecks. Our cultural heritage programs explore the 
                fascinating human stories of survival and adaptation in this challenging environment.
              </p>
              <p>
                Learn about traditional Strandloper survival techniques, discover the stories 
                behind famous shipwrecks, and understand how indigenous communities thrived 
                in this seemingly inhospitable coastal desert for thousands of years.
              </p>
              <p>
                These cultural encounters add depth to your wilderness experience, revealing 
                the rich human heritage that complements the area&apos;s extraordinary natural history 
                and ongoing conservation efforts.
              </p>
            </div>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="bg-stone-100 rounded-2xl p-12">
          <div className="text-center">
            <h2 className="safari-heading text-3xl text-stone-900 mb-12">
              Optimal Experience Timing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="safari-accent text-xl text-stone-900 mb-4">May - July</h3>
                <p className="text-stone-600">
                  Cooler temperatures, excellent wildlife viewing, optimal conditions for 
                  Skeleton Coast excursions and desert tracking activities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                </div>
                <h3 className="safari-accent text-xl text-stone-900 mb-4">August - September</h3>
                <p className="text-stone-600">
                  Peak wildlife activity, ideal photography conditions, comfortable temperatures 
                  for extended outdoor activities and research encounters.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="safari-accent text-xl text-stone-900 mb-4">October</h3>
                <p className="text-stone-600">
                  Warmer weather returning, excellent birding opportunities, final optimal 
                  month before summer heat affects activity scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}