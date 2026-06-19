export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-dark animate-pulse flex items-center justify-center py-24">
      <div className="max-w-2xl w-full mx-auto px-5 sm:px-6">
        <div className="bg-cream">
          <div className="h-1 w-full bg-crimson/50" />
          <div className="px-7 sm:px-10 py-8 sm:py-10">
            <div className="h-4 w-20 bg-near-black/10 rounded mb-8" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 rounded-full bg-cream-dark" />
              <div>
                <div className="h-4 w-32 bg-near-black/10 rounded mb-1" />
                <div className="h-3 w-48 bg-near-black/10 rounded" />
              </div>
            </div>
            <div className="h-3 w-24 bg-olive/30 rounded mb-2" />
            <div className="h-8 w-3/4 bg-near-black/10 rounded mb-3" />
            <div className="h-1 w-10 bg-crimson/50 rounded mb-4" />
            <div className="h-4 w-2/3 bg-near-black/10 rounded mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-cream-dark rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
