import Image from "next/image";

export default function CampAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            About Hoanib Skeleton Coast
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            Where the Namib Desert meets the Atlantic Ocean in coastal wilderness
          </p>
        </div>

        {/* Main Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Coastal Desert Sanctuary
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Hoanib Skeleton Coast Camp offers an extraordinary wilderness experience in one of 
                Namibia&apos;s most remote and pristine locations. Set in the ephemeral Hoanib River valley, 
                this exclusive camp provides privileged access to the legendary Skeleton Coast and 
                its remarkable desert-adapted wildlife.
              </p>
              <p>
                This unique ecosystem represents one of the world&apos;s most extreme environments, where 
                ancient geological processes have created a landscape of breathtaking beauty and 
                incredible biodiversity. Here, desert-adapted elephants traverse vast dunes, while 
                the nearby Atlantic coastline reveals centuries of maritime history.
              </p>
              <p>
                Our camp serves as a gateway to understanding the complex relationships between 
                desert and ocean ecosystems, offering guests rare insights into conservation research 
                and the remarkable adaptations of life in this coastal wilderness.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/day-excursions/1741347436974_Final-Hoanib-64.jpg`}
                alt="Hoanib valley landscape with desert-adapted wildlife"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Wildlife Section */}
        <div className="mb-20">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-12">
            Desert-Ocean Wildlife Encounters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/nature-drives/1741348647313_Activities_Hiking_008-1.jpg`}
                  alt="Desert-adapted elephants in Hoanib valley"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="safari-accent text-xl text-stone-900 mb-4">Desert Elephants</h3>
              <p className="text-stone-600">
                Witness remarkable desert-adapted elephants as they navigate the ephemeral 
                Hoanib River, demonstrating extraordinary survival strategies in this arid landscape.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/skeleton-coast-excursions/1741348847441_Activities_SkeletonCoast_SealColony_021.jpg`}
                  alt="Cape Cross seal colony on Skeleton Coast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="safari-accent text-xl text-stone-900 mb-4">Marine Wildlife</h3>
              <p className="text-stone-600">
                Explore the legendary Skeleton Coast to witness massive Cape fur seal colonies 
                and discover the rich marine ecosystem of the Benguela Current.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/birding/korhaan-1.jpg`}
                  alt="Endemic desert bird species"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="safari-accent text-xl text-stone-900 mb-4">Endemic Species</h3>
              <p className="text-stone-600">
                Discover over 200 bird species adapted to desert conditions, including the 
                endangered Karoo korhaan and specialized raptors that thrive in this unique environment.
              </p>
            </div>
          </div>
        </div>

        {/* Conservation Story */}
        <div className="bg-stone-50 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Conservation & Research Partnership
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p className="text-lg">
                Hoanib Skeleton Coast Camp proudly supports the Hoanib Research Centre and ongoing 
                scientific research into desert-adapted lions, elephants, and the complex ecosystem 
                dynamics of this coastal desert environment.
              </p>
              <p>
                Our partnership with leading conservationists, including Dr. Philip Stander&apos;s desert 
                lion research project, ensures that guest stays directly contribute to groundbreaking 
                conservation efforts and scientific understanding of this remarkable ecosystem.
              </p>
              <p>
                Through wildlife monitoring, habitat protection, and community engagement programs, 
                the camp plays a vital role in preserving this pristine wilderness for future generations 
                while providing guests with unique insights into cutting-edge conservation science.
              </p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/skeleton-coast-excursions/1741348847438_Activities_SkeletonCoast_Graveyard_001.jpg`}
                alt="Skeleton Coast dramatic landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Remote Wilderness Access
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Located in the remote Hoanib River valley, our camp is accessible only by light 
                aircraft, ensuring an exclusive and pristine wilderness experience. This isolation 
                preserves the area&apos;s ecological integrity while providing guests with unparalleled 
                access to one of Africa&apos;s last true wilderness frontiers.
              </p>
              <p>
                The camp&apos;s strategic position offers privileged access to both inland desert ecosystems 
                and the dramatic Skeleton Coast, allowing for comprehensive exploration of this 
                unique environment where two of the world&apos;s most extreme ecosystems converge.
              </p>
              <p>
                Our fly-in safari model minimizes environmental impact while maximizing wildlife 
                viewing opportunities and ensuring that this fragile ecosystem remains undisturbed 
                for the countless species that call it home.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Experiences */}
        <div className="mt-20">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-12">
            Signature Hoanib Experiences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="safari-accent text-lg text-stone-900 mb-2">Skeleton Coast Excursions</h3>
              <p className="text-stone-600 text-sm">Full-day adventures to legendary seal colonies and shipwreck sites</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="safari-accent text-lg text-stone-900 mb-2">Research Encounters</h3>
              <p className="text-stone-600 text-sm">Meet conservation scientists and learn about ongoing wildlife research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="safari-accent text-lg text-stone-900 mb-2">Desert Tracking</h3>
              <p className="text-stone-600 text-sm">Expert-guided tracking of desert-adapted elephants and rare black rhino</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="safari-accent text-lg text-stone-900 mb-2">Cultural Heritage</h3>
              <p className="text-stone-600 text-sm">Discover Strandloper maritime history and desert survival traditions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}