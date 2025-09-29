import CampNavigation from "@/components/ui/CampNavigation";
import Footer from "@/components/ui/Footer";
import DamaralandHero from "@/components/damaraland/DamaralandHero";
import DamaralandOverview from "@/components/damaraland/DamaralandOverview";
import DamaralandAccommodation from "@/components/damaraland/DamaralandAccommodation";
import DamaralandActivities from "@/components/damaraland/DamaralandActivities";
import DamaralandGallery from "@/components/damaraland/DamaralandGallery";
import DamaralandContact from "@/components/damaraland/DamaralandContact";
import Link from "next/link";

export default function DamaralandCampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <CampNavigation 
        campName="Damaraland Camp" 
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
            <span className="text-stone-900 font-medium">Damaraland Camp</span>
          </nav>
        </div>
      </div>

      {/* Page Sections */}
      <DamaralandHero />
      <DamaralandOverview />
      <DamaralandAccommodation />
      <DamaralandActivities />
      <DamaralandGallery />
      <DamaralandContact />
      
      
    </div>
  );
}