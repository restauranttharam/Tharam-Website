import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroVideoSection } from "@/components/hero-video-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tharam Restaurant — Authentic Non-Veg & South Indian in Hosur" },
      {
        name: "description",
        content:
          "Authentic Non-Veg & South Indian restaurant in Hosur. Seeraga Samba Mutton Biryani, Chettinad Chicken, Kothu Parotta, Seafood. Dine-in, takeaway, delivery & drive-through.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { label: "Authentic Non-Veg", desc: "Tender cuts & slow dum cooking" },
  { label: "Fresh Cuts Daily", desc: "Farm-fresh meats & seafood" },
  { label: "Drive-Through", desc: "Order without leaving your car" },
  { label: "Ample Parking", desc: "Free lot & street parking" },
];

function HomePage() {
  return (
    <>
      {/* HERO WITH CINEMATIC VIDEO BACKGROUND */}
      <HeroVideoSection highlights={highlights} />

      {/* SIGNATURE DISHES */}
      <section className="bg-[#070709] border-y border-white/10 text-foreground py-14 md:py-18 px-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-2 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                What we're known for
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display italic">Signature plates.</h2>
            </div>
            <Link
              to="/explore"
              className="font-mono text-[0.72rem] uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
            >
              See full menu →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                img: "/dishes/Tharam Spl Mutton Biryani.png",
                name: "Tharam Spl Mutton Biryani",
                desc: "Tender local mutton dum-cooked in fragrant seeraga samba rice & spices.",
                price: "₹260",
                badge: "Bestseller",
              },
              {
                img: "/dishes/Tandoori Chicken - Full.png",
                name: "Tandoori Chicken (Full)",
                desc: "Whole chicken marinated in traditional spiced yogurt, fire-roasted in clay tandoor.",
                price: "₹380",
                badge: "Clay Tandoor",
              },
              {
                img: "/dishes/Vazhai Ilai Chicken Parotta.png",
                name: "Vazhai Ilai Chicken Parotta",
                desc: "Flaky parotta layered with spiced chicken salna, wrapped & steamed in banana leaf.",
                price: "₹180",
                badge: "Signature",
              },
              {
                img: "/dishes/Vanjayam Fish Fry.png",
                name: "Vanjayam Fish Fry",
                desc: "Fresh seer fish steak marinated in house spices and crisp tawa-fried to perfection.",
                price: "₹240",
                badge: "Fresh Catch",
              },
            ].map((d) => (
              <article key={d.name} className="group bg-[#111116] border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] overflow-hidden mb-4 rounded-md bg-white/5 border border-white/5 relative">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {d.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-[0.58rem] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm font-semibold">
                        {d.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <h3 className="text-base font-display group-hover:text-primary transition-colors">{d.name}</h3>
                    <span className="font-mono text-xs sm:text-sm text-primary font-bold">{d.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIANCE & STORY SHOWCASE */}
      <section className="py-14 md:py-18 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] sm:aspect-[4/3] max-h-[520px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <img
                src="/tharam-dining-ambiance.jpg"
                alt="Modern warm dining room ambiance at Tharam Restaurant"
                loading="eager"
                className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 sm:bottom-6 sm:right-6 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 text-black p-6 rounded-2xl shadow-[0_15px_35px_rgba(16,185,129,0.3)] hidden sm:block">
              <span className="font-mono text-xs font-bold uppercase tracking-wider block">Modern Ambiance</span>
              <span className="text-[0.7rem] opacity-90 font-mono">Thoughtfully designed space</span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-3 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              The Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6 leading-tight">
              A serene space crafted for family & comfort.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Step into an inviting atmosphere designed with natural elements, warm hospitality, and traditional aroma.
              Whether relishing hot seeraga samba mutton biryani with family, savoring fiery pepper chicken, or sharing flaky banana leaf parotta feasts, Tharam offers an unforgettable culinary experience in Hosur.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 text-primary font-semibold px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all rounded-sm"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 lg:px-16 max-w-6xl mx-auto text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display mb-6 leading-tight text-balance">
            Authentic taste & slow-cooked tradition is a <i className="text-primary font-normal not-italic bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">promise kept.</i>
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
