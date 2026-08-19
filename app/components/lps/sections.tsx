import type { ReactNode } from "react";
import CtaBtn from "./cta-btn";

const OURO = "#f7bc05";

/* ------------------------- Seção 1 · Hero centralizada ------------------------- */

export function LpHero({ titulo, ctaLabel }: { titulo: ReactNode; ctaLabel?: string }) {
  return (
    <section className="relative flex min-h-[100dvh] items-center px-5 pt-28 pb-16 sm:px-6 sm:py-20 font-inter">
      <p className="lp-reveal font-carlasans absolute top-7 left-0 right-0 text-center text-2xl sm:text-3xl leading-none text-white">
        ARI
      </p>

      <div className="max-w-4xl mx-auto text-center w-full">
        <h1
          className="lp-reveal font-manrope text-white text-4xl leading-[1.12] tracking-tight text-balance mb-9 sm:mb-12 lg:text-5xl"
          style={{ animationDelay: "0s" }}
        >
          {titulo}
        </h1>

        <div className="lp-reveal flex justify-center" style={{ animationDelay: "0.14s" }}>
          <CtaBtn label={ctaLabel} className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}

/* ------------- Seção 2 · Texto de conversão + bullets + fecho ------------- */

export function LpTexto({
  paragrafos,
  bullets,
  fecho,
  ctaLabel,
}: {
  paragrafos: ReactNode[];
  bullets?: string[];
  fecho: ReactNode;
  ctaLabel?: string;
}) {
  return (
    <section className="px-5 pt-4 pb-24 sm:px-6 sm:pb-36 font-inter">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-5 sm:space-y-6">
          {paragrafos.map((p, i) => (
            <p key={i} className="lp-text text-base leading-[1.7] text-pretty sm:text-xl sm:leading-[1.65]">
              {p}
            </p>
          ))}
        </div>

        {bullets && (
          <ul className="mt-9 space-y-3.5 sm:mt-11 sm:space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3.5">
                <span
                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: OURO }}
                />
                <span className="lp-text text-base leading-snug text-pretty sm:text-lg">{b}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="lp-accent-text font-manrope text-xl leading-[1.3] tracking-tight text-balance text-center mt-12 sm:text-2xl sm:mt-14 lg:text-3xl">
          {fecho}
        </p>

        <div className="flex justify-center mt-8 sm:mt-9">
          <CtaBtn label={ctaLabel} className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}
