import { Suspense } from "react";
import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import ExperiencesContent from "@/components/experiences/ExperiencesContent";
import ExperiencesLoading from "@/components/experiences/ExperiencesLoading";
import { getCampExperiences } from "@/app/actions/experiences/camp-experinces";

// Revalidate every 60 seconds
export const revalidate = 60;

async function ExperiencesData() {
  const experiences = await getCampExperiences();
  
  if (experiences.length === 0) {
    return (
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-stone-600">
            <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-4">No Experiences Available</h2>
            <p className="text-base sm:text-lg mb-6">
              We&apos;re currently updating our experiences. Please check back soon!
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return <ExperiencesContent experiences={experiences} />;
}

export default function ExperiencesPage() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <ExperiencesHero />

      {/* Experiences Content with Suspense */}
      <Suspense fallback={<ExperiencesLoading />}>
        <ExperiencesData />
      </Suspense>

      <Footer />
    </div>
  );
}

