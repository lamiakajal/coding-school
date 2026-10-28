export default function Stats() {
  const statsList = [
    {
      count: "25,000+ Graduates",
      label:
        "Skilled full-stack developers leading high-growth software teams globally.",
      bgColor: "from-rose-500 to-pink-600",
      badge: "Graduates",
    },
    {
      count: "15,000+ Placements",
      label:
        "Learners placed successfully across top tech enterprises and global startups.",
      bgColor: "from-teal-500 to-emerald-600",
      badge: "Placements",
    },
    {
      count: "35,000+ Enrolled",
      label:
        "Passionate learners acquiring cutting-edge modern tech skills every day.",
      bgColor: "from-blue-600 to-indigo-600",
      badge: "Community",
    },
  ];

  return (
    <section className="relative z-10 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {statsList.map((stat, idx) => (
          <div
            key={idx}
            className={`group bg-linear-to-br ${stat.bgColor} rounded-2xl p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between min-h-42.5 cursor-pointer`}
          >
            <div>
              <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-2 transition-transform duration-300 group-hover:scale-105">
                {stat.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
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
