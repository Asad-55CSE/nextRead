export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <div className="h-20 bg-white border-b border-slate-100" />
      <div className="bg-primary-container py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 w-48 bg-white/20 rounded-xl animate-pulse mb-2" />
          <div className="h-4 w-64 bg-white/10 rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 w-full">
        <div className="h-14 bg-white rounded-2xl animate-pulse mb-8 max-w-2xl" />
        <div className="flex gap-8">
          <div className="w-60 shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-slate-100 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 animate-pulse">
                <div className="aspect-[2/3] rounded-lg bg-slate-200 mb-4" />
                <div className="h-4 bg-slate-200 rounded mb-2" />
                <div className="h-3 bg-slate-100 rounded w-2/3 mb-4" />
                <div className="h-10 bg-slate-100 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
