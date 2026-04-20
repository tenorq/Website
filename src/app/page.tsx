import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/InfoCard";
import { Navbar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b]">
      <Navbar />

      <Hero />

      <div className="relative z-10">
        <Section id="whatwebuild" className="pt-24 pb-14">
          <SectionHeader
            tag="Capabilities"
            title="What We Build"
            subtitle="We focus on systems that are reliable, scalable, and built for real-world usage."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <InfoCard
              title="Backend Systems & APIs"
              desc="Designed to handle extreme scale, complex data flows, and mission-critical production workloads."
            />

            <InfoCard
              title="Cloud Infrastructure"
              desc="Resilient, automated cloud environments optimized for performance and cost-efficiency."
            />

            <InfoCard
              title="Real-time Systems"
              desc="High-throughput, low-latency architectures for modern data-driven applications."
            />

            <InfoCard
              title="System Architecture"
              desc="Comprehensive technical blueprints built for long-term maintainability and rapid growth."
            />
          </div>
        </Section>

        <Section id="howwethink" variant="surface">
          <SectionHeader
            tag="Philosophy"
            title="Built with Intent"
            subtitle="Every system is designed as a whole, not just features stitched together. We prioritize clarity and structural integrity."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              title="Scalability"
              desc="Designing for tomorrow's growth today without over-engineering."
            />

            <InfoCard
              title="Reliability"
              desc="Systems that stay up when it matters most, with robust error handling."
            />

            <InfoCard
              title="Performance"
              desc="Optimized from the database to the edge for lightning-fast responses."
            />
          </div>
        </Section>

        <Section id="value">
          <SectionHeader
            tag="Impact"
            title="How We Add Value"
            subtitle="We go beyond implementation by focusing on how your system should work at scale."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              title="Designed for Longevity"
              desc="We design systems that reduce future rework by making the right architectural decisions early, ensuring your product evolves without costly rewrites."
            />

            <InfoCard
              title="Performance & Reliability First"
              desc="Every system is built with performance and reliability as core priorities — not afterthoughts — so it holds up under real-world load."
            />

            <InfoCard
              title="Maintainable Codebases"
              desc="We structure codebases for long-term maintainability, making it easier for teams to extend, debug, and scale the system over time."
            />

            <InfoCard
              title="Built for Real-World Usage"
              desc="We anticipate edge cases, failures, and user behavior patterns to ensure your system performs reliably outside of ideal conditions."
            />
          </div>

          <div className="mt-12 max-w-3xl ">
            <p className="text-gray-400 text-base leading-relaxed">
              The goal is simple — to build software that continues to deliver
              value well beyond the initial launch.
            </p>
          </div>
        </Section>

        <Section id="process" variant="surface">
          <SectionHeader
            tag="Workflow"
            title="Our Process"
            subtitle="A disciplined approach to solving complex engineering challenges."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Understand", "Design", "Build", "Iterate"].map((step, i) => (
              <div
                key={step}
                className="flex flex-row sm:flex-col items-center sm:items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
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
        <Section id="ai" variant="surface">
          <SectionHeader
            tag="AI"
            title="Practical Use of AI, Where It Matters"
            subtitle="We apply AI with intent — only where it genuinely improves the system."
          />

          <div className="mt-12 max-w-4xl">
            <p className="text-gray-400 leading-relaxed mb-6">
              AI is powerful — when used correctly. We integrate AI-driven
              solutions where they enhance real-world systems, such as
              automation, data processing, and intelligent workflows.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              At the same time, we avoid unnecessary complexity. Not every
              system benefits from AI, and forcing it often leads to fragile,
              inefficient solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our priority remains the same: building efficient, reliable
              systems — with or without AI.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              title="Applied, Not Forced"
              desc="We use AI only where it delivers measurable value, not as a checkbox feature."
            />
            <InfoCard
              title="Focused on Outcomes"
              desc="From automation to intelligent workflows, every use case is tied to real impact."
            />
            <InfoCard
              title="Engineering First"
              desc="Strong system design always comes first — AI is an enhancement, not a substitute."
            />
          </div>
        </Section>

        <Section id="who">
          <SectionHeader
            tag="Clients"
            title="Who We Work With"
            subtitle="We partner with teams building meaningful, long-term digital products."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              title="Product-Focused Companies"
              desc="Teams building complex platforms that require strong architecture and scalable systems."
            />

            <InfoCard
              title="Scaling Startups & Teams"
              desc="Growing teams that need to evolve their infrastructure without breaking existing systems."
            />

            <InfoCard
              title="Operationally Driven Organizations"
              desc="Businesses improving internal systems, automation, and efficiency through better engineering."
            />

            <InfoCard
              title="Serious Founders"
              desc="Founders focused on long-term product quality, not short-term shortcuts."
            />
          </div>
        </Section>

        <CTA />

        <Footer />
      </div>
    </main>
  );
}
