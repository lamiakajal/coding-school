"use client";

import { useState } from "react";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  badge: string;
  description: string;
  tagText: string;
}

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

        {/* Top 4 Interactive Tabs with Pop Animations */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-2xl p-5 text-left border transition-all duration-300 cursor-pointer ${
              activeTab === "all"
                ? "bg-rose-50 border-rose-300 ring-2 ring-rose-400 shadow-lg scale-102"
                : "bg-white border-slate-200 hover:border-slate-300 hover:shadow"
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

          <button
            onClick={() => setActiveTab("frontend")}
            className={`rounded-2xl p-5 text-left border transition-all duration-300 cursor-pointer ${
              activeTab === "frontend"
                ? "bg-blue-50 border-blue-300 ring-2 ring-blue-400 shadow-lg scale-102"
                : "bg-white border-slate-200 hover:border-slate-300 hover:shadow"
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

          <button
            onClick={() => setActiveTab("backend")}
            className={`rounded-2xl p-5 text-left border transition-all duration-300 cursor-pointer ${
              activeTab === "backend"
                ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-400 shadow-lg scale-102"
                : "bg-white border-slate-200 hover:border-slate-300 hover:shadow"
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

          <button
            onClick={() => setActiveTab("tools")}
            className={`rounded-2xl p-5 text-left border transition-all duration-300 cursor-pointer ${
              activeTab === "tools"
                ? "bg-purple-50 border-purple-300 ring-2 ring-purple-400 shadow-lg scale-102"
                : "bg-white border-slate-200 hover:border-slate-300 hover:shadow"
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

        {/* Dynamic Skill Cards Grid with Smooth Transitions */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-800 text-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600">
                  {skill.tagText}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  {skill.badge}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
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
