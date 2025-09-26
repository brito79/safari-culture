import Navigation from "@/components/ui/Navigation";
import Link from "next/link";

export default function ExperiencesPage() {
  const experiences = [
    {
      category: "Wildlife Encounters",
      color: "earth",
      experiences: [
        {
          name: "Desert-Adapted Elephant Tracking",
          description: "Follow ancient migration paths to encounter the legendary desert elephants of Namibia",
          locations: ["Doro Nawas", "Hoanib Skeleton Coast", "Damaraland Camp"],
          difficulty: "Moderate",
          duration: "Half Day"
        },
        {
          name: "Black Rhino Conservation",
          description: "Support and witness rhino conservation efforts in their natural habitat",
          locations: ["Doro Nawas", "Damaraland Camp"],
          difficulty: "Easy",
          duration: "Full Day"
        },
        {
          name: "Cape Cross Seal Colony",
          description: "Visit one of the world's largest fur seal colonies along the dramatic coastline",
          locations: ["Hoanib Skeleton Coast"],
          difficulty: "Easy",
          duration: "Half Day"
        }
      ]
    },
    {
      category: "Desert Adventures",
      color: "sunset",
      experiences: [
        {
          name: "Sossusvlei Dune Climbing",
          description: "Scale the iconic red dunes including Big Daddy and Dune 45 at sunrise",
          locations: ["Little Kulala"],
          difficulty: "Challenging",
          duration: "Full Day"
        },
        {
          name: "Hot Air Ballooning",
          description: "Float silently over the ancient Namib Desert for breathtaking aerial views",
          locations: ["Little Kulala", "Doro Nawas"],
          difficulty: "Easy",
          duration: "Half Day"
        },
        {
          name: "Shipwreck Coast Exploration",
          description: "Discover haunting maritime history along the treacherous Skeleton Coast",
          locations: ["Hoanib Skeleton Coast"],
          difficulty: "Easy",
          duration: "Full Day"
        }
      ]
    },
    {
      category: "Cultural Immersion",
      color: "stone",
      experiences: [
        {
          name: "Himba Cultural Visits",
          description: "Meet the semi-nomadic Himba people and learn about their traditional lifestyle",
          locations: ["Hoanib Skeleton Coast", "Damaraland Camp"],
          difficulty: "Easy",
          duration: "Half Day"
        },
        {
          name: "Ancient Rock Art Tours",
          description: "Explore prehistoric rock engravings at UNESCO World Heritage sites",
          locations: ["Damaraland Camp"],
          difficulty: "Easy",
          duration: "Half Day"
        },
        {
          name: "Traditional Craft Workshops",
          description: "Learn traditional skills from local artisans and take home unique creations",
          locations: ["All Camps"],
          difficulty: "Easy",
          duration: "2-3 Hours"
        }
      ]
    },
    {
      category: "Scenic Journeys",
      color: "sky",
      experiences: [
        {
          name: "Scenic Flights",
          description: "Aerial perspectives of dramatic landscapes, coastlines, and desert formations",
          locations: ["All Camps"],
          difficulty: "Easy",
          duration: "1-2 Hours"
        },
        {
          name: "Canyon Explorations",
          description: "Discover ancient canyons carved by rivers over millions of years",
          locations: ["Little Kulala", "Doro Nawas"],
          difficulty: "Moderate",
          duration: "Half Day"
        },
        {
          name: "Geological Formations Tour",
          description: "Visit unique rock formations including Burnt Mountain and Organ Pipes",
          locations: ["Damaraland Camp", "Hoanib Skeleton Coast"],
          difficulty: "Easy",
          duration: "Half Day"
        }
      ]
    },
    {
      category: "Wellness & Relaxation",
      color: "sand",
      experiences: [
        {
          name: "Desert Stargazing",
          description: "Experience some of the clearest night skies on Earth with expert guides",
          locations: ["All Camps"],
          difficulty: "Easy",
          duration: "Evening"
        },
        {
          name: "Spa Treatments",
          description: "Rejuvenating treatments inspired by desert botanicals and traditional healing",
          locations: ["All Camps"],
          difficulty: "Easy",
          duration: "1-2 Hours"
        },
        {
          name: "Meditation & Mindfulness",
          description: "Find inner peace in the profound silence of the desert wilderness",
          locations: ["All Camps"],
          difficulty: "Easy",
          duration: "1 Hour"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      earth: "bg-earth-50/80 border-earth-200 text-earth-600",
      sunset: "bg-sunset-50/80 border-sunset-200 text-sunset-600", 
      stone: "bg-stone-50/80 border-stone-200 text-stone-600",
      sky: "bg-sky-50/80 border-sky-200 text-sky-600",
      sand: "bg-sand-50/80 border-sand-200 text-sand-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.earth;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-50";
      case "Moderate": return "text-yellow-600 bg-yellow-50";
      case "Challenging": return "text-red-600 bg-red-50";
      default: return "text-stone-600 bg-stone-50";
    }
  };

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
            <Link href="/camps" className="safari-body text-stone-600 hover:text-sunset-500 transition-colors">
              Camps
            </Link>
            <Link href="/experiences" className="safari-body text-sunset-600 font-medium">
              Experiences
            </Link>
            <Link href="/contact" className="safari-body text-stone-600 hover:text-sunset-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav> */}

      <Navigation />

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="safari-heading text-4xl sm:text-6xl lg:text-7xl text-neutral-900 mb-6">
            Desert Experiences
          </h1>
          <p className="safari-accent text-lg sm:text-xl text-earth-500 tracking-widest mb-6">
            Adventure Awaits in Every Direction
          </p>
          <p className="safari-body text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            From tracking desert elephants to climbing ancient dunes, from cultural encounters 
            to scenic flights over dramatic landscapes - discover the full spectrum of Namibian adventures.
          </p>
        </div>
      </section>

      {/* Experiences by Category */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {experiences.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="safari-heading text-3xl text-neutral-900 mr-4">
                  {category.category}
                </h2>
                <div className={`px-4 py-2 rounded-full ${getColorClasses(category.color)}`}>
                  <span className="safari-accent text-xs tracking-wider">
                    {category.experiences.length} EXPERIENCES
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.experiences.map((experience, index) => (
                  <div key={index} className="bg-white/80 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="safari-heading text-xl text-neutral-900 leading-tight">
                        {experience.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(experience.difficulty)}`}>
                        {experience.difficulty}
                      </span>
                    </div>
                    
                    <p className="safari-body text-stone-600 leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="safari-accent text-xs text-earth-500 tracking-wider block mb-2">
                          AVAILABLE AT
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {experience.locations.map((location, locIndex) => (
                            <span key={locIndex} className="safari-body text-xs px-3 py-1 bg-sand-100 text-stone-700 rounded-full">
                              {location}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="safari-accent text-xs text-earth-500 tracking-wider block">
                            DURATION
                          </span>
                          <span className="safari-body text-stone-700 text-sm">
                            {experience.duration}
                          </span>
                        </div>
                        <Link 
                          href="/contact"
                          className="safari-body text-sunset-600 hover:text-sunset-500 text-sm font-medium transition-colors"
                        >
                          Book Experience →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Planning */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="safari-heading text-4xl text-neutral-900 mb-6">
              Plan Your Adventure
            </h2>
            <p className="safari-body text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced guides will help you create the perfect itinerary based on your interests, 
              fitness level, and preferred camps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl border border-stone-200">
              <div className="w-16 h-16 bg-earth-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="safari-heading text-xl text-neutral-900 mb-4">
                Multi-Camp Journeys
              </h3>
              <p className="safari-body text-stone-600 text-sm leading-relaxed">
                Combine 2-4 camps for the ultimate Namibian experience. Each camp offers unique landscapes 
                and activities for a comprehensive desert adventure.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl border border-stone-200">
              <div className="w-16 h-16 bg-sunset-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="safari-heading text-xl text-neutral-900 mb-4">
                Private Experiences
              </h3>
              <p className="safari-body text-stone-600 text-sm leading-relaxed">
                All activities are conducted with your personal guide for intimate, personalized experiences 
                tailored to your interests and pace.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl border border-stone-200">
              <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="safari-heading text-xl text-neutral-900 mb-4">
                Seasonal Highlights
              </h3>
              <p className="safari-body text-stone-600 text-sm leading-relaxed">
                Different seasons offer unique experiences - from green season photography to dry season 
                wildlife concentrations around water sources.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="safari-body px-8 py-4 bg-sunset-500 text-white rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Plan My Journey
            </Link>
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