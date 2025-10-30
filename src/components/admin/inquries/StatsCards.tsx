interface InquiryStats {
  total: number;
  thisMonth: number;
  byCountry: { country: string; count: number }[];
  byExperience: { experience_type: string; count: number }[];
}

interface StatsCardsProps {
  stats: InquiryStats | null;
  className?: string;
}

const StatsCards = ({ stats, className = "" }: StatsCardsProps) => {
  if (!stats) return null;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 ${className}`}>
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-sm font-medium text-gray-500">Total Inquiries</h3>
        <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-sm font-medium text-gray-500">This Month</h3>
        <p className="text-2xl font-bold text-blue-600">{stats.thisMonth}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-sm font-medium text-gray-500">Top Country</h3>
        <p className="text-lg font-semibold text-gray-900">
          {stats.byCountry[0]?.country || 'N/A'}
        </p>
        <p className="text-sm text-gray-500">
          {stats.byCountry[0]?.count || 0} inquiries
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-sm font-medium text-gray-500">Popular Experience</h3>
        <p className="text-sm font-semibold text-gray-900">
          {stats.byExperience[0]?.experience_type.substring(0, 20) || 'N/A'}
        </p>
        <p className="text-sm text-gray-500">
          {stats.byExperience[0]?.count || 0} inquiries
        </p>
      </div>
    </div>
  );
};

export default StatsCards;