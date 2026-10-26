import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore Menu" },
  { to: "/about", label: "About Us" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3.5 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
      {/* Floating Transparent Bar */}
      <div className="bg-black/20 backdrop-blur-md border border-white/25 rounded-sm px-4 py-2.5 md:px-6 md:py-3.5 shadow-lg hover:bg-black/35 transition-colors duration-300 flex items-center justify-between">
        {/* Left: Outline Button */}
        <div className="flex-1 flex justify-start">
          <a
            href="tel:06380795502"
            className="border border-white/30 text-white hover:border-primary hover:text-primary transition-all px-3 py-1.5 md:px-4 md:py-2 font-mono text-[0.62rem] md:text-[0.68rem] font-bold uppercase tracking-wider bg-white/[0.04] backdrop-blur-sm rounded-sm"
          >
            Call Now
          </a>
        </div>

        {/* Center: Brand Title */}
        <Link
          to="/"
          className="text-base md:text-lg font-display font-normal tracking-[0.25em] text-white uppercase text-center hover:opacity-90 transition-opacity drop-shadow-md px-2"
        >
          Tharam
        </Link>

        {/* Right: Hamburger Menu Icon */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-1 text-white/90 hover:text-primary transition-colors flex flex-col justify-center gap-1 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {/* Overlay Navigation Menu */}
      {open && (
        <div className="mt-2 bg-[#1a1613]/95 backdrop-blur-2xl border border-white/20 rounded-sm p-6 shadow-2xl animate-reveal">
          <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest text-foreground">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 border-b border-white/10 hover:text-primary transition-colors flex justify-between items-center"
                activeProps={{ className: "text-primary font-bold border-primary" }}
                activeOptions={{ exact: true }}
              >
                <span>{l.label}</span>
                <span className="text-xs text-primary/60">→</span>
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex justify-between items-center text-primary font-semibold">
                <span>Hosur, Tamil Nadu</span>
                <span className="border border-primary/40 px-2 py-0.5 rounded text-[0.62rem] uppercase tracking-widest bg-primary/10">
                  Authentic Non-Veg
                </span>
              </div>
              <a href="tel:06380795502" className="text-white hover:text-primary transition-colors font-mono pt-1">
                ☎ 063807 95502
              </a>
              <span className="font-mono opacity-75">Hours: 06:00 AM – 10:30 PM</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
