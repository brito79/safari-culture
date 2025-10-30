interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filterCountry: string;
  setFilterCountry: (value: string) => void;
  filterExperience: string;
  setFilterExperience: (value: string) => void;
  uniqueCountries: string[];
  uniqueExperiences: string[];
  className?: string;
}

const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  filterCountry,
  setFilterCountry,
  filterExperience,
  setFilterExperience,
  uniqueCountries,
  uniqueExperiences,
  className = ""
}: SearchFiltersProps) => {
  const handleClearFilters = () => {
    setSearchTerm("");
    setFilterCountry("");
    setFilterExperience("");
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow border mb-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Countries</option>
            {uniqueCountries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Experience Type</label>
          <select
            value={filterExperience}
            onChange={(e) => setFilterExperience(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Experiences</option>
            {uniqueExperiences.map(experience => (
              <option key={experience} value={experience}>{experience}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-end">
          <button
            onClick={handleClearFilters}
            className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;