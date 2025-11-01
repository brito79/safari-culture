export default function ExperiencesLoading() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block h-8 w-40 bg-stone-200 rounded-full mb-4 animate-pulse"></div>
          <div className="h-12 w-96 bg-stone-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-stone-200 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              {/* Image Skeleton */}
              <div className="aspect-[4/3] bg-stone-200 rounded-xl sm:rounded-2xl animate-pulse"></div>
              
              {/* Content Skeleton */}
              <div className="space-y-3">
                <div className="h-8 w-3/4 bg-stone-200 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-stone-200 rounded animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-stone-200 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-stone-200 rounded animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <div className="h-4 w-32 bg-stone-200 rounded animate-pulse"></div>
                  <div className="h-10 w-28 bg-stone-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
