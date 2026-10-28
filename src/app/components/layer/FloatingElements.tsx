"use client";

// Floating decorative tech chips dancing in background layer
const floatingTech = [
  { text: "⚛ React", top: "12%", left: "4%", anim: "animate-float-up" },
  { text: "⚡ Next.js", top: "24%", right: "5%", anim: "animate-float-down" },
  { text: "🔷 TypeScript", top: "48%", left: "2%", anim: "animate-float-down" },
  { text: "🍃 MongoDB", top: "65%", right: "4%", anim: "animate-float-up" },
  { text: "🎨 Tailwind", top: "82%", left: "5%", anim: "animate-float-up" },
  { text: "🟢 Node.js", top: "88%", right: "6%", anim: "animate-float-down" },
];

export default function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background ambient color glow */}
      <div className="animate-pulse-glow absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="animate-pulse-glow absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

      {/* Live animated tech tags */}
      {floatingTech.map((item, idx) => (
        <div
          key={idx}
          style={{ top: item.top, left: item.left, right: item.right }}
          className={`hidden md:flex absolute items-center gap-1.5 rounded-full border border-blue-200/50 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-md ${item.anim}`}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
