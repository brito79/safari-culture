import Footer from "@/components/ui/Footer";
import Navigation from "@/components/ui/Navigation";
import Link from "next/link";

export default function DamaralandCampPage() {
  const campData = {
    name: "Wilderness Damaraland Camp",
    location: "Damaraland, Namibia",
    description: "A luxury camp in the heart of ancient Damaraland, famous for desert-adapted elephants and rich cultural heritage",
    highlights: [
      "Desert-adapted elephant encounters",
      "Ancient rock art sites",
      "Scenic mountain landscapes",
      "Traditional Himba culture",
      "Unique geological formations",
      "Pristine wilderness experience"
    ],
    accommodation: {
      units: 10,
      type: "Canvas and stone tented suites",
      features: [
        "Spectacular valley views",
        "En-suite bathroom with outdoor shower",
        "Private deck with comfortable seating",
        "Climate control and ceiling fan",
        "Mini bar and tea/coffee facilities",
        "24-hour solar power"
      ]
    },
    activities: [
      {
        name: "Elephant Tracking",
        description: "Follow ancient paths to encounter the legendary desert-adapted elephants of Damaraland"
      },
      {
        name: "Rock Art Excursions",
        description: "Discover prehistoric rock engravings at Twyfelfontein, a UNESCO World Heritage Site"
      },
      {
        name: "Himba Cultural Visits",
        description: "Meet the semi-nomadic Himba people and learn about their traditional lifestyle"
      },
      {
        name: "Burnt Mountain & Organ Pipes",
        description: "Explore unique geological formations created by ancient volcanic activity"
      },
      {
        name: "Nature Walks",
        description: "Guided walks to discover desert-adapted flora and small wildlife species"
      },
      {
        name: "Scenic Drives",
        description: "Journey through dramatic landscapes of mountains, valleys, and ancient riverbeds"
      }
    ],
    wildlife: [
      "Desert-adapted elephant",
      "Black rhino (rare)",
      "Desert-adapted giraffe",
      "Oryx (Gemsbok)",
      "Springbok",
      "Kudu",
      "Steenbok",
      "Rock hyrax"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="px-6 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="safari-accent text-sm text-stone-500 tracking-wider">
            <Link href="/" className="hover:text-sunset-500 transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <Link href="/camps" className="hover:text-sunset-500 transition-colors">CAMPS</Link>
            <span className="mx-2">/</span>
            <span className="text-earth-500">DAMARALAND CAMP</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-earth-200 flex items-center justify-center">
          <div className="text-center text-neutral-600">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-earth-300 flex items-center justify-center">
              <span className="text-4xl">🏔️</span>
            </div>
            <p className="safari-accent text-sm tracking-wider">
              DAMARALAND MOUNTAINS IMAGE PLACEHOLDER
            </p>
          </div>
        </div>
        
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="safari-heading text-5xl sm:text-7xl lg:text-8xl text-white mb-6">
                Damaraland Camp
              </h1>
              <p className="safari-accent text-lg sm:text-xl text-earth-200 tracking-widest mb-6">
                Ancient Landscapes & Culture
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
                Discover Damaraland
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Tented Suite", desc: "Canvas and stone luxury in mountain setting" },
                  { title: "Rock Art Sites", desc: "Ancient petroglyphs at Twyfelfontein" },
                  { title: "Desert Elephants", desc: "Track these remarkable adapted giants" },
                  { title: "Himba Culture", desc: "Authentic cultural encounters" },
                  { title: "Burnt Mountain", desc: "Striking geological formations" },
                  { title: "Valley Views", desc: "Panoramic mountain and desert vistas" }
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-gradient-to-br from-earth-200 to-stone-300 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center text-neutral-600">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-earth-300 flex items-center justify-center">
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
                Cultural & Wildlife Adventures
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
                Mountain Wildlife
              </h2>
              <div className="bg-earth-50/80 p-8 rounded-2xl border border-earth-200">
                <p className="safari-body text-stone-700 mb-6 leading-relaxed">
                  Damaraland&apos;s ancient landscape supports remarkable wildlife adapted to harsh mountain 
                  and desert conditions. This UNESCO World Heritage region is particularly famous 
                  for its free-roaming desert elephants and the endangered black rhino.
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
                Mountain Luxury
              </h2>
              <div className="bg-sand-50/80 p-8 rounded-2xl border border-sand-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-earth-200 rounded-full flex items-center justify-center">
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
                      Built using local materials and traditional techniques, each suite at Damaraland Camp 
                      blends seamlessly with the natural environment while providing modern comfort and 
                      spectacular views across the ancient landscape.
                    </p>
                  </div>
                  <div>
                    <h4 className="safari-accent text-xs text-earth-500 tracking-wider mb-4">
                      SUITE FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {campData.accommodation.features.map((feature, index) => (
                        <li key={index} className="safari-body text-stone-600 text-sm flex items-start">
                          <span className="text-earth-500 mr-2">•</span>
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
                    <span className="safari-body text-neutral-900">{campData.accommodation.units} Tented Suites</span>
                  </div>
                  <div>
                    <span className="safari-accent text-earth-500 tracking-wider block">ACTIVITIES</span>
                    <span className="safari-body text-neutral-900">{campData.activities.length} Experiences</span>
                  </div>
                </div>
              </div>

              {/* Rates Preview */}
              <div className="bg-earth-50/80 p-6 rounded-2xl border border-earth-200">
                <h3 className="safari-heading text-lg text-neutral-900 mb-4">
                  Rates & Booking
                </h3>
                <p className="safari-body text-stone-600 text-sm mb-4">
                  Rates vary by season and include accommodation, all meals, local beverages, and activities.
                </p>
                <div className="space-y-3">
                  <Link 
                    href="/contact"
                    className="block w-full safari-body text-center px-6 py-3 bg-earth-500 text-white rounded-full hover:bg-earth-600 transition-colors"
                  >
                    Request Quote
                  </Link>
                  <Link 
                    href="/camps/damaraland-camp/rates"
                    className="block w-full safari-body text-center px-6 py-3 border border-earth-500 text-earth-600 rounded-full hover:bg-earth-50 transition-colors"
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
                      <span className="text-earth-500 mr-2">•</span>
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
      <Footer />
    </div>
  );
}