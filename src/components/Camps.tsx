
import Image from "next/image";
import Link from "next/link";

const camps = [
  {
    id: "doro-nawas",
    name: "Wilderness Doro Nawas",
    region: "Damaraland",
    description: "A fortress on a rocky outcrop with sweeping views across ancient plains. Track desert-adapted elephants and black rhinos in this UNESCO World Heritage landscape.",
    features: ["Desert-adapted wildlife", "Black rhino tracking", "Ancient rock art", "Cultural experiences"],
    images: {
      hero: "/images/doro-nawas/Wilderness Doro Nawas_1.jpg",
      gallery: [
        "/images/doro-nawas/Wilderness Doro Nawas_2.jpg",
        "/images/doro-nawas/Wilderness Doro Nawas_3.jpg",
        "/images/doro-nawas/Wilderness Doro Nawas_4.jpg"
      ]
    },
    accommodation: "16 suites",
    fromPrice: "R7,318"
  },
  {
    id: "little-kulala",
    name: "Wilderness Little Kulala",
    region: "Sossusvlei",
    description: "Gateway to the towering red dunes of Sossusvlei. Wake to sunrise over the Namib Desert, the world's oldest desert stretching endlessly to the horizon.",
    features: ["Sossusvlei access", "Desert dune climbing", "Star gazing", "Desert luxury"],
    images: {
      hero: "/images/little-kulala/Wilderness Little Kulala_1.jpg",
      gallery: [
        "/images/little-kulala/Wilderness Little Kulala_2.jpg",
        "/images/little-kulala/Wilderness Little Kulala_3.jpg",
        "/images/little-kulala/Wilderness Little Kulala_4.jpg"
      ]
    },
    accommodation: "11 suites",
    fromPrice: "R16,260"
  },
  {
    id: "hoanib-skeleton",
    name: "Wilderness Hoanib Skeleton Coast",
    region: "Skeleton Coast",
    description: "Remote wilderness at the edge of the world. Explore the mysterious Skeleton Coast where desert meets ocean in dramatic, windswept landscapes.",
    features: ["Skeleton Coast excursions", "Wildlife research", "Seal colonies", "Remote wilderness"],
    images: {
      hero: "/images/hoanib-skeleton/Wilderness Hoanib Skeleton Coast Camp_1.jpg",
      gallery: [
        "/images/hoanib-skeleton/Wilderness Hoanib Skeleton Coast Camp_2.jpg",
        "/images/hoanib-skeleton/Wilderness Hoanib Skeleton Coast Camp_3.jpg",
        "/images/hoanib-skeleton/day-excursions/1741347436974_Final-Hoanib-64.jpg"
      ]
    },
    accommodation: "8 tents",
    fromPrice: "R19,055"
  },
  {
    id: "damaraland",
    name: "Wilderness Damaraland Camp",
    region: "Damaraland",
    description: "Cultural immersion in ancient landscapes. Discover San rock art, learn from local communities, and witness wildlife thriving in this remarkable semi-desert environment.",
    features: ["Cultural immersion", "San rock art", "Community visits", "Desert elephants"],
    images: {
      hero: "/images/damaraland/Wilderness Damaraland Camp_1.jpg",
      gallery: [
        "/images/damaraland/Wilderness Damaraland Camp_2.jpg",
        "/images/damaraland/Wilderness Damaraland Camp_3.jpg",
        "/images/damaraland/Wilderness Damaraland Camp_4.jpg"
      ]
    },
    accommodation: "10 tents",
    fromPrice: "R9,931"
  }
];

export default function CampsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      {/* Navigation */}
      {/* <nav className="relative z-10 p-6 sm:p-8 bg-white/80 backdrop-blur-sm">
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
      </nav> */}

      {/* Page Header */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center space-y-6">
            <h1 className="safari-heading text-4xl sm:text-6xl lg:text-7xl text-neutral-900">
              Wilderness Camps
            </h1>
            <p className="safari-accent text-lg sm:text-xl text-earth-500 tracking-widest">
              Four Extraordinary Desert Sanctuaries
            </p>
            <p className="safari-body text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Each camp offers unique access to Namibia&apos;s most pristine wilderness areas, 
              combining luxury accommodation with authentic desert experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="space-y-16">
            {camps.map((camp, index) => (
              <div 
                key={camp.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                    <Image
                      src={camp.images.hero}
                      alt={`${camp.name} - ${camp.description.slice(0, 100)}...`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="safari-accent text-sm text-white/90 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm tracking-wider">
                        {camp.region.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Image Gallery Preview */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {camp.images.gallery.slice(0, 3).map((image, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`${camp.name} gallery image ${imgIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 15vw"
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="safari-heading text-3xl sm:text-4xl text-neutral-900 mb-4">
                      {camp.name}
                    </h2>
                    <p className="safari-body text-lg text-stone-600 leading-relaxed mb-6">
                      {camp.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="safari-heading text-xl text-neutral-900 mb-3">
                      Experiences
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {camp.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-sunset-500 rounded-full" />
                          <span className="safari-body text-stone-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-6 py-4 border-t border-stone-200">
                    <div>
                      <span className="safari-accent text-xs text-earth-500 tracking-wider block">
                        ACCOMMODATION
                      </span>
                      <span className="safari-body text-neutral-900 font-medium">
                        {camp.accommodation}
                      </span>
                    </div>
                    <div>
                      <span className="safari-accent text-xs text-earth-500 tracking-wider block">
                        FROM (PER PERSON)
                      </span>
                      <span className="safari-body text-neutral-900 font-medium">
                        {camp.fromPrice}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link 
                      href={`/camps/${camp.id}`}
                      className="safari-body px-8 py-3 bg-sunset-500 text-white rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                    >
                      Explore Camp
                    </Link>
                    <Link 
                      href={`/camps/${camp.id}/rates`}
                      className="safari-body px-8 py-3 border-2 border-stone-300 text-stone-700 rounded-full hover:border-sunset-500 hover:text-sunset-500 transition-all duration-300 text-center"
                    >
                      View Rates
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sand-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="safari-heading text-3xl sm:text-4xl text-neutral-900 mb-6">
            Plan Your Wilderness Journey
          </h2>
          <p className="safari-body text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Our travel designers will help you create the perfect multi-camp experience, 
            combining luxury accommodation with authentic desert adventures.
          </p>
          <Link 
            href="/contact"
            className="inline-block safari-body px-8 py-4 bg-sunset-500 text-white rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
}