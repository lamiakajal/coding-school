import Image from "next/image";
import Link from "next/link";

// Features data mapped directly to available assets
const featureItems = [
  {
    tag: "Projects",
    title: "Project Based Learning",
    description:
      "Master industry workflows by building real-world software. Graduate with a production-ready portfolio featuring scalable React, Next.js, and Node.js applications.",
    imageSrc: "/assets/Project-Based-Learning.png",
    reverse: false,
  },
  {
    tag: "Get Help",
    title: "Lifetime Free Support",
    description:
      "Never get stuck with a bug or deployment issue. Our senior developers and dedicated community mentors are available 24/7 to review your code and guide you forward.",
    imageSrc: "/assets/Support.jpg",
    reverse: true,
  },
  {
    tag: "Earning",
    title: "Learn to Earn",
    description:
      "Accelerate your career trajectory. Learn high-income engineering practices, master technical interviews, and unlock remote global software engineering opportunities.",
    imageSrc: "/assets/Learn-to-Earn.png",
    reverse: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Alternating Feature Cards */}
        <div className="flex flex-col gap-20 md:gap-28">
          {featureItems.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-10 md:gap-16 lg:flex-row ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {feature.tag}
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                  {feature.description}
                </p>
                <div className="pt-2">
                  <Link
                    href="#enroll"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-95"
                  >
                    Explore More
                  </Link>
                </div>
              </div>

              {/* Graphic Asset Card */}
              <div className="flex-1 w-full max-w-lg">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
