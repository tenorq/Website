import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";

const modules = [
  ["Merchant onboarding", "Guide registration and activation with clear digital workflows."],
  ["Bank operations", "Help teams manage merchant profiles and monitor activity."],
  ["Merchant experience", "Give businesses accessible tools to manage payment operations."],
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <section className="px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Products</p>
            <h1 className="mt-6 text-[clamp(2.25rem,9vw,3rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-white md:text-7xl">Software for more connected financial operations.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">A growing portfolio of technology for institutions and businesses. Our merchant platform is the first product in that work.</p>
          </div>

          <a href="/products/merchant-platform" className="group mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition-colors hover:border-blue-500/40 md:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col items-start justify-center p-8 md:p-12">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">01 · Merchant Platform</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">A connected toolkit for bank teams and merchants.</h2>
              <p className="mt-5 leading-7 text-gray-400">Support the merchant lifecycle across onboarding, payment operations and day-to-day management.</p>
              <span className="mt-8 text-sm font-semibold text-blue-400">Explore the platform <span aria-hidden="true">→</span></span>
            </div>
            <div className="flex items-center bg-white p-3 sm:p-5 md:p-8">
              <Image src="/images/products/bank-dashboard.png" alt="Merchant platform bank dashboard" width={1554} height={1082} className="h-auto w-full rounded-lg border border-slate-200 shadow-xl" sizes="(max-width: 768px) 100vw, 55vw" />
            </div>
          </a>

          <div className="mt-20 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
            {modules.map(([title, description]) => (
              <article key={title}>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
