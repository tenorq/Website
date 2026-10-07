export function Logo({ variant = "full" }: { variant?: "full" | "icon" }) {
  if (variant === "icon") {
    return (
      <span className="font-bold text-xl tracking-tighter">
        T<span className="text-[#2f5d8c]">Q</span>
      </span>
    );
  }

  return (
    <span className="font-bold text-xl tracking-[0.18em] text-white">
      TENOR
      <span className="text-[#2f5d8c]">Q</span>
    </span>
  );
}
