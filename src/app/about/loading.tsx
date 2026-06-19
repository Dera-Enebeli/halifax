export default function Loading() {
  return (
    <div className="min-h-screen bg-near-black animate-pulse">
      <div className="max-w-page section-padding py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="h-3 w-16 bg-white/10 rounded mb-4" />
          <div className="h-12 w-3/4 bg-white/10 rounded mb-5" />
          <div className="h-1 w-16 bg-crimson/50 rounded mb-6" />
          <div className="h-4 w-full bg-white/10 rounded mb-2" />
          <div className="h-4 w-5/6 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  )
}
