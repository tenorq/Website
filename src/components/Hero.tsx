export function Hero() {
  return (
    <section className="flex min-h-[88vh] items-center px-6 pb-20 pt-36 md:px-10 md:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Financial technology · Modernisation</p>
          <h1 className="mt-7 text-[clamp(2.5rem,10vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-white md:text-7xl lg:text-[5.5rem]">Modernising the systems businesses depend on.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">Tenorq builds software for financial institutions and businesses, connecting complex operations with simpler digital experiences.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-500">Explore our products</a>
            <a href="#cta" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.05]">Talk to us</a>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-gray-400">
          <span>Financial infrastructure</span><span>Business software</span><span>Digital transformation</span>
        </div>
      </div>
    </section>
  );
}
