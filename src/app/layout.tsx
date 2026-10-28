import type { Metadata } from "next";
import "./globals.css";
// Relative path imports matching your exact folder tree
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Metadata configuration for SEO
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
      <body className="min-h-screen flex flex-col antialiased">
        {/* Persistent Global Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="grow">{children}</main>

        {/* Persistent Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
