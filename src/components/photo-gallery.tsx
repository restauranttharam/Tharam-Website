import { useState } from "react";
import photo01 from "@/assets/photos/photo-01.jpg";
import photo02 from "@/assets/photos/photo-02.jpg";
import photo03 from "@/assets/photos/photo-03.jpg";
import photo04 from "@/assets/photos/photo-04.jpg";
import photo05 from "@/assets/photos/photo-05.jpg";
import photo06 from "@/assets/photos/photo-06.jpg";
import photo07 from "@/assets/photos/photo-07.jpg";
import photo08 from "@/assets/photos/photo-08.jpg";
import photo09 from "@/assets/photos/photo-09.jpg";
import photo10 from "@/assets/photos/photo-10.jpg";
import photo11 from "@/assets/photos/photo-11.jpg";
import photo12 from "@/assets/photos/photo-12.jpg";
import photo13 from "@/assets/photos/photo-13.jpg";
import photo14 from "@/assets/photos/photo-14.jpg";
import photo15 from "@/assets/photos/photo-15.jpg";
import photo16 from "@/assets/photos/photo-16.jpg";
import photo17 from "@/assets/photos/photo-17.jpg";

export const photos = [
  { id: 1, src: photo01, title: "Gobi Manchurian / Paneer Chilli", category: "Starters" },
  { id: 2, src: photo02, title: "Kothu Parotta with Raita & Salna", category: "Parotta" },
  { id: 3, src: photo03, title: "Seeraga Samba Mushroom Biryani", category: "Biryani & Rice" },
  { id: 4, src: photo04, title: "Spicy Chilli Kothu Parotta", category: "Parotta" },
  { id: 5, src: photo05, title: "Fresh Creamy Tomato Soup", category: "Starters" },
  { id: 6, src: photo06, title: "Ghee Podi Mini Idlis", category: "Tiffin & Dosa" },
  { id: 7, src: photo07, title: "Crispy Ghee Roast Masala Dosa", category: "Tiffin & Dosa" },
  { id: 8, src: photo08, title: "Butter Naan & Paneer Masala", category: "Main Course" },
  { id: 9, src: photo09, title: "Fluffy Poori Masala", category: "Tiffin & Dosa" },
  { id: 10, src: photo10, title: "South Indian Tiffin Feast Combo", category: "Tiffin & Dosa" },
  { id: 11, src: photo11, title: "Grand South Indian Pure Veg Thali", category: "Biryani & Rice" },
  { id: 12, src: photo12, title: "Cream of Mushroom Sweet Corn Soup", category: "Starters" },
  { id: 13, src: photo13, title: "Baby Corn Manchurian Dry", category: "Starters" },
  { id: 14, src: photo14, title: "Schezwan Veg Noodles", category: "Main Course" },
  { id: 15, src: photo15, title: "Paneer & Mushroom Fried Rice", category: "Biryani & Rice" },
  { id: 16, src: photo16, title: "Crispy Onion Pakoda / Gobi 65", category: "Starters" },
  { id: 17, src: photo17, title: "Crispy Baby Corn Fry & Rings", category: "Starters" },
];

export function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Tiffin & Dosa", "Parotta", "Biryani & Rice", "Starters", "Main Course"];

  const filteredPhotos = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-28 px-6 lg:px-16 max-w-[1600px] mx-auto">
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
              className={`px-4 py-2 font-mono text-[0.7rem] uppercase tracking-widest transition-all rounded-md ${
                filter === cat
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelected(idx)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111116] shadow-lg hover:border-primary/50 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden bg-white/5">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 brightness-95"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-primary font-mono text-[0.62rem] uppercase tracking-widest mb-1">
                {item.category}
              </span>
              <h3 className="text-lg font-display text-white">{item.title}</h3>
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
