"use client";
import { ArrowRight } from "lucide-react";
import { LP_MODAL_EVENT } from "./events";
import { clarityEvent, clarityUpgrade } from "./clarity";

export default function CtaBtn({
  label = "Falar com um especialista",
  variant = "solid",
  className,
}: {
  label?: string;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "shine relative overflow-hidden rounded-full font-semibold py-4 px-6 sm:px-7 text-[15px] sm:text-base flex items-center justify-center gap-2 tracking-wide text-center leading-snug touch-manipulation active:scale-[0.98] cursor-pointer";

  return (
    <button
      type="button"
      onClick={() => {
        clarityEvent("cta_click");
        clarityUpgrade("cta_click");
        window.dispatchEvent(new CustomEvent(LP_MODAL_EVENT));
      }}
      className={`${base} ${variant === "solid" ? "lp-btn" : "lp-btn-ghost"} ${className ?? ""}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <ArrowRight className="w-[1.1em] h-[1.1em]" strokeWidth={2.5} />
      </span>
    </button>
  );
}
