import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingElements from "./components/layer/FloatingElements";

export const metadata: Metadata = {
  title: "Coding School - Master Modern Full-Stack Development",
  description:
    "Learn Next.js, TypeScript, React, and Node.js with production-grade curriculum and hands-on projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900">
        {/* Visual Background Layer */}
        <FloatingElements />

        {/* Persistent Global Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="relative z-10 grow">{children}</main>

        {/* Persistent Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
