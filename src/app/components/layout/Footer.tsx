import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
                CS
              </div>
              <span className="text-xl font-extrabold text-slate-900">
                Coding School
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Empowering developers through modern full-stack engineering
              courses, hands-on production code, and personalized mentorship.
            </p>
          </div>

          {/* Course Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Courses
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#skills" className="hover:text-blue-600 transition">
                  Frontend Mastery
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-600 transition">
                  Backend Architecture
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-600 transition">
                  Full-Stack Next.js
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-600 transition">
                  Git & Team Workflows
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="https://github.com/lamiakajal"
                  target="_blank"
                  className="hover:text-blue-600 transition"
                >
                  GitHub Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#discord"
                  className="hover:text-blue-600 transition"
                >
                  Discord Server
                </Link>
              </li>
              <li>
                <Link
                  href="#telegram"
                  className="hover:text-blue-600 transition"
                >
                  Telegram Channel
                </Link>
              </li>
              <li>
                <Link
                  href="#support"
                  className="hover:text-blue-600 transition"
                >
                  24/7 Student Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Location */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Campus
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Coding School HQ
              <br />
              Dhaka, Bangladesh.
              <br />
              support@codingschool.dev
            </p>
          </div>
        </div>

        {/* Bottom Custom Badges and Copyright (Pure CSS, No Image) */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Coding School. All rights reserved.
          </p>

          {/* Custom System Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Systems Online
            </span>
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-200">
              Next.js 15 Ready
            </span>
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-200">
              SSL Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
