import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PhotoGallery } from "@/components/photo-gallery";
import dosaImg from "@/assets/dosa.jpg";
import idliImg from "@/assets/idli.jpg";
import coffeeImg from "@/assets/filter-coffee.jpg";
import payasamImg from "@/assets/payasam.jpg";
import mushroomBiryaniImg from "@/assets/mushroom-biryani.jpg";
import chilliParottaImg from "@/assets/chilli-parotta.jpg";
import chilliManchurianImg from "@/assets/chilli-manchurian.jpg";
import kothuParottaImg from "@/assets/kothu-parotta.jpg";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Menu — Tharam Restaurant, Pure Veg South Indian in Hosur" },
      {
        name: "description",
        content:
          "Explore Tharam's pure vegetarian South Indian menu — tiffin, dosas, parotta, biryani, starters and beverages. Prices ₹30 – ₹180.",
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
        name: "Medhu Vada (2 pcs)",
        desc: "Crispy lentil doughnuts, peppercorns, curry leaves.",
        price: "₹40",
      },
      { name: "Poori Masala (2 pcs)", desc: "Fluffy wheat poori with spiced potato bhaji.", price: "₹65" },
      { name: "Rava Kesari", desc: "Warm semolina sweet with cashew and cardamom.", price: "₹35" },
      { name: "Ghee Pongal", desc: "Creamy rice lentil mash tempered with cumin and cashews.", price: "₹70" },
    ],
  },
  {
    id: "dosa",
    title: "Dosa Specialties",
    blurb: "Batter fermented for 12 hours. Griddled fresh to order.",
    img: dosaImg,
    items: [
      {
        name: "Ghee Roast Masala Dosa",
        desc: "Crisp golden crepe folded over spiced potato filling, topped with cow ghee.",
        price: "₹100",
        tag: "Bestseller",
      },
      {
        name: "Mysore Masala Dosa",
        desc: "Spicy garlic red chutney spread with seasoned potato masala.",
        price: "₹95",
        tag: "Popular",
      },
      {
        name: "Ghee Paper Roast Dosa",
        desc: "Wafer-thin, extra crisp golden crepe finished with pure ghee.",
        price: "₹110",
        tag: "Signature",
      },
      {
        name: "Podi Onion Dosa",
        desc: "Spiced lentil powder and roasted shallots pressed into the crepe.",
        price: "₹85",
      },
      {
        name: "Plain Dosa",
        desc: "The classic thin golden crepe — served with 3 chutneys and sambar.",
        price: "₹55",
      },
      { name: "Rava Onion Dosa", desc: "Lacy semolina crepe, roasted cumin, green chilli.", price: "₹90" },
      { name: "Cheese Butter Masala Dosa", desc: "Melted cheese, butter, and potato filling.", price: "₹120" },
      { name: "Set Dosa / Kal Dosa (2 pcs)", desc: "Soft spongy dosas served with coconut chutney and sambar.", price: "₹75" },
    ],
  },
  {
    id: "parotta",
    title: "Parotta & Delights",
    blurb: "Flaky layered parottas and sizzled street-style delights.",
    img: chilliParottaImg,
    items: [
      {
        name: "Chilli Kothu Parotta",
        desc: "Shredded parotta tossed with bell peppers, onions, and rich spicy gravy.",
        price: "₹120",
        tag: "Bestseller",
      },
      {
        name: "Veg Kothu Parotta",
        desc: "Hand-chopped parotta roasted on iron tava with curry spices and raita.",
        price: "₹110",
      },
      {
        name: "Bun Parotta (2 pcs)",
        desc: "Fluffy layered golden bun parotta served with aromatic veg salna.",
        price: "₹75",
      },
      {
        name: "Coin Parotta Platter",
        desc: "Mini flaky coin parottas served with spicy gravy and onion raita.",
        price: "₹95",
      },
    ],
  },
  {
    id: "meals",
    title: "Biryani & Rice",
    blurb: "Seeraga Samba biryani & complete banana-leaf thali.",
    img: mushroomBiryaniImg,
    items: [
      {
        name: "Mushroom Seeraga Samba Biryani",
        desc: "Traditional aromatic rice dum-cooked with tender button mushrooms and herbs.",
        price: "₹150",
        tag: "Signature",
      },
      {
        name: "Full South Indian Meal / Thali",
        desc: "Rice, sambar, rasam, poriyal, kootu, curd, papad and pickle on banana leaf.",
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
    ],
  },
  {
    id: "starters",
    title: "Starters & Chaat",
    blurb: "Sizzling starters and evening street bites.",
    img: chilliManchurianImg,
    items: [
      {
        name: "Gobi 65 / Manchurian",
        desc: "Crisp cauliflower florets tossed with fresh herbs, capsicum & spices.",
        price: "₹110",
        tag: "Popular",
      },
      {
        name: "Paneer Chilli Dry",
        desc: "Wok-tossed cottage cheese cubes with peppers and scallions.",
        price: "₹130",
      },
      { name: "Samosa Chaat", desc: "Crushed samosa, chickpeas, chutneys, yogurt.", price: "₹80" },
      {
        name: "Pani Puri (6 pcs)",
        desc: "Crisp shells, spiced water, tangy filling.",
        price: "₹50",
      },
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
      { name: "Fresh Lime Soda", desc: "Sweet, salt or plain — pick your taste.", price: "₹40" },
      {
        name: "Elaneer Payasam",
        desc: "Chilled tender coconut kheer with cardamom.",
        price: "₹75",
        tag: "Seasonal",
      },
      { name: "Rava Kesari", desc: "Ghee-rich saffron semolina sweet with cashews.", price: "₹35" },
    ],
  },
];

function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Handle Search Input Change: Searching automatically searches ALL categories so search terms like 'dosa' always find results!
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim().length > 0) {
      setActiveCategory("all");
    }
  };

  // Handle Category Filter Click: Keep scroll position smooth without layout jump
  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    if (menuContainerRef.current) {
      const topOffset = menuContainerRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const filteredMenu = menu
    .map((sec) => {
      const matchingItems = sec.items.filter((item) => {
        // If searching, ignore category restriction to find items everywhere
        const matchesCategory = searchQuery.trim() !== "" || activeCategory === "all" || sec.id === activeCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          sec.title.toLowerCase().includes(q) ||
          (item.tag && item.tag.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
      });

      return { ...sec, items: matchingItems };
    })
    .filter((sec) => sec.items.length > 0);

  return (
    <>
      {/* HEADER HERO */}
      <section className="relative pt-4 sm:pt-6 md:pt-10 pb-10 md:pb-14 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_70%)] pointer-events-none blur-3xl" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[0.65rem] uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Pure Vegetarian Kitchen
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display italic leading-[1.02] mb-4">
              Our Menu.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Handcrafted recipes passed down through generations. Prepared daily with cold-pressed oils, RO water, and zero artificial preservatives.
            </p>
          </div>

          {/* Quick Ordering Partners */}
          <div className="flex flex-wrap items-center gap-3 bg-[#111116] border border-white/10 p-3.5 rounded-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground me-1">Available on:</span>
            <a
              href="tel:06380795502"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono text-[0.7rem] uppercase tracking-wider hover:bg-emerald-500/30 transition-colors"
            >
              ☎ Call Order
            </a>
            <a
              href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/20 bg-white/5 text-foreground font-mono text-[0.7rem] uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              📍 Takeaway
            </a>
          </div>
        </div>

        {/* Quality Guarantees Bar */}
        <div className="mt-8 py-3 px-5 border border-emerald-500/20 bg-emerald-500/[0.03] rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-emerald-300/90 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> RO Water Cooking
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> No Ajinomoto
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> No Preservatives
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> No Palm Oil
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> 100% Pure Veg
          </div>
        </div>

        {/* FILTER & SEARCH BAR SECTION */}
        <div ref={menuContainerRef} className="mt-10 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 relative z-10">
          {/* Horizontal Scrolling Category Filter Bar (Fixes jumping up/down on click!) */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-full">
            {[{ id: "all", title: "All Items" }, ...menu].map((m) => (
              <button
                key={m.id}
                onClick={() => handleCategoryClick(m.id)}
                className={`shrink-0 px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-widest transition-all duration-200 rounded-md ${
                  activeCategory === m.id && searchQuery.trim() === ""
                    ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-bold shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                    : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-white/[0.06]"
                }`}
              >
                {m.title}
              </button>
            ))}
          </div>

          {/* Live Search Input (Auto-searches ALL categories when typed!) */}
          <div className="relative min-w-[180px] max-w-[220px] sm:max-w-[240px] shrink-0">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full bg-[#111116] border border-white/15 rounded-lg pl-3.5 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs font-mono"
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* MENU SECTIONS (min-h-[60vh] prevents layout collapse jumpiness) */}
      <section className="min-h-[60vh] pb-20 md:pb-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        {filteredMenu.length === 0 ? (
          <div className="text-center py-20 bg-[#111116] border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-display mb-2">No dishes matching "{searchQuery}"</h3>
            <p className="text-sm text-muted-foreground mb-6">Try searching for Dosa, Idli, Coffee, Biryani, or Parotta.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-primary text-black font-mono text-xs uppercase tracking-widest rounded-md font-semibold hover:brightness-110"
            >
              Show All Menu Items
            </button>
          </div>
        ) : (
          <div className="space-y-16 md:space-y-20">
            {filteredMenu.map((section) => (
              <div key={section.id} className="grid lg:grid-cols-12 gap-10 pt-8 border-t border-white/10">
                <aside className="lg:col-span-4">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-5 rounded-xl border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                      <img
                        src={section.img}
                        alt={section.title}
                        loading="lazy"
                        className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display mb-2">{section.title}</h2>
                    <p className="text-sm text-muted-foreground">{section.blurb}</p>
                  </div>
                </aside>

                <div className="lg:col-span-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="bg-[#111116] border border-white/10 p-5 rounded-xl hover:border-primary/40 transition-all flex flex-col justify-between group hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                      >
                        <div>
                          <div className="flex justify-between items-start gap-3 mb-2">
                            <h3 className="text-base sm:text-lg font-display group-hover:text-primary transition-colors font-medium">
                              {item.name}
                            </h3>
                            <span className="font-mono text-sm shrink-0 text-primary font-bold">{item.price}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                        </div>
                        {item.tag && (
                          <div>
                            <span className="inline-block text-[0.6rem] font-mono uppercase tracking-widest text-emerald-300 border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 rounded font-semibold">
                              {item.tag}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PHOTO GALLERY */}
      <PhotoGallery />

      {/* ORDER STRIP */}
      <section className="bg-[#070709] border-t border-white/10 text-foreground py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-display mb-1">Hungry now?</h3>
            <p className="text-sm text-muted-foreground">Takeaway, delivery, and drive-through available all day in Hosur.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:06380795502"
              className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-semibold px-7 py-3.5 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all rounded-sm"
            >
              Call 063807 95502
            </a>
            <a
              href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 bg-white/[0.03] backdrop-blur-md px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary hover:bg-white/[0.08] transition-all rounded-sm"
            >
              Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
