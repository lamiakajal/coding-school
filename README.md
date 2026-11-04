🎓 Coding School — Modern Full-Stack Developer Platform

A high-performance, responsive full-stack developer learning hub built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. The platform delivers a production-grade educational showcase featuring an interactive tech stack directory, 60 FPS HTML5 canvas physics animations, comprehensive career tracks, and an instructor mentor roster.

🔗 Live Deployment & Source Repository

🌐 Live Production Application: https://lamiakajal.github.io/coding-school/

📁 GitHub Source Repository: https://github.com/lamiakajal/coding-school

🚀 Key Features

⚡ 60 FPS HTML5 Canvas Physics Engine (FloatingElements.tsx):

Hardware-accelerated canvas particle layer with dynamic upward drift, boundary wrap-around, and specular glass highlights floating non-blockingly (pointer-events-none z-30) over all sections and media.

🎯 Interactive Core Tech Stack Directory (Skills.tsx):

Category-based interactive filtering across All Skills, Frontend, Backend & Data, and Tools & AI with reactive counters and responsive card transitions.

🎨 High-Converting Hero Banner (Hero.tsx):

Ambient radial glow with continuous CSS floating loops and primary call-to-action routing.

📊 Growth Metrics & Stat Callouts (Stats.tsx):

Gradient-tinted milestone indicators highlighting graduates, successful placements, and enrolled students.

🧩 Production-Grade Modular Sections:

Alternating Value Features (Features.tsx): Deep dives into Project-Based Learning, 24/7 Lifetime Support, and Learn to Earn.

Career Tracks (Courses.tsx): Frontend architecture, Next.js full-stack development, and backend systems pathways with syllabus highlights.

Lead Mentors Roster (Instructors.tsx): Real-world industry engineers with credentials, bio overviews, and technical specialties.

Physical Campus & Roadmap (Campus.tsx): Banani learning station overview paired with a 4-step transformation blueprint.

Social Proof (Testimonials.tsx): Real graduate reviews with ratings and company placement credentials.

Interactive FAQ Accordion (FAQ.tsx): Smooth interactive accordion resolving prospective student inquiries.

Final Action Callout (CallToAction.tsx): High-contrast enrollment drive with next cohort scheduling highlights.

🛠️ Architecture & Tech Stack

Layer

Technology

Purpose

Framework

Next.js 15 (React 19)

Server-rendered App Router architecture and static generation

Language

TypeScript 5

Static typing and interface contracts across components and data

Styling

Tailwind CSS v4

Canonical CSS variables, modern utility classes, and fluid layouts

Physics / Animation

HTML5 Canvas 2D API

Lightweight 60 FPS particle loop without external animation dependencies

Asset Delivery

next/image

Optimized, responsive image handling

Hosting & CI/CD

GitHub Pages

Distributed static hosting

📂 Project Structure

coding-school/
├── public/
│ └── assets/ # Visual assets (Hero, Lab, Features, Mentors)
├── src/
│ └── app/
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Navbar.tsx # Responsive header navigation
│ │ │ └── Footer.tsx # Pure CSS badge system and institutional links
│ │ ├── layer/
│ │ │ └── FloatingElements.tsx # 60 FPS HTML5 canvas glass particle engine
│ │ └── sections/
│ │ ├── Hero.tsx # Hero banner with ambient glow loop
│ │ ├── Stats.tsx # Key metrics highlights
│ │ ├── Skills.tsx # Interactive filterable tech inventory
│ │ ├── Features.tsx # Alternating core feature showcases
│ │ ├── Courses.tsx # Career tracks & syllabus cards
│ │ ├── Instructors.tsx # Active mentor directory
│ │ ├── Campus.tsx # Computer lab & transformation pillars
│ │ ├── Testimonials.tsx# Graduate success stories
│ │ ├── FAQ.tsx # Interactive accordion questions
│ │ └── CallToAction.tsx# Cohort registration banner
│ ├── globals.css # Tailwind v4 imports and infinite keyframe rules
│ ├── layout.tsx # Root HTML wrapper and global metadata
│ └── page.tsx # Unified landing page assembly
├── package.json
├── tsconfig.json
└── README.md

💻 Local Development Setup

To run this repository locally on your computer:

Clone the repository:

git clone https://github.com/lamiakajal/coding-school.git
cd coding-school

Install project dependencies:

npm install

Start the local development server:

npm run dev

Open in browser:
Navigate to http://localhost:3000 to view the application.

Verify production build:

npm run build

📄 License

This project is open-source and available under the terms of the MIT License.
