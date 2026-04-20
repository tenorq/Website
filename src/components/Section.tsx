export type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  children,
  variant = "default",
}: SectionProps & { variant?: "default" | "surface" }) {
  return (
    <section
      id={id}
      className={`py-24 px-6 md:px-10 relative overflow-hidden ${
        variant === "surface"
          ? "bg-[#121212]/50 border-y border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
