import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#miroir", label: "À propos" },
    { href: "#offres", label: "Offres" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold text-foreground">
          Aurélie<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta-final" className="relative group px-6 py-2.5 text-sm flex items-center justify-center rounded-full font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_24px_-4px_rgba(255,255,255,0.15)] hover:bg-white/20 hover:scale-[1.03] hover:shadow-[0_4px_24px_-4px_rgba(255,255,255,0.25)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Réserver un appel</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-lg`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta-final" className="relative group mt-3 px-6 py-3 text-sm flex items-center justify-center rounded-full font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_24px_-4px_rgba(255,255,255,0.15)] hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_4px_24px_-4px_rgba(255,255,255,0.25)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Réserver un appel</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
