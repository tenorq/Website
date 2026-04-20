export function Logo({ variant = "full" }: { variant?: "full" | "icon" }) {
  if (variant === "icon") {
    return (
      <span className="font-bold text-xl">
        T<span className="text-[color:var(--color-accent)]">Q</span>
      </span>
    );
  }

  return (
    <span className="font-bold text-xl tracking-wide">
      TENOR
      <span className="text-[color:var(--color-accent)]">Q</span>
    </span>
  );
}
