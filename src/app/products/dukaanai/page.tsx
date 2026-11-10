import type { Metadata } from "next";
import { DukaanPhone } from "@/components/DukaanPhone";
import { EarlyAccessLink } from "@/components/EarlyAccessLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "DukaanAI | Coming soon · Tenorq",
  description:
    "DukaanAI is Tenorq’s voice-first billing app for small retailers. Speak an order, review the items and prepare a ready-to-pay bill. Coming soon.",
  openGraph: {
    title: "DukaanAI | Coming soon · Tenorq",
    description:
      "A voice-first billing app for everyday merchants. Speak an order, review the items and prepare a bill. Coming soon.",
    type: "website",
    images: [
      {
        url: "/images/products/dukaanai-dashboard.png",
        width: 1179,
        height: 2556,
        alt: "DukaanAI home screen",
      },
    ],
  },
};

const features = [
  [
    "01",
    "Voice-powered billing",
    "Speak the order in everyday language, including Hinglish, instead of searching for each product.",
  ],
  [
    "02",
    "Intelligent item extraction",
    "Names and quantities become bill lines you can correct before the bill is final.",
  ],
  [
    "03",
    "Smart product catalog",
    "Keep names, prices and units for what you sell. Enter a price once when a product is new.",
  ],
  [
    "04",
    "Dynamic UPI payment QR",
    "A QR for the exact bill amount, so the customer can pay from their own phone.",
  ],
  [
    "05",
    "Simple billing history",
    "Earlier bills stay available in a straightforward list.",
  ],
];

const steps = [
  ["Speak", "Tell DukaanAI what the customer wants."],
  ["Review", "Check the extracted products and quantities."],
  ["Generate", "Prepare the final customer bill."],
  ["Collect", "Generate a QR for payment."],
];

const audiences = [
  ["Kirana stores", "Neighbourhood counters, where the bill has to keep pace with the queue."],
  ["Grocery shops", "Daily goods, spoken the way customers actually ask for them."],
  ["General stores", "Mixed shelves, without a large point-of-sale setup."],
  ["Independent retailers", "Owners who want a bill without learning a complicated system."],
];

const exampleItems = [
  ["Atta", "1 kg"],
  ["Maggi", "2 packet"],
];

export default function DukaanAiPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <Navbar />

      <section className="px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">
              A new product by Tenorq
            </p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,9vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white md:text-7xl">
              Meet DukaanAI.
            </h1>
            <p className="mt-5 text-2xl font-medium tracking-tight text-white md:text-3xl">
              Billing, just got simpler.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              A voice-first billing experience for everyday merchants. Speak an order, review the items and prepare a ready-to-pay bill.
            </p>
            <p className="mt-6 w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] dukaan-kicker">
              Coming soon
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <EarlyAccessLink />
              <a
                href="#features"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                Explore features
              </a>
            </div>
          </div>
          <div className="flex justify-center py-4 lg:justify-end lg:py-8">
            <DukaanPhone
              priority
              tilt
              sizes="(max-width: 1024px) 250px, 280px"
              className="w-full max-w-[250px] md:max-w-[280px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121212] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Running a shop is hard enough. Billing shouldn’t be.
          </h2>
          <div className="max-w-xl text-lg leading-8 text-gray-400">
            <p>
              A typical bill means searching the catalog, typing quantities and waiting on the total. In a busy hour, those steps stack up.
            </p>
            <p className="mt-4">
              DukaanAI is a simpler way to make the everyday customer bill.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">
              The idea
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Your words. A ready-to-pay bill.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Speak the way you already talk at the counter. DukaanAI turns that into bill items you can check, edit and take to payment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#121212] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
              Example
            </p>
            <blockquote className="dukaan-mark mt-5 border-l-2 pl-4 text-xl font-medium leading-8 text-white">
              “Ek kilo atta, 2 packet Maggi.”
            </blockquote>
            <ul className="mt-6 border-t border-white/10">
              {exampleItems.map(([name, quantity]) => (
                <li key={name} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
                  <span className="font-medium text-white">{name}</span>
                  <span className="text-sm text-gray-400">{quantity}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              A spoken order becomes line items. The merchant can correct them before the bill is made.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-28 border-y border-white/10 bg-[#121212] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">
              Features
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              What the merchant actually uses.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6"
              >
                <span className="text-sm dukaan-kicker">{number}</span>
                <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">
              How it works
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              From spoken order to customer bill in seconds.
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, description], index) => (
              <li key={title} className="border-t border-white/10 pt-6">
                <span className="text-sm text-gray-400">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121212] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">
              Who it is for
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Built for everyday merchants.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              First, for shops that want a bill without a complicated POS.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(([title, description]) => (
              <article key={title} className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#121212] p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] dukaan-kicker">
            Coming soon
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A simpler way to run your counter is coming.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-400">
            We are building DukaanAI so everyday billing is faster for merchants. It is not available to download yet.
          </p>
          <div className="mt-8">
            <EarlyAccessLink />
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
            Join the list and we’ll let you know when DukaanAI is ready.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
