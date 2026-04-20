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
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden px-6">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2f5d8c]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2f5d8c]/15 blur-[100px] rounded-full" />
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
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-[#2f5d8c] uppercase border border-[#2f5d8c]/30 rounded-full bg-[#2f5d8c]/5">
          Software Architecture & Engineering
        </span>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          Engineering systems <br />
          <span className="bg-gradient-to-r from-[#2f5d8c] via-[#4a86c2] to-[#2f5d8c] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            that scale.
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-[#9ca3af] mb-10 leading-relaxed">
          We design and build high-performance, resilient, and future-proof digital infrastructure for modern enterprises.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-[#2f5d8c] hover:bg-[#3a72ab] text-white font-medium transition-all shadow-lg shadow-[#2f5d8c]/20 hover:shadow-[#2f5d8c]/40 active:scale-95">
            Start a conversation
          </button>
          <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all active:scale-95">
            View our work
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
