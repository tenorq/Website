"use client";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);
  const scale = 1 - scrollY / 3000;
  const translateY = scrollY * 0.2;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-8">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      {/* Large Background Logo with Parallax */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <h1 className="text-[25vw] font-black text-white/[0.02] tracking-tighter leading-none select-none">
          TENORQ
        </h1>
      </div>

      <div
        style={{ opacity, transform: `scale(${scale})` }}
        className="relative z-10 max-w-4xl transition-transform duration-300 ease-out text-center"
      >
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase border border-blue-400/30 rounded-full bg-blue-400/5">
          Technology for real-world problems
        </span>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          Building technology <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            for the systems that matter.
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium">
          Tenorq builds software products and technology infrastructure for
          complex, real-world problems — starting with modern merchant
          infrastructure for banks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
          >
            Start a conversation
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
