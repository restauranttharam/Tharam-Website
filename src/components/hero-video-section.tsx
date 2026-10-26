import React, { useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";

interface HeroVideoSectionProps {
  highlights: Array<{ label: string; desc: string }>;
}

export function HeroVideoSection({ highlights }: HeroVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = React.useState<"biryani" | "chicken" | "parotta">("biryani");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  const dishPreviews = {
    biryani: {
      img: "/dishes/Tharam Spl Mutton Biryani.png",
      title: "Tharam Spl Mutton Biryani",
      tag: "Signature Dum Biryani",
      desc: "Slow dum-cooked tender mutton with fragrant Seeraga Samba rice, whole spices, served with brinjal dalcha & raita."
    },
    chicken: {
      img: "/dishes/Chettinadu Chicken.png",
      title: "Chettinadu Chicken",
      tag: "Spicy Bestseller",
      desc: "Country chicken roasted with crushed Tellicherry black pepper, shallots, and fresh curry leaves."
    },
    parotta: {
      img: "/dishes/Vazhai Ilai Mutton Parotta.png",
      title: "Vazhai Ilai Mutton Parotta",
      tag: "Banana Leaf Specialty",
      desc: "Layered flaky parottas wrapped in banana leaf with rich mutton chukka gravy, slow-steamed to perfection."
    }
  };

  return (
    <div className="-mt-20 md:-mt-24 text-foreground bg-[#090a0d]">
      {/* 1. TOP FULL-WIDTH TALL BRIGHT VIDEO BANNER */}
      <div className="relative w-full h-[75vh] sm:h-[85vh] md:h-[92vh] min-h-[600px] overflow-hidden border-b border-white/10">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/dishes/Tharam Spl Mutton Biryani.png"
          className="w-full h-full object-cover brightness-[1.12] contrast-[1.05] saturate-[1.08] scale-[1.01]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/hero-bg.webm" type="video/webm" />
        </video>

        {/* Top Dark Gradient for Floating SiteNav Header Bar + Bottom Fade to Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#090a0d] pointer-events-none" />

        {/* CENTERED OVERLAY TITLE: QUALITY SPEAKS THARAM */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center px-4 sm:px-6">
          <div className="relative flex flex-col items-center max-w-2xl mx-auto animate-reveal">
            {/* Top Tagline Pill */}
            <div className="mb-2 sm:mb-3 inline-flex items-center gap-2 bg-black/50 border border-emerald-500/35 px-3 py-1 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[0.62rem] sm:text-[0.68rem] md:text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 font-bold">
                Hosur's Premier Non-Veg Kitchen
              </span>
            </div>

            {/* Main Centered Stylized Header */}
            <h1
              style={{ fontFamily: 'var(--font-hero-sans)' }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-[0.08em] leading-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]"
            >
              <span className="bg-gradient-to-r from-white via-zinc-100 to-emerald-100 bg-clip-text text-transparent block sm:inline">
                QUALITY SPEAKS{" "}
              </span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.75)] block sm:inline mt-0.5 sm:mt-0">
                THARAM
              </span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center gap-2.5 my-2 sm:my-2.5 w-full max-w-[180px] sm:max-w-[240px]">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
              <span className="text-emerald-400 text-[0.65rem] sm:text-xs font-mono">✦</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
            </div>

            {/* Subtext */}
            <p className="text-[0.65rem] sm:text-xs md:text-sm font-mono uppercase tracking-[0.15em] text-white/90 font-medium max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              The Art of Authentic Chettinad & Non-Veg Culinary Tradition
            </p>
          </div>
        </div>

        {/* Ambient Overlay Title Banner */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/15">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[0.62rem] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
            Tharam Dining Ambience • Hosur
          </span>
        </div>
      </div>

      {/* 2. MAIN CONTENT BELOW THE VIDEO */}
      <section className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text Column */}
          <div className="lg:col-span-7 animate-reveal">
            {/* Category Badges */}
            <div className="mb-5 flex flex-wrap gap-2.5 items-center text-[0.7rem] font-mono uppercase tracking-widest text-muted-foreground">
              <span className="text-emerald-400 font-semibold drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Authentic Non-Veg
              </span>
              <span className="text-white/30">•</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white/90">
                Fresh Cuts Daily
              </span>
              <span className="text-white/30">•</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white/90">
                Hosur, Tamil Nadu
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.05] text-balance mb-5 text-white">
              The ritual of{" "}
              <i className="font-normal not-italic bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                authentic
              </i>{" "}
              non-veg & south indian taste.
            </h1>

            {/* Paragraph Description */}
            <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Step into a cozy, modern dining experience. Sizzling pepper chicken, slow-cooked seeraga samba mutton biryani, flaky banana-leaf parottas, and coastal seafood curries served fresh and hot.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-black font-bold px-8 py-4 font-mono text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:brightness-110 active:scale-95 transition-all rounded-sm group"
              >
                <span>Explore the menu</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <a
                href="https://maps.app.goo.gl/P5HDab6jb3RAdUz28"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border border-white/20 bg-white/[0.04] backdrop-blur-md px-7 py-4 font-mono text-xs uppercase tracking-widest text-white hover:border-emerald-400 hover:text-emerald-300 hover:bg-white/10 transition-all rounded-sm shadow-xl"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get directions
              </a>
            </div>

            {/* Info Stats Bar */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-white/10 bg-white/[0.02] p-5 rounded-2xl border">
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-mono uppercase text-emerald-400 font-bold mb-1 tracking-widest">
                  Kitchen Hours
                </span>
                <span className="text-sm font-mono text-white font-medium">06:00 AM – 10:30 PM</span>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-mono uppercase text-emerald-400 font-bold mb-1 tracking-widest">
                  Pricing
                </span>
                <span className="text-sm font-mono text-white font-medium">₹1 – ₹200 per person</span>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-mono uppercase text-emerald-400 font-bold mb-1 tracking-widest">
                  Direct Call Order
                </span>
                <a href="tel:06380795502" className="text-sm font-mono hover:text-emerald-400 transition-colors font-medium text-white">
                  063807 95502
                </a>
              </div>
            </div>
          </div>

          {/* Right Dish Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#111116] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:border-emerald-500/40 transition-all duration-500">
              {/* Dish Selector Tabs */}
              <div className="flex gap-2 mb-3 bg-white/5 p-1 rounded-xl border border-white/10">
                {(["biryani", "chicken", "parotta"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 text-[0.65rem] font-mono uppercase tracking-wider rounded-lg transition-all ${activeTab === tab
                      ? "bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                      : "text-white/60 hover:text-white"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Showcase Image */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 relative">
                <img
                  src={dishPreviews[activeTab].img}
                  alt={dishPreviews[activeTab].title}
                  className="w-full h-full object-cover brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-[0.62rem] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold shadow-lg">
                  {dishPreviews[activeTab].tag}
                </span>
              </div>

              {/* Description */}
              <div className="pt-4 px-2">
                <h3 className="text-xl font-display text-white mb-1">
                  {dishPreviews[activeTab].title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">
                  {dishPreviews[activeTab].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. HIGHLIGHTS STRIP BELOW */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col gap-1 border-l-2 border-emerald-500/50 pl-4 py-1">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                {h.label}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">{h.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
