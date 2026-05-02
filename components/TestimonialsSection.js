const testimonials = [
  {
    quote:
      "The research tools integrated into NextRead have completely transformed my workflow. Accessing rare texts that used to require travel is now instantaneous.",
    name: "Dr. Elena Thorne",
    role: "Historical Researcher",
    initial: "E",
  },
  {
    quote:
      "A sanctuary for the mind. The interface is so clean and respectful of the reading experience. It feels like stepping into a private study.",
    name: "Marcus Vane",
    role: "Graduate Student",
    initial: "M",
  },
  {
    quote:
      "Finding specific books is effortless. The digital fidelity of the catalog is the best I've encountered in any library system.",
    name: "Sarah Jenkins",
    role: "Literary Critic",
    initial: "S",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-surface-container-highest/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-newsreader text-3xl md:text-4xl font-semibold text-primary">
            Voices from Our Readers
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <span
                className="material-symbols-outlined text-tertiary-container text-7xl absolute -top-6 left-4 opacity-20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="font-newsreader italic text-xl text-indigo-900 leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white font-semibold">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
