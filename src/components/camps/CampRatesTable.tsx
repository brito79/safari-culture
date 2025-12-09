import { CampData, RatePeriod } from "@/types/types";
import { Calendar, Users, User } from "lucide-react";

interface CampRatesTableProps {
  camp: CampData;
}

export default function CampRatesTable({ camp }: CampRatesTableProps) {
  // Get all rate periods
  const ratePeriods = Object.keys(camp.rates) as RatePeriod[];

  // Format currency for display
  const formatCurrency = (value: string) => {
    // Remove any existing formatting and parse
    const cleanValue = value.replace(/[^\d]/g, '');
    const numValue = parseInt(cleanValue);
    
    if (isNaN(numValue)) return value;
    
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numValue);
  };

  // Get accommodation type label
  const getTypeLabel = (type: 'FI' | 'DBB') => {
    return type === 'FI' ? 'Fully Inclusive' : 'Dinner, Bed & Breakfast';
  };

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-lg p-4 sm:p-6 border border-amber-200 dark:border-amber-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {camp.name}
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 font-medium">
                {camp.category}
              </span>
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium">
                {getTypeLabel(camp.type)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{ratePeriods.length} seasonal periods</span>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
        <table className="w-full border-collapse bg-white dark:bg-gray-950">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
              <th className="text-left p-3 sm:p-4 font-semibold text-gray-900 dark:text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Season Period</span>
                </div>
              </th>
              <th className="text-right p-3 sm:p-4 font-semibold text-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-end gap-2">
                  <Users className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base whitespace-nowrap">Per Person</span>
                </div>
              </th>
              <th className="text-right p-3 sm:p-4 font-semibold text-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-end gap-2">
                  <User className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base whitespace-nowrap">Supplement</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {ratePeriods.map((period, index) => {
              const rate = camp.rates[period];
              const isLastRow = index === ratePeriods.length - 1;
              
              return (
                <tr
                  key={period}
                  className={`
                    hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors
                    ${!isLastRow ? 'border-b border-gray-100 dark:border-gray-800' : ''}
                  `}
                >
                  <td className="p-3 sm:p-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100">
                        {period}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Season {index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 text-right">
                    <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 block">
                      {formatCurrency(rate.sharing)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                      per night
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-right">
                    <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 block">
                      {formatCurrency(rate.supplement)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                      extra
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {ratePeriods.map((period, index) => {
          const rate = camp.rates[period];
          
          return (
            <div 
              key={period} 
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm"
            >
              {/* Period Header */}
              <div className="flex items-start justify-between mb-3 pb-3 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-gray-900 dark:text-gray-100">
                      {period}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Season {index + 1}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Rates Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Per Person Sharing */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Users className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Per Person</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {formatCurrency(rate.sharing)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    per night
                  </div>
                </div>
                
                {/* Single Supplement */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <User className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Supplement</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {formatCurrency(rate.supplement)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    extra
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Notes */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">
          Rate Information
        </h3>
        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-blue-800 dark:text-blue-200">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
            <span className="leading-relaxed">All rates are quoted in South African Rand (ZAR) per person per night</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
            <span className="leading-relaxed">
              {camp.type === 'FI' 
                ? 'Fully Inclusive rates include accommodation, meals, local beverages, and activities'
                : 'DBB rates include accommodation, dinner, and breakfast'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
            <span className="leading-relaxed">Single supplement applies for solo travelers occupying a room alone</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
            <span className="leading-relaxed">Rates are subject to change and availability. Please contact us for current pricing</span>
          </li>
        </ul>
      </div>
    </div>
  );
}