import { ArrowUpRight } from "lucide-react";

const REGISTRO_URL = "https://typebot.co/super-live-ari";

export default function RegistrarBtn({ className }: { className?: string }) {
  return (
    <a
      href={REGISTRO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`shine rounded-full bg-zinc-950 text-[#ecce83] border border-[#ecce83] font-normal py-3.5 px-6 text-base lg:py-3 lg:px-8 lg:text-xl w-full max-w-sm flex items-center justify-center gap-2 uppercase tracking-widest whitespace-nowrap transition-transform hover:scale-105 ${className ?? ""}`}
    >
      Acessar comunidade
      <ArrowUpRight className="w-[1.25em] h-[1.25em]" strokeWidth={3} />
    </a>
  );
}
