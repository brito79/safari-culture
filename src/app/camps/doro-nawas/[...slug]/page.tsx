import CampNavigation from "@/components/ui/CampNavigation";
import Footer from "@/components/shared/Footer";
import DoroOverview from "@/components/doro/DoroOverview";
import DoroAccommodation from "@/components/doro/DoroAccommodation";
import DoroActivities from "@/components/doro/DoroActivities";
import DoroGallery from "@/components/doro/DoroGallery";
import DoroContact from "@/components/doro/DoroContact";
import Link from "next/link";

interface PageProps {
  params: { slug: string[] };
}

export default function DoroSectionPage({ params }: PageProps) {
  const section = params.slug?.[0] || 'overview';

  const renderSection = () => {
    switch (section) {
      case 'overview':
        return <DoroOverview />;
      case 'accommodation':
        return <DoroAccommodation />;
      case 'activities':
        return <DoroActivities />;
      case 'gallery':
        return <DoroGallery />;
      case 'contact':
        return <DoroContact />;
      default:
        return <DoroOverview />;
    }
  };

  const getSectionTitle = () => {
    switch (section) {
      case 'overview':
        return 'Overview';
      case 'accommodation':
        return 'Accommodation';
      case 'activities':
        return 'Activities';
      case 'gallery':
        return 'Gallery';
      case 'contact':
        return 'Contact';
      default:
        return 'Overview';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-earth-50 to-stone-50">
      <CampNavigation 
        campName="Doro Nawas" 
        brandText="WILDERNESS DAMARALAND"
        logoLetter="D"
      />
      
      {/* Breadcrumb */}
      <div className="px-6 sm:px-8 py-4 bg-white/80 backdrop-blur-sm border-b border-sand-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-stone-500 hover:text-sunset-600 transition-colors">
              Home
            </Link>
            <span className="text-stone-300">/</span>
            <Link href="/camps" className="text-stone-500 hover:text-sunset-600 transition-colors">
              Camps
            </Link>
            <span className="text-stone-300">/</span>
            <Link href="/camps/doro-nawas" className="text-stone-500 hover:text-sunset-600 transition-colors">
              Doro Nawas
            </Link>
            <span className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">{getSectionTitle()}</span>
          </nav>
        </div>
      </div>

      {/* Section Content */}
      {renderSection()}
      
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: ['overview'] },
    { slug: ['accommodation'] },
    { slug: ['activities'] },
    { slug: ['gallery'] },
    { slug: ['contact'] },
  ];
}