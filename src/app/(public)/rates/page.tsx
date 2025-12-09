"use client";

import React, { useEffect, useState } from "react";
import Navigation from "@/components/shared/Navigation";
import { Rate, ApiResponse } from "@/lib/db/types";

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
  const [rateData, setRateData] = useState<CampData[]>([]);
  const [dbbRates, setDbbRates] = useState<CampData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Transform flat database data into nested structure for display
  const transformRateData = (rates: Rate[]): { fi: CampData[], dbb: CampData[] } => {
    const fiRates: CampData[] = [];
    const dbbRates: CampData[] = [];

    // Group rates by camp and type
    const groupedRates = rates.reduce((acc, rate) => {
      const key = `${rate.category}-${rate.camp}-${rate.name}-${rate.type}`;
      if (!acc[key]) {
        acc[key] = {
          category: rate.category,
          camp: rate.camp,
          name: rate.name,
          type: rate.type,
          rates: {} as Record<RatePeriod, CampRate>
        };
      }
      
      // Map rate_period to our expected format and add sharing/supplement rates
      const period = rate.rate_period as RatePeriod;
      acc[key].rates[period] = {
        sharing: rate.sharing_rate,
        supplement: rate.supplement_rate
      };
      
      return acc;
    }, {} as Record<string, CampData>);

    // Separate FI and DBB rates
    Object.values(groupedRates).forEach(camp => {
      if (camp.type === 'FI') {
        fiRates.push(camp);
      } else if (camp.type === 'DBB') {
        dbbRates.push(camp);
      }
    });

    return { fi: fiRates, dbb: dbbRates };
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/rates');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse<Rate[]> = await response.json();
        
        if (!data.success || !data.data) {
          throw new Error(data.error || 'Failed to fetch rates');
        }

        const { fi, dbb } = transformRateData(data.data);
        setRateData(fi);
        setDbbRates(dbb);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching rates:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const ratePeriods: RatePeriod[] = [
    "6-Jun-26 to 31-May-26",
    "1-Apr-26 to 31-May-26", 
    "1-Jun-26 to 31-Oct-26",
    "1-Nov-26 to 19-Dec-26",
    "20-Dec-26 to 5-Jan-27"
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-24 w-24 sm:h-32 sm:w-32 border-b-2 border-stone-900 mx-auto"></div>
            <p className="mt-4 text-stone-600 text-sm sm:text-base">Loading rates...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center px-4">
            <div className="text-red-600">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Error Loading Rates</h2>
              <p className="text-sm sm:text-base mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2.5 text-sm sm:text-base bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <div className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 mb-3 sm:mb-4">
              NAMIBIA Rate Sheet
            </h1>
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg">
              2026-2027 Season Rates - All prices in South African Rand (ZAR)
            </p>
          </div>

          {/* Full Inclusive (FI) Rates Table */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-stone-200 mb-8 sm:mb-12 overflow-hidden">
            <div className="bg-stone-900 text-white p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-light">Full Inclusive (FI) Rates</h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 sm:mt-2">Per person sharing and single supplement rates</p>
            </div>
            
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-24"></th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-32">Camp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-48">Property Name</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-12">Type</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-24">Rate Type</th>
                    {ratePeriods.map((period: RatePeriod) => (
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
                        {ratePeriods.map((period: RatePeriod) => (
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
                        {ratePeriods.map((period: RatePeriod) => (
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
            
            {/* Mobile Card View */}
            <div className="lg:hidden">
              {rateData.map((camp, index) => (
                <div key={`mobile-fi-${camp.category}-${camp.camp}-${index}`} className="border-b border-stone-200 last:border-b-0">
                  <div className="p-4 bg-stone-50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-2 py-1 bg-stone-700 text-white text-xs font-medium rounded mb-2">
                          {camp.category}
                        </span>
                        <h3 className="text-base font-semibold text-stone-900">{camp.camp}</h3>
                        <p className="text-sm text-stone-600">{camp.name}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {camp.type}
                      </span>
                    </div>
                    
                    {/* Rate Periods */}
                    <div className="space-y-3 mt-4">
                      {ratePeriods.map((period: RatePeriod) => (
                        camp.rates[period] && (
                          <div key={period} className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs font-medium text-stone-500 mb-2">{period}</div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <div className="text-xs text-stone-500 mb-1">Per Person Sharing</div>
                                <div className="text-sm font-semibold text-stone-900">{camp.rates[period]?.sharing || '-'}</div>
                              </div>
                              <div>
                                <div className="text-xs text-stone-500 mb-1">Single Supplement</div>
                                <div className="text-sm font-medium text-stone-700">{camp.rates[period]?.supplement || '-'}</div>
                              </div>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dinner, Bed & Breakfast (DBB) Rates Table */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-stone-200 mb-8 sm:mb-12 overflow-hidden">
            <div className="bg-stone-700 text-white p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-light">Dinner, Bed & Breakfast (DBB) Rates</h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 sm:mt-2">Per person sharing and single supplement rates</p>
            </div>
            
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-24"></th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-32">Camp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-stone-700 w-48">Property Name</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-12">Type</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-stone-700 w-24">Rate Type</th>
                    {ratePeriods.map((period: RatePeriod) => (
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
                        {ratePeriods.map((period: RatePeriod) => (
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
                        {ratePeriods.map((period: RatePeriod) => (
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
            
            {/* Mobile Card View */}
            <div className="lg:hidden">
              {dbbRates.map((camp, index) => (
                <div key={`mobile-dbb-${camp.category}-${camp.camp}-${index}`} className="border-b border-stone-200 last:border-b-0">
                  <div className="p-4 bg-stone-50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-2 py-1 bg-stone-700 text-white text-xs font-medium rounded mb-2">
                          {camp.category}
                        </span>
                        <h3 className="text-base font-semibold text-stone-900">{camp.camp}</h3>
                        <p className="text-sm text-stone-600">{camp.name}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {camp.type}
                      </span>
                    </div>
                    
                    {/* Rate Periods */}
                    <div className="space-y-3 mt-4">
                      {ratePeriods.map((period: RatePeriod) => (
                        camp.rates[period] && (
                          <div key={period} className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs font-medium text-stone-500 mb-2">{period}</div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <div className="text-xs text-stone-500 mb-1">Per Person Sharing</div>
                                <div className="text-sm font-semibold text-stone-900">{camp.rates[period]?.sharing || '-'}</div>
                              </div>
                              <div>
                                <div className="text-xs text-stone-500 mb-1">Single Supplement</div>
                                <div className="text-sm font-medium text-stone-700">{camp.rates[period]?.supplement || '-'}</div>
                              </div>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-amber-900 mb-3 sm:mb-4">Important Information</h3>
            <div className="space-y-2 text-xs sm:text-sm text-amber-800">
              <p>• It is a condition of travel with Wilderness that guests have travel insurance. Should they not have insurance cover, they will be personally responsible for any costs incurred as a result of a medical emergency or evacuation, as well as any drug insurance claim deemed invalid and not covered under luggage.</p>
              <p>• All rates are per person per night and subject to change without notice</p>
              <p>• FI = Full Inclusive (all meals, beverages, activities, park fees)</p>
              <p>• DBB = Dinner, Bed & Breakfast</p>
              <p>• Rates valid from June 2026 to January 2027</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-stone-600 mb-4 text-sm sm:text-base px-4">
              For bookings and inquiries, please contact our reservations team
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-8 px-4">
              <a href="tel:+27118071800" className="text-stone-900 font-medium hover:text-stone-600 transition-colors text-sm sm:text-base">
                📞 +27 11 807 1800
              </a>
              <a href="mailto:info@wilderness-safaris.com" className="text-stone-900 font-medium hover:text-stone-600 transition-colors text-sm sm:text-base break-all">
                ✉️ info@wilderness-safaris.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}