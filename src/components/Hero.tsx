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
      {/* gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[color:var(--color-accent)]/10" />

      {/* accent glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[color:var(--color-accent)] opacity-10 blur-3xl rounded-full" />

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
