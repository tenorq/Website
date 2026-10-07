import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";

const capabilities = [
  ["01", "Onboard", "Move merchant registration and activation into clear digital workflows."],
  ["02", "Manage", "Give bank teams a shared view of merchants and their day-to-day operations."],
  ["03", "Collect", "Put practical payment tools and activity in reach for merchants."],
  ["04", "Monitor", "Keep transaction activity and operational reporting close at hand."],
];

const bankScreens = [
  {
    src: "/images/products/bank-dashboard.png",
    alt: "Merchant operations overview in the bank dashboard",
    title: "Merchant operations, at a glance",
    description: "A shared overview of the merchant network and payment activity.",
  },
  {
    src: "/images/products/bank-transactions.png",
    alt: "Transaction management view for bank teams",
    title: "Activity that is easier to follow",
    description: "Review transaction records and operational details in one workspace.",
  },
];

const merchantScreens = [
  { src: "/images/products/merchant-home.png", alt: "Merchant app business overview", label: "Business overview", width: 628, height: 1392 },
  { src: "/images/products/merchant-qr.png", alt: "Merchant app QR management", label: "QR management", width: 626, height: 1396 },
  { src: "/images/products/merchant-profile.png", alt: "Merchant app profile and business details", label: "Merchant profile", width: 628, height: 1394 },
];

export default function MerchantPlatformPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <Navbar />

      <section className="px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Tenorq · Product 01</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h1 className="max-w-4xl text-[clamp(2.25rem,9vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white md:text-7xl">Merchant operations, connected.</h1>
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-gray-400">A configurable digital platform for banks to onboard, manage and serve merchants, with dedicated experiences for operations teams and the businesses they support.</p>
              <a href="/#cta" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-500">Talk to us</a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-6 text-sm text-gray-400">
            <span className="rounded-full border border-white/10 px-4 py-2">Bank operations</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Merchant app</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Connected workflows</span>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121212] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">One connected platform</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Support the work across a merchant’s lifecycle.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-gray-400">Bring essential merchant operations into a set of digital workflows, designed to work together and adapt to the bank’s environment.</p>
          </div>
          <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(([number, title, description]) => (
              <article key={number} className="border-t border-white/10 py-6">
                <span className="text-sm text-gray-400">{number}</span>
                <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">For bank teams</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">A clearer view of the merchant network.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">Web tools for teams responsible for merchant onboarding, oversight and payment operations.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {bankScreens.map((screen, index) => (
              <figure key={screen.src} className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
                <div className="border-b border-white/10 px-5 py-4 md:px-6">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-blue-400">0{index + 1} · Bank workspace</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{screen.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">{screen.description}</p>
                </div>
                <div className="bg-white p-3 md:p-5">
                  <Image src={screen.src} alt={screen.alt} width={1556} height={1086} className="h-auto w-full rounded-lg border border-slate-200" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121212] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">For merchants</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Useful tools, right in their hands.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">A mobile experience that brings payment activity and everyday merchant tasks together in one place.</p>
            <p className="mt-8 border-l-2 border-blue-500 pl-4 text-sm leading-6 text-gray-400">The screens shown here are from the merchant application.</p>
          </div>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 md:gap-7">
            {merchantScreens.map((screen) => (
              <figure key={screen.src} className="w-full max-w-[220px] sm:w-[calc(33.333%-0.9rem)] sm:max-w-[180px] md:max-w-[190px]">
                <div className="overflow-hidden rounded-[1.35rem] border-[5px] border-slate-900 bg-white shadow-xl ring-1 ring-white/15 md:rounded-[1.7rem] md:border-[7px]">
                  <Image src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} className="block h-auto w-full" sizes="(max-width: 768px) 30vw, 190px" />
                </div>
                <figcaption className="mt-4 text-center text-xs font-medium leading-5 text-gray-400 md:text-sm">{screen.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#121212] p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Built for your environment</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">Modernisation that works with the way your teams operate.</h2>
            <p className="mt-4 leading-7 text-gray-400">Explore how the platform can fit your institution’s workflows, systems and merchant needs.</p>
          </div>
          <a href="/#cta" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-500">Start a conversation</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
