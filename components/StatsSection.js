const stats = [
  { value: "12k+", label: "Digital Books", icon: "menu_book" },
  { value: "8k+", label: "Active Readers", icon: "people" },
  { value: "50+", label: "Partner Libraries", icon: "account_balance" },
  { value: "500", label: "Daily Borrows", icon: "download" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Text panel */}
          <div className="md:col-span-7 bg-surface-container-low rounded-3xl p-10 flex flex-col justify-center border border-slate-100">
            <h2 className="font-newsreader text-2xl md:text-3xl font-semibold text-primary mb-4">
              A Legacy of Impact
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our mission is to democratize access to academic resources and
              classical literature, fostering a global community of lifelong
              learners. Every book borrowed, every mind enriched.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-xl">
                      {s.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-newsreader text-2xl font-semibold text-secondary">
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image panel */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden shadow-xl min-h-[350px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
              alt="Library reading room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
