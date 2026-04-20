import { Logo } from "./Logo";

export function Navbar() {
  const links = [
    { id: "whatwebuild", label: "What We Build" },
    { id: "howwethink", label: "How We Think" },
    { id: "value", label: "Value" },
    { id: "process", label: "Process" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl z-50 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl">
      <div className="flex justify-between items-center px-6 py-4">
        <Logo />

        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[#9ca3af] hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button className="hidden sm:block px-5 py-2 text-sm font-medium text-white bg-[#2f5d8c] hover:bg-[#3a72ab] rounded-full transition-all active:scale-95 shadow-md shadow-[#2f5d8c]/20">
          Get in Touch
        </button>
      </div>
    </nav>
  );
}
