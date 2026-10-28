"use client";

import { useState } from "react";

// Skill card structure definition
interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  badge: string;
  description: string;
  tagText: string;
}

// Complete skills inventory matching your 1st reference screenshot
const skillsList: Skill[] = [
  {
    name: "HTML",
    category: "frontend",
    badge: "FRONTEND",
    description: "Semantic, accessible page structure.",
    tagText: "5",
  },
  {
    name: "CSS",
    category: "frontend",
    badge: "FRONTEND",
    description: "Responsive layouts, animations and theming.",
    tagText: "3",
  },
  {
    name: "JavaScript",
    category: "frontend",
    badge: "FRONTEND",
    description: "Modern ES6+ for interactive interfaces.",
    tagText: "JS",
  },
  {
    name: "TypeScript",
    category: "frontend",
    badge: "FRONTEND",
    description: "Type-safe code that scales with the project.",
    tagText: "TS",
  },
  {
    name: "React",
    category: "frontend",
    badge: "FRONTEND",
    description: "Component-driven, reusable user interfaces.",
    tagText: "⚛",
  },
  {
    name: "Next.js",
    category: "frontend",
    badge: "FRONTEND",
    description: "App Router, server rendering and fast full-stack apps.",
    tagText: "N",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    badge: "FRONTEND",
    description: "Rapid, consistent and responsive styling.",
    tagText: "≈",
  },
  {
    name: "Node.js",
    category: "backend",
    badge: "BACKEND & DATA",
    description: "Fast, scalable server-side JavaScript.",
    tagText: "JS",
  },
  {
    name: "MongoDB",
    category: "backend",
    badge: "BACKEND & DATA",
    description: "Flexible document database design.",
    tagText: "🍃",
  },
  {
    name: "Mongoose",
    category: "backend",
    badge: "BACKEND & DATA",
    description: "Schemas, models and validation for MongoDB.",
    tagText: "M",
  },
  {
    name: "BetterAuth",
    category: "backend",
    badge: "BACKEND & DATA",
    description: "Secure authentication and user sessions.",
    tagText: "🔒",
  },
  {
    name: "Git",
    category: "tools",
    badge: "TOOLS & AI",
    description: "Version control, branches and clean history.",
    tagText: "🔀",
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<
    "all" | "frontend" | "backend" | "tools"
  >("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsList
      : skillsList.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Core Tech Stack
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Master the industry standard full-stack tools and technologies
            needed to build production web applications.
          </p>
        </div>

        {/* Top 4 Interactive Tabs (Matching Screenshot 1) */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-10">
          {/* Tab 1: All Skills */}
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-2xl p-5 text-left border transition-all ${
              activeTab === "all"
                ? "bg-rose-50 border-rose-300 ring-2 ring-rose-400 shadow-md"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-rose-500/10 text-rose-600 text-lg">
                ▦
              </span>
              <span className="text-2xl font-black text-slate-900">15</span>
            </div>
            <h3 className="font-bold text-slate-900">All Skills</h3>
            <p className="text-xs text-slate-500 mt-1">Everything I use</p>
          </button>

          {/* Tab 2: Frontend */}
          <button
            onClick={() => setActiveTab("frontend")}
            className={`rounded-2xl p-5 text-left border transition-all ${
              activeTab === "frontend"
                ? "bg-blue-50 border-blue-300 ring-2 ring-blue-400 shadow-md"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-600 text-lg">
                🖥
              </span>
              <span className="text-2xl font-black text-slate-900">7</span>
            </div>
            <h3 className="font-bold text-slate-900">Frontend</h3>
            <p className="text-xs text-slate-500 mt-1">Interfaces & motion</p>
          </button>

          {/* Tab 3: Backend & Data */}
          <button
            onClick={() => setActiveTab("backend")}
            className={`rounded-2xl p-5 text-left border transition-all ${
              activeTab === "backend"
                ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-400 shadow-md"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 text-lg">
                🗄
              </span>
              <span className="text-2xl font-black text-slate-900">4</span>
            </div>
            <h3 className="font-bold text-slate-900">Backend & Data</h3>
            <p className="text-xs text-slate-500 mt-1">APIs, data & auth</p>
          </button>

          {/* Tab 4: Tools & AI */}
          <button
            onClick={() => setActiveTab("tools")}
            className={`rounded-2xl p-5 text-left border transition-all ${
              activeTab === "tools"
                ? "bg-purple-50 border-purple-300 ring-2 ring-purple-400 shadow-md"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 text-lg">
                🛠
              </span>
              <span className="text-2xl font-black text-slate-900">4</span>
            </div>
            <h3 className="font-bold text-slate-900">Tools & AI</h3>
            <p className="text-xs text-slate-500 mt-1">Workflow & mindset</p>
          </button>
        </div>

        {/* Dynamic Skill Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-800 text-sm group-hover:scale-105 transition-transform">
                  {skill.tagText}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  {skill.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-base font-bold text-slate-900">
                {skill.name}
              </h4>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
