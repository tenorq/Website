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
      className={`py-14 px-6 md:px-10 ${
        variant === "surface"
          ? "bg-[color:var(--color-surface)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
