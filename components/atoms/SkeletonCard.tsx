export default function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${className}`}>
      {/* Icon skeleton */}
      <div className="w-12 h-12 bg-gray-200 rounded-xl mb-6"></div>
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 rounded-md mb-4 w-3/4"></div>
      
      {/* Description skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}

export function SkeletonServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 bg-gray-200 rounded-lg mb-4 w-80 mx-auto animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
        </div>
        
        {/* Cards skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}