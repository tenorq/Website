export function CTA() {
  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2f5d8c]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Let’s build something <br className="hidden sm:block" /> 
          <span className="text-[#2f5d8c]">that lasts.</span>
        </h2>
        
        <p className="max-w-xl mx-auto text-[#9ca3af] text-lg mb-10">
          Ready to scale your infrastructure? Join leading enterprises who trust Tenorq for their mission-critical systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#2f5d8c] hover:bg-[#3a72ab] text-white font-semibold transition-all shadow-xl shadow-[#2f5d8c]/20 hover:shadow-[#2f5d8c]/40 active:scale-95">
            Contact Us
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
