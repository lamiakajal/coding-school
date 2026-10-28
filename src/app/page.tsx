import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Skills from "./components/sections/Skills";
import Features from "./components/sections/Features";
import Campus from "./components/sections/Campus";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Key Stats Highlights */}
      <Stats />

      {/* 3. Core Tech Stack and Skills */}
      <Skills />

      {/* 4. Alternating Feature Highlights */}
      <Features />

      {/* 5. Campus Lab and Head Office Showcase */}
      <Campus />
    </div>
  );
}
