import Image from "next/image";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";

const focusAreas = [
  ["Legacy workflows", "Make essential operations easier to use without losing the systems and controls they rely on."],
  ["Disconnected operations", "Connect people, payment activity and operational data in one coherent experience."],
  ["Manual processes", "Turn repeatable work into clear digital workflows that teams can manage with confidence."],
];

const principles = [
  ["Scalability", "Build for today's requirements without creating tomorrow's bottlenecks."],
  ["Reliability", "Systems should behave predictably when they matter most."],
  ["Performance", "Efficient systems create better experiences and lower operational overhead."],
  ["Simplicity", "Good architecture reduces unnecessary complexity rather than hiding it."],
];

const processSteps = [
  ["Understand", "Understand the users, business requirements, constraints, and existing systems."],
  ["Design", "Define the product, architecture, workflows, and technical foundations."],
  ["Build", "Turn the design into reliable, production-ready software."],
  ["Iterate", "Learn from real usage, improve the system, and continue building."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <Hero />

      <section id="modernisation" className="scroll-mt-28 border-y border-white/10 bg-[#121212] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Modernisation</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Modernise the experience around the systems you already depend on.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">Good modernisation starts with the way work happens today. We build connected software that helps institutions improve operations and customer experiences at a practical pace.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {focusAreas.map(([title, description], index) => (
              <article key={title} className="border-t border-white/10 pt-6">
                <span className="text-sm text-gray-400">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-28 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Products</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Built for the work behind modern financial services.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">Our merchant platform brings bank teams and merchants into a more connected way of working.</p>
            </div>
            <a href="/products" className="text-sm font-semibold text-blue-400 transition-colors hover:text-white">View products <span aria-hidden="true">→</span></a>
          </div>

          <a href="/products/merchant-platform" className="group mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition-colors hover:border-blue-500/40 md:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col items-start justify-center p-8 md:p-12">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Merchant Platform</span>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">A clearer way to manage the merchant lifecycle.</h3>
              <p className="mt-5 leading-7 text-gray-400">Digital tools for onboarding, merchant management and payment operations, designed for banks and the businesses they serve.</p>
              <span className="mt-8 text-sm font-semibold text-blue-400">Explore the platform <span aria-hidden="true">→</span></span>
            </div>
            <div className="flex items-center overflow-hidden bg-white p-3 sm:p-5 md:p-8">
              <Image src="/images/products/bank-dashboard.png" alt="Merchant platform bank operations dashboard" width={1554} height={1082} priority className="h-auto w-full rounded-lg border border-slate-200 shadow-xl" sizes="(max-width: 768px) 100vw, 55vw" />
            </div>
          </a>
        </div>
      </section>

      <section id="approach" className="scroll-mt-28 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Approach</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Simple principles. Serious engineering.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">Technology becomes difficult when unnecessary complexity gets in the way. We focus on building systems that are understandable, dependable, and designed for the problems they need to solve.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(([title, description]) => (
              <article key={title} className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 border-y border-white/10 bg-[#121212] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Process</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">From problem to product.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">We start by understanding the problem, then shape and build a solution around its real requirements.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, description], index) => (
              <article key={title} className="border-t border-white/10 pt-6">
                <span className="text-sm text-gray-400">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="scroll-mt-28 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">AI</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Intelligence where it creates real value.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">We treat AI as a capability within a larger system, not a feature added for its own sake. We explore practical applications across automation, operational intelligence, decision support and software workflows where they can create measurable value.</p>
          </div>
        </div>
      </section>

      <section id="company" className="scroll-mt-28 border-y border-white/10 bg-[#121212] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Tenorq</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">Technology for systems that matter.</h2>
          </div>
          <p className="text-lg leading-8 text-gray-400">We work across product engineering and financial technology to make complex operations more usable. Our focus is practical: understand the environment, build around its real constraints, and make the next step in modernisation easier to take.</p>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
