"use client";

import { ArrowUpRight } from "lucide-react";

export default function GarantirVagaBtn({ className, variant = "gold" }: { className?: string; variant?: "gold" | "blue" }) {
  const base = variant === "blue" ? "button-blue text-white" : "button text-black";
  return (
    <button
      type="button"
      className={`${base} font-bold py-3 px-8 text-xs lg:py-5 lg:px-14 lg:text-lg w-full max-w-sm flex items-center justify-center gap-2 uppercase tracking-widest whitespace-nowrap ${className ?? ""}`}
      onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
    >
      GARANTIR MINHA VAGA
      <ArrowUpRight className="w-5 h-5" />
    </button>
  );
}
