import CampRatesTable from "@/components/camps/CampRatesTable";
import { getCampRatesByName } from "@/app/actions/rates/rates";
import { slugToCampDbName } from "@/lib/utils/camp-utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function CampRatesPage({ params }: PageProps) {
  // Await the params
  const { name } = await params;
  
  // Convert URL slug to database name format
  // e.g., "wilderness-doro-nawas" -> "Wilderness-Doro-Nawas"
  const campDbName = slugToCampDbName(name);
  
  // Fetch camp rates data
  const campData = await getCampRatesByName(campDbName);
  
  // If camp not found, show 404
  if (!campData) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-sand to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Link 
          href="/camps"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-sunset-500 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="safari-body">Back to Camps</span>
        </Link>
        
        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="safari-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-3 sm:mb-4">
            {campData.camp} Rates
          </h1>
          <p className="safari-body text-base sm:text-lg text-stone-600">
            Seasonal rates and pricing information for {campData.camp}
          </p>
        </div>
        
        {/* Rates Table Component */}
        <CampRatesTable camp={campData} />
        
        {/* Contact CTA */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="safari-heading text-xl sm:text-2xl text-neutral-900 dark:text-gray-100 mb-3 sm:mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="safari-body text-sm sm:text-base text-stone-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto px-4">
            Contact our travel designers to create your perfect wilderness experience at {campData.camp}
          </p>
          <Link
            href="/contact"
            className="inline-block safari-body px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-sunset-500 text-stone-700 rounded-full hover:bg-sunset-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
