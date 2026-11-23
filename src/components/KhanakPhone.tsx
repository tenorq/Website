import Image from "next/image";

type KhanakPhoneProps = {
  priority?: boolean;
  tilt?: boolean;
  className?: string;
  sizes: string;
};

export function KhanakPhone({
  priority = false,
  tilt = false,
  className = "",
  sizes,
}: KhanakPhoneProps) {
  return (
    <figure className={`${tilt ? "khanak-phone-tilt" : ""} ${className}`}>
      <div className="overflow-hidden rounded-[1.65rem] border-[7px] border-[#1a1f27] bg-white shadow-[0_24px_50px_-24px_rgba(17,24,32,0.45)] ring-1 ring-black/10">
        <Image
          src="/images/products/khanak-home.png"
          alt="Khanak home screen with voice billing. The app asks the merchant to record an order by speaking."
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
