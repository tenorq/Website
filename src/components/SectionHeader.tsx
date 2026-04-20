export type HeaderProps = {
  title: string;
  subtitle?: string;
  tag?: string;
};

export function SectionHeader({ title, subtitle, tag }: HeaderProps) {
  return (
    <div className="max-w-3xl mb-12">
      {tag && (
        <span className="inline-block text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#2f5d8c] mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
