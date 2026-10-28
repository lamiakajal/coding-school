import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left Column: Headline and Call to Actions */}
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Change Your Life with <br />
              <span className="text-blue-600">Coding School</span>
            </h1>

            <p className="max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed">
              Coding School teaches you modern full-stack skills with React,
              Next.js, TypeScript, and Node.js to thrive and command high-paying
              tech careers in the modern digital era.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#courses"
                className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 active:scale-95"
              >
                View Courses
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Graphic using asset image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/assets/Hero-Section.png"
                alt="Coding School Students"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
