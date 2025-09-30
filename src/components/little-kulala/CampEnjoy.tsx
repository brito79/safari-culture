import Image from "next/image";

export default function CampEnjoy() {
  const activities = [
    {
      title: "Hot Air Ballooning",
      description: "Experience sunrise flights over the ancient Namib Desert dunes with champagne breakfast celebration",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/Balloon_safaris.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/02_little_kulala_sossusvlei_1593.jpg`,
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/03_little_kulala_balloon_on_board_1094.jpg`
      ],
      duration: "3-4 hours",
      difficulty: "Easy",
      featured: true
    },
    {
      title: "Sossusvlei & Dead Vlei",
      description: "Visit the iconic red dunes and ancient fossilized forest, including climbing Big Daddy dune",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/Visit_to_Sossusvlei_and_Sesriem.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvleie040.jpg`,
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvleie074.jpg`
      ],
      duration: "Full day",
      difficulty: "Moderate"
    },
    {
      title: "Quad Biking Adventures",
      description: "Explore the spectacular gravel plains on eco-sensitive quad bike tours across the desert landscape",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/quad-bikes/11_little_kulala_quad_bikes_0208.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/quad-bikes/11_little_kulala_quad_bikes_0804.jpg`
      ],
      duration: "2-3 hours",
      difficulty: "Moderate"
    },
    {
      title: "Guided Nature Trails",
      description: "Discover desert-adapted flora and fauna with expert guides in the Kulala Wilderness Reserve",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/guided-nature-trails/ecozone_littlekulala_teagancunniffe_0011.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/guided-nature-trails/ecozone_littlekulala_teagancunniffe_004.jpg`,
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/guided-nature-trails/ecozone_littlekulala_teagancunniffe_032.jpg`
      ],
      duration: "2-3 hours",
      difficulty: "Easy to Moderate"
    },
    {
      title: "Stargazing Experience",
      description: "Professional astronomy sessions under pristine dark skies from your private rooftop",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/stargazing/starscapes_littlekulala_teagancunniffe_001.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/stargazing/kulala-namib_2014-12-121e.jpg`,
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/stargazing/starscapes_littlekulala_teagancunniffe_008.jpg`
      ],
      duration: "2 hours",
      difficulty: "Easy"
    },
    {
      title: "Scenic Sundowners",
      description: "Enjoy cocktails while watching spectacular desert sunsets from elevated viewpoints",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scenic-sundowner/ginbar_littlekulala_teagancunniffe_002.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scenic-sundowner/nam2019-1.jpg`,
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scenic-sundowner/oevans_kdl036.jpg`
      ],
      duration: "2 hours",
      difficulty: "Easy"
    },
    {
      title: "Night Walks & Scorpion Spotting",
      description: "Discover nocturnal desert life with UV torches and expert naturalist guides",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/Scorpion_night_walks.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/barking_gecko_peeking_out_of_hole.jpg`,
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/white_lady_house_2.jpg`
      ],
      duration: "1.5 hours",
      difficulty: "Easy"
    },
    {
      title: "Sleep-Out Experience",
      description: "Spend the night on your private rooftop star bed under the pristine Namib sky",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_0131.jpg`,
      additionalImages: [
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_039.jpg`,
        `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_0392.jpg`
      ],
      duration: "Full night",
      difficulty: "Easy"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            Enjoy Little Kulala
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Immerse yourself in the wonders of the Namib Desert through carefully curated 
            experiences that reveal the secrets of this ancient landscape
          </p>
        </div>

        {/* Featured Activity - Hot Air Ballooning */}
        <div className="bg-gradient-to-r from-sunset-50 to-sand-50 rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-sunset-500 text-white text-sm font-medium rounded-full mb-4">
                SIGNATURE EXPERIENCE
              </span>
              <h2 className="safari-heading text-4xl text-stone-900 mb-6">
                Hot Air Ballooning
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-8">
                Begin your day before dawn with a spectacular hot air balloon flight over the 
                ancient Namib Desert. As the sun rises, watch the red dunes transform from 
                deep purple to glowing orange, creating one of nature&apos;s most breathtaking displays.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sunset-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="safari-accent font-medium text-stone-900 mb-1">Early Morning Flight</h4>
                    <p className="text-stone-600 text-sm">Departure at sunrise for optimal conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sunset-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="safari-accent font-medium text-stone-900 mb-1">Champagne Breakfast</h4>
                    <p className="text-stone-600 text-sm">Celebration meal in the desert</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sunset-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="safari-accent font-medium text-stone-900 mb-1">Professional Pilot</h4>
                    <p className="text-stone-600 text-sm">Experienced desert balloon operators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sunset-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="safari-accent font-medium text-stone-900 mb-1">Photography</h4>
                    <p className="text-stone-600 text-sm">Unlimited aerial desert photography</p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 text-sm">
                  <strong>Weather permitting and at additional cost.</strong> Ballooning closed on 25 December, 
                  01 January, and from mid-January to mid-February.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/02_little_kulala_sossusvlei_1593.jpg`}
                alt="Hot Air Balloon over Sossusvlei"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="mb-20">
          <h2 className="safari-heading text-3xl text-stone-900 mb-12 text-center">
            Desert Adventures
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.filter(activity => !activity.featured).map((activity, index) => (
              <div key={index} className="group bg-stone-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-lg mb-1">{activity.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-stone-200">
                      <span className="safari-accent">{activity.duration}</span>
                      <span>•</span>
                      <span className="safari-accent">{activity.difficulty}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Activity Sections */}
        <div className="space-y-20">
          {/* Sossusvlei & Dead Vlei */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvlei-and-deadvlei-aerial-custom.jpg`}
                  alt="Aerial View of Sossusvlei"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvleie040.jpg`}
                    alt="Dead Vlei Trees"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/sossusvleie074.jpg`}
                    alt="Sossusvlei Dunes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Sossusvlei & Dead Vlei
              </h3>
              <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
                <p>
                  Visit the iconic red dunes of Sossusvlei and the haunting beauty of Dead Vlei, 
                  where 900-year-old fossilized camel thorn trees create one of the world&apos;s most 
                  photographed landscapes.
                </p>
                <p>
                  Challenge yourself by climbing Big Daddy, one of the tallest sand dunes in the world, 
                  or explore the 30-metre deep Sesriem Canyon with its fascinating geological formations.
                </p>
                <p>
                  Our exclusive gate access means you&apos;ll experience these natural wonders in relative 
                  solitude, with the best lighting conditions for photography.
                </p>
              </div>
            </div>
          </div>

          {/* Nature Activities */}
          <div className="bg-gradient-to-br from-stone-50 to-sand-50 rounded-2xl p-12">
            <h3 className="safari-heading text-3xl text-stone-900 mb-12 text-center">
              Connect with Desert Nature
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/guided-nature-trails/ecozone_littlekulala_teagancunniffe_035.jpg`}
                    alt="Guided Nature Walk"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="safari-accent font-medium text-stone-900 mb-4">Guided Nature Walks</h4>
                <p className="text-stone-600">
                  Discover the remarkable adaptations of desert flora and fauna with expert naturalist guides.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/nature-drives/sociable_weaver.jpg`}
                    alt="Wildlife Spotting"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="safari-accent font-medium text-stone-900 mb-4">Nature Drives</h4>
                <p className="text-stone-600">
                  Spot desert-adapted wildlife including oryx, springbok, and the fascinating sociable weaver.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/barking_gecko_peeking_out_of_hole.jpg`}
                    alt="Night Wildlife"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="safari-accent font-medium text-stone-900 mb-4">Night Walks</h4>
                <p className="text-stone-600">
                  Experience the desert&apos;s nocturnal world with UV torches revealing hidden creatures.
                </p>
              </div>
            </div>
          </div>

          {/* Adventure Activities */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Desert Adventures
              </h3>
              <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                <p>
                  For the more adventurous, explore the spectacular gravel plains on eco-sensitive 
                  quad bike tours. These guided adventures take you across diverse desert terrain 
                  while respecting the fragile ecosystem.
                </p>
                <p>
                  E-fatbike adventures offer an alternative way to explore the landscape, providing 
                  a quieter approach to wildlife viewing and desert exploration.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    **Quad biking and e-fatbike tours available at extra cost on DB1 rate basis, 
                    included on FI rate basis - subject to availability.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/quad-bikes/11_little_kulala_quad_bikes_0804.jpg`}
                  alt="Quad Biking Adventure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/20_little_kulala_e_bikes_0934.jpg`}
                    alt="E-bike Adventure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/25_little_kulala_game_drive_0778.jpg`}
                    alt="Game Drive"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-12 text-center text-white">
          <h3 className="safari-heading text-3xl mb-6">
            Ready for Your Desert Adventure?
          </h3>
          <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            From sunrise balloon flights to stargazing sessions, Little Kulala offers unforgettable 
            experiences in one of the world&apos;s most spectacular desert landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 bg-sunset-500 text-white hover:bg-sunset-600 transition-all duration-300 text-sm tracking-widest hover:scale-105 rounded-lg"
            >
              PLAN YOUR VISIT
            </a>
            <a 
              href="#gallery"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300 text-sm tracking-widest rounded-lg"
            >
              VIEW GALLERY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}