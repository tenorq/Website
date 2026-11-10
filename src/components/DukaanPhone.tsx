import Image from "next/image";

type DukaanPhoneProps = {
  priority?: boolean;
  tilt?: boolean;
  className?: string;
  sizes: string;
};

export function DukaanPhone({
  priority = false,
  tilt = false,
  className = "",
  sizes,
}: DukaanPhoneProps) {
  return (
    <figure className={`${tilt ? "dukaan-phone-tilt" : ""} ${className}`}>
      <div className="overflow-hidden rounded-[1.65rem] border-[7px] border-[#1a1f27] bg-white shadow-[0_24px_50px_-24px_rgba(17,24,32,0.45)] ring-1 ring-black/10">
        <Image
          src="/images/products/dukaanai-dashboard.png"
          alt="DukaanAI home screen with voice billing. The app asks the merchant to record an order by speaking."
          width={1179}
          height={2556}
          priority={priority}
          sizes={sizes}
          className="block h-auto w-full"
        />
      </div>
    </figure>
  );
}
