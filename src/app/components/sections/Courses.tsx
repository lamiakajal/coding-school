import Link from "next/link";

// Featured courses track inventory
const courseTracks = [
  {
    title: "Frontend Engineering & Design Systems",
    level: "Beginner to Advanced",
    duration: "3 Months",
    desc: "Master semantic HTML, modern CSS, JavaScript ES6+, TypeScript, and component architecture using React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    popular: false,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Production Full-Stack with Next.js 15",
    level: "Intermediate to Pro",
    duration: "4 Months",
    desc: "Build scalable full-stack applications with Next.js App Router, Server Actions, BetterAuth, MongoDB, and Mongoose.",
    tags: ["Next.js", "BetterAuth", "MongoDB", "Node.js"],
    popular: true,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    title: "Backend Systems, APIs & Cloud DevOps",
    level: "Advanced",
    duration: "3 Months",
    desc: "Architect robust backend APIs using Node.js, Express, database modeling, Docker containers, caching, and CI/CD pipelines.",
    tags: ["Node.js", "Mongoose", "Docker", "System Design"],
    popular: false,
    gradient: "from-teal-500 to-emerald-600",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative py-16 md:py-24 bg-white/50 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-200 mb-3">
            Industry Curriculum
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
            Explore Career Tracks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Step-by-step career path designed by software engineers to transform
            beginners into job-ready full-stack developers.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courseTracks.map((course, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                course.popular
                  ? "border-blue-500 ring-2 ring-blue-500/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {course.popular && (
                <span className="absolute -top-3.5 right-6 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
                  <span className="bg-slate-100 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span>⏱ {course.duration}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {course.desc}
                </p>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {course.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="#enroll"
                  className={`block w-full text-center rounded-xl py-3 text-sm font-bold transition-all duration-300 ${
                    course.popular
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 hover:bg-blue-700"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  View Syllabus & Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
