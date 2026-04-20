import { CardGrid } from "@/components/CardGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b]">
      <Navbar />

      <Hero />

      <div className="relative z-10">
        <Section
          id="whatwebuild"
          className="pt-24 pb-14"
        >
          <SectionHeader
            tag="Capabilities"
            title="What We Build"
            subtitle="We focus on systems that are reliable, scalable, and built for real-world usage."
          />

          <CardGrid
            items={[
              {
                title: "Backend Systems & APIs",
                desc: "Designed to handle extreme scale, complex data flows, and mission-critical production workloads.",
              },
              {
                title: "Cloud Infrastructure",
                desc: "Resilient, automated cloud environments optimized for performance and cost-efficiency.",
              },
              {
                title: "Real-time Systems",
                desc: "High-throughput, low-latency architectures for modern data-driven applications.",
              },
              {
                title: "System Architecture",
                desc: "Comprehensive technical blueprints built for long-term maintainability and rapid growth.",
              },
            ]}
          />
        </Section>

        <Section id="howwethink" variant="surface">
          <SectionHeader
            tag="Philosophy"
            title="Built with Intent"
            subtitle="Every system is designed as a whole, not just features stitched together. We prioritize clarity and structural integrity."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h4 className="text-[#2f5d8c] font-bold mb-4">Scalability</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Designing for tomorrow's growth today without over-engineering.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h4 className="text-[#2f5d8c] font-bold mb-4">Reliability</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Systems that stay up when it matters most, with robust error handling.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h4 className="text-[#2f5d8c] font-bold mb-4">Performance</h4>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Optimized from the database to the edge for lightning-fast responses.</p>
            </div>
          </div>
        </Section>

        <Section id="value">
          <SectionHeader
            tag="Impact"
            title="How We Add Value"
            subtitle="We reduce technical debt and future rework by designing systems correctly from the start."
          />
        </Section>

        <Section id="process" variant="surface">
          <SectionHeader
            tag="Workflow"
            title="Our Process"
            subtitle="A disciplined approach to solving complex engineering challenges."
          />
          <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            {['Understand', 'Design', 'Build', 'Iterate'].map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2f5d8c]/20 border border-[#2f5d8c]/40 flex items-center justify-center text-[#2f5d8c] font-bold">
                  {i + 1}
                </div>
                <span className="text-white font-medium">{step}</span>
                {i < 3 && <div className="hidden md:block w-12 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </Section>

        <CTA />

        <Footer />
      </div>
    </main>
  );
}
