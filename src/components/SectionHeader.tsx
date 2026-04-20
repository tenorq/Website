export type HeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: HeaderProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-semibold ">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-[color:var(--color-foreground)]/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
