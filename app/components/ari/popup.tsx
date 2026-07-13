"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import RegistrarBtn from "./registrar-btn";

export default function Popup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    function onScroll() {
      const doc = document.documentElement;
      const meio = doc.scrollHeight / 2;
      if (window.scrollY + window.innerHeight / 2 >= meio) {
        setOpen(true);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  function close() {
    setOpen(false);
    setDismissed(true);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-black/70">
      <div
        className="cut-card w-full max-w-md p-8 text-center relative bg-zinc-950 border"
        style={{ borderColor: "rgba(236,206,131,0.35)" }}
      >
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-white text-xl lg:text-2xl font-manrope leading-snug mb-7">
          Entre agora na nossa comunidade no{" "}
          <span className="gradient-text">WhatsApp</span> e participe do evento
        </p>

        <RegistrarBtn className="mx-auto" />
      </div>
    </div>
  );
}
