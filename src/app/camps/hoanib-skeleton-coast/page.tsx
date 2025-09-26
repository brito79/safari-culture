import Link from "next/link";

export default function HoanibSkeletonCoastPage() {
  const campData = {
    name: "Wilderness Hoanib Skeleton Coast",
    location: "Skeleton Coast, Namibia",
    description: "A remote coastal camp where the desert meets the Atlantic Ocean, offering encounters with desert-adapted elephants and seals",
    highlights: [
      "Desert-adapted elephant tracking",
      "Seal colonies at Cape Cross",
      "Shipwreck exploration",
      "Remote wilderness location", 
      "Clay castle formations",
      "Unique coastal desert ecosystem"
    ],
    accommodation: {
      units: 8,
      type: "Elevated tented pavilions",
      features: [
        "Panoramic desert and mountain views",
        "En-suite bathroom with indoor/outdoor shower",
        "Private deck with daybed",
        "Climate control and ceiling fan",
        "Mini bar and coffee station",
        "Solar power with battery backup"
      ]
    },
    activities: [
      {
        name: "Desert Elephant Tracking",
        description: "Search for the legendary desert-adapted elephants that roam the Hoanib River valley"
      },
      {
        name: "Cape Cross Seal Colony",
        description: "Visit one of the largest fur seal colonies in the world at this dramatic coastal location"
      },
      {
        name: "Shipwreck Coast Drive",
        description: "Explore the haunting remains of vessels along the treacherous Skeleton Coast"
      },
      {
        name: "Clay Castle Formations",
        description: "Discover unique geological formations sculpted by wind and time in the desert"
      },
      {
        name: "Cultural Village Visits", 
        description: "Meet Himba communities and learn about their traditional way of life"
      },
      {
        name: "Scenic Flights",
        description: "Take to the skies for aerial views of the dramatic coastline and desert landscape"
      }
    ],
    wildlife: [
      "Desert-adapted elephant",
      "Cape fur seal",
      "Brown hyena",
      "Desert-adapted giraffe",
      "Oryx (Gemsbok)",
      "Springbok",
      "Black-backed jackal",
      "Whale and dolphin (offshore)"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      {/* Navigation */}
      <nav className="relative z-10 p-6 sm:p-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="safari-heading text-2xl sm:text-3xl text-neutral-900">
              Safari Culture
            </h1>
            <span className="safari-accent text-sm text-earth-500">Namibia</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/camps" className="safari-body text-stone-600 hover:text-sunset-500 transition-colors">
              Camps
            </Link>
            <Link href="/experiences" className="safari-body text-stone-600 hover:text-sunset-500 transition-colors">
              Experiences
            </Link>
            <Link href="/contact" className="safari-body text-stone-600 hover:text-sunset-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="px-6 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="safari-accent text-sm text-stone-500 tracking-wider">
            <Link href="/" className="hover:text-sunset-500 transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <Link href="/camps" className="hover:text-sunset-500 transition-colors">CAMPS</Link>
            <span className="mx-2">/</span>
            <span className="text-earth-500">HOANIB SKELETON COAST</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-sky-200 flex items-center justify-center">
          <div className="text-center text-neutral-600">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-sky-300 flex items-center justify-center">
              <span className="text-4xl">🏖️</span>
            </div>
            <p className="safari-accent text-sm tracking-wider">
              SKELETON COAST IMAGE PLACEHOLDER
            </p>
          </div>
        </div>
        
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="safari-heading text-4xl sm:text-6xl lg:text-7xl text-white mb-6">
                Hoanib Skeleton Coast
              </h1>
              <p className="safari-accent text-lg sm:text-xl text-sky-200 tracking-widest mb-6">
                Where Desert Meets Ocean
              </p>
              <p className="safari-body text-xl text-white/90 max-w-2xl leading-relaxed">
                {campData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Image Gallery */}
            <section className="py-16">
              <h2 className="safari-heading text-4xl text-neutral-900 mb-12 text-center">
                Coastal Wilderness
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Elevated Pavilion", desc: "Luxury accommodation with panoramic views" },
                  { title: "Desert Elephants", desc: "Track these magnificent adapted giants" },
                  { title: "Seal Colonies", desc: "Witness thousands of seals at Cape Cross" },
                  { title: "Shipwreck Coast", desc: "Explore haunting maritime history" },
                  { title: "Clay Castles", desc: "Unique desert geological formations" },
                  { title: "Coastal Flights", desc: "Aerial perspectives of this dramatic landscape" }
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-gradient-to-br from-sky-200 to-sand-300 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center text-neutral-600">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-sky-300 flex items-center justify-center">
                          <span className="text-2xl">📸</span>
                        </div>
                        <p className="safari-accent text-xs tracking-wider">
                          {item.title.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <h3 className="safari-heading text-lg text-neutral-900 mb-2">{item.title}</h3>
                    <p className="safari-body text-stone-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section>
              <h2 className="safari-heading text-4xl text-neutral-900 mb-12">
                Coastal Adventures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {campData.activities.map((activity, index) => (
                  <div key={index} className="bg-white/60 p-8 rounded-2xl border border-sand-200">
                    <h3 className="safari-heading text-xl text-neutral-900 mb-4">
                      {activity.name}
                    </h3>
                    <p className="safari-body text-stone-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Wildlife */}
            <section>
              <h2 className="safari-heading text-4xl text-neutral-900 mb-12">
                Coastal Wildlife
              </h2>
              <div className="bg-earth-50/80 p-8 rounded-2xl border border-earth-200">
                <p className="safari-body text-stone-700 mb-6 leading-relaxed">
                  The Skeleton Coast represents one of the world&apos;s most unique ecosystems, where desert-adapted 
                  wildlife thrives in the harsh interface between the Namib Desert and the Atlantic Ocean. 
                  This remote wilderness is home to species found nowhere else on Earth.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {campData.wildlife.map((animal, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-earth-200">
                      <p className="safari-body text-stone-700 text-sm text-center">{animal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Accommodation */}
            <section>
              <h2 className="safari-heading text-4xl text-neutral-900 mb-12">
                Coastal Luxury
              </h2>
              <div className="bg-sand-50/80 p-8 rounded-2xl border border-sand-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center">
                        <span className="text-xl">🏕️</span>
                      </div>
                      <div>
                        <h3 className="safari-heading text-xl text-neutral-900">
                          {campData.accommodation.units} {campData.accommodation.type}
                        </h3>
                        <p className="safari-accent text-xs text-earth-500 tracking-wider">
                          ACCOMMODATION
                        </p>
                      </div>
                    </div>
                    <p className="safari-body text-stone-600 leading-relaxed">
                      Elevated above the desert floor, each pavilion at Hoanib Skeleton Coast offers 
                      spectacular views across the wilderness to distant mountains. Experience ultimate 
                      comfort in one of Africa&apos;s most remote locations.
                    </p>
                  </div>
                  <div>
                    <h4 className="safari-accent text-xs text-earth-500 tracking-wider mb-4">
                      PAVILION FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {campData.accommodation.features.map((feature, index) => (
                        <li key={index} className="safari-body text-stone-600 text-sm flex items-start">
                          <span className="text-sky-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Info */}
              <div className="bg-white/80 p-6 rounded-2xl border border-stone-200">
                <h3 className="safari-heading text-lg text-neutral-900 mb-4">
                  Camp Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="safari-accent text-earth-500 tracking-wider block">LOCATION</span>
                    <span className="safari-body text-neutral-900">{campData.location}</span>
                  </div>
                  <div>
                    <span className="safari-accent text-earth-500 tracking-wider block">ACCOMMODATION</span>
                    <span className="safari-body text-neutral-900">{campData.accommodation.units} Pavilions</span>
                  </div>
                  <div>
                    <span className="safari-accent text-earth-500 tracking-wider block">ACTIVITIES</span>
                    <span className="safari-body text-neutral-900">{campData.activities.length} Experiences</span>
                  </div>
                </div>
              </div>

              {/* Rates Preview */}
              <div className="bg-sky-50/80 p-6 rounded-2xl border border-sky-200">
                <h3 className="safari-heading text-lg text-neutral-900 mb-4">
                  Rates & Booking
                </h3>
                <p className="safari-body text-stone-600 text-sm mb-4">
                  Rates vary by season and include accommodation, all meals, local beverages, and activities.
                </p>
                <div className="space-y-3">
                  <Link 
                    href="/contact"
                    className="block w-full safari-body text-center px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                  >
                    Request Quote
                  </Link>
                  <Link 
                    href="/camps/hoanib-skeleton-coast/rates"
                    className="block w-full safari-body text-center px-6 py-3 border border-sky-500 text-sky-600 rounded-full hover:bg-sky-50 transition-colors"
                  >
                    View Rates
                  </Link>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-stone-50/80 p-6 rounded-2xl border border-stone-200">
                <h3 className="safari-heading text-lg text-neutral-900 mb-4">
                  Highlights
                </h3>
                <ul className="space-y-2">
                  {campData.highlights.map((highlight, index) => (
                    <li key={index} className="safari-body text-stone-600 text-sm flex items-start">
                      <span className="text-sky-500 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <p className="safari-body text-neutral-400">
              © 2025 Safari Culture - Wilderness Namibia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}