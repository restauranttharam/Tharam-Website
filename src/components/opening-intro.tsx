import { useEffect, useState } from "react";

export function Preloader() {
  const [stage, setStage] = useState<"hidden" | "tagline" | "split" | "exit" | "completed">("hidden");

  useEffect(() => {
    // Stage 1: Display tagline "Quality Speaks" centered
    const taglineTimeout = setTimeout(() => {
      setStage("tagline");
    }, 100);

    // Stage 2: Split tagline and reveal "· THARAM ·" in the center (faster response)
    const splitTimeout = setTimeout(() => {
      setStage("split");
    }, 900);

    // Stage 3: Zoom into THARAM text and open the website
    const exitTimeout = setTimeout(() => {
      setStage("exit");
    }, 1900);

    // Stage 4: Unmount preloader
    const completedTimeout = setTimeout(() => {
      setStage("completed");
    }, 2600);

    return () => {
      clearTimeout(taglineTimeout);
      clearTimeout(splitTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(completedTimeout);
    };
  }, []);

  if (stage === "completed") return null;

  return (
    <div
      style={{
        opacity: stage === "exit" ? 0 : 1,
      }}
      className={`fixed inset-0 z-[9999] bg-[#0d0d10] flex items-center justify-center transition-opacity duration-[600ms] ease-out will-change-opacity ${
        stage === "exit" ? "pointer-events-none" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center gap-2 sm:gap-3 md:gap-4 select-none transition-opacity duration-500 ${
          stage === "hidden" ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* QUALITY (Left) - White Text */}
        <div
          className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-white/90 font-medium transition-all duration-[600ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
          style={{
            transform:
              stage === "exit"
                ? "translateX(-25px) scale(0.9)"
                : stage === "split"
                  ? "translateX(-3px) scale(1)"
                  : "translateX(0px) scale(1)",
            opacity: stage === "exit" ? 0 : 1,
          }}
        >
          Quality
        </div>

        {/* THARAM WITH DOTS (Center) - Gold/Emerald Text, Subtle zoom on exit */}
        <div
          style={{
            width: stage === "split" || stage === "exit" ? "max(160px, min(240px, 45vw))" : "0px",
            opacity: stage === "exit" ? 0 : stage === "split" ? 1 : 0,
            transform:
              stage === "exit"
                ? "scale(3.8)"
                : stage === "split"
                  ? "scale(1)"
                  : "scale(0.9)",
          }}
          className="overflow-hidden flex items-center justify-center transition-all duration-[700ms] ease-[cubic-bezier(0.85,0,0.15,1)] will-change-transform"
        >
          <span className="font-display text-base sm:text-xl md:text-2xl text-brass font-bold tracking-[0.14em] text-center px-2 sm:px-3 whitespace-nowrap drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
            · THARAM ·
          </span>
        </div>

        {/* SPEAKS (Right) - White Text */}
        <div
          className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-white/90 font-medium transition-all duration-[600ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
          style={{
            transform:
              stage === "exit"
                ? "translateX(25px) scale(0.9)"
                : stage === "split"
                  ? "translateX(3px) scale(1)"
                  : "translateX(0px) scale(1)",
            opacity: stage === "exit" ? 0 : 1,
          }}
        >
          Speaks
        </div>
      </div>
    </div>
  );
}

export const OpeningIntro = Preloader;
