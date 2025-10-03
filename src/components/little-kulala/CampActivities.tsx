import Image from "next/image";

export default function CampActivities() {
  const activities = [
    {
      title: "Hot Air Ballooning",
      description: "Experience sunrise flights over the ancient Namib Desert dunes",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/Balloon_safaris.jpg`,
      duration: "3 hours",
      difficulty: "Easy"
    },
    {
      title: "Sossusvlei & Dead Vlei",
      description: "Visit the iconic red dunes and ancient fossilized forest",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sossusvlei-dead-vlei/Visit_to_Sossusvlei_and_Sesriem.jpg`,
      duration: "Full day",
      difficulty: "Moderate"
    },
    {
      title: "Quad Biking Adventures",
      description: "Explore the desert landscapes on guided quad bike excursions",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/quad-bikes/11_little_kulala_quad_bikes_0208.jpg`,
      duration: "2 hours",
      difficulty: "Moderate"
    },
    {
      title: "Guided Nature Trails",
      description: "Discover desert-adapted flora and fauna with expert guides",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/guided-nature-trails/ecozone_littlekulala_teagancunniffe_0011.jpg`,
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      title: "Stargazing Experience",
      description: "Professional astronomy sessions under pristine dark skies",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/stargazing/starscapes_littlekulala_teagancunniffe_001.jpg`,
      duration: "2 hours",
      difficulty: "Easy"
    },
    {
      title: "Scenic Sundowners",
      description: "Enjoy cocktails while watching spectacular desert sunsets",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scenic-sundowner/ginbar_littlekulala_teagancunniffe_002.jpg`,
      duration: "2 hours",
      difficulty: "Easy"
    },
    {
      title: "Night Walks & Scorpion Spotting",
      description: "Discover nocturnal desert life with UV torches",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/scorpion-night-walks/Scorpion_night_walks.jpg`,
      duration: "1.5 hours",
      difficulty: "Easy"
    },
    {
      title: "Sleep-Out Experience",
      description: "Spend the night on your private rooftop star bed",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/sleep-out-experience/units_littlekulala_teagancunniffe_0131.jpg`,
      duration: "Full night",
      difficulty: "Easy"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl lg:text-5xl text-stone-900 mb-6">
            Desert Adventures
          </h2>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Immerse yourself in the wonders of the Namib Desert through carefully curated 
            experiences that reveal the secrets of this ancient landscape
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="group bg-stone-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  unoptimized
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

        {/* Featured Activity Highlight */}
        <div className="bg-gradient-to-r from-sunset-50 to-sand-50 rounded-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="safari-heading text-3xl text-stone-900 mb-6">
                Signature Experience: Hot Air Ballooning
              </h3>
              <p className="text-stone-700 text-lg leading-relaxed mb-8">
                Begin your day before dawn with a spectacular hot air balloon flight over the 
                ancient Namib Desert. As the sun rises, watch the red dunes transform from 
                deep purple to glowing orange, creating one of nature&apos;s most breathtaking displays.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
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
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/little-kulala/hot-air-balloon/02_little_kulala_sossusvlei_1593.jpg`}
                alt="Hot Air Balloon over Sossusvlei"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}