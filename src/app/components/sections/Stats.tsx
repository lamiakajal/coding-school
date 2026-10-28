export default function Stats() {
  const statsList = [
    {
      count: "25,000+ Graduates",
      label:
        "Skilled full-stack developers leading high-growth software teams globally.",
      bgColor: "bg-rose-500",
      badge: "Graduates",
    },
    {
      count: "15,000+ Placements",
      label:
        "Learners placed successfully across top tech enterprises and global startups.",
      bgColor: "bg-teal-500",
      badge: "Placements",
    },
    {
      count: "35,000+ Enrolled",
      label:
        "Passionate learners acquiring cutting-edge modern tech skills every day.",
      bgColor: "bg-blue-600",
      badge: "Community",
    },
  ];

  return (
    <section className="relative z-10 -mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {statsList.map((stat, idx) => (
          <div
            key={idx}
            className={`${stat.bgColor} rounded-2xl p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between min-h-40`}
          >
            <div>
              <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
                {stat.badge}
              </span>
              <h3 className="text-2xl font-black tracking-tight">
                {stat.count}
              </h3>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
