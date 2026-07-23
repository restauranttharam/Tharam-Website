import { createFileRoute } from "@tanstack/react-router";
import heroThali from "@/assets/premium-hero-thali.png";
import plantInteriorImg from "@/assets/plant-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tharam Restaurant, Hosur" },
      {
        name: "description",
        content:
          "Tharam is a pure vegetarian South Indian restaurant on Rayakotta Rd, Hosur. Family-friendly, solo-friendly, with parking and drive-through.",
      },
      { property: "og:title", content: "About Tharam — Pure Vegetarian South Indian Kitchen" },
      {
        property: "og:description",
        content:
          "A heritage kitchen serving Hosur since dawn — pure vegetarian, traditional, warm.",
      },
    ],
  }),
  component: AboutPage,
});

const amenities = [
  {
    title: "Amenities",
    items: ["Gender-neutral toilets", "Restroom", "Good for kids", "Casual atmosphere"],
  },
  {
    title: "Service",
    items: ["Dine-in", "Takeaway", "No-contact delivery", "Kerbside pickup", "Drive-through"],
  },
  { title: "Payments", items: ["Credit cards", "Debit cards", "NFC mobile payments", "Cash"] },
  {
    title: "Parking",
    items: ["Free parking lot", "Free street parking", "Paid parking lot", "Plenty of parking"],
  },
];

function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative pt-4 sm:pt-6 md:pt-10 pb-10 md:pb-14 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.1),_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="max-w-3xl relative z-10">
          <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-3 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
            About Us · Since 2012
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.02] mb-6">
            Pure vegetarian. <br />
            <i className="text-primary font-normal not-italic bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Heritage-driven.</i>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tharam began as a vision to bring the quiet dignity of home-cooked meals to the bustling
            roads of Hosur. A pure vegetarian kitchen built on the belief that food is more than
            sustenance — it is a shared memory.
          </p>
        </div>
      </section>

      {/* Split story */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/3] max-h-[460px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <img
              src={plantInteriorImg}
              alt="Green wall plant shelf decor in Tharam dining space"
              loading="lazy"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-6 leading-tight">
              Every spice ground on-site. Every batter fermented 12 hours.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're proudly a pure vegetarian space where families gather and solo diners feel at
              home. Ingredients are chosen with the same discernment we use for our own families —
              cold-pressed oils, hand-pounded spice, seasonal vegetables.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl shadow-[0_0_20px_rgba(16,185,129,0.08)]">
              <p className="text-base italic mb-3 text-foreground/90">
                "We don't just serve food; we set a table for our community. Every brass tumbler of
                coffee is a promise kept."
              </p>
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-primary font-semibold">
                — The founders
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities grid */}
      <section className="py-20 md:py-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-3 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              What to expect
            </span>
            <h2 className="text-3xl sm:text-4xl font-display">A comfortable table for everyone.</h2>
          </div>
          <div className="flex gap-3 flex-wrap">
            {["Solo Dining", "Groups", "Good for Kids"].map((t) => (
              <span
                key={t}
                className="text-[0.68rem] font-mono uppercase tracking-widest px-3 py-1.5 border border-primary/40 bg-primary/10 text-primary rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {amenities.map((a) => (
            <div key={a.title} className="bg-[#111116] border border-white/10 p-6 rounded-xl">
              <h3 className="text-[0.68rem] font-mono uppercase tracking-widest text-primary mb-4 font-semibold">
                {a.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {a.items.map((it) => (
                  <li key={it} className="flex gap-2 items-start">
                    <span className="text-primary mt-0.5 font-bold">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section className="bg-[#070709] border-t border-white/10 text-foreground py-20 md:py-24 px-6">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-4 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Visit us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 leading-tight">
              Rayakotta Rd, Hosur.
              <br />
              Opposite SCHAFFLER.
            </h2>

            <div className="space-y-6 mb-10">
              <div>
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-primary block mb-1">
                  Address
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rayakotta Rd, opp. to SCHAFFLER, Old Rayakottah Hudco,
                  <br />
                  Hosur, Tamil Nadu 635109
                </p>
              </div>
              <div>
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-primary block mb-1">
                  Phone
                </span>
                <a
                  href="tel:06380795502"
                  className="text-2xl font-display font-mono hover:text-primary transition-colors text-foreground"
                >
                  063807 95502
                </a>
              </div>
              <div>
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-primary block mb-1">
                  Hours
                </span>
                <p className="text-sm text-muted-foreground font-mono">Monday – Sunday · 06:00 AM – 10:30 PM</p>
              </div>
              <div>
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-primary block mb-1">
                  Pricing
                </span>
                <p className="text-sm text-muted-foreground font-mono">₹1 – ₹200 per person</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold px-7 py-3.5 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all rounded-sm"
              >
                Open in Maps →
              </a>
              <a
                href="tel:06380795502"
                className="border border-white/20 bg-white/[0.03] backdrop-blur-md px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary hover:bg-white/[0.08] transition-all rounded-sm"
              >
                Call now
              </a>
            </div>
          </div>

          <div className="aspect-[4/3] lg:aspect-[1/1] max-h-[500px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src={heroThali}
              alt="A Tharam thali on a banana leaf"
              loading="lazy"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </>
  );
}
