export function CTA() {
  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Let’s build something <br className="hidden sm:block" />
          <span className="text-blue-500">that lasts.</span>
        </h2>

        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10">
          Ready to scale your infrastructure? Join leading enterprises who trust
          Tenorq for their mission-critical systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@tenorq.com"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
