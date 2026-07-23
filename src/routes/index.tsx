import { createFileRoute, Link } from "@tanstack/react-router";
import heroThali from "@/assets/premium-hero-thali.png";
import dosaImg from "@/assets/dosa.jpg";
import coffeeImg from "@/assets/filter-coffee.jpg";
import idliImg from "@/assets/idli.jpg";
import mushroomBiryaniImg from "@/assets/mushroom-biryani.jpg";
import chilliParottaImg from "@/assets/chilli-parotta.jpg";
import chilliManchurianImg from "@/assets/chilli-manchurian.jpg";
import plantInteriorImg from "@/assets/plant-interior.jpg";
import kothuParottaImg from "@/assets/kothu-parotta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tharam Restaurant — Pure Vegetarian South Indian in Hosur" },
      {
        name: "description",
        content:
          "Pure vegetarian South Indian restaurant in Hosur. Dosas, thalis, biryani, filter coffee. Dine-in, takeaway, delivery & drive-through.",
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
      <section className="relative pt-4 sm:pt-6 md:pt-10 pb-12 md:pb-20 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.14),_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-7 animate-reveal">
            <div className="mb-5 flex flex-wrap gap-2.5 items-center text-[0.7rem] font-mono uppercase tracking-widest text-muted-foreground">
              <span>Hosur, Tamil Nadu</span>
              <span className="text-primary/40">•</span>
              <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                Pure Vegetarian
              </span>
              <span className="text-primary/40">•</span>
              <span>Since Dawn</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.02] text-balance mb-6">
              The ritual of <i className="text-primary font-normal not-italic bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">authentic</i> south indian taste.
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Experience the warmth of home-cooked tradition. A pure vegetarian kitchen serving the
              heart of Hosur from dawn to night.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-8">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold px-7 py-3.5 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all rounded-sm"
              >
                Explore the menu →
              </Link>
              <a
                href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] backdrop-blur-md px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary hover:bg-white/[0.08] transition-all rounded-sm"
              >
                Get directions
              </a>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-mono uppercase text-muted-foreground mb-1 tracking-widest">
                  Hours
                </span>
                <span className="text-sm font-mono text-foreground/90 font-medium">06:00 AM – 10:30 PM</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-mono uppercase text-muted-foreground mb-1 tracking-widest">
                  Pricing
                </span>
                <span className="text-sm font-mono text-foreground/90 font-medium">₹1 – ₹200 per person</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-mono uppercase text-muted-foreground mb-1 tracking-widest">
                  Call
                </span>
                <a href="tel:06380795502" className="text-sm font-mono hover:text-primary transition-colors font-medium">
                  063807 95502
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/3] lg:aspect-[1/1] max-h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/15 relative">
              <img
                src={heroThali}
                alt="Traditional South Indian vegetarian thali on a banana leaf"
                width={1200}
                height={1200}
                className="w-full h-full object-cover brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-black/75 backdrop-blur-md border border-emerald-400/30 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-emerald-300">
                  Rooted in tradition
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-16 sm:mt-20 border-y border-white/10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/[0.02] rounded-xl px-6">
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
      <section className="bg-[#070709] border-y border-white/10 text-foreground py-20 md:py-24 px-6">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-3 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                What we're known for
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic">Signature plates.</h2>
            </div>
            <Link
              to="/explore"
              className="font-mono text-[0.72rem] uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
            >
              See full menu →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: mushroomBiryaniImg,
                name: "Seeraga Samba Biryani",
                desc: "Fragrant rice, fresh button mushrooms, raita.",
                price: "₹150",
                badge: "Bestseller",
              },
              {
                img: chilliParottaImg,
                name: "Chilli Kothu Parotta",
                desc: "Shredded flaky parotta, spicy capsicum, onion.",
                price: "₹120",
                badge: "Spicy",
              },
              {
                img: chilliManchurianImg,
                name: "Gobi / Paneer 65",
                desc: "Crispy fried cubes tossed in ginger-garlic spice.",
                price: "₹110",
                badge: "Popular",
              },
              {
                img: dosaImg,
                name: "Ghee Roast Masala",
                desc: "Crisp golden crepe, potato masala, chutneys.",
                price: "₹120",
              },
            ].map((d) => (
              <article key={d.name} className="group bg-[#111116] border border-white/10 rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] overflow-hidden mb-5 rounded-lg bg-white/5 border border-white/5 relative">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {d.badge && (
                      <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-[0.6rem] font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm font-semibold">
                        {d.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-display group-hover:text-primary transition-colors">{d.name}</h3>
                    <span className="font-mono text-sm text-primary font-bold">{d.price}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIANCE & STORY SHOWCASE */}
      <section className="py-20 md:py-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] sm:aspect-[4/3] max-h-[520px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <img
                src={plantInteriorImg}
                alt="Modern eco-inspired green wall decor at Tharam"
                loading="lazy"
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
              Step into an inviting atmosphere designed with natural elements, lush greenery, and warm hospitality.
              Whether grabbing a quick filter coffee or enjoying a leisurely family thali, Tharam offers a clean, peaceful retreat in Hosur.
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
