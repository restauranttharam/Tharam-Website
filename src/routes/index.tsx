import { createFileRoute, Link } from "@tanstack/react-router";
import heroThali from "@/assets/hero-thali.jpg";
import dosaImg from "@/assets/dosa.jpg";
import coffeeImg from "@/assets/filter-coffee.jpg";
import idliImg from "@/assets/idli.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tharam Restaurant — Pure Vegetarian South Indian in Hosur" },
      {
        name: "description",
        content:
          "Pure vegetarian South Indian restaurant in Hosur. Dosas, thalis, filter coffee. Dine-in, takeaway, delivery & drive-through.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { label: "Family Friendly", desc: "Kids welcome, warm service" },
  { label: "Ample Parking", desc: "Free lot & street parking" },
  { label: "Drive-Through", desc: "Order without leaving your car" },
  { label: "Pure Vegetarian", desc: "100% veg, always" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-12 pb-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="grid lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-7 animate-reveal">
            <div className="mb-6 flex flex-wrap gap-3 text-[0.68rem] font-mono uppercase tracking-widest text-muted-foreground">
              <span>Hosur, Tamil Nadu</span>
              <span className="text-white/20">•</span>
              <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                Pure Vegetarian
              </span>
              <span className="text-white/20">•</span>
              <span>Since Dawn</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] text-balance mb-8">
              The ritual of <i className="text-primary font-normal not-italic bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">authentic</i> south indian taste.
            </h1>
            <p className="max-w-md text-lg text-muted-foreground leading-relaxed mb-10">
              Experience the warmth of home-cooked tradition. A pure vegetarian kitchen serving the
              heart of Hosur from dawn to night.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold px-7 py-3.5 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all"
              >
                Explore the menu →
              </Link>
              <a
                href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] backdrop-blur-md px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary hover:bg-white/[0.08] transition-all"
              >
                Get directions
              </a>
            </div>
            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[0.68rem] font-mono uppercase text-muted-foreground mb-1 tracking-widest">
                  Hours
                </span>
                <span className="text-sm font-mono text-foreground/90">06:00 AM – 10:30 PM</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[0.68rem] font-mono uppercase text-muted-foreground mb-1 tracking-widest">
                  Pricing
                </span>
                <span className="text-sm font-mono text-foreground/90">₹1 – ₹200 per person</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[0.68rem] font-mono uppercase text-muted-foreground mb-1 tracking-widest">
                  Call
                </span>
                <a href="tel:06380795502" className="text-sm font-mono hover:text-primary transition-colors">
                  063807 95502
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-t-[120px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10">
              <img
                src={heroThali}
                alt="Traditional South Indian vegetarian thali on a banana leaf"
                width={1200}
                height={1400}
                className="w-full h-full object-cover brightness-95 contrast-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-black p-8 aspect-square flex items-center justify-center text-center shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
              <div className="text-xs font-mono font-bold uppercase tracking-tight leading-tight">
                Rooted in
                <br />
                tradition
              </div>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-32 border-y border-white/10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/[0.02] rounded-lg px-6">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col gap-1">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-primary font-semibold">
                {h.label}
              </span>
              <span className="text-sm text-muted-foreground">{h.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="bg-[#070709] border-y border-white/10 text-foreground py-28 px-6">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-4 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                What we're known for
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic">Signature plates.</h2>
            </div>
            <Link
              to="/explore"
              className="font-mono text-[0.72rem] uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
            >
              See full menu →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: dosaImg,
                name: "Ghee Roast Masala",
                desc: "Crisp, buttery, spice-forward.",
                price: "₹120",
              },
              {
                img: coffeeImg,
                name: "Degree Filter Coffee",
                desc: "Frothy, strong, brass tumbler.",
                price: "₹35",
              },
              {
                img: idliImg,
                name: "Ghee Podi Idli",
                desc: "Steamed cakes, gunpowder, ghee.",
                price: "₹65",
              },
            ].map((d) => (
              <article key={d.name} className="group bg-[#111116] border border-white/10 rounded-lg p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="aspect-[4/5] overflow-hidden mb-6 rounded-md bg-white/5 border border-white/5">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-display group-hover:text-primary transition-colors">{d.name}</h3>
                  <span className="font-mono text-sm text-primary font-semibold">{d.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 lg:px-16 max-w-[1600px] mx-auto text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display mb-6 leading-tight text-balance">
            A brass tumbler of coffee is a <i className="text-primary font-normal not-italic bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">promise kept.</i>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Come sit with us. Bring the family, come alone, order in — we save a seat for everyone.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold px-7 py-3.5 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all"
            >
              Our story
            </Link>
            <a
              href="tel:06380795502"
              className="inline-flex border border-white/20 bg-white/[0.03] backdrop-blur-md px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary hover:bg-white/[0.08] transition-all"
            >
              Call to order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
