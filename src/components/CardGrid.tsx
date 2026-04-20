export type CardItem = {
  title: string;
  desc: string;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="p-5 rounded-xl border border-[var(--border-soft)]
                     bg-white hover:bg-[color:var(--color-accent)]/5
                     transition"
        >
          <h3 className="font-medium">{item.title}</h3>
          <p className="mt-2 text-[color:var(--color-foreground)]/70 text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
