import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-12 md:py-20 lg:py-24">
      {/* Dynamic Animated Ambient Glow */}
      <div className="animate-glow pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl md:h-125 md:w-125" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Headline and Call to Actions */}
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/80 px-4 py-1.5 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Admissions Open for Full-Stack Batch
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Change Your Life with <br />
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Coding School
              </span>
            </h1>

            <p className="max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed">
              Coding School teaches you modern full-stack skills with React,
              Next.js, TypeScript, and Node.js to thrive and command high-paying
              tech careers in the modern digital era.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#courses"
                className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/50 active:scale-95"
              >
                View Courses
              </Link>
              <Link
                href="#skills"
                className="rounded-xl border border-slate-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white active:scale-95"
              >
                View Tech Stack
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Graphic with Floating Loop */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-float relative w-full max-w-md sm:max-w-lg aspect-square">
              <Image
                src="/assets/Hero-Section.png"
                alt="Coding School Students"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
