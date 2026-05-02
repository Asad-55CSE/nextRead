export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <div className="h-20 bg-white border-b border-slate-100" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-[2/3] rounded-3xl bg-slate-200 animate-pulse" />
          </div>
          <div className="space-y-4 animate-pulse">
            <div className="h-6 w-24 bg-secondary/20 rounded-full" />
            <div className="h-10 bg-slate-200 rounded-xl" />
            <div className="h-4 w-48 bg-slate-100 rounded" />
            <div className="h-8 w-36 bg-slate-100 rounded-full" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-100 rounded" />
              <div className="h-4 bg-slate-100 rounded" />
              <div className="h-4 bg-slate-100 rounded w-3/4" />
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="h-20 bg-slate-100 rounded-2xl" />
              <div className="h-20 bg-slate-100 rounded-2xl" />
            </div>
            <div className="h-14 bg-secondary/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
