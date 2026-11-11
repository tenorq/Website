"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#modernisation", label: "Modernisation" },
  { href: "/#approach", label: "Approach" },
  { href: "/#process", label: "Process" },
  { href: "/#ai", label: "AI" },
  { href: "/#company", label: "Company" },
];

const productLinks = [
  { href: "/products/merchant-platform", label: "Merchant Platform", detail: "For banks" },
  { href: "/products/dukaanai", label: "DukaanAI", detail: "Coming soon" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!productsOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!productsRef.current?.contains(event.target as Node)) setProductsOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setProductsOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [productsOpen]);

  return (
    <nav aria-label="Main navigation" className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-xl sm:top-4 md:top-6 md:w-[calc(100%-3rem)]">
      <div className="flex items-center justify-between gap-1 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6">
        <a href="/" aria-label="Tenorq home" onClick={() => setMenuOpen(false)}><Logo /></a>
        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          <div
            ref={productsRef}
            className="relative"
            onBlur={(event) => {
              const next = event.relatedTarget;
              if (!(next instanceof Node) || !event.currentTarget.contains(next)) setProductsOpen(false);
            }}
          >
            <button
              type="button"
              className="text-gray-400 transition-colors hover:text-white"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              aria-controls="desktop-products-menu"
              onClick={() => setProductsOpen((open) => !open)}
            >
              Products
            </button>
            {productsOpen && (
              <div id="desktop-products-menu" className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-2 shadow-xl">
                  {productLinks.map((link) => (
                    <a key={link.href} href={link.href} className="block rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.05]">
                      <span className="block text-sm font-medium text-white">{link.label}</span>
                      <span className="mt-0.5 block text-xs text-gray-400">{link.detail}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.map((link) => <a key={link.href} href={link.href} className="text-gray-400 transition-colors hover:text-white">{link.label}</a>)}
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            className="rounded-xl border border-white/10 px-2.5 py-2 text-xs font-semibold text-gray-400 transition-colors hover:text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <ThemeToggle />
          <a href="/#cta" onClick={() => setMenuOpen(false)} className="rounded-full bg-blue-600 px-2.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500 sm:px-4 sm:text-sm md:px-5"><span className="sm:hidden">Contact</span><span className="hidden sm:inline">Talk to us</span></a>
        </div>
      </div>
      {menuOpen && (
        <div id="mobile-site-menu" className="absolute right-3 top-[calc(100%+0.75rem)] grid w-[min(17rem,calc(100vw-3rem))] gap-1 rounded-2xl border border-white/10 bg-[#0b0b0b] p-2 shadow-xl md:hidden">
          <a
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            Products
          </a>
          {productLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl py-2 pl-6 pr-3 text-sm text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
              <span className="mt-0.5 block text-xs text-gray-400">{link.detail}</span>
            </a>
          ))}
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
