import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const links = [
    { href: "/products", label: "Products" },
    { href: "/#modernisation", label: "Modernisation" },
    { href: "/#approach", label: "Approach" },
    { href: "/#process", label: "Process" },
    { href: "/#ai", label: "AI" },
    { href: "/#company", label: "Company" },
  ];

  return (
    <nav aria-label="Main navigation" className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-xl sm:top-4 md:top-6 md:w-[calc(100%-3rem)]">
      <div className="flex items-center justify-between gap-1 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6">
        <a href="/" aria-label="Tenorq home"><Logo /></a>
        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-gray-400 transition-colors hover:text-white">{link.label}</a>)}
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <details className="group relative md:hidden">
            <summary className="list-none cursor-pointer rounded-xl border border-white/10 px-2.5 py-2 text-xs font-semibold text-gray-400 transition-colors hover:text-white">Menu</summary>
            <div className="absolute right-[-7rem] top-[calc(100%+0.75rem)] grid w-[min(17rem,calc(100vw-3rem))] gap-1 rounded-2xl border border-white/10 bg-[#0b0b0b] p-2 shadow-xl">
              {links.map((link) => <a key={link.href} href={link.href} className="rounded-xl px-3 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-white">{link.label}</a>)}
            </div>
          </details>
          <ThemeToggle />
          <a href="/#cta" className="rounded-full bg-blue-600 px-2.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500 sm:px-4 sm:text-sm md:px-5"><span className="sm:hidden">Contact</span><span className="hidden sm:inline">Talk to us</span></a>
        </div>
      </div>
    </nav>
  );
}
