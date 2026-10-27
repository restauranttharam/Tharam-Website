import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PhotoGallery } from "@/components/photo-gallery";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Menu — Tharam Restaurant, Authentic Non-Veg & South Indian in Hosur" },
      {
        name: "description",
        content:
          "Explore Tharam's authentic non-vegetarian South Indian menu — Seeraga Samba Mutton Biryani, Chettinad Chicken, Kothu Parotta, Seafood and Tandoori.",
      },
      { property: "og:title", content: "Menu — Tharam Restaurant" },
      { property: "og:description", content: "Authentic South Indian non-veg menu in Hosur." },
    ],
  }),
  component: ExplorePage,
});

type Item = { name: string; desc: string; price: string; tag?: string };

const menu: { id: string; title: string; blurb: string; img: string; items: Item[] }[] = [
  {
    id: "biryani",
    title: "Biryani & Rice",
    blurb: "Slow-dum cooked Seeraga Samba biryani & authentic non-veg meals.",
    img: "/dishes/Tharam Spl Mutton Biryani.png",
    items: [
      {
        name: "Tharam Spl Mutton Biryani",
        desc: "Slow dum-cooked tender mutton with fragrant Seeraga Samba rice, whole spices, served with brinjal dalcha & raita.",
        price: "₹350",
        tag: "Signature",
      },
      {
        name: "Tharam Spl Chicken Biryani",
        desc: "Flavor-rich dum biryani made with succulent farm chicken, aromatic seeraga samba rice, and whole spices.",
        price: "₹250",
        tag: "Bestseller",
      },
      {
        name: "Mutton Chukka Biryani",
        desc: "Seeraga samba biryani served topped with spicy pan-roasted mutton chukka.",
        price: "₹390",
        tag: "Chef Special",
      },
      {
        name: "Naatu Kozhi Biryani",
        desc: "Traditional country chicken slow-simmered in rich spices and aromatic seeraga samba biryani.",
        price: "₹290",
        tag: "Specialty",
      },
      {
        name: "Prawn Biryani",
        desc: "Fresh ocean prawns cooked with fragrant spices and dum-steamed seeraga samba biryani rice.",
        price: "₹420",
        tag: "Seafood",
      },
      {
        name: "Chicken 65 Biryani",
        desc: "Aromatic dum biryani topped with crispy spiced chicken 65 bites.",
        price: "₹260",
        tag: "Popular",
      },
      {
        name: "Egg Biryani",
        desc: "Aromatic biryani rice served with two golden spiced roasted masala eggs.",
        price: "₹170",
      },
      {
        name: "Chicken Plain Biryani",
        desc: "Fragrant seasoned biryani rice (kuska) served with rich chicken salna and onion raita.",
        price: "₹170",
      },
      {
        name: "Tharam Spl Mutton Meals",
        desc: "Grand banana leaf feast with steaming ponni rice, rich mutton kulambu, chicken gravy, fish curry, rasam, kootu & appalam.",
        price: "₹499",
        tag: "Feast",
      },
      {
        name: "Tharam Spl Chicken Meals",
        desc: "Full non-veg meals with rice, hearty chicken gravy, fish curry, rasam, poriyal, curd & appalam.",
        price: "₹399",
      },
      {
        name: "Tharam Spl Seafood Meals",
        desc: "Authentic coastal meals with rice, tangy fish kulambu, prawn gravy, rasam, curd & appalam.",
        price: "₹499",
      },
    ],
  },
  {
    id: "chicken",
    title: "Chicken Specials",
    blurb: "Fiery Chettinad gravies, Kongu Pallipalayam & tava roasted delicacies.",
    img: "/dishes/Chettinadu Chicken.png",
    items: [
      {
        name: "Chettinadu Chicken",
        desc: "Country chicken roasted with crushed Tellicherry black pepper, shallots, and fresh curry leaves.",
        price: "₹260",
        tag: "Bestseller",
      },
      {
        name: "Chicken Pallipalayam",
        desc: "Authentic Kongu style chicken tossed with dry red chillies, shallots, and coconut slivers.",
        price: "₹280",
        tag: "Signature",
      },
      {
        name: "Chicken Sindhamani - Dry",
        desc: "Fiery dry chicken sautéed with round red chillies, garlic, and curry leaves.",
        price: "₹280",
      },
      {
        name: "Madurai Spl. Moodi Vacha Chicken",
        desc: "Traditional covered clay-pot style slow-cooked Madurai chicken curry.",
        price: "₹280",
        tag: "Madurai Special",
      },
      {
        name: "Chef Spl. Pavalakodi Chicken",
        desc: "Chef's signature spicy ruby-red chicken tossed with rich home-ground masala.",
        price: "₹290",
        tag: "Chef Special",
      },
      {
        name: "Chef Spl. Chicken Maharani",
        desc: "Royal mild spiced rich cashew and cream based chicken delicacy.",
        price: "₹300",
      },
      {
        name: "Chicken Pepper Fry",
        desc: "Spicy pan-fried chicken tossed with freshly cracked black pepper and onions.",
        price: "₹280",
        tag: "Spicy",
      },
      {
        name: "Chicken Pichupottathu",
        desc: "Shredded boneless chicken sautéed with shallots, crushed pepper, and egg.",
        price: "₹270",
      },
      {
        name: "Chicken 65",
        desc: "Crispy deep-fried spiced chicken bites marinated in ginger, garlic, and red chilli.",
        price: "₹250",
        tag: "Crispy",
      },
      {
        name: "Chicken Lollipop (5 pcs)",
        desc: "Crispy fried frenched chicken wings served with hot garlic dip.",
        price: "₹290",
      },
      {
        name: "Butter Chicken Masala",
        desc: "Tender chicken pieces simmered in a creamy spiced tomato butter makhani gravy.",
        price: "₹320",
      },
      {
        name: "Kadai Chicken Masala",
        desc: "Kadai-tossed chicken cooked with bell peppers, onions, and freshly ground kadai spices.",
        price: "₹280",
      },
    ],
  },
  {
    id: "mutton",
    title: "Mutton Delights",
    blurb: "Tender bone marrow nalli, chukka fry & traditional village curries.",
    img: "/dishes/Mutton Nalli Chukka.png",
    items: [
      {
        name: "Mutton Nalli Chukka",
        desc: "Succulent bone marrow nalli roasted with shallots, Tellicherry pepper, and rustic masala.",
        price: "₹490",
        tag: "Must Try",
      },
      {
        name: "Manapatti Mutton Chukka",
        desc: "Tender boneless mutton slow-roasted with shallots, garlic, and freshly ground country spices.",
        price: "₹420",
        tag: "Signature",
      },
      {
        name: "Mutton Boti Pepper Fry",
        desc: "Traditional spiced lamb intestine tossed with crushed black pepper and shallots.",
        price: "₹370",
        tag: "Traditional",
      },
      {
        name: "(Kudal) Boti Kulambu",
        desc: "Authentic village-style rich gravy cooked with tender boti and country spices.",
        price: "₹310",
      },
      {
        name: "Mutton Chettinadu Dry",
        desc: "Dry-roasted tender mutton with roasted coconut, fennel, and rustic Chettinad masala.",
        price: "₹380",
      },
      {
        name: "Mutton Pepper Fry",
        desc: "Tender mutton pieces sautéed with crushed Tellicherry black pepper and curry leaves.",
        price: "₹390",
      },
      {
        name: "Special Madurai Style Mutton Kulambu",
        desc: "Spicy and tangy traditional Madurai mutton gravy slow-simmered to perfection.",
        price: "₹340",
        tag: "Madurai Special",
      },
      {
        name: "Kadai Mutton Masala",
        desc: "Tender mutton simmered with bell peppers and roasted ground coriander in iron kadai.",
        price: "₹380",
      },
      {
        name: "Salem Spl. Mutton Crispy Chilli",
        desc: "Crispy fried seasoned mutton tossed with green chillies and curry leaves.",
        price: "₹290",
        tag: "Crispy",
      },
      {
        name: "Mutton Rogan Josh",
        desc: "Slow-braised tender mutton in an aromatic Kashmiri spiced gravy.",
        price: "₹390",
      },
    ],
  },
  {
    id: "seafood",
    title: "Seafood Catch",
    blurb: "Fresh seer fish, spicy nethili, crab masala & coastal prawn curries.",
    img: "/dishes/Vanjayam Fish Fry.png",
    items: [
      {
        name: "Vanjayam Fish Fry",
        desc: "Fresh seer fish (king fish) steak marinated in house spices and crisp tawa-fried.",
        price: "₹400",
        tag: "Fresh Catch",
      },
      {
        name: "Nethili Fish Fry",
        desc: "Crisp golden spiced anchovies shallow-fried with curry leaves and lemon.",
        price: "₹280",
        tag: "Crispy",
      },
      {
        name: "Mathi Fish Kulambu",
        desc: "Traditional earthen pot sardine fish curry in tangy tamarind and shallot gravy.",
        price: "₹240",
        tag: "Traditional",
      },
      {
        name: "Fish 65",
        desc: "Crispy deep-fried spiced fish fillet cubes marinated in ginger and red chilli.",
        price: "₹350",
      },
      {
        name: "Fish Tikka (5 pcs)",
        desc: "Fresh fish cubes marinated in tandoori spices and roasted over charcoal.",
        price: "₹380",
      },
      {
        name: "Crab Gravy (Nandu Masala)",
        desc: "Whole sea crab simmered in a fiery, fragrant black pepper and fennel masala.",
        price: "₹440",
        tag: "Signature",
      },
      {
        name: "Crab Lollipop",
        desc: "Golden fried crab claw lollipops with herbs and crunchy exterior.",
        price: "₹360",
        tag: "Crispy",
      },
      {
        name: "Prawn 65",
        desc: "Juicy fresh prawns marinated with South Indian spices and deep fried.",
        price: "₹330",
      },
      {
        name: "Butter Garlic Prawn",
        desc: "Fresh prawns tossed in garlic-infused butter with mild black pepper and herbs.",
        price: "₹340",
      },
      {
        name: "Chettinadu Style Prawn Kulambu",
        desc: "Plump prawns cooked in a rich, tangy Chettinad curry with shallots and curry leaves.",
        price: "₹440",
      },
      {
        name: "Kadamba Gravy (Squid)",
        desc: "Tender squid rings cooked in traditional coastal spiced masala gravy.",
        price: "₹340",
      },
      {
        name: "Squid (Kanava) Chilly",
        desc: "Crispy spicy pan-fried squid tossed with onions, green chillies, and curry leaves.",
        price: "₹360",
      },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori & BBQ",
    blurb: "Clay-oven roasted kebabs, charcoal Alfahm & barbecue platters.",
    img: "/dishes/Tandoori Chicken - Full.png",
    items: [
      {
        name: "Tandoori Platter (8 Varieties)",
        desc: "Grand sizzling platter featuring an assortment of 8 handcrafted kebabs and tandoori bites.",
        price: "₹699",
        tag: "Chef Platter",
      },
      {
        name: "Tandoori Chicken - Full",
        desc: "Whole farm chicken marinated in spiced yogurt and slow-charred in traditional clay tandoor.",
        price: "₹600",
        tag: "Bestseller",
      },
      {
        name: "Alfahm Chicken BBQ (Full)",
        desc: "Arabian charcoal-grilled succulent chicken marinated in crushed Arabic spices and lemon.",
        price: "₹650",
        tag: "Signature",
      },
      {
        name: "Grill Chicken (Full)",
        desc: "Slow rotisserie grilled whole chicken basted in house garlic butter pepper glaze.",
        price: "₹600",
      },
      {
        name: "Peri Peri Barbeque (Full)",
        desc: "Flame-grilled chicken brushed with zesty and fiery African peri-peri glaze.",
        price: "₹650",
        tag: "Spicy",
      },
      {
        name: "Chicken Tikka (6 pcs)",
        desc: "Boneless chicken cubes infused with mustard oil, tandoori masala, and charred to perfection.",
        price: "₹320",
      },
      {
        name: "Chicken Hariyali Kebab (6 pcs)",
        desc: "Tender chicken marinated in mint, coriander, green chillies, and creamy yogurt.",
        price: "₹300",
      },
      {
        name: "Murgh Malai Kebab (6 pcs)",
        desc: "Melt-in-mouth chicken pieces steeped in cream, mild green cardamom, and cashew paste.",
        price: "₹350",
      },
      {
        name: "Chicken Seekh Kebab",
        desc: "Spiced minced chicken skewers grilled over hot charcoal embers.",
        price: "₹320",
      },
      {
        name: "Mutton Seekh Kebab",
        desc: "Finely minced tender mutton mixed with mint, ginger, and aromatic spices on skewers.",
        price: "₹370",
      },
      {
        name: "Kalmi Kebab (3 pcs-leg)",
        desc: "Juicy chicken drumsticks marinated in spiced rich yogurt and roasted in tandoor.",
        price: "₹300",
      },
    ],
  },
  {
    id: "parotta",
    title: "Parotta, Naan & Breads",
    blurb: "Banana-leaf parottas, street-style kothu, bun parotta & hot salna.",
    img: "/dishes/Vazhai Ilai Mutton Parotta.png",
    items: [
      {
        name: "Vazhai Ilai Mutton Parotta",
        desc: "Flaky parotta layered with spicy mutton chukka and rich salna, wrapped and steamed in banana leaf.",
        price: "₹290",
        tag: "Signature",
      },
      {
        name: "Vazhai Ilai Chicken Parotta",
        desc: "Layered flaky parotta drenched in aromatic chicken salna and wrapped in banana leaf.",
        price: "₹220",
        tag: "Bestseller",
      },
      {
        name: "Mutton Kothu Parotta",
        desc: "Tawa-shredded parotta vigorously beaten with tender mutton chunks, egg, and spicy gravy.",
        price: "₹260",
        tag: "Signature",
      },
      {
        name: "Chicken Kothu Parotta",
        desc: "Street-style shredded flaky parotta chopped on tawa with seasoned chicken, egg, and salna.",
        price: "₹210",
        tag: "Popular",
      },
      {
        name: "Mixed (Egg, Chicken, Mutton) Kothu Parotta",
        desc: "The ultimate meat feast — shredded parotta tossed with egg, succulent chicken, and tender mutton.",
        price: "₹320",
        tag: "Special",
      },
      {
        name: "Egg Kothu Parotta",
        desc: "Flaky parotta shredded and sautéed with fluffy scrambled eggs, onions, and curry leaves.",
        price: "₹160",
      },
      {
        name: "Bun Parotta (2 pcs)",
        desc: "Crispy on the outside, fluffy and layered inside, served with hot aromatic salna.",
        price: "₹100",
      },
      {
        name: "Coin Parotta (6 pcs)",
        desc: "Bite-sized flaky mini coin parottas served with rich non-veg gravy.",
        price: "₹120",
      },
      {
        name: "Nool Parotta (1 pc)",
        desc: "Delicate string-like thread parotta made by skilled tawa masters, soft and flaky.",
        price: "₹70",
      },
      {
        name: "Chicken Veechu Parotta",
        desc: "Hand-thrown thin crispy parotta folded with spiced chicken filling and egg.",
        price: "₹180",
      },
      {
        name: "Stuffed Chicken Naan",
        desc: "Clay tandoor baked naan stuffed with flavorful spiced minced chicken.",
        price: "₹140",
      },
      {
        name: "Garlic Butter Naan",
        desc: "Tandoor baked flatbread topped with minced roasted garlic and fresh dairy butter.",
        price: "₹70",
      },
      {
        name: "Kalakki",
        desc: "Street-style soft-cooked creamy egg scramble infused with rich hot chicken salna.",
        price: "₹90",
        tag: "Street Favorite",
      },
    ],
  },
];

function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Handle Search Input Change: Searching automatically searches ALL categories so search terms like 'biryani' always find results!
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
      <section className="relative pt-4 sm:pt-6 md:pt-10 pb-10 md:pb-14 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_70%)] pointer-events-none blur-3xl" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[0.65rem] uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Authentic Non-Veg & Chettinad Kitchen
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display italic leading-[1.05] mb-3">
              Our Menu.
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Handcrafted recipes passed down through generations. Prepared daily with tender farm-fresh meats, cold-pressed oils, and stone-ground spices.
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
            <span className="text-emerald-400">✓</span> 100% Fresh Meat
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> Slow Dum Biryani
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> No Palm Oil
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> Natural Whole Spices
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> Clean & Hygienic
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
                className={`shrink-0 px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-widest transition-all duration-200 rounded-md ${activeCategory === m.id && searchQuery.trim() === ""
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
      <section className="min-h-[60vh] pb-20 md:pb-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        {filteredMenu.length === 0 ? (
          <div className="text-center py-20 bg-[#111116] border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-display mb-2">No dishes matching "{searchQuery}"</h3>
            <p className="text-sm text-muted-foreground mb-6">Try searching for Mutton Biryani, Chettinadu Chicken, Kothu Parotta, Fish Fry, or Tandoori.</p>
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
                        className="bg-[#111116] border border-white/10 p-4 rounded-lg hover:border-primary/40 transition-all flex flex-col justify-between group hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                      >
                        <div>
                          <div className="flex justify-between items-start gap-3 mb-1.5">
                            <h3 className="text-sm sm:text-base font-display group-hover:text-primary transition-colors font-medium">
                              {item.name}
                            </h3>
                            <span className="font-mono text-xs sm:text-sm shrink-0 text-primary font-bold">{item.price}</span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2.5">{item.desc}</p>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
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
