import Image from "next/image";

// Instructor mentor roster mapped to real asset images
const mentors = [
  {
    name: "Md. Imran Hossain",
    role: "Lead Full-Stack Architect",
    experience: "8+ Years Industry Exp",
    bio: "Ex-Senior Engineer specializing in Next.js distributed systems, microservices, and database performance tuning.",
    imageSrc: "/assets/imran.jpg",
    specialty: "Next.js & Systems",
  },
  {
    name: "Sabiha Rahman",
    role: "Senior Frontend Engineer & UI Lead",
    experience: "6+ Years Industry Exp",
    bio: "Specialist in modern React architecture, motion systems, accessible UI engineering, and design systems.",
    imageSrc: "/assets/sabiha.jpg",
    specialty: "React & UI Motion",
  },
  {
    name: "Alif Ahmed",
    role: "Backend & DevOps Engineer",
    experience: "5+ Years Industry Exp",
    bio: "Passionate about API development, Node.js runtimes, authentication security, and container orchestration.",
    imageSrc: "/assets/alif.jpg",
    specialty: "Node.js & Security",
  },
];

export default function Instructors() {
  return (
    <section
      id="instructors"
      className="relative py-16 md:py-24 bg-slate-50/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-200 mb-3">
            Mentorship by Engineers
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
            Meet Your Lead Mentors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Learn directly from active software engineers who build, scale, and
            maintain high-traffic production software every day.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
            >
              {/* Mentor Avatar */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 mb-6">
                <Image
                  src={mentor.imageSrc}
                  alt={mentor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {mentor.specialty}
                </span>
              </div>

              {/* Mentor Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {mentor.role}
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  {mentor.experience}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed pt-2">
                  {mentor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
