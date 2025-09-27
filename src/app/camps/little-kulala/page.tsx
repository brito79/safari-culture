import CampNavigation from "@/components/ui/CampNavigation";
import CampHero from "@/components/little-kulala/CampHero";
import CampOverview from "@/components/little-kulala/CampOverview";
import CampAccommodation from "@/components/little-kulala/CampAccommodation";
import CampActivities from "@/components/little-kulala/CampActivities";
import CampGallery from "@/components/little-kulala/CampGallery";

import Link from "next/link";
import CampContact from "@/components/little-kulala/CampContact";

export default function LittleKulalaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      <CampNavigation campName="Little Kulala" />
      
      {/* Breadcrumb */}
      <div className="px-6 sm:px-8 py-4 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-stone-500 hover:text-sunset-500 transition-colors">
              Home
            </Link>
            <span className="text-stone-300">/</span>
            <Link href="/camps" className="text-stone-500 hover:text-sunset-500 transition-colors">
              Camps
            </Link>
            <span className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">Little Kulala</span>
          </nav>
        </div>
      </div>

      {/* Page Sections */}
      <CampHero />
      <CampOverview />
      <CampAccommodation />
      <CampActivities />
      <CampGallery />
      <CampContact />
    </div>
  );
}