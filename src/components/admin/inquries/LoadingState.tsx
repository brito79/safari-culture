interface LoadingStateProps {
  className?: string;
}

const LoadingState = ({ className = "" }: LoadingStateProps) => {
  return (
    <div className={`p-6 ${className}`}>
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
        
        {/* Stats cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-24 rounded-lg"></div>
          ))}
        </div>
        
        {/* Filter section skeleton */}
        <div className="bg-gray-200 h-20 rounded-lg mb-6"></div>
        
        {/* Table skeleton */}
        <div className="bg-white rounded-lg shadow border overflow-hidden">
          <div className="bg-gray-100 h-12"></div>
          <div className="space-y-4 p-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;