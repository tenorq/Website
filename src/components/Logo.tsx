export function Logo({ variant = "full" }: { variant?: "full" | "icon" }) {
  if (variant === "icon") {
    return (
      <span className="font-bold text-xl tracking-tighter">
        T<span className="text-[#2f5d8c] drop-shadow-[0_0_8px_rgba(47,93,140,0.5)]">Q</span>
      </span>
    );
  }

  return (
    <span className="font-bold text-xl tracking-widest text-white">
      TENOR
      <span className="text-[#2f5d8c] drop-shadow-[0_0_8px_rgba(47,93,140,0.5)]">Q</span>
    </span>
  );
}
