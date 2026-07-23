import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import dosaImg from "@/assets/dosa.jpg";
import idliImg from "@/assets/idli.jpg";
import coffeeImg from "@/assets/filter-coffee.jpg";
import payasamImg from "@/assets/payasam.jpg";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Menu — Tharam Restaurant, Hosur" },
      {
        name: "description",
        content:
          "Explore Tharam's pure vegetarian South Indian menu — tiffin, dosas, meals, chaat and beverages. Prices ₹30 – ₹180.",
      },
      { property: "og:title", content: "Menu — Tharam Restaurant" },
      { property: "og:description", content: "Authentic South Indian vegetarian menu in Hosur." },
    ],
  }),
  component: ExplorePage,
});

type Item = { name: string; desc: string; price: string; tag?: string };

const menu: { id: string; title: string; blurb: string; img: string; items: Item[] }[] = [
  {
    id: "tiffin",
    title: "Tiffin & Breakfast",
    blurb: "The dawn ritual — served 6 AM onwards.",
    img: idliImg,
    items: [
      {
        name: "Ghee Podi Idli",
        desc: "Steamed rice cakes tossed in aromatic gunpowder and clarified butter.",
        price: "₹65",
        tag: "Signature",
      },
      {
        name: "Idli Sambar (2 pcs)",
        desc: "Pillowy idlis with drumstick sambar and coconut chutney.",
        price: "₹45",
      },
      {
        name: "Medhu Vada",
        desc: "Crispy lentil doughnuts, peppercorns, curry leaves.",
        price: "₹40",
      },
      { name: "Poori Masala", desc: "Fluffy wheat poori with spiced potato bhaji.", price: "₹65" },
      { name: "Rava Kesari", desc: "Warm semolina sweet with cashew and cardamom.", price: "₹35" },
    ],
  },
  {
    id: "dosa",
    title: "Dosa Specialties",
    blurb: "Batter fermented for 12 hours. Griddled to order.",
    img: dosaImg,
    items: [
      {
        name: "Mysore Masala Dosa",
        desc: "Spicy red chutney base with seasoned potato filling.",
        price: "₹95",
      },
      {
        name: "Ghee Paper Roast",
        desc: "Wafer-thin, crisp golden crepe finished with cow ghee.",
        price: "₹110",
        tag: "Signature",
      },
      {
        name: "Podi Onion Dosa",
        desc: "Spiced lentil powder and shallots pressed into the crepe.",
        price: "₹85",
      },
      {
        name: "Plain Dosa",
        desc: "The classic — served with three chutneys and sambar.",
        price: "₹55",
      },
      { name: "Rava Dosa", desc: "Lacy semolina crepe, cumin, green chilli.", price: "₹90" },
    ],
  },
  {
    id: "meals",
    title: "Rice & Meals",
    blurb: "Complete lunch, banana-leaf style.",
    img: idliImg,
    items: [
      {
        name: "Full South Indian Meal",
        desc: "Rice, sambar, rasam, poriyal, kootu, curd, papad and pickle.",
        price: "₹140",
        tag: "Bestseller",
      },
      {
        name: "Mini Thali",
        desc: "Sambar rice, curd rice, poriyal, and a sweet finish.",
        price: "₹110",
      },
      {
        name: "Bisibelebath",
        desc: "Hearty lentil-rice mash with home-ground spice.",
        price: "₹85",
      },
      {
        name: "Curd Rice",
        desc: "Temple-style creamy curd rice, mustard tempering.",
        price: "₹65",
      },
      { name: "Lemon Rice", desc: "Zesty, turmeric-yellow, tempered with peanuts.", price: "₹70" },
    ],
  },
  {
    id: "chaat",
    title: "Chaat & Snacks",
    blurb: "Evening bites, made fresh through the day.",
    img: dosaImg,
    items: [
      { name: "Samosa Chaat", desc: "Crushed samosa, chickpeas, chutneys, yogurt.", price: "₹80" },
      {
        name: "Pani Puri (6 pcs)",
        desc: "Crisp shells, spiced water, tangy filling.",
        price: "₹50",
      },
      { name: "Bhel Puri", desc: "Puffed rice, sev, tamarind, mint.", price: "₹60" },
      { name: "Masala Vada", desc: "Chana dal fritters with coconut chutney.", price: "₹40" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages & Desserts",
    blurb: "The finish. Made to linger over.",
    img: coffeeImg,
    items: [
      {
        name: "Degree Filter Coffee",
        desc: "Strong decoction, frothy milk, brass tumbler.",
        price: "₹35",
        tag: "Signature",
      },
      { name: "Masala Chai", desc: "Cardamom and ginger, brewed fresh.", price: "₹30" },
      { name: "Fresh Lime Soda", desc: "Sweet, salt or plain — you pick.", price: "₹40" },
      {
        name: "Elaneer Payasam",
        desc: "Chilled tender coconut kheer.",
        price: "₹75",
        tag: "Seasonal",
      },
      { name: "Rava Kesari", desc: "Ghee-rich saffron semolina sweet.", price: "₹35" },
    ],
  },
];

function ExplorePage() {
  const [active, setActive] = useState<string>("all");

  const visible = active === "all" ? menu : menu.filter((m) => m.id === active);

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-20 pb-16 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="max-w-2xl relative z-10">
          <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-4 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
            Explore
          </span>
          <h1 className="text-5xl md:text-7xl font-display italic leading-[0.95] mb-6">
            The menu.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Handcrafted recipes passed down through generations. 100% vegetarian, freshly prepared,
            cold-pressed oils, ingredients sourced daily.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-12 flex flex-wrap gap-2.5 relative z-10">
          {[{ id: "all", title: "Everything" }, ...menu].map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-widest transition-all duration-200 rounded-sm ${
                active === m.id
                  ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-white/[0.06]"
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>
      </section>

      {/* MENU SECTIONS */}
      <section className="pb-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="space-y-24">
          {visible.map((section) => (
            <div key={section.id} className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-white/10">
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <div className="aspect-[4/5] overflow-hidden mb-6 rounded-xl border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                    <img
                      src={section.img}
                      alt={section.title}
                      loading="lazy"
                      className="w-full h-full object-cover brightness-95"
                    />
                  </div>
                  <h2 className="text-3xl font-display mb-2">{section.title}</h2>
                  <p className="text-sm text-muted-foreground">{section.blurb}</p>
                </div>
              </aside>

              <div className="lg:col-span-8">
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start gap-6 pb-6 border-b border-white/10 group hover:border-primary/40 transition-colors"
                    >
                      <div className="max-w-[52ch]">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="text-lg font-display group-hover:text-primary transition-colors">{item.name}</h3>
                          {item.tag && (
                            <span className="text-[0.62rem] font-mono uppercase tracking-widest text-primary border border-primary/40 bg-primary/10 px-2.5 py-0.5 rounded-sm font-semibold shadow-[0_0_8px_rgba(16,185,129,0.15)]">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="font-mono text-sm shrink-0 text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order strip */}
      <section className="bg-[#070709] border-t border-white/10 text-foreground py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-display mb-1">Hungry now?</h3>
            <p className="text-sm text-muted-foreground">Takeaway, delivery and drive-through all day.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:06380795502"
              className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold px-7 py-3.5 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all"
            >
              Call 063807 95502
            </a>
            <a
              href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 bg-white/[0.03] backdrop-blur-md px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary hover:bg-white/[0.08] transition-all"
            >
              Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
