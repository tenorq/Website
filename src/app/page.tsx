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
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03]">
              <h4 className="text-blue-400 font-bold text-lg mb-4">Scalability</h4>
              <p className="text-gray-300 leading-relaxed">Designing for tomorrow's growth today without over-engineering.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03]">
              <h4 className="text-blue-400 font-bold text-lg mb-4">Reliability</h4>
              <p className="text-gray-300 leading-relaxed">Systems that stay up when it matters most, with robust error handling.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03]">
              <h4 className="text-blue-400 font-bold text-lg mb-4">Performance</h4>
              <p className="text-gray-300 leading-relaxed">Optimized from the database to the edge for lightning-fast responses.</p>
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
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Understand', 'Design', 'Build', 'Iterate'].map((step, i) => (
              <div key={step} className="flex flex-row sm:flex-col items-center sm:items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xl">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{step}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {i === 0 && "Deep dive into requirements and constraints."}
                    {i === 1 && "Architecting the solution for scale."}
                    {i === 2 && "Execution with precision and quality."}
                    {i === 3 && "Refining based on real-world feedback."}
                  </p>
                </div>
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
