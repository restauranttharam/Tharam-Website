import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { PhotoGallery } from "@/components/photo-gallery";
import {
  MENU_DISHES,
  CATEGORY_ORDER,
  CATEGORY_METADATA,
  DishItem,
} from "@/data/menu-data";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Flame,
  UtensilsCrossed,
  X,
  RotateCcw,
  LayoutGrid,
  ListFilter,
  Check,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Non-Veg Menu & Prices — Tharam Restaurant Hosur" },
      {
        name: "description",
        content:
          "Explore Tharam's authentic 100% non-vegetarian South Indian menu with latest prices. Seeraga Samba Mutton Biryani, Chettinad Chicken, Seafood, Tandoori & Parotta.",
      },
      { property: "og:title", content: "Non-Veg Menu — Tharam Restaurant" },
      { property: "og:description", content: "Authentic non-veg South Indian delicacies with verified prices in Hosur." },
    ],
  }),
  component: ExplorePage,
});

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";
type MeatOption = "all" | "chicken" | "mutton" | "fish" | "prawn" | "crab" | "egg";
type PriceRangeOption = "all" | "under-200" | "200-350" | "350-500" | "500-plus";

const MEAT_FILTERS: { id: MeatOption; label: string; icon: string }[] = [
  { id: "all", label: "All Meats", icon: "🍖" },
  { id: "chicken", label: "Chicken", icon: "🍗" },
  { id: "mutton", label: "Mutton", icon: "🥩" },
  { id: "fish", label: "Fish", icon: "🐟" },
  { id: "prawn", label: "Prawn", icon: "🦐" },
  { id: "crab", label: "Crab", icon: "🦀" },
  { id: "egg", label: "Egg", icon: "🥚" },
];

const PRICE_FILTERS: { id: PriceRangeOption; label: string }[] = [
  { id: "all", label: "All Prices" },
  { id: "under-200", label: "Under ₹200" },
  { id: "200-350", label: "₹200 – ₹350" },
  { id: "350-500", label: "₹350 – ₹500" },
  { id: "500-plus", label: "₹500+" },
];

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: "default", label: "Featured Order" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "name-asc", label: "Name: A to Z" },
];

function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMeat, setSelectedMeat] = useState<MeatOption>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRangeOption>("all");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [viewMode, setViewMode] = useState<"categorized" | "grid">("categorized");
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  const [showSortDropdown, setShowSortDropdown] = useState<boolean>(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown on outside click
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target as Node)) {
      setShowSortDropdown(false);
    }
  }, []);

  useEffect(() => {
    if (showSortDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showSortDropdown, handleClickOutside]);

  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Check if any filter is active
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedMeat !== "all" ||
    selectedPriceRange !== "all" ||
    sortBy !== "default";

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedMeat("all");
    setSelectedPriceRange("all");
    setSortBy("default");
    setViewMode("categorized");
  };

  // Scroll smoothly to menu container when switching category
  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    if (menuContainerRef.current) {
      const topOffset = menuContainerRef.current.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  // Count items per meat type
  const meatCounts = useMemo(() => {
    const counts: Record<string, number> = { all: MENU_DISHES.length };
    for (const d of MENU_DISHES) {
      counts[d.meat] = (counts[d.meat] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MENU_DISHES.filter((dish) => {
      // 1. Search filter
      if (q) {
        const matchName = dish.name.toLowerCase().includes(q);
        const matchCat = dish.category.toLowerCase().includes(q);
        const matchMeat = dish.meat.toLowerCase().includes(q);
        const matchPrice = dish.price.includes(q);
        const matchTag = dish.tag ? dish.tag.toLowerCase().includes(q) : false;
        if (!matchName && !matchCat && !matchMeat && !matchPrice && !matchTag) {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory !== "all" && dish.category !== selectedCategory) {
        return false;
      }

      // 3. Meat filter
      if (selectedMeat !== "all") {
        if (selectedMeat === "fish" && !["fish", "seafood"].includes(dish.meat)) return false;
        if (selectedMeat !== "fish" && dish.meat !== selectedMeat) return false;
      }

      // 4. Price range filter
      if (selectedPriceRange === "under-200" && dish.priceNum >= 200) return false;
      if (selectedPriceRange === "200-350" && (dish.priceNum < 200 || dish.priceNum > 350)) return false;
      if (selectedPriceRange === "350-500" && (dish.priceNum < 350 || dish.priceNum > 500)) return false;
      if (selectedPriceRange === "500-plus" && dish.priceNum <= 500) return false;

      return true;
    });
  }, [searchQuery, selectedCategory, selectedMeat, selectedPriceRange]);

  // Sorted dishes
  const sortedDishes = useMemo(() => {
    const list = [...filteredDishes];
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [filteredDishes, sortBy]);

  // Grouped by category (used in Categorized view)
  const groupedSections = useMemo(() => {
    const grouped: { category: string; blurb: string; items: DishItem[] }[] = [];
    const catSet = new Set(sortedDishes.map((d) => d.category));

    // Maintain preferred order
    for (const catName of CATEGORY_ORDER) {
      if (catSet.has(catName)) {
        const items = sortedDishes.filter((d) => d.category === catName);
        if (items.length > 0) {
          grouped.push({
            category: catName,
            blurb: CATEGORY_METADATA[catName]?.blurb || "Authentic South Indian non-veg delicacy.",
            items,
          });
        }
      }
    }

    // Any remaining categories not in order
    for (const catName of catSet) {
      if (!CATEGORY_ORDER.includes(catName)) {
        const items = sortedDishes.filter((d) => d.category === catName);
        if (items.length > 0) {
          grouped.push({
            category: catName,
            blurb: "Authentic South Indian non-veg delicacy.",
            items,
          });
        }
      }
    }

    return grouped;
  }, [sortedDishes]);

  // If a non-default sort or non-category filter is active, grid view is preferred for readability
  const effectiveViewMode =
    sortBy !== "default" || selectedMeat !== "all" || selectedPriceRange !== "all" || searchQuery.trim() !== ""
      ? "grid"
      : viewMode;

  return (
    <>
      {/* HEADER HERO */}
      <section className="relative pt-4 sm:pt-10 pb-4 sm:pb-8 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_70%)] pointer-events-none blur-3xl" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 sm:gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[0.58rem] sm:text-[0.65rem] uppercase tracking-widest mb-2 sm:mb-3.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Authentic Non-Veg · Hosur
            </div>
            <h1 className="text-2xl sm:text-5xl font-display italic leading-[1.05] mb-1.5 sm:mb-2.5">
              Our Non-Veg Menu.
            </h1>
            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
              Explore 160+ slow-cooked Seeraga Samba biryanis, Chettinad gravies, tava roasts, fresh coastal seafood, clay tandoori kebabs, and street-style parottas.
            </p>
          </div>

          {/* Quick Ordering Partners */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-[#111116] border border-white/10 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground me-1 hidden sm:inline">Order:</span>
            <a
              href="tel:06380795502"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono text-[0.65rem] sm:text-xs uppercase tracking-wider hover:bg-emerald-500/25 transition-all font-semibold"
            >
              ☎ Call 063807 95502
            </a>
            <a
              href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-white/15 bg-white/5 text-foreground font-mono text-[0.65rem] sm:text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-all"
            >
              📍 Dine-in / Takeaway
            </a>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="mt-3 sm:mt-6 py-1.5 sm:py-2.5 px-2.5 sm:px-4 border border-emerald-500/20 bg-emerald-500/[0.03] rounded-lg sm:rounded-xl grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between gap-x-3 gap-y-1 sm:gap-3 text-[0.6rem] sm:text-[0.72rem] font-mono text-emerald-300/90 uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">✓</span> Fresh Farm Meats
          </div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">✓</span> Seeraga Samba Biryani
          </div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">✓</span> No Palm Oil
          </div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">✓</span> Coastal Catch
          </div>
          <div className="flex items-center gap-1 col-span-2 sm:col-span-1">
            <span className="text-emerald-400 font-bold">✓</span> Stone-Ground Masalas
          </div>
        </div>
      </section>

      {/* FILTER & CONTROL PANEL (STICKY ON SCROLL) */}
      <section ref={menuContainerRef} className="sticky top-16 z-30 bg-[#0a0a0e]/95 backdrop-blur-xl border-y border-white/10 shadow-2xl py-2 sm:py-3 px-3 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-2 sm:space-y-3">
          {/* TOP CONTROL ROW: Search + Protein Chips + Sort Dropdown */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 sm:gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search dish (e.g. Mutton, Biryani)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111116] border border-white/15 rounded-md sm:rounded-lg pl-8 sm:pl-10 pr-8 sm:pr-9 py-1.5 sm:py-2 text-[0.7rem] sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all font-mono shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
                  title="Clear search"
                >
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              )}
            </div>

            {/* Protein Quick Selector (Desktop Pills) */}
            <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              {MEAT_FILTERS.map((m) => {
                const count = meatCounts[m.id] ?? 0;
                const isSelected = selectedMeat === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMeat(m.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                      isSelected
                        ? "bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                        : "bg-white/[0.04] border border-white/10 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground"
                    }`}
                  >
                    <span>{m.icon}</span>
                    <span>{m.label}</span>
                    <span className={`text-[0.65rem] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-black/20 text-black" : "bg-white/10 text-white/70"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sort & Filter Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 self-end md:self-auto shrink-0">
              {/* Sort Selector (Custom Dropdown — not native select) */}
              <div className="relative" ref={sortDropdownRef}>
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-1.5 sm:gap-2 bg-[#111116] border border-white/15 text-[0.68rem] sm:text-xs text-foreground font-mono rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 cursor-pointer hover:border-white/30 transition-colors"
                >
                  <ArrowUpDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground shrink-0" />
                  <span className="truncate max-w-[100px] sm:max-w-none">{SORT_OPTIONS.find(o => o.id === sortBy)?.label}</span>
                  <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground shrink-0 transition-transform ${showSortDropdown ? "rotate-180" : ""}`} />
                </button>
                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-1 z-50 bg-[#111116] border border-white/15 rounded-md sm:rounded-lg shadow-2xl overflow-hidden min-w-[160px]">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => { setSortBy(opt.id); setShowSortDropdown(false); }}
                        className={`w-full text-left px-3 py-1.5 sm:py-2 text-[0.68rem] sm:text-xs font-mono transition-colors flex items-center gap-2 ${
                          sortBy === opt.id
                            ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                            : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                        }`}
                      >
                        {sortBy === opt.id && <Check className="w-3 h-3 text-emerald-400 shrink-0" />}
                        <span className={sortBy === opt.id ? "" : "pl-5"}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="hidden sm:flex items-center border border-white/15 rounded-lg bg-[#111116] p-0.5">
                <button
                  onClick={() => setViewMode("categorized")}
                  className={`p-1.5 rounded-md text-xs transition-colors ${
                    effectiveViewMode === "categorized" ? "bg-primary text-black font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Grouped by Category"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md text-xs transition-colors ${
                    effectiveViewMode === "grid" ? "bg-primary text-black font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Unified Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Filter Toggle Button */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className={`lg:hidden flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-[0.68rem] sm:text-xs font-mono border transition-colors ${
                  showMobileFilters || selectedMeat !== "all" || selectedPriceRange !== "all"
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                    : "bg-[#111116] border-white/15 text-muted-foreground hover:text-foreground"
                }`}
              >
                <SlidersHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* SECOND ROW: Mobile / Expandable Price Range & Protein Filters */}
          <div className={`${showMobileFilters ? "flex" : "hidden lg:flex"} flex-wrap items-center justify-between gap-2 sm:gap-3 pt-1 border-t border-white/5`}>
            {/* Mobile Protein Pills (if on small screen) */}
            <div className="flex lg:hidden items-center gap-1 overflow-x-auto scrollbar-none w-full py-0.5">
              {MEAT_FILTERS.map((m) => {
                const isSelected = selectedMeat === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMeat(m.id)}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[0.65rem] sm:text-xs font-mono transition-all flex items-center gap-0.5 sm:gap-1 shrink-0 ${
                      isSelected
                        ? "bg-emerald-500 text-black font-bold"
                        : "bg-white/[0.04] border border-white/10 text-muted-foreground"
                    }`}
                  >
                    <span className="text-[0.7rem] sm:text-sm">{m.icon}</span>
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Price Range Filter Pills */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none">
              <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground mr-1 shrink-0 hidden sm:inline">Price:</span>
              {PRICE_FILTERS.map((p) => {
                const isSelected = selectedPriceRange === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPriceRange(p.id)}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[0.62rem] sm:text-[0.72rem] font-mono transition-all shrink-0 ${
                      isSelected
                        ? "bg-emerald-400/20 border border-emerald-400 text-emerald-300 font-semibold"
                        : "bg-white/[0.03] border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Result Stats & Reset Button */}
            <div className="flex items-center gap-2 sm:gap-3 text-[0.65rem] sm:text-xs font-mono ml-auto">
              <span className="text-muted-foreground">
                <strong className="text-primary font-bold">{sortedDishes.length}</strong> of {MENU_DISHES.length} dishes
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-[0.65rem] sm:text-xs font-mono underline underline-offset-4"
                >
                  <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* THIRD ROW: Horizontal Scrollable Category Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5 sm:py-1 border-t border-white/5">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`shrink-0 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[0.65rem] sm:text-xs font-mono transition-all uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                  : "bg-white/[0.04] border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <UtensilsCrossed className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>All ({MENU_DISHES.length})</span>
            </button>

            {CATEGORY_ORDER.map((catName) => {
              const count = MENU_DISHES.filter((d) => d.category === catName).length;
              const isSelected = selectedCategory === catName;
              return (
                <button
                  key={catName}
                  onClick={() => handleCategoryClick(catName)}
                  className={`shrink-0 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[0.62rem] sm:text-xs font-mono transition-all whitespace-nowrap flex items-center gap-1 sm:gap-1.5 ${
                    isSelected
                      ? "bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                      : "bg-white/[0.03] border border-white/10 text-muted-foreground hover:border-emerald-500/40 hover:text-foreground"
                  }`}
                >
                  <span>{catName}</span>
                  <span className={`text-[0.58rem] sm:text-[0.65rem] px-1 sm:px-1.5 py-0.2 rounded-full ${isSelected ? "bg-black/25 text-black" : "bg-white/10 text-white/60"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DISHES PRESENTATION SECTION */}
      <section className="min-h-[60vh] py-6 sm:py-10 md:py-16 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* NO RESULTS FOUND STATE */}
        {sortedDishes.length === 0 ? (
          <div className="text-center py-20 bg-[#111116] border border-white/10 rounded-2xl p-8 max-w-xl mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="text-2xl font-display mb-2">No dishes match your filter</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              We couldn't find any dishes matching "{searchQuery || selectedCategory || selectedMeat}". Try clearing your filters or search for something else.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-mono text-xs uppercase tracking-widest rounded-lg font-bold hover:brightness-110 shadow-lg shadow-emerald-500/20"
            >
              View Full Menu ({MENU_DISHES.length} dishes)
            </button>
          </div>
        ) : effectiveViewMode === "categorized" ? (
          /* CATEGORIZED VIEW: Grouped by Category with Section Banners */
          <div className="space-y-16 md:space-y-20">
            {groupedSections.map((section) => (
              <div key={section.category} className="border-t border-white/10 pt-4 sm:pt-8">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-3 mb-3 sm:mb-6">
                  <div>
                    <div className="inline-flex items-center gap-1 sm:gap-1.5 text-emerald-400 font-mono text-[0.58rem] sm:text-xs uppercase tracking-widest mb-0.5 sm:mb-1">
                      <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                      <span>Authentic Non-Veg</span>
                    </div>
                    <h2 className="text-lg sm:text-3xl font-display font-semibold text-foreground">
                      {section.category}
                    </h2>
                    <p className="hidden sm:block text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
                      {section.blurb}
                    </p>
                  </div>
                  <span className="font-mono text-[0.58rem] sm:text-xs text-muted-foreground shrink-0 bg-white/5 border border-white/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full self-start sm:self-auto">
                    {section.items.length} {section.items.length === 1 ? "dish" : "dishes"}
                  </span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                  {section.items.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* UNIFIED GRID VIEW: When sorted or cross-filtered by protein/price */
          <div>
            <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-muted-foreground">Showing:</span>
                <span className="text-xs sm:text-sm font-display font-semibold text-primary">
                  {selectedCategory === "all" ? "All Non-Veg Dishes" : selectedCategory}
                </span>
                {selectedMeat !== "all" && (
                  <span className="text-[0.65rem] sm:text-xs font-mono bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full capitalize">
                    {selectedMeat}
                  </span>
                )}
                {selectedPriceRange !== "all" && (
                  <span className="text-[0.65rem] sm:text-xs font-mono bg-white/10 border border-white/15 text-white/80 px-2 py-0.5 rounded-full">
                    {PRICE_FILTERS.find((p) => p.id === selectedPriceRange)?.label}
                  </span>
                )}
              </div>
              <span className="font-mono text-[0.65rem] sm:text-xs text-muted-foreground shrink-0">
                {sortedDishes.length} {sortedDishes.length === 1 ? "dish" : "dishes"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
              {sortedDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} showCategoryBadge />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* PHOTO GALLERY */}
      <PhotoGallery />

      {/* BOTTOM CTA BAR */}
      <section className="bg-[#070709] border-t border-white/10 text-foreground py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-2 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display mb-1 text-center md:text-left">Craving authentic non-veg?</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">Freshly prepared, authentic flavors in Hosur. Fast takeaway & dine-in all day.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
            <a
              href="tel:06380795502"
              className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-bold px-5 sm:px-6 py-2.5 sm:py-3 font-mono text-[0.7rem] sm:text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-95 transition-all rounded-lg"
            >
              ☎ Call 063807 95502
            </a>
            <a
              href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 bg-white/[0.04] backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 font-mono text-[0.7rem] sm:text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-all rounded-lg"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// INDIVIDUAL DISH CARD COMPONENT (COMPACT 2-COL ON MOBILE, EXPANDED ON DESKTOP)
function DishCard({ dish, showCategoryBadge = false }: { dish: DishItem; showCategoryBadge?: boolean }) {
  const [imgError, setImgError] = useState(false);

  // Meat icon & color
  const meatMeta: Record<string, { icon: string; label: string; color: string }> = {
    chicken: { icon: "🍗", label: "Chicken", color: "text-amber-400 border-amber-400/30 bg-amber-500/10" },
    mutton: { icon: "🥩", label: "Mutton", color: "text-red-400 border-red-400/30 bg-red-500/10" },
    fish: { icon: "🐟", label: "Fish", color: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10" },
    prawn: { icon: "🦐", label: "Prawn", color: "text-orange-400 border-orange-400/30 bg-orange-500/10" },
    crab: { icon: "🦀", label: "Crab", color: "text-rose-400 border-rose-400/30 bg-rose-500/10" },
    egg: { icon: "🥚", label: "Egg", color: "text-yellow-400 border-yellow-400/30 bg-yellow-500/10" },
    seafood: { icon: "🐟", label: "Seafood", color: "text-teal-400 border-teal-400/30 bg-teal-500/10" },
    nonveg: { icon: "🍖", label: "Non-Veg", color: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10" },
  };

  const meta = meatMeta[dish.meat] || meatMeta.nonveg;

  return (
    <article className="group bg-[#111116] border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3.5 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
      <div>
        {/* Photo Container */}
        <div className="aspect-[4/3] overflow-hidden mb-1.5 sm:mb-3 rounded-md sm:rounded-lg bg-white/5 border border-white/5 relative">
          {!imgError && dish.img ? (
            <img
              src={dish.img}
              alt={dish.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#16161f] to-[#0c0c10] text-muted-foreground p-2 sm:p-4 text-center">
              <span className="text-xl sm:text-3xl mb-0.5 sm:mb-1">{meta.icon}</span>
              <span className="text-[0.55rem] sm:text-[0.65rem] font-mono text-muted-foreground uppercase tracking-widest line-clamp-1">{dish.name}</span>
            </div>
          )}

          {/* Non-Veg Mark (Red Triangle in Square) */}
          <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-black/85 backdrop-blur-md border border-red-500/40 p-0.5 rounded-sm shadow-md" title="Non-Vegetarian">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 border border-red-500 flex items-center justify-center p-0.5">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500" />
            </div>
          </div>

          {/* Specialty Tag if present */}
          {dish.tag && (
            <span className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-black/85 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-[0.5rem] sm:text-[0.6rem] font-mono uppercase tracking-wider px-1 sm:px-2 py-0.5 rounded font-semibold shadow-md">
              {dish.tag}
            </span>
          )}

          {/* Meat Pill bottom right */}
          <span className={`absolute bottom-1 right-1 sm:bottom-2 sm:right-2 backdrop-blur-md text-[0.5rem] sm:text-[0.6rem] font-mono uppercase tracking-wider px-1 sm:px-2 py-0.5 rounded border shadow-md flex items-center gap-0.5 sm:gap-1 ${meta.color}`}>
            <span>{meta.icon}</span>
            <span className="hidden sm:inline">{meta.label}</span>
          </span>
        </div>

        {/* Category Badge if in grid view */}
        {showCategoryBadge && (
          <div className="mb-1 sm:mb-1.5">
            <span className="text-[0.52rem] sm:text-[0.62rem] font-mono text-muted-foreground bg-white/5 border border-white/10 px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded inline-block truncate max-w-full">
              {dish.category}
            </span>
          </div>
        )}

        {/* Dish Title & Price (Stacked cleanly on mobile to prevent squishing) */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 sm:gap-2 mb-1 sm:mb-1.5">
          <h3 className="text-[0.76rem] sm:text-sm font-display font-medium text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2 min-h-[1.9rem] sm:min-h-0">
            {dish.name}
          </h3>
          <span className="font-mono text-xs sm:text-base text-emerald-400 font-bold shrink-0">
            {dish.price}
          </span>
        </div>

        {/* Description (desktop only for compact clean mobile layout) */}
        <p className="hidden sm:block text-[0.72rem] text-muted-foreground line-clamp-2 leading-relaxed mb-2">
          {dish.desc}
        </p>
      </div>

      {/* Quick Action Strip */}
      <div className="pt-1 sm:pt-2 border-t border-white/5 flex items-center justify-between text-[0.56rem] sm:text-[0.65rem] font-mono text-muted-foreground">
        <span className="text-white/40 truncate hidden sm:inline">Dine-in · Takeaway</span>
        <span className="text-white/40 sm:hidden">Non-Veg</span>
        <a
          href="tel:06380795502"
          className="text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-0.5 hover:underline ml-auto"
        >
          Order →
        </a>
      </div>
    </article>
  );
}
