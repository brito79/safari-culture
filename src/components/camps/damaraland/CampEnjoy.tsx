import Image from "next/image";

export default function CampEnjoy() {
  const activities = [
    {
      title: "Nature Drives",
      description: "Morning and afternoon nature drives reveal the dramatic scenery and fascinating wildlife of the region, with desert-adapted elephants as the highlight along ancient migration routes.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`,
      duration: "Half Day",
      difficulty: "Easy",
      featured: true
    },
    {
      title: "Twyfelfontein Rock Art",
      description: "Day drive to Twyfelfontein UNESCO World Heritage site to view 6,000-year-old petroglyphs and marvel at the ancient artists of ages past.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_6.jpg`,
      duration: "Full Day",
      difficulty: "Easy",
      featured: true
    },
    {
      title: "Cultural Excursions",
      description: "Authentic encounters with Himba, Nama-Damara, and Herero communities, learning about traditional semi-nomadic lifestyles and cultural heritage.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_5.jpg`,
      duration: "Half Day",
      difficulty: "Easy",
      featured: false
    },
    {
      title: "Guided Nature Walks",
      description: "Discover ancient geological wonders and unique flora and fauna that have adapted to this arid environment with experienced local guides.",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_7.jpg`,
      duration: "2-3 Hours",
      difficulty: "Moderate",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            Enjoy Damaraland
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Discover ancient landscapes, encounter desert-adapted wildlife, and experience 
            the rich cultural heritage of this extraordinary UNESCO World Heritage region.
          </p>
        </div>

        {/* Featured Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {activities.filter(activity => activity.featured).map((activity, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
              <div className="relative h-80">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium text-xl mb-2">{activity.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-stone-200">
                    <span className="safari-accent">{activity.duration}</span>
                    <span>•</span>
                    <span className="safari-accent">{activity.difficulty}</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-stone-600 leading-relaxed text-lg">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Activity Sections */}
        <div className="space-y-20">
          {/* Desert Elephants & Nature Drives */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="safari-heading text-3xl text-stone-900 mb-6">
                Desert-Adapted Elephants
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed">
                Damaraland is home to the world&apos;s largest population of free-roaming desert elephants. 
                These remarkable creatures have adapted to survive in one of Africa&apos;s harshest environments, 
                developing longer legs and larger feet to traverse the rocky terrain and rocky outcrops.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Our experienced guides track these magnificent animals along ancient migration routes, 
                following seasonal movements dictated by rainfall patterns and water availability along 
                the Huab River. Morning and afternoon game drives offer the best opportunities for encounters.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-earth-50 p-4 rounded-xl">
                  <div className="text-2xl font-light text-earth-600 mb-1">120</div>
                  <div className="safari-accent text-stone-900 font-medium text-sm">Free-Roaming</div>
                  <div className="text-xs text-stone-600">Desert elephants</div>
                </div>
                <div className="bg-earth-50 p-4 rounded-xl">
                  <div className="text-2xl font-light text-earth-600 mb-1">50km</div>
                  <div className="safari-accent text-stone-900 font-medium text-sm">Daily Range</div>
                  <div className="text-xs text-stone-600">Elephant movement</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`}
                  alt="Desert Elephants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Twyfelfontein Rock Art */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_6.jpg`}
                  alt="Twyfelfontein Rock Art"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="lg:order-1 space-y-6">
              <h2 className="safari-heading text-3xl text-stone-900 mb-6">
                Ancient Rock Art Heritage
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed">
                Twyfelfontein contains one of the largest concentrations of petroglyphs in Africa, 
                with over 2,500 rock art recordings created by San hunter-gatherers up to 6,000 years ago. 
                This UNESCO World Heritage Site offers fascinating insights into ancient life and beliefs.
              </p>
              <p className="text-stone-700 leading-relaxed">
                The day excursion includes visits to the Burnt Mountain with its colorful volcanic formations 
                and the famous Organ Pipes, where ancient lava flows created remarkable columnar basalt 
                structures. A picnic lunch is provided in this spectacular setting.
              </p>
              
              <div className="bg-sand-50 p-6 rounded-xl">
                <h4 className="safari-accent text-lg font-medium text-stone-900 mb-3">Excursion Includes</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-earth-500 rounded-full mr-3"></div>
                    <span className="text-stone-700 text-sm">Guided tour of Twyfelfontein petroglyphs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-earth-500 rounded-full mr-3"></div>
                    <span className="text-stone-700 text-sm">Visit to Burnt Mountain and Organ Pipes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-earth-500 rounded-full mr-3"></div>
                    <span className="text-stone-700 text-sm">Picnic lunch in scenic location</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-earth-500 rounded-full mr-3"></div>
                    <span className="text-stone-700 text-sm">Available for 3+ night stays only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Activities */}
          <div className="grid md:grid-cols-2 gap-8">
            {activities.filter(activity => !activity.featured).map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-sand-50 to-earth-50 p-8 rounded-2xl">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="safari-heading text-2xl text-stone-900 mb-4">{activity.title}</h3>
                <p className="text-stone-700 leading-relaxed mb-4">{activity.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="safari-accent text-earth-600 font-medium">{activity.duration}</span>
                  <span className="safari-accent text-earth-600 font-medium">{activity.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 p-12 rounded-2xl text-white">
          <h2 className="safari-heading text-3xl text-white mb-6">
            Ready for Your Damaraland Adventure?
          </h2>
          <p className="safari-accent text-stone-300 text-lg mb-8 max-w-3xl mx-auto">
            Contact our experienced travel specialists to plan your unforgettable journey to one of 
            Africa&apos;s most remarkable wilderness destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 bg-earth-500 text-white hover:bg-earth-600 transition-all duration-300 text-sm tracking-widest hover:scale-105 rounded-lg"
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