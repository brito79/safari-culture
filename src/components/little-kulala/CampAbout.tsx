import Image from "next/image";

export default function CampAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            About Little Kulala
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            A chic desert retreat from which to explore the untamed beauty of the Namib Desert
          </p>
        </div>

        {/* Main Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Elegant Desert Sanctuary
            </h2>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Wilderness-Little-Kulala is an elegant sanctuary on the dry Auab riverbed in the 
                27,000-hectare Kulala Wilderness Reserve – the ideal setting from which to savour 
                the splendour and solitude of the Namib Desert.
              </p>
              <p>
                Our exclusive-use gate to the Namib-Naukluft National Park allows guests early and 
                private access to the iconic red dunes of Sossusvlei and Dead Vlei. Its private gate 
                allows guests exclusive, early access to the Namib-Naukluft National Park to explore 
                Sossusvlei and its extraordinary surrounds.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_1.jpg`}
                alt="Little Kulala Desert Villa with Pool"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvlei-and-deadvlei-aerial-custom.jpg`}
                  alt="Aerial View of Sossusvlei"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/Wilderness-Little-Kulala_3.jpg`}
                  alt="Little Kulala Villa Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hot Air Balloon Feature */}
        <div className="bg-gradient-to-r from-sunset-50 to-sand-50 rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/Balloon_safaris.jpg`}
                alt="Hot Air Balloon over Namib Desert"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Unforgettable Balloon Adventures
              </h3>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  An unforgettable hot air balloon adventure* over the Namib Sand Sea and mystical 
                  fairy circles is followed by a celebratory champagne breakfast.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>*Weather permitting and at an additional cost</strong>
                  </p>
                  <p className="text-amber-700 text-sm mt-2">
                    <strong>NOTE:</strong> Ballooning closed on 25 December and 01 January, 
                    and from mid-January to mid-February.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="safari-heading text-3xl text-stone-900 mb-8 text-center">
            Desert Experience
          </h3>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                <p>
                  The vast, open dunefields beckon, offering thrilling adventures as well as time for 
                  solitude. An excursion to Sossusvlei includes climbing Big Daddy, one of the tallest 
                  sand dunes in the world.
                </p>
                <p>
                  Other activities include a hike along the 30-metre deep Sesriem Canyon, or seeing the 
                  desert come alive on a guided walk in the Kulala Wilderness Reserve&apos;s low-impact area. 
                  Nature drives spotting desert-adapted wildlife are also on offer.
                </p>
                <p>
                  A family favourite – exploring the spectacular gravel plains on eco-sensitive quad bike 
                  or e-fatbike adventures** is available for adventurous guests.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    **At extra cost on a DB1 rate basis, however, included on a FI rate basis - subject 
                    to availability on either rate basis
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/Visit_to_Sossusvlei_and_Sesriem.jpg`}
                  alt="Sossusvlei Big Daddy Dune"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/quad-bikes/11_little_kulala_quad_bikes_0208.jpg`}
                    alt="Quad Biking Adventure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/guided-nature-trails/ecozone_littlekulala_teagancunniffe_004.jpg`}
                    alt="Guided Nature Walks"
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
              World Heritage Site
            </h3>
            <p className="text-stone-700 text-lg leading-relaxed max-w-4xl mx-auto">
              The Namib Sand Sea is a World Heritage Site, and here, Sossusvlei is the result of a 
              series of fascinating geological events. The flow of the ephemeral Tsauchab River, now 
              blocked by a mass of sand, is flanked by some of the tallest dunes in the world.
            </p>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvleie040.jpg`}
              alt="Sossusvlei Geological Formation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Purpose & Conservation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/nature-drives/sociable_weaver.jpg`}
              alt="Desert Wildlife Conservation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="safari-heading text-3xl text-stone-900 mb-6">
              Conservation Purpose
            </h3>
            <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
              <p>
                Once farmland used for subsistence goat farming, the Kulala Wilderness Reserve had 
                very little indigenous wildlife. In 1996 Wilderness stepped in to rehabilitate the 
                area and today the land and its wildlife have returned to their former glorious natural state.
              </p>
            </div>
          </div>
        </div>

        {/* Wildlife Section */}
        <div className="mb-20">
          <h3 className="safari-heading text-3xl text-stone-900 mb-8 text-center">
            Desert-Adapted Wildlife
          </h3>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                The area is home to striking desert-adapted wildlife, such as the majestic oryx 
                (or gemsbok, the national animal of Namibia) as well springbok, spotted hyena, 
                and the occasional brown hyena.
              </p>
              <p>
                Smaller creatures such as bat-eared fox, black-backed jackal, porcupine, Cape fox, 
                and aardwolf can also be spotted. The aptly named dune lark, a true endemic that is 
                perfectly camouflaged by the sand, is a fascinating find.
              </p>
              <p>
                A surprisingly diverse array of insects, reptiles, and rodents call this harsh 
                environment home. Other fascinating creatures to look out for include the buck-spoor 
                spider with its multi-entrance burrow – and ambush specialist, the antlion.
              </p>
              <p>
                At dusk the iconic call of barking geckos echoes in the still night.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/barking_gecko_peeking_out_of_hole.jpg`}
                  alt="Barking Gecko"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/white_lady_house_2.jpg`}
                    alt="Desert Spider"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/Scorpion_night_walks.jpg`}
                    alt="Night Wildlife"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Camp Highlights */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="safari-heading text-3xl mb-6">
                Wilderness-Little-Kulala
              </h3>
              <div className="space-y-4 leading-relaxed">
                <p>
                  An elegant desert retreat, Little Kulala effortlessly embraces its Namib vistas. 
                  The guest suites feature private pools for invigorating relief from the heat.
                </p>
                <p>
                  The suite rooftops invite private sundowners and suppers. A roll-out bed on the 
                  shaded deck is perfect for a siesta, or heavenly night&apos;s sleep.
                </p>
                <p>
                  Highlights include a pamper session at the Kulala Spa, a romantic fairy-circle 
                  dinner under the stars and waking up to uninterrupted views over the early-morning desert.
                </p>
                <p>
                  The Trading Store is stocked with interesting keepsakes to take home, and the upstairs 
                  lounge includes a library and an inviting corner for relaxation.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_0131.jpg`}
                  alt="Rooftop Sleep-out Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scenic-sundowner/ginbar_littlekulala_teagancunniffe_002.jpg`}
                    alt="Sundowner Experience"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/stargazing/starscapes_littlekulala_teagancunniffe_001.jpg`}
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