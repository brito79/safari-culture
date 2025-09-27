import CampNavigation from "@/components/ui/CampNavigation";
import Footer from "@/components/ui/Footer";
import HoanibOverview from "@/components/hoanib/HoanibOverview";
import HoanibAccommodation from "@/components/hoanib/HoanibAccommodation";
import HoanibActivities from "@/components/hoanib/HoanibActivities";
import HoanibGallery from "@/components/hoanib/HoanibGallery";
import HoanibContact from "@/components/hoanib/HoanibContact";
import Link from "next/link";

interface PageProps {
  params: { slug: string[] };
}

export default function HoanibSectionPage({ params }: PageProps) {
  const section = params.slug?.[0] || 'overview';

  const renderSection = () => {
    switch (section) {
      case 'overview':
        return <HoanibOverview />;
      case 'accommodation':
        return <HoanibAccommodation />;
      case 'activities':
        return <HoanibActivities />;
      case 'gallery':
        return <HoanibGallery />;
      case 'contact':
        return <HoanibContact />;
      default:
        return <HoanibOverview />;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-stone-50">
      <CampNavigation 
        campName="Hoanib Skeleton Coast" 
        brandText="WILDERNESS DAMARALAND"
        logoLetter="H"
      />
      
      {/* Breadcrumb */}
      <div className="px-6 sm:px-8 py-4 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/camps" className="text-slate-500 hover:text-blue-600 transition-colors">
              Camps
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/camps/hoanib-skeleton-coast" className="text-slate-500 hover:text-blue-600 transition-colors">
              Hoanib Skeleton Coast
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{getSectionTitle()}</span>
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