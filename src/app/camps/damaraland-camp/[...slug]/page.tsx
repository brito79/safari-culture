import CampNavigation from "@/components/ui/CampNavigation";
import CampHero from "@/components/camps/damaraland/CampHero";
import CampOverview from "@/components/camps/damaraland/CampOverview";
import CampAbout from "@/components/camps/damaraland/CampAbout";
import CampStay from "@/components/camps/damaraland/CampStay";
import CampEnjoy from "@/components/camps/damaraland/CampEnjoy";
import CampGallery from "@/components/camps/damaraland/CampGallery";
import CampContact from "@/components/camps/damaraland/CampContact";
import Link from "next/link";


interface PageProps {
  params: {
    slug?: string[];
  };
}

export default function DamaralandSlugPage({ params }: PageProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50">
      <CampNavigation 
        campName="Damaraland Camp" 
        brandText="WILDERNESS DAMARALAND"
        logoLetter="D"
      />
      
      {/* Breadcrumb for non-overview pages */}
      {slug !== "overview" && (
        <div className="px-6 sm:px-8 py-4 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm">
              <Link href="/" className="text-stone-600 hover:text-earth-600 transition-colors font-medium">
                Home
              </Link>
              <span className="text-stone-400">/</span>
              <Link href="/camps" className="text-stone-600 hover:text-earth-600 transition-colors font-medium">
                Camps
              </Link>
              <span className="text-stone-400">/</span>
              <Link href="/camps/damaraland-camp" className="text-stone-600 hover:text-earth-600 transition-colors font-medium">
                Damaraland Camp
              </Link>
              <span className="text-stone-400">/</span>
              <span className="text-stone-900 font-semibold">{getPageTitle()}</span>
            </nav>
          </div>
        </div>
      )}

      {/* Page Content */}
      {renderContent()}
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
    { slug: ["contact"] }
  ];
}