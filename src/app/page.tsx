import { CardGrid } from "@/components/CardGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <div className="-mt-10 relative z-10 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <Section
          id="whatwebuild"
          className="pt-8 pb-14 border-t border-black/5 dark:border-white/5"
        >
          <SectionHeader
            title="What We Build"
            subtitle="We focus on systems that are reliable, scalable, and built for real-world usage."
          />

          <CardGrid
            items={[
              {
                title: "Backend Systems & APIs",
                desc: "Designed to handle scale, complexity, and production workloads.",
              },
              {
                title: "Full Stack Applications",
                desc: "Clean, structured applications with strong backend foundations.",
              },
              {
                title: "Internal Tools",
                desc: "Streamline operations and automate workflows.",
              },
              {
                title: "System Architecture",
                desc: "Built for maintainability and long-term growth.",
              },
            ]}
          />
        </Section>

        <Section id="howwethink" variant="surface">
          <SectionHeader
            title="Built with Intent"
            subtitle="Every system is designed as a whole, not just features stitched together."
          />
        </Section>

        <Section id="value">
          <SectionHeader
            title="How We Add Value"
            subtitle="We reduce future rework by designing systems correctly from the start."
          />
        </Section>

        <Section id="process" variant="surface">
          <SectionHeader
            title="How We Work"
            subtitle="Understand → Design → Build → Iterate"
          />
        </Section>

        <Footer />
      </div>
    </main>
  );
}
