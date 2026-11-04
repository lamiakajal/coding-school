import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Limited Seats Available • New Cohort Starting Soon
            </span>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Build Your Modern Tech Career?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Master full-stack engineering with hands-on production code, dedicated senior mentors, and a global developer community.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#courses"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-extrabold text-blue-600 shadow-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 active:scale-95"
              >
                Enroll in Next Cohort
              </Link>
              <Link
                href="#faq"
                className="rounded-xl border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
