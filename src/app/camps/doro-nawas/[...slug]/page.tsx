import CampNavigation from "@/components/ui/CampNavigation";
import Footer from "@/components/shared/Footer";
import CampHero from "@/components/camps/doro-nawas/CampHero";
import CampOverview from "@/components/camps/doro-nawas/CampOverview";
import CampAbout from "@/components/camps/doro-nawas/CampAbout";
import CampStay from "@/components/camps/doro-nawas/CampStay";
import CampEnjoy from "@/components/camps/doro-nawas/CampEnjoy";
import CampGallery from "@/components/camps/doro-nawas/CampGallery";
import CampContact from "@/components/camps/doro-nawas/CampContact";
import Link from "next/link";


interface PageProps {
  params: {
    slug?: string[];
  };
}

export default function DoroNawasSlugPage({ params }: PageProps) {
  const slug = params.slug?.[0] || "overview";

  const getPageTitle = () => {
    switch (slug) {
      case "overview": return "Overview";
      case "about":
      case "about-us": return "About Us";
      case "stay":
      case "accommodation": return "Stay";
      case "activities":
      case "enjoy": return "Enjoy";
      case "gallery": return "Gallery";
      case "contact": return "Contact";
      default: return "Overview";
    }
  };

  const renderContent = () => {
    switch (slug) {
      case "overview":
        return (
          <>
            <CampHero />
            <CampOverview />
          </>
        );
      case "about":
      case "about-us":
        return <CampAbout />;
      case "stay":
      case "accommodation":
        return <CampStay />;
      case "activities":
      case "enjoy":
        return <CampEnjoy />;
      case "gallery":
        return (
          <div className="pt-8">
            <CampGallery />
          </div>
        );
      case "contact":
        return (
          <div className="pt-8">
            <CampContact />
          </div>
        );
      default:
        return (
          <>
            <CampHero />
            <CampOverview />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      <CampNavigation campName="Doro Nawas" />
      
      {/* Breadcrumb for non-overview pages */}
      {slug !== "overview" && (
        <div className="px-6 sm:px-8 py-4 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/camps/doro-nawas" className="text-stone-500 hover:text-sunset-500 transition-colors">
                Doro Nawas
              </Link>
              <span className="text-stone-300">/</span>
              <span className="text-stone-900 font-medium">
                {getPageTitle()}
              </span>
            </nav>
          </div>
        </div>
      )}

      {renderContent()}
      
      <Footer />
    </div>
  );
}

// Generate static params for known routes
export async function generateStaticParams() {
  return [
    { slug: ["overview"] },
    { slug: ["about"] },
    { slug: ["about-us"] },
    { slug: ["stay"] },
    { slug: ["accommodation"] },
    { slug: ["activities"] },
    { slug: ["enjoy"] },
    { slug: ["gallery"] },
    { slug: ["contact"] },
  ];
}
