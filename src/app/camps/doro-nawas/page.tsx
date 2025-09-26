import Image from "next/image";
import Link from "next/link";

const campData = {
  id: "doro-nawas",
  name: "Wilderness Doro Nawas",
  region: "Damaraland",
  tagline: "A place of community, culture and curious creatures",
  description: "Feast your eyes on otherworldly panoramas, populated by intriguing desert-adapted wildlife and unusual flora. Engage with the local Doro Nawas community. Discover the fascinating ancient history and incredible geological phenomena of Damaraland.",
  longDescription: "Doro Nawas – 'the place where rhinos used to live' in the Damara language – rests on the edge of the dry Aba-Huab River. The camp is an excellent base for exploring the astounding San rock art and prehistoric rock engravings at Twyfelfontein, Namibia's first World Heritage Site.",
  
  accommodation: {
    suites: 16,
    type: "Wood, canvas, and thatch suites",
    features: ["Private outdoor shower", "Inviting pool", "Airy verandas", "Star gazing deck"]
  },
  
  wildlife: [
    { name: "Desert Elephant", description: "A unique and special sighting on the dusty plains" },
    { name: "Black Rhino", description: "Track these magnificent creatures with expert guides" },
    { name: "Kudu", description: "Their spiral horns are an iconic sight on safari" },
    { name: "Damara Hornbill", description: "A bright-beaked endemic of the Namibian desert" }
  ],
  
  activities: [
    { name: "Cultural excursions", description: "Gain rewarding insights into the community" },
    { name: "Nature drives", description: "Combine drives with a river lunch or scenic walk" },
    { name: "Stargazing", description: "Look up at the cosmic ocean high above" },
    { name: "Scorpion walks", description: "Discover fascinating desert critters at night" }
  ],
  
  rates: {
    fiRates: [
      { season: "Green Season", period: "Jan-Mar", perPerson: "R7,318", singleSupplement: "R1,832" },
      { season: "Peak Season", period: "Jun-Oct", perPerson: "R10,976", singleSupplement: "R2,744" },
      { season: "High Season", period: "Apr-May, Nov-Dec", perPerson: "R9,147", singleSupplement: "R2,287" }
    ]
  },
  
  images: {
    hero: "/images/doro-nawas/Wilderness Doro Nawas_1.jpg",
    gallery: [
      "/images/doro-nawas/Wilderness Doro Nawas_2.jpg",
      "/images/doro-nawas/Wilderness Doro Nawas_3.jpg",
      "/images/doro-nawas/Wilderness Doro Nawas_4.jpg",
      "/images/doro-nawas/Wilderness Doro Nawas_5.jpg",
      "/images/doro-nawas/Wilderness Doro Nawas_6.jpg",
      "/images/doro-nawas/Wilderness Doro Nawas_7.jpg",
      "/images/doro-nawas/Wilderness Doro Nawas_8.JPG",
      "/images/doro-nawas/Wilderness Doro Nawas_9.jpg",
      "/images/doro-nawas/Wilderness Doro Nawas_10.jpg"
    ]
  }
};

export default function DoroNawasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      {/* Navigation */}
      <nav className="relative z-10 p-6 sm:p-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="safari-heading text-2xl sm:text-3xl text-neutral-900">
              Safari Culture
            </h1>
            <span className="safari-accent text-sm text-earth-500">Namibia</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/camps" className="safari-body text-sunset-600 font-medium">
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

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={campData.images.hero}
          alt={`${campData.name} - Desert luxury in ${campData.region}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="max-w-4xl mx-auto text-white">
            <span className="safari-accent text-sm tracking-wider block mb-2">
              {campData.region.toUpperCase()}
            </span>
            <h1 className="safari-heading text-4xl sm:text-6xl lg:text-7xl mb-4">
              {campData.name}
            </h1>
            <p className="safari-body text-xl sm:text-2xl text-sand-100 max-w-3xl">
              {campData.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white/60 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="safari-body text-stone-500 hover:text-sunset-500">
              Home
            </Link>
            <span className="text-stone-400">/</span>
            <Link href="/camps" className="safari-body text-stone-500 hover:text-sunset-500">
              Camps
            </Link>
            <span className="text-stone-400">/</span>
            <span className="safari-body text-neutral-900">{campData.name}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="safari-heading text-3xl text-neutral-900 mb-6">
                  About Doro Nawas
                </h2>
                <div className="space-y-4">
                  <p className="safari-body text-lg text-stone-600 leading-relaxed">
                    {campData.description}
                  </p>
                  <p className="safari-body text-lg text-stone-600 leading-relaxed">
                    {campData.longDescription}
                  </p>
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <h2 className="safari-heading text-3xl text-neutral-900 mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {campData.images.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                      <Image
                        src={image}
                        alt={`${campData.name} gallery image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h2 className="safari-heading text-3xl text-neutral-900 mb-6">
                  Activities & Experiences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {campData.activities.map((activity, index) => (
                    <div key={index} className="bg-white/70 p-6 rounded-xl backdrop-blur-sm border border-stone-200">
                      <h3 className="safari-heading text-xl text-neutral-900 mb-2">
                        {activity.name}
                      </h3>
                      <p className="safari-body text-stone-600">
                        {activity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wildlife */}
              <div>
                <h2 className="safari-heading text-3xl text-neutral-900 mb-6">
                  Wildlife
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {campData.wildlife.map((animal, index) => (
                    <div key={index} className="bg-sand-50/80 p-6 rounded-xl border border-sand-200">
                      <h3 className="safari-heading text-xl text-neutral-900 mb-2">
                        {animal.name}
                      </h3>
                      <p className="safari-body text-stone-600">
                        {animal.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Accommodation Info */}
              <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-stone-200 sticky top-8">
                <h3 className="safari-heading text-2xl text-neutral-900 mb-4">
                  Accommodation
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="safari-accent text-xs text-earth-500 tracking-wider block">
                      SUITES
                    </span>
                    <span className="safari-body text-lg text-neutral-900 font-medium">
                      {campData.accommodation.suites} luxury suites
                    </span>
                  </div>
                  <div>
                    <span className="safari-accent text-xs text-earth-500 tracking-wider block">
                      TYPE
                    </span>
                    <span className="safari-body text-neutral-900">
                      {campData.accommodation.type}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-stone-200">
                    <h4 className="safari-heading text-lg text-neutral-900 mb-3">
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {campData.accommodation.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-sunset-500 rounded-full" />
                          <span className="safari-body text-stone-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rates Preview */}
                <div className="mt-8 pt-6 border-t border-stone-200">
                  <h4 className="safari-heading text-lg text-neutral-900 mb-4">
                    Rates (Per Person Sharing)
                  </h4>
                  <div className="space-y-3">
                    {campData.rates.fiRates.map((rate, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <span className="safari-body text-sm text-neutral-900 font-medium block">
                            {rate.season}
                          </span>
                          <span className="safari-accent text-xs text-earth-500">
                            {rate.period}
                          </span>
                        </div>
                        <span className="safari-body text-neutral-900 font-medium">
                          {rate.perPerson}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/camps/${campData.id}/rates`}
                    className="inline-block safari-body w-full text-center px-6 py-3 bg-sunset-500 text-white rounded-full hover:bg-sunset-600 transition-all duration-300 mt-4"
                  >
                    View Full Rates
                  </Link>
                </div>

                {/* Contact */}
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <Link 
                    href="/contact"
                    className="inline-block safari-body w-full text-center px-6 py-3 border-2 border-stone-300 text-stone-700 rounded-full hover:border-sunset-500 hover:text-sunset-500 transition-all duration-300"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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