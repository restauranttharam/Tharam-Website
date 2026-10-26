import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tharam Restaurant, Hosur" },
      {
        name: "description",
        content:
          "Tharam Restaurant in Hosur offers authentic South Indian non-veg cuisine, flavorful dum biryanis, fresh ingredients, and a warm family-friendly ambience.",
      },
      { property: "og:title", content: "About Tharam Restaurant — Authentic Non-Veg Dining" },
      {
        property: "og:description",
        content:
          "Where every meal feels like home. Authentic Non-Veg & South Indian dining on Rayakotta Rd, Hosur.",
      },
    ],
  }),
  component: AboutPage,
});

const promises = [
  { title: "100% Fresh Cuts", desc: "Farm-fresh chicken, tender mutton, and seafood sourced every morning." },
  { title: "Heritage Dum Recipes", desc: "Traditional slow dum cooking with freshly ground Chettinad spices." },
  { title: "Natural Ingredients", desc: "Cold-pressed oils, hand-pounded spices, and zero chemical tenderizers." },
  { title: "Hygienic Preparation", desc: "Cooked with RO water and pristine kitchen safety standards." },
  { title: "Warm Ambience", desc: "Comfortable, family-friendly dining environment." },
  { title: "Courteous Service", desc: "Friendly staff dedicated to exceptional hospitality." },
  { title: "Memorable Feasts", desc: "A cozy dining experience for families, friends, and gatherings." },
];

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
      {/* 1. HERO INTRO */}
      <section className="relative pt-4 sm:pt-6 md:pt-10 pb-10 md:pb-14 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[0.65rem] uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Welcome to Tharam Restaurant
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.08] mb-4">
            Where Every Meal <br />
            <i className="text-primary font-normal not-italic bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Feels Like Home.</i>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            Great food is more than just a meal—it's an experience that brings people together. We serve authentic South Indian non-vegetarian cuisine, featuring fragrant seeraga samba biryanis, fiery Chettinad pepper roasts, and flaky banana leaf parotta feasts capturing the warmth and rich flavour of traditional kitchens.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & PASSION */}
      <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="aspect-[4/3] max-h-[440px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <img
              src="/tharam-dining-ambiance.jpg"
              alt="Warm and comfortable dining hall ambiance at Tharam Restaurant"
              loading="lazy"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-2 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Our Passion
            </span>
            <h2 className="text-2xl sm:text-3xl font-display mb-4 leading-tight">
              Authentic taste, carefully selected meats & traditional recipes.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our passion is to deliver the authentic taste of homemade Chettinad and South Indian non-veg cuisine while maintaining the highest standards of quality, hygiene, and freshness. Every biryani and curry is prepared with traditional recipes and care, ensuring every bite reminds you of home.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We have created a warm, family-friendly atmosphere where guests can relax and enjoy memorable meals whether visiting with family, friends, or colleagues.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-4 sm:p-5 rounded-r-xl shadow-[0_0_20px_rgba(16,185,129,0.08)]">
              <p className="text-sm sm:text-base italic mb-2 text-foreground/90 font-display">
                "Tharam Restaurant – Where Every Meal Feels Like Home."
              </p>
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-primary font-semibold">
                — Our Promise To You
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROMISE GRID */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-2 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
            Quality Guarantee
          </span>
          <h2 className="text-2xl sm:text-3xl font-display">Our Promise To Every Guest</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {promises.map((p, idx) => (
            <div
              key={p.title}
              className="bg-[#111116] border border-white/10 p-5 rounded-xl hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center border border-emerald-500/30">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-display font-medium text-foreground">{p.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AMENITIES & SERVICES */}
      <section className="pb-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6">
          <div>
            <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-2 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Hospitality
            </span>
            <h2 className="text-2xl sm:text-3xl font-display">A comfortable table for everyone.</h2>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {["Solo Dining", "Groups", "Good for Kids"].map((t) => (
              <span
                key={t}
                className="text-[0.65rem] font-mono uppercase tracking-widest px-3 py-1 border border-primary/40 bg-primary/10 text-primary rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((a) => (
            <div key={a.title} className="bg-[#111116] border border-white/10 p-5 rounded-xl">
              <h3 className="text-[0.68rem] font-mono uppercase tracking-widest text-primary mb-3 font-semibold">
                {a.title}
              </h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {a.items.map((it) => (
                  <li key={it} className="flex gap-2 items-start">
                    <span className="text-primary font-bold">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VISIT US SECTION */}
      <section className="bg-[#070709] border-t border-white/10 text-foreground py-14 md:py-18 px-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-3 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Visit us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-6 leading-tight">
              Rayakotta Rd, Hosur. <br />
              Opposite SCHAFFLER.
            </h2>

            <div className="space-y-5 mb-8 text-xs sm:text-sm">
              <div>
                <span className="text-[0.65rem] font-mono uppercase tracking-widest text-primary block mb-1">
                  Address
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  Rayakotta Rd, opp. to SCHAFFLER, Old Rayakottah Hudco,
                  <br />
                  Hosur, Tamil Nadu 635109
                </p>
              </div>
              <div>
                <span className="text-[0.65rem] font-mono uppercase tracking-widest text-primary block mb-1">
                  Phone
                </span>
                <a
                  href="tel:06380795502"
                  className="text-xl sm:text-2xl font-display font-mono hover:text-primary transition-colors text-foreground"
                >
                  063807 95502
                </a>
              </div>
              <div>
                <span className="text-[0.65rem] font-mono uppercase tracking-widest text-primary block mb-1">
                  Hours
                </span>
                <p className="text-muted-foreground font-mono">Monday – Sunday · 06:00 AM – 10:30 PM</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold px-6 py-3 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all rounded-sm"
              >
                Open in Maps →
              </a>
              <a
                href="tel:06380795502"
                className="border border-white/20 bg-white/[0.03] backdrop-blur-md px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary hover:bg-white/[0.08] transition-all rounded-sm"
              >
                Call now
              </a>
            </div>
          </div>

          <div className="aspect-[4/3] max-h-[440px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <img
              src="/dishes/Tharam Spl Mutton Meals.png"
              alt="Tharam Special Non-Veg Mutton Meals on banana leaf"
              loading="lazy"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </>
  );
}
