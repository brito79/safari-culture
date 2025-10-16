import React from "react";
import Navigation from "@/components/shared/Navigation";

type RatePeriod = "6-Jun-26 to 31-May-26" | "1-Apr-26 to 31-May-26" | "1-Jun-26 to 31-Oct-26" | "1-Nov-26 to 19-Dec-26" | "20-Dec-26 to 5-Jan-27";

interface CampRate {
  sharing: string;
  supplement: string;
}

interface CampData {
  category: string;
  camp: string;
  name: string;
  type: string;
  rates: Record<RatePeriod, CampRate>;
}

export default function RatesPage() {
  const rateData: CampData[] = [
    {
      category: "Adventures",
      camp: "Doro Nawas",
      name: "Wilderness-Doro-Nawas",
      type: "FI",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R7 318", supplement: "R2 194" },
        "1-Apr-26 to 31-May-26": { sharing: "R8 932", supplement: "R2 668" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R11 351", supplement: "R3 388" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R9 429", supplement: "R2 814" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R10 603", supplement: "R3 165" }
      }
    },
    {
      category: "Adventures",
      camp: "Sossusvlei",
      name: "Wilderness Kulala Desert Lodge",
      type: "FI",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R6 835", supplement: "R2 046" },
        "1-Apr-26 to 31-May-26": { sharing: "R8 215", supplement: "R2 462" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R10 976", supplement: "R3 276" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R8 215", supplement: "R2 462" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R10 976", supplement: "R3 276" }
      }
    },
    {
      category: "Classic",
      camp: "Damaraland",
      name: "Wilderness Damaraland Camp",
      type: "FI",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R9 131", supplement: "R2 725" },
        "1-Apr-26 to 31-May-26": { sharing: "R12 133", supplement: "R3 368" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R16 019", supplement: "R4 781" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R11 283", supplement: "R3 368" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R16 019", supplement: "R4 781" }
      }
    },
    {
      category: "Classic",
      camp: "Desert Rhino",
      name: "Wilderness Desert Rhino Camp",
      type: "FI",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R11 067", supplement: "R3 309" },
        "1-Apr-26 to 31-May-26": { sharing: "R14 486", supplement: "R4 328" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R18 235", supplement: "R5 443" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R11 486", supplement: "R3 428" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R18 235", supplement: "R5 443" }
      }
    },
    {
      category: "Classic",
      camp: "Kulene",
      name: "Wilderness Serra Cafema",
      type: "FI",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R17 023", supplement: "R5 081" },
        "1-Apr-26 to 31-May-26": { sharing: "R17 150", supplement: "R5 119" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R28 372", supplement: "R8 469" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R17 150", supplement: "R5 119" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R28 372", supplement: "R8 469" }
      }
    },
    {
      category: "Classic",
      camp: "Skeleton Coast",
      name: "Wilderness Hoanib Skeleton Coast Camp",
      type: "FI",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R19 055", supplement: "R5 688" },
        "1-Apr-26 to 31-May-26": { sharing: "R20 655", supplement: "R6 165" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R31 881", supplement: "R9 516" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R20 659", supplement: "R6 166" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R31 881", supplement: "R9 516" }
      }
    },
    {
      category: "Classic",
      camp: "Sossusvlei",
      name: "Wilderness-Little-Kulala",
      type: "FI",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R16 260", supplement: "R4 854" },
        "1-Apr-26 to 31-May-26": { sharing: "R16 846", supplement: "R5 028" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R26 747", supplement: "R7 984" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R16 846", supplement: "R5 028" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R26 747", supplement: "R7 984" }
      }
    }
  ];

  const dbbRates: CampData[] = [
    {
      category: "Adventures",
      camp: "Doro Nawas",
      name: "Wilderness-Doro-Nawas",
      type: "DBB",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R4 503", supplement: "R1 344" },
        "1-Apr-26 to 31-May-26": { sharing: "R5 804", supplement: "R1 733" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R8 561", supplement: "R2 555" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R5 755", supplement: "R1 718" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R6 138", supplement: "R1 832" }
      }
    },
    {
      category: "Adventures",
      camp: "Sossusvlei",
      name: "Wilderness Kulala Desert Lodge",
      type: "DBB",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R4 219", supplement: "R1 259" },
        "1-Apr-26 to 31-May-26": { sharing: "R5 340", supplement: "R1 594" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R7 876", supplement: "R2 351" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R5 451", supplement: "R1 627" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R5 905", supplement: "R1 763" }
      }
    },
    {
      category: "Classic",
      camp: "Damaraland",
      name: "Wilderness Damaraland Camp",
      type: "DBB",
      rates: {
        "6-Jun-26 to 31-May-26": { sharing: "R5 662", supplement: "R1 690" },
        "1-Apr-26 to 31-May-26": { sharing: "R7 111", supplement: "R2 122" },
        "1-Jun-26 to 31-Oct-26": { sharing: "R12 755", supplement: "R3 807" },
        "1-Nov-26 to 19-Dec-26": { sharing: "R7 315", supplement: "R2 184" },
        "20-Dec-26 to 5-Jan-27": { sharing: "R8 178", supplement: "R2 441" }
      }
    }
  ];

  const periods: RatePeriod[] = [
    "6-Jun-26 to 31-May-26",
    "1-Apr-26 to 31-May-26", 
    "1-Jun-26 to 31-Oct-26",
    "1-Nov-26 to 19-Dec-26",
    "20-Dec-26 to 5-Jan-27"
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-stone-900 mb-4">
              NAMIBIA Rate Sheet
            </h1>
            <p className="text-stone-600 text-lg">
              2026-2027 Season Rates - All prices in South African Rand (ZAR)
            </p>
          </div>

          {/* Full Inclusive (FI) Rates Table */}
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 mb-12 overflow-hidden">
            <div className="bg-stone-900 text-white p-6">
              <h2 className="text-2xl font-light">Full Inclusive (FI) Rates</h2>
              <p className="text-stone-300 text-sm mt-2">Per person sharing and single supplement rates</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-24"></th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-32">Camp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-48">Property Name</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-12">Type</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-24">Rate Type</th>
                    {periods.map((period) => (
                      <th key={period} className="px-3 py-3 text-center text-xs font-medium text-stone-700 min-w-32">
                        {period}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rateData.map((camp, index) => (
                    <React.Fragment key={`${camp.category}-${camp.camp}-${index}`}>
                      {/* Per person, sharing row */}
                      <tr className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="px-4 py-3 text-sm font-medium text-stone-900">
                          {camp.category}
                        </td>
                        <td className="px-4 py-3 text-sm text-stone-700">
                          {camp.camp}
                        </td>
                        <td className="px-4 py-3 text-sm text-stone-700">
                          {camp.name}
                        </td>
                        <td className="px-4 py-3 text-center text-sm font-medium text-stone-900">
                          {camp.type}
                        </td>
                        <td className="px-4 py-3 text-center text-sm text-stone-700">
                          Per person, sharing
                        </td>
                        {periods.map((period) => (
                          <td key={period} className="px-3 py-3 text-center text-sm font-medium text-stone-900">
                            {camp.rates[period]?.sharing || '-'}
                          </td>
                        ))}
                      </tr>
                      {/* Single supplement row */}
                      <tr className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3 text-center text-sm text-stone-700">
                          Single supplement
                        </td>
                        {periods.map((period) => (
                          <td key={period} className="px-3 py-3 text-center text-sm text-stone-700">
                            {camp.rates[period]?.supplement || '-'}
                          </td>
                        ))}
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dinner, Bed & Breakfast (DBB) Rates Table */}
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 mb-12 overflow-hidden">
            <div className="bg-stone-700 text-white p-6">
              <h2 className="text-2xl font-light">Dinner, Bed & Breakfast (DBB) Rates</h2>
              <p className="text-stone-300 text-sm mt-2">Per person sharing and single supplement rates</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-24"></th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-32">Camp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-48">Property Name</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-12">Type</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-24">Rate Type</th>
                    {periods.map((period) => (
                      <th key={period} className="px-3 py-3 text-center text-xs font-medium text-stone-700 min-w-32">
                        {period}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dbbRates.map((camp, index) => (
                    <React.Fragment key={`dbb-${camp.category}-${camp.camp}-${index}`}>
                      {/* Per person, sharing row */}
                      <tr className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="px-4 py-3 text-sm font-medium text-stone-900">
                          {camp.category}
                        </td>
                        <td className="px-4 py-3 text-sm text-stone-700">
                          {camp.camp}
                        </td>
                        <td className="px-4 py-3 text-sm text-stone-700">
                          {camp.name}
                        </td>
                        <td className="px-4 py-3 text-center text-sm font-medium text-stone-900">
                          {camp.type}
                        </td>
                        <td className="px-4 py-3 text-center text-sm text-stone-700">
                          Per person, sharing
                        </td>
                        {periods.map((period) => (
                          <td key={period} className="px-3 py-3 text-center text-sm font-medium text-stone-900">
                            {camp.rates[period]?.sharing || '-'}
                          </td>
                        ))}
                      </tr>
                      {/* Single supplement row */}
                      <tr className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3 text-center text-sm text-stone-700">
                          Single supplement
                        </td>
                        {periods.map((period) => (
                          <td key={period} className="px-3 py-3 text-center text-sm text-stone-700">
                            {camp.rates[period]?.supplement || '-'}
                          </td>
                        ))}
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-medium text-amber-900 mb-4">Important Information</h3>
            <div className="space-y-2 text-sm text-amber-800">
              <p>• It is a condition of travel with Wilderness that guests have travel insurance. Should they not have insurance cover, they will be personally responsible for any costs incurred as a result of a medical emergency or evacuation, as well as any drug insurance claim deemed invalid and not covered under luggage.</p>
              <p>• All rates are per person per night and subject to change without notice</p>
              <p>• FI = Full Inclusive (all meals, beverages, activities, park fees)</p>
              <p>• DBB = Dinner, Bed & Breakfast</p>
              <p>• Rates valid from June 2026 to January 2027</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-4">
              For bookings and inquiries, please contact our reservations team
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a href="tel:+27118071800" className="text-stone-900 font-medium hover:text-stone-600 transition-colors">
                📞 +27 11 807 1800
              </a>
              <a href="mailto:info@wilderness-safaris.com" className="text-stone-900 font-medium hover:text-stone-600 transition-colors">
                ✉️ info@wilderness-safaris.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}