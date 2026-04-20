import { Logo } from "./Logo";

export function Navbar() {
  const links = [
    { id: "whatwebuild", label: "What We Build" },
    { id: "howwethink", label: "How We Think" },
    { id: "value", label: "Value" },
    { id: "process", label: "Process" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Logo />

        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:opacity-70">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
