import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fabrício Arquiteto — Links",
  description: "Todos os links do Fabrício em um só lugar.",
  icons: { icon: "/icon.png" },
};

const TicketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2Z" />
    <path d="M13 5v2M13 11v2M13 17v2" strokeDasharray="0.5 3.5" />
  </svg>
);

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
  </svg>
);

const links = [
  {
    label: "Participe do evento",
    href: "https://typebot.co/super-live-ari",
    icon: TicketIcon,
  },
  {
    label: "Falar com nossa equipe",
    href: "https://typebot.co/arck1pro",
    icon: ChatIcon,
    online: true,
  },
];

export default function BioPage() {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      {/* Foto de fundo full com zoom lento */}
      <div className="absolute inset-0 bio-kenburns">
        <Image
          src="/fabrhicio.webp"
          alt="Fabrício"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Overlays pra contraste e legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,rgba(30,58,138,0.35),transparent_60%)]" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center justify-end px-6 pb-40 pt-24 text-center sm:pb-52">
        {/* Avatar em bolinha */}
        <div
          className="bio-rise relative mb-5 h-24 w-24 overflow-hidden rounded-full border-[3px] border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.5)] ring-2 ring-[#f5d77e]/40"
          style={{ animationDelay: "0s" }}
        >
          <Image
            src="/fabrhicio.webp"
            alt="Fabrício"
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </div>

        <h1
          className="bio-rise font-manrope text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.1s" }}
        >
          Fabhrício Ari
        </h1>
        <p
          className="bio-rise mt-3 text-sm font-medium tracking-wide text-white/85 drop-shadow"
          style={{ animationDelay: "0.22s" }}
        >
          Incorporador e investidor no mercado imobiliário
        </p>

        <div className="mt-9 flex w-full flex-col gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bio-rise bio-btn group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-6 py-4 text-base font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)] active:scale-[0.97]"
                style={{ animationDelay: `${0.36 + i * 0.12}s` }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <Icon />
                  {link.label}
                </span>
                {link.online && (
                  <span className="absolute right-4 top-1/2 z-10 flex h-2.5 w-2.5 -translate-y-1/2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <p
          className="bio-rise mt-8 text-xs font-medium tracking-widest text-white/50 uppercase"
          style={{ animationDelay: "0.64s" }}
        >
          @arck1pro
        </p>
      </div>
    </main>
  );
}
