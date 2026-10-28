import Image from "next/image";
import Link from "next/link";

// Core transformation pillars
const learningHighlights = [
  {
    step: "01",
    title: "Zero to Production Code",
    desc: "Bujhe bujhe real industry architecture ebong scalable backend system toiri korar hands-on experience.",
    iconColor: "bg-blue-500/10 text-blue-600",
  },
  {
    step: "02",
    title: "Modern Offline Lab & Wi-Fi",
    desc: "High-speed dedicated coding workstation, dual-monitor setup ebong distraction-free learning environment.",
    iconColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    step: "03",
    title: "Live 1-on-1 Code Review",
    desc: "Prottek project seshe senior software engineer-der theke deep architectural review ebong feedback.",
    iconColor: "bg-purple-500/10 text-purple-600",
  },
  {
    step: "04",
    title: "Global Career & Remote Ready",
    desc: "Clean GitHub portfolio, technical interview prep ebong international client communication mastery.",
    iconColor: "bg-rose-500/10 text-rose-600",
  },
];

export default function Campus() {
  return (
    <section
      id="campus"
      className="relative py-16 md:py-24 bg-white/70 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-200 mb-3">
            Transformation Roadmap
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
            How To Change Your Life?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Coding School sudhu ekta course na; eta holo tomake zero theke
            high-performing software engineer hisebe gore tolar ekta structured
            journey[cite: 2, 10]. Amader offline labs, real-world team workflow
            ebong dedicated mentors tomake agiye rakhbe[cite: 10].
          </p>
        </div>

        {/* Main Lab Showcase Card using lab.jpg */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 shadow-2xl transition-all duration-500 hover:shadow-blue-500/10">
          <div className="relative aspect-video w-full">
            <Image
              src="/assets/lab.jpg"
              alt="Coding School Modern Computer Lab"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Feature Pillars Grid (Under the Image) */}
        <div className="mt-14 mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learningHighlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-black text-sm ${item.iconColor}`}
                  >
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Pillar
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Head Office / Learning Hub Callout Banner */}
        <div className="mt-14 mx-auto max-w-5xl rounded-3xl bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-10 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Coding School Head Office & Interactive Hub
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Shikhar pasapashi offline lab-e eshe team collab, live coding
              challenge ebong senior engineer-der shathe sorasori kotha bolar
              shubidha pabe[cite: 10].
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-blue-200">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                📍 House 42, Road 11, Banani, Dhaka
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                📞 +880 1700-000000
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                ✉ support@codingschool.dev
              </span>
            </div>
            <div className="pt-4">
              <Link
                href="#courses"
                className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 active:scale-95"
              >
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
