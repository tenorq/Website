import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/InfoCard";
import { Navbar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

const platformFeatures = [
  ["Merchant Onboarding", "Bring merchants onto the platform through a streamlined digital workflow."],
  ["Payment Collections", "Support merchant collections across QR, payment links, cards, and other payment channels."],
  ["Settlements", "Give merchants and banks clear visibility into settlement activity."],
  ["Reconciliation", "Simplify transaction tracking and reconciliation across payment activity."],
  ["Merchant Management", "Manage merchants, stores, users, configurations, and access from one platform."],
  ["Analytics & Reporting", "Turn transaction and merchant data into actionable operational insights."],
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
    <main className="bg-[#0b0b0b]">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <Section id="products" className="pt-24 pb-14">
          <SectionHeader tag="Products" title="Products built for real-world systems." subtitle="We build focused technology products that solve complex operational and business problems." />
          <div className="mt-14 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Merchant Platform</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">Modern merchant infrastructure for banks.</h3>
            <p className="mt-5 max-w-3xl text-gray-400 leading-relaxed">A configurable merchant platform that helps banks onboard, manage, and serve their merchant ecosystem through a unified digital experience.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map(([title, desc]) => <InfoCard key={title} title={title} desc={desc} />)}
          </div>
        </Section>

        <Section id="approach" variant="surface">
          <SectionHeader tag="Approach" title="Simple principles. Serious engineering." subtitle="Technology becomes difficult when unnecessary complexity gets in the way. We focus on building systems that are understandable, dependable, and designed for the problems they actually need to solve." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map(([title, desc]) => <InfoCard key={title} title={title} desc={desc} />)}
          </div>
        </Section>

        <Section id="process">
          <SectionHeader tag="Process" title="From problem to product." subtitle="We don't start with technology. We start by understanding the problem." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(([title, desc], i) => (
              <div key={title} className="flex flex-row sm:flex-col items-center sm:items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">{String(i + 1).padStart(2, "0")}</div>
                <div><h4 className="text-white font-bold text-lg mb-2">{title}</h4><p className="text-gray-400 text-sm leading-relaxed">{desc}</p></div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="ai" variant="surface">
          <SectionHeader tag="AI" title="Intelligence where it creates real value." subtitle="AI is becoming part of how modern software is built and operated." />
          <div className="mt-10 max-w-4xl space-y-5 text-gray-400 leading-relaxed">
            <p>At Tenorq, we look at AI as a capability within a larger system — not as a product feature added for its own sake.</p>
            <p>We explore practical applications of AI across automation, operational intelligence, decision support, and software workflows where it can create measurable value.</p>
          </div>
        </Section>

        <Section id="company">
          <SectionHeader tag="Company" title="We build technology for what's next." subtitle="Tenorq is a technology company focused on building software products and infrastructure for complex, real-world problems." />
          <div className="mt-8 max-w-4xl space-y-5 text-gray-400 leading-relaxed">
            <p>We believe the best technology is not defined by how complicated it is, but by how effectively it solves the problem.</p>
            <p>Our work spans product engineering, backend systems, infrastructure, and emerging technologies — with a focus on building things that are useful, reliable, and built to last.</p>
          </div>
        </Section>
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
