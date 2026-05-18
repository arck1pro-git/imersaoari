"use client";

import { ArrowUpRight } from "lucide-react";

export default function GarantirVagaBtn({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={`button-sun font-bold py-3 px-8 text-xs lg:py-5 lg:px-14 lg:text-lg w-full max-w-sm flex items-center justify-center gap-2 uppercase tracking-widest whitespace-nowrap ${className ?? ""}`}
      onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
    >
      GARANTIR MINHA VAGA
      <ArrowUpRight className="w-5 h-5" />
    </button>
  );
}
