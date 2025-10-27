import Image from "next/image";

export default function CampAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            About Doro Nawas
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Where ancient rock art meets desert wildlife in the heart of Damaraland
          </p>
        </div>

        {/* Main Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Cultural Desert Heritage
            </h2>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Doro Nawas – &apos;the place where rhinos used to live&apos; in the Damara language – 
                rests on the edge of the dry Aba-Huab River. The camp is an excellent base for exploring 
                the astounding San rock art at Twyfelfontein, Namibia&apos;s first World Heritage Site.
              </p>
              <p>
                Experience otherworldly panoramas populated by intriguing desert-adapted wildlife 
                and unusual flora. Engage with the local Doro Nawas community and discover the 
                fascinating ancient history of Damaraland through guided cultural interactions.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_2.jpg`}
                alt="Doro Nawas Camp Overview"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_7.jpg`}
                  alt="Twyfelfontein Rock Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_3.jpg`}
                  alt="Doro Nawas Tent Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rock Art Feature */}
        <div className="bg-gradient-to-r from-earth-50 to-sand-50 rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_7.jpg`}
                alt="Twyfelfontein Rock Art Heritage Site"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Ancient Rock Art Adventures
              </h3>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Explore Twyfelfontein&apos;s astounding San rock art, featuring some of Africa&apos;s 
                  finest petroglyphs dating back thousands of years. Experience guided cultural 
                  excursions with local Damara community members who share their heritage.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>UNESCO World Heritage Site</strong> - Twyfelfontein contains one of the largest 
                    concentrations of rock petroglyphs in Africa.
                  </p>
                  <p className="text-amber-700 text-sm mt-2">
                    <strong>NOTE:</strong> Cultural activities available daily with expert local guides 
                    and community involvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desert Experience */}
        <div className="mb-20">
          <h3 className="safari-heading text-3xl text-stone-900 mb-8 text-center">
            Desert Wildlife Experience
          </h3>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                <p>
                  Track endangered desert black rhinos and magnificent desert-adapted elephants that have 
                  learned to thrive in this harsh yet beautiful environment. The Aba-Huab River provides 
                  critical water sources that attract diverse wildlife.
                </p>
                <p>
                  Explore unique geological formations including petrified forests and ancient volcanic 
                  landscapes. Experience fascinating night activities including scorpion walks using UV 
                  lights to discover remarkable desert adaptations.
                </p>
                <p>
                  Stargazing sessions from the dedicated observatory deck offer exceptional views of 
                  constellations in the clear Damaraland skies, while cultural interactions provide 
                  insights into traditional Damara lifestyles and conservation efforts.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_6.jpg`}
                  alt="Desert-adapted Elephants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_9.jpg`}
                    alt="Scorpion Night Walks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_8.JPG`}
                    alt="Stargazing Experience"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geological Wonder */}
        <div className="bg-gradient-to-br from-stone-50 to-sand-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h3 className="safari-heading text-3xl text-stone-900 mb-4">
              Ancient Geological Heritage
            </h3>
            <p className="text-stone-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Damaraland showcases some of the world&apos;s most ancient geological formations, including 
              volcanic landscapes, petrified forests, and mineral deposits that tell the story of 
              Earth&apos;s dramatic history spanning millions of years.
            </p>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_10.jpg`}
              alt="Damaraland Geological Formation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Purpose & Conservation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_5.jpg`}
              alt="Community Conservation Partnership"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="safari-heading text-3xl text-stone-900 mb-6">
              Conservation Partnership
            </h3>
            <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
              <p>
                Local Damara communities work closely with conservation efforts, creating a sustainable 
                model where cultural heritage and wildlife protection support each other. This partnership 
                ensures both traditional knowledge and endangered species are preserved for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Camp Highlights */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="safari-heading text-3xl mb-6">
                Wilderness Doro Nawas
              </h3>
              <div className="space-y-4 leading-relaxed">
                <p>
                  A cultural desert retreat that seamlessly blends ancient heritage with modern comfort. 
                  The sixteen luxury meru tents offer panoramic views of the surrounding Damaraland landscape.
                </p>
                <p>
                  Each suite features private outdoor showers and spacious verandas perfect for enjoying 
                  the dramatic desert sunsets and clear night skies filled with brilliant stars.
                </p>
                <p>
                  Highlights include guided rock art excursions, stargazing sessions on the observatory deck, 
                  cultural interactions with local Damara communities, and tracking desert-adapted wildlife.
                </p>
                <p>
                  The camp&apos;s communal areas encourage relaxation and reflection, with comfortable lounges, 
                  a refreshing swimming pool, and fire pit areas for evening gatherings under the stars.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_3.jpg`}
                  alt="Luxury Accommodation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_4.jpg`}
                    alt="Camp Facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doro-nawas/Wilderness-Doro-Nawas_8.JPG`}
                    alt="Stargazing"
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