export function SiteFooter() {
  return (
    <footer className="bg-[#050507] text-foreground border-t border-white/10 pt-20 pb-10 mt-auto">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-mono text-[0.68rem] uppercase tracking-widest text-primary mb-4 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              Visit Us
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              Rayakotta Rd, opp. to SCHAFFLER,
              <br />
              Old Rayakottah Hudco, Hosur,
              <br />
              Tamil Nadu 635109
            </p>
            <a
              href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] font-mono uppercase text-primary mt-4 inline-block hover:underline tracking-widest"
            >
              View on Google Maps →
            </a>
          </div>
          <div>
            <h3 className="font-mono text-[0.68rem] uppercase tracking-widest text-primary mb-4 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              Connect
            </h3>
            <a
              href="tel:06380795502"
              className="text-2xl font-display block mb-1 hover:text-primary transition-colors text-foreground"
            >
              063807 95502
            </a>
            <p className="text-sm text-foreground/60">Reservations & delivery</p>
          </div>
          <div>
            <h3 className="font-mono text-[0.68rem] uppercase tracking-widest text-primary mb-4 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              Hours
            </h3>
            <div className="flex justify-between text-sm text-foreground/80 mb-1">
              <span>Monday – Sunday</span>
              <span>06:00 – 22:30</span>
            </div>
            <div className="text-[0.68rem] text-foreground/40 mt-2 font-mono uppercase tracking-widest">
              Open daily
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[2.5rem] font-display font-bold uppercase text-primary/30 leading-none tracking-wider">
            Tharam
          </div>
          <div className="text-[0.68rem] font-mono uppercase tracking-widest text-foreground/40 text-center md:text-right">
            © {new Date().getFullYear()} Tharam Restaurant · Pure Vegetarian · Hosur
          </div>
        </div>
      </div>
    </footer>
  );
}
