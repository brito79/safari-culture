import Image from "next/image";

export default function CampActivities() {
  const activities = [
    {
      title: "Nature Drives",
      description: "Morning and afternoon nature drives reveal the dramatic scenery and fascinating wildlife of the region. Desert-adapted elephant are the highlight of the area, although the natural cycle of rainfall dictates the seasonal movements of wildlife along the Huab River.",
      duration: "Half Day",
      difficulty: "Easy",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_4.jpg`
    },
    {
      title: "Guided Nature Walks",
      description: "Learn more about the ancient geological wonders of Damaraland, as well as the unique plants, birds and reptiles that have superbly adapted to this arid area.",
      duration: "2-3 Hours",
      difficulty: "Moderate",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_7.jpg`
    },
    {
      title: "Twyfelfontein Rock Art",
      description: "Day drive to Twyfelfontein UNESCO World Heritage site to view ancient rock art and marvel at the artists of ages past. Picnic lunch provided.",
      duration: "Full Day",
      difficulty: "Easy",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_6.jpg`
    },
    {
      title: "Cultural Excursions",
      description: "Learn about the unique heritage of local peoples including Nama-Damara, Herero, and Owambo communities with respectful cultural engagement.",
      duration: "Half Day",
      difficulty: "Easy",
      image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_5.jpg`
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="safari-heading text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Desert Adventures
          </h2>
          <p className="safari-accent text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Explore ancient landscapes and encounter desert-adapted wildlife on guided experiences 
            that reveal the remarkable adaptations of life in this extraordinary ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
              <div className="relative h-64">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
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
    </section>
  );
}