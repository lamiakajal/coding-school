"use client";

import { useState } from "react";
import Link from "next/link";
import { NavItem } from "@/types";

// Navigation menu links definition
const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Features", href: "#features" },
  { label: "Campus", href: "#campus" },
];

export default function Navbar() {
  // Mobile drawer open/close state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
            CS
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Coding School
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              Tech Academy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 hover:font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons for Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#signin"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Sign In
          </Link>
          <Link
            href="#enroll"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="border-b border-slate-100 bg-white px-4 pb-6 pt-2 md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-2 border-t border-slate-100">
              <Link
                href="#signin"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                href="#enroll"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
