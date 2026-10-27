import { useState } from "react";

export const photos = [
  { id: 1, src: "/dishes/Tharam Spl Mutton Biryani.png", title: "Tharam Spl Mutton Biryani", category: "Biryani & Feast" },
  { id: 2, src: "/dishes/Tharam Spl Chicken Biryani.png", title: "Tharam Spl Chicken Biryani", category: "Biryani & Feast" },
  { id: 3, src: "/dishes/Tharam Spl Seafood Meals.png", title: "Tharam Spl Seafood Meals", category: "Biryani & Feast" },
  { id: 4, src: "/dishes/Tharam Spl Mutton Meals.png", title: "Tharam Spl Mutton Meals", category: "Biryani & Feast" },
  { id: 5, src: "/dishes/Prawn Biryani.png", title: "Coastal Prawn Biryani", category: "Biryani & Feast" },
  { id: 6, src: "/dishes/Tandoori Chicken - Full.png", title: "Tandoori Chicken (Full)", category: "Tandoori & Starters" },
  { id: 7, src: "/dishes/Tandoori Platter (8 Varieties).png", title: "Tandoori Platter (8 Varieties)", category: "Tandoori & Starters" },
  { id: 8, src: "/dishes/Alfahm Chicken BBQ (Full).png", title: "Alfahm Chicken BBQ", category: "Tandoori & Starters" },
  { id: 9, src: "/dishes/Chicken Lollipop (5 pcs).png", title: "Crispy Chicken Lollipop", category: "Tandoori & Starters" },
  { id: 10, src: "/dishes/Kalakki.png", title: "Madurai Street Salna Kalakki", category: "Tandoori & Starters" },
  { id: 11, src: "/dishes/Chettinadu Chicken.png", title: "Chettinadu Pepper Chicken", category: "Chicken Specials" },
  { id: 12, src: "/dishes/Chicken Pallipalayam.png", title: "Kongu Chicken Pallipalayam", category: "Chicken Specials" },
  { id: 13, src: "/dishes/Madurai Spl. Moodi Vacha Chicken.png", title: "Madurai Spl. Moodi Vacha Chicken", category: "Chicken Specials" },
  { id: 14, src: "/dishes/Chef Spl. Pavalakodi Chicken.png", title: "Chef Spl. Pavalakodi Chicken", category: "Chicken Specials" },
  { id: 15, src: "/dishes/Chicken 65.png", title: "Tharam Special Chicken 65", category: "Chicken Specials" },
  { id: 16, src: "/dishes/Vazhai Ilai Mutton Parotta.png", title: "Vazhai Ilai Mutton Parotta", category: "Parotta & Breads" },
  { id: 17, src: "/dishes/Vazhai Ilai Chicken Parotta.png", title: "Vazhai Ilai Chicken Parotta", category: "Parotta & Breads" },
  { id: 18, src: "/dishes/Mutton Kothu Parotta.png", title: "Mutton Kothu Parotta", category: "Parotta & Breads" },
  { id: 19, src: "/dishes/Bun Parotta (2 pcs).png", title: "Madurai Bun Parotta", category: "Parotta & Breads" },
  { id: 20, src: "/dishes/Garlic Butter Naan.png", title: "Tandoor Garlic Butter Naan", category: "Parotta & Breads" },
  { id: 21, src: "/dishes/Vanjayam Fish Fry.png", title: "Vanjayam Fish Tawa Fry", category: "Mutton & Seafood" },
  { id: 22, src: "/dishes/Nethili Fish Fry.png", title: "Crisp Nethili Fish Fry", category: "Mutton & Seafood" },
  { id: 23, src: "/dishes/Mutton Nalli Chukka.png", title: "Mutton Nalli Bone Marrow Chukka", category: "Mutton & Seafood" },
  { id: 24, src: "/dishes/Crab Gravy (Nandu Masala).png", title: "Nandu Masala Crab Gravy", category: "Mutton & Seafood" },
  { id: 25, src: "/dishes/Chettinadu Style Prawn Kulambu.png", title: "Chettinadu Prawn Kulambu", category: "Mutton & Seafood" },
];

export function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Biryani & Feast", "Chicken Specials", "Mutton & Seafood", "Parotta & Breads", "Tandoori & Starters"];

  const filteredPhotos = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-28 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="text-primary font-mono text-[0.68rem] uppercase tracking-[0.3em] mb-3 block drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
            Visual Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display">Moments at Tharam.</h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-mono text-[0.7rem] uppercase tracking-widest transition-all rounded-md ${filter === cat
                  ? "bg-primary text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
        {filteredPhotos.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelected(idx)}
            className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#111116] shadow-lg hover:border-primary/50 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden bg-white/5">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 brightness-95"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-5">
              <span className="text-primary font-mono text-[0.55rem] sm:text-[0.62rem] uppercase tracking-widest mb-0.5 sm:mb-1">
                {item.category}
              </span>
              <h3 className="text-xs sm:text-lg font-display text-white line-clamp-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-reveal"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-primary text-2xl font-mono p-2 z-10"
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={filteredPhotos[selected].src}
              alt={filteredPhotos[selected].title}
              className="max-h-[80vh] w-auto object-contain rounded-xl border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-1">
                {filteredPhotos[selected].category}
              </span>
              <h3 className="text-xl font-display text-white">{filteredPhotos[selected].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
