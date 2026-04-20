"use client";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fade + slight scale
  const opacity = Math.max(1 - scrollY / 400, 0);
  const scale = 1 - scrollY / 2000;

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* 🔵 STRONGER GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#2f5d8c]/20" />

      {/* 🔵 ACCENT GLOW */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#2f5d8c]/30 blur-3xl rounded-full" />

      {/* 🔥 BIG BACKGROUND LOGO */}
      <h1 className="absolute text-[18vw] font-bold text-[#2f5d8c]/10 select-none pointer-events-none">
        TENORQ
      </h1>
      <div
        style={{ opacity, transform: `scale(${scale})` }}
        className="transition-transform"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
          Engineering software systems that scale.
        </h1>

        <p className="mt-5 text-center text-[color:var(--color-foreground)]/70">
          We design systems built for performance, reliability, and growth.
        </p>

        <div className="flex justify-center">
          <button className="mt-6 px-5 py-2.5 rounded-lg bg-[color:var(--color-accent)] text-white">
            Start a conversation
          </button>
        </div>
      </div>
    </section>
  );
}
