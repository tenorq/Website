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
          ? "bg-[#0f172a]/40 border-y border-blue-500/10 shadow-inner"
          : "bg-transparent"
      }`}
    >
      {/* Decorative background element for surface variant */}
      {variant === "surface" && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 blur-[100px] rounded-full" />
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
