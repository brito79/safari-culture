import CampNavigation from "@/components/ui/CampNavigation";
import DoroHero from "@/components/doro/DoroHero";
import DoroOverview from "@/components/doro/DoroOverview";
import DoroAccommodation from "@/components/doro/DoroAccommodation";
import DoroActivities from "@/components/doro/DoroActivities";
import DoroGallery from "@/components/doro/DoroGallery";
import DoroContact from "@/components/doro/DoroContact";
import Link from "next/link";

export default function DoroNawasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100">
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
            <span className="text-stone-900 font-medium">Doro Nawas</span>
          </nav>
        </div>
      </div>

      {/* Page Sections */}
      <DoroHero />
      <DoroOverview />
      <DoroAccommodation />
      <DoroActivities />
      <DoroGallery />
      <DoroContact />
      
    
    </div>
  );
}