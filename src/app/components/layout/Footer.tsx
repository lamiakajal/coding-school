import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
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
              Empowering next-generation developers through production-grade
              full-stack skills and mentorship.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#home" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="hover:text-blue-600 transition"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-600 transition">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:text-blue-600 transition"
                >
                  Features
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
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#discord"
                  className="hover:text-blue-600 transition"
                >
                  Discord Community
                </Link>
              </li>
              <li>
                <Link
                  href="#telegram"
                  className="hover:text-blue-600 transition"
                >
                  Telegram Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office / Campus info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Campus Info
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Coding School Learning Hub
              <br />
              Dhaka, Bangladesh.
              <br />
              support@codingschool.dev
            </p>
          </div>
        </div>

        {/* Bottom Payment Badges & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-8 md:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Coding School. All rights reserved.
          </p>

          <div className="relative h-6 w-72 max-w-full">
            <Image
              src="/assets/footer.png"
              alt="Supported payment systems"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
