import CampNavigation from "@/components/ui/CampNavigation";
import CampHero from "@/components/camps/damaraland/CampHero";
import CampOverview from "@/components/camps/damaraland/CampOverview";
import CampAccommodation from "@/components/camps/damaraland/CampAccommodation";
import CampActivities from "@/components/camps/damaraland/CampActivities";
import CampGallery from "@/components/camps/damaraland/CampGallery";
import CampContact from "@/components/camps/damaraland/CampContact";
import Link from "next/link";

export default function DamaralandCampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-neutral-50 to-stone-50">
      <CampNavigation campName="Damaraland Camp" />
      
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b-2 border-sand-200 dark:border-stone-700 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm">
            <Link href="/" className="text-stone-600 hover:text-sunset-600 hover:scale-110 transition-all duration-300 font-medium">
              Home
            </Link>
            <span className="text-stone-400">/</span>
            <Link href="/camps" className="text-stone-600 hover:text-sunset-600 hover:scale-110 transition-all duration-300 font-medium">
              Camps
            </Link>
            <span className="text-stone-400">/</span>
            <span className="text-stone-900 font-semibold">Damaraland Camp</span>
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