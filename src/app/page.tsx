import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Skills from "./components/sections/Skills";
import Features from "./components/sections/Features";
import Courses from "./components/sections/Courses";
import Instructors from "./components/sections/Instructors";
import Campus from "./components/sections/Campus";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CallToAction from "./components/sections/CallToAction";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Key Stats Highlights */}
      <Stats />

      {/* 3. Core Tech Stack and Skills Grid */}
      <Skills />

      {/* 4. Alternating Feature Highlights */}
      <Features />

      {/* 5. Career Courses Track */}
      <Courses />

      {/* 6. Lead Mentors Showcase */}
      <Instructors />

      {/* 7. Campus Lab and Transformation Roadmap */}
      <Campus />

      {/* 8. Student Reviews & Testimonials */}
      <Testimonials />

      {/* 9. Interactive FAQ Accordion */}
      <FAQ />

      {/* 10. Final Call To Action */}
      <CallToAction />
    </div>
  );
}
