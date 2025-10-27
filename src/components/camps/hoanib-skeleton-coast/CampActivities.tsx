import Image from "next/image";

const activities = [
  {
    title: "Nature Drives",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/nature-drives/1741348647312_Activities_Hiking_007-1.jpg`,
    description: "Explore the Hoanib River valley in search of desert-adapted elephants, gemsbok, giraffe, and springbok. These specialized game drives reveal how wildlife has adapted to survive in this harsh desert environment.",
    duration: "3-4 hours",
    highlights: ["Desert-adapted elephants", "Gemsbok & springbok", "Desert-adapted giraffe", "Unique ecosystem"]
  },
  {
    title: "Guided Nature Walks",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/guided-nature-walks/1741348647312_Activities_Hiking_007-1.jpg`, 
    description: "Discover the intricate desert ecosystem on foot with expert guides who share insights into Strandloper history, desert plant adaptations, and the remarkable survival strategies of local wildlife.",
    duration: "2-3 hours",
    highlights: ["Strandloper history", "Desert plant life", "Tracking skills", "Cultural insights"]
  },
  {
    title: "Skeleton Coast Excursions",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/skeleton-coast-excursions/1741348847441_Activities_SkeletonCoast_SealColony_021.jpg`,
    description: "For guests staying 3+ nights, embark on a 4x4 journey to the legendary Skeleton Coast. Witness massive seal colonies and explore haunting shipwreck remains, with return flights offering aerial perspectives.",
    duration: "Full day",
    highlights: ["Cape Cross seal colony", "Shipwreck exploration", "4x4 adventure", "Return scenic flights"]
  },
  {
    title: "Day Excursions",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/day-excursions/1741347436974_Final-Hoanib-64.jpg`,
    description: "Journey to Mudorib Springs and explore Damaraland's geological wonders. These excursions often include opportunities to track desert-adapted black rhino in their natural habitat.",
    duration: "Full day", 
    highlights: ["Mudorib Springs", "Damaraland geology", "Desert-adapted rhino", "Rock formations"]
  },
  {
    title: "Wildlife Research Encounters",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/wilderlife-researchers/desert_rhino_camp_2014-08-108e.jpg`,
    description: "Meet researchers from the Hoanib Research Centre and learn about Dr Philip Stander's groundbreaking work with desert-adapted lions and the ongoing conservation efforts in this unique ecosystem.",
    duration: "2-3 hours",
    highlights: ["Desert lion research", "Conservation projects", "Research center visit", "Wildlife tracking"]
  },
  {
    title: "Birding Expeditions", 
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/hoanib-skeleton/birding/korhaan-1.jpg`,
    description: "Discover over 200 bird species adapted to desert conditions, including the endangered Karoo korhaan, Ludwig's bustard, and various raptors that thrive in this coastal desert environment.",
    duration: "2-3 hours",
    highlights: ["Karoo korhaan", "Ludwig's bustard", "Desert raptors", "Endemic species"]
  }
];

export default function CampActivities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 safari-heading">
            Activities & Experiences
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Immerse yourself in the unique ecosystem where the Namib Desert meets the Atlantic Ocean, 
            with expert guides revealing the secrets of coastal desert survival.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 safari-heading">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Duration: <span className="safari-accent">{activity.duration}</span>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Highlights:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activity.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Activity Notes</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• All activities are subject to weather conditions and wildlife movements</p>
              <p>• Skeleton Coast excursions require minimum 3-night stays</p>
              <p>• Special research encounters may be arranged based on scientist availability</p>
              <p>• Birding activities are best during cooler morning and evening hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}