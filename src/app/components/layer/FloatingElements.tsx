"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  hue: number;
  alpha: number;
  pulseSpeed: number;
  pulseAngle: number;
}

export default function FloatingElements() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive resize listener
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Color palettes (modern tech cyan, indigo, purple, rose, emerald)
    const hues = [195, 220, 260, 330, 160];

    // Generate responsive bubble particles
    const bubbleCount = Math.floor(Math.min(width, 1400) / 70);
    const bubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 9 + 5, // Small glass beads (5px - 14px)
        dx: (Math.random() - 0.5) * 0.6,
        dy: -(Math.random() * 0.4 + 0.2), // Gentle upward natural drift
        hue: hues[Math.floor(Math.random() * hues.length)],
        alpha: Math.random() * 0.35 + 0.35,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    // 60 FPS Render Loop with Physics
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];

        // Physics movement
        b.x += b.dx;
        b.y += b.dy;
        b.pulseAngle += b.pulseSpeed;

        // Wrap around borders smoothly
        if (b.y + b.radius < 0) {
          b.y = height + b.radius;
          b.x = Math.random() * width;
        }
        if (b.x - b.radius > width) b.x = -b.radius;
        if (b.x + b.radius < 0) b.x = width + b.radius;

        const currentRadius = b.radius + Math.sin(b.pulseAngle) * 1.5;

        // Outer ambient glow ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, currentRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${b.hue}, 85%, 65%, ${b.alpha})`;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = `hsla(${b.hue}, 90%, 60%, 0.8)`;
        ctx.shadowBlur = 12;
        ctx.stroke();

        // Soft glass interior tint
        ctx.fillStyle = `hsla(${b.hue}, 80%, 75%, 0.12)`;
        ctx.fill();

        // Realistic glass specular light reflection
        ctx.beginPath();
        ctx.arc(
          b.x - currentRadius * 0.35,
          b.y - currentRadius * 0.35,
          currentRadius * 0.25,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // High z-index (z-30) ensures bubbles float over all project photos while remaining completely non-blocking
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
    />
  );
}
