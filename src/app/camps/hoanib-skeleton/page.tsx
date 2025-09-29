import HoanibAccommodation from "@/components/hoanib/HoanibAccommodation";
import HoanibActivities from "@/components/hoanib/HoanibActivities";
import HoanibContact from "@/components/hoanib/HoanibContact";
import HoanibGallery from "@/components/hoanib/HoanibGallery";
import HoanibHero from "@/components/hoanib/HoanibHero";
import HoanibOverview from "@/components/hoanib/HoanibOverview";
import CampNavigation from "@/components/ui/CampNavigation";
import Footer from "@/components/ui/Footer";

import Link from "next/link";

export default function HoanibSkeletonCoastPage() {
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
            <span className="text-slate-900 font-medium">Hoanib Skeleton Coast</span>
          </nav>
        </div>
      </div>

      {/* Page Sections */}
      <HoanibHero />
      <HoanibOverview />
      <HoanibAccommodation />
      <HoanibActivities />
      <HoanibGallery />
      <HoanibContact />
      
      
    </div>
  );
}