# 🎓 Coding School — Modern Full-Stack Developer Platform

A production-grade, fully responsive edtech web platform designed for software engineers. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, featuring an interactive tech stack directory, an ambient 60 FPS HTML5 Canvas particle physics engine, comprehensive career tracks, and an active mentor roster.

---

## 🔗 Live Deployments & Repository Links

- **🌐 Live Production Platform:** [https://lamiakajal.github.io/coding-school/](https://lamiakajal.github.io/coding-school/)
- **📁 GitHub Source Repository:** [https://github.com/lamiakajal/coding-school](https://github.com/lamiakajal/coding-school)

---

## ✨ Key Features & Architecture

- **⚡ 60 FPS Canvas Physics Engine (`FloatingElements.tsx`):**
  - Custom hardware-accelerated HTML5 Canvas particle layer.
  - Realistic specular glass reflections, multi-color ambient glow, and non-blocking pointer events (`pointer-events-none z-30`) drifting smoothly across all sections and images.

- **🎯 Interactive Core Tech Stack Directory (`Skills.tsx`):**
  - Category-based interactive filtering across **All Skills**, **Frontend**, **Backend & Data**, and **Tools & AI**.
  - Reactive counters and smooth responsive card transitions.

- **🎨 High-Converting Hero Banner (`Hero.tsx`):**
  - Ambient radial glow with continuous CSS floating loops and primary call-to-action routing.

- **📊 Metrics & Growth Highlights (`Stats.tsx`):**
  - Gradient-tinted milestone indicators highlighting active graduates, placements, and enrolled students.

- **🧩 Production-Grade Modular Sections:**
  - **Alternating Features (`Features.tsx`):** Deep dives into Project-Based Learning, 24/7 Lifetime Support, and Learn to Earn.
  - **Career Tracks (`Courses.tsx`):** Frontend architecture, Next.js full-stack development, and backend systems pathways with syllabus highlights.
  - **Lead Mentors Roster (`Instructors.tsx`):** Industry practitioners with real-world credentials, bios, and technical specialties.
  - **Transformation Lab & Roadmap (`Campus.tsx`):** Physical Banani learning station paired with a 4-step transformation blueprint.
  - **Social Proof (`Testimonials.tsx`):** Graduate success stories with ratings and company placement credentials.
  - **Interactive FAQ Accordion (`FAQ.tsx`):** Smooth accordion resolving prospective student queries.
  - **Final Call to Action (`CallToAction.tsx`):** High-contrast cohort enrollment drive.

---

## 🛠️ Architecture & Tech Stack

| Layer                   | Technology            | Purpose                                                            |
| :---------------------- | :-------------------- | :----------------------------------------------------------------- |
| **Framework**           | Next.js 15 (React 19) | Server-rendered App Router architecture and static generation      |
| **Language**            | TypeScript 5          | End-to-end type safety and interface definitions                   |
| **Styling**             | Tailwind CSS v4       | Canonical CSS variables, modern utility classes, and fluid layouts |
| **Physics / Animation** | HTML5 Canvas 2D API   | Lightweight 60 FPS particle loop without external heavy libraries  |
| **Asset Delivery**      | `next/image`          | Optimized, responsive image handling                               |
| **Hosting & CI/CD**     | GitHub Pages / Vercel | Production deployment                                              |

---

## 📂 Project Structure

```text
coding-school/
├── public/
│   └── assets/                     # Visual assets (Hero, Lab, Features, Mentors)
├── src/
│   └── app/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Navbar.tsx      # Responsive header navigation
│       │   │   └── Footer.tsx      # Pure CSS badge system and links
│       │   ├── layer/
│       │   │   └── FloatingElements.tsx # 60 FPS HTML5 canvas glass particle engine
│       │   └── sections/
│       │       ├── Hero.tsx        # Hero banner with ambient glow loop
│       │       ├── Stats.tsx       # Key metrics highlights
│       │       ├── Skills.tsx      # Interactive filterable tech inventory
│       │       ├── Features.tsx    # Alternating core feature showcases
│       │       ├── Courses.tsx     # Career tracks & syllabus cards
│       │       ├── Instructors.tsx # Active mentor directory
│       │       ├── Campus.tsx      # Computer lab & transformation pillars
│       │       ├── Testimonials.tsx# Graduate success stories
│       │       ├── FAQ.tsx         # Interactive accordion questions
│       │       └── CallToAction.tsx# Cohort registration banner
│       ├── globals.css             # Tailwind v4 imports and infinite keyframe rules
│       ├── layout.tsx              # Root HTML wrapper and global metadata
│       └── page.tsx                # Unified landing page assembly
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

---

## 💻 Local Development Setup

To run this repository locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lamiakajal/coding-school.git
   cd coding-school
   ```

2. **Install project dependencies:**

   ```bash
   npm install
   ```

3. **Start the local development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

5. **Verify production build:**
   ```bash
   npm run build
   ```

---

## 📄 License

Distributed under the terms of the [MIT License](LICENSE).
