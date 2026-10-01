import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const links = [
    { id: "products", label: "Products" },
    { id: "approach", label: "Approach" },
    { id: "process", label: "Process" },
    { id: "ai", label: "AI" },
    { id: "company", label: "Company" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-5xl z-50 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl">
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        <Logo />

        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#cta" className="px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all active:scale-95 shadow-md shadow-blue-600/20">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}
