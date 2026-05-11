"use client";
import { useEffect, useRef, useState } from "react";

const PILARES = [
  {
    label: "Pilar 1 — Mentalidade de Investidor",
    title: "Identifique onde você está e transite para o aporte inteligente.",
    body: "Aprenda a transicionar do operacional para o aporte inteligente, focado na multiplicação real do patrimônio.",
    image: "/pilar1.png",
  },
  {
    label: "Pilar 2 — Seleção de Oportunidades",
    title: "Como identificar a incorporação certa para investir?",
    body: "Critérios técnicos e embasados para filtrar empreendimentos viáveis de armadilhas.",
    image: "/pilar2.png",
  },
  {
    label: "Pilar 3 — Segurança e Gestão de Patrimônio",
    title: "A arquitetura por trás da segurança jurídica e financeira.",
    body: "Saiba como utilizar SPEs, SCP e garantias reais para assegurar que o patrimônio investido esteja sempre protegido e rentável.",
    image: "/pilar3.png",
  },
  {
    label: "Pilar 4 — Ciclo de Saída e Realização de Lucro",
    title: "Como otimizar a saída do ativo e capturar a máxima valorização?",
    body: "Entenda como garantir que o retorno sobre o capital (ROE) seja realizado com eficiência, atingindo 100% de retorno em 3 anos.",
    image: "/pilar4.jpg",
  },
];

const GAP = 24;
const SPEED = 0.8;

function CardContent({ pilar }: { pilar: typeof PILARES[0] }) {
  return (
    <>
      {pilar.image && (
        <div className="w-full h-64 overflow-hidden">
          <img src={pilar.image} alt={pilar.label} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <p className="gradient-text text-xs font-bold uppercase tracking-widest">{pilar.label}</p>
        <p className="text-white font-semibold text-base">{pilar.title}</p>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{pilar.body}</p>
      </div>
    </>
  );
}

function MobileKanban() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % PILARES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const p = PILARES[index];

  return (
    <div className="px-6">
      <div
        className="rounded-lg"
        style={{ padding: "1.5px", background: "linear-gradient(135deg, #c4a540 0%, #ecce83 50%, #f5dfa8 100%)" }}
      >
        <div key={index} className="bg-zinc-900 rounded-[6px] overflow-hidden flex flex-col h-[460px] fade-in">
          <img src={p.image ?? ""} alt={p.label} className="w-full h-64 object-cover flex-shrink-0" />
          <div className="p-6 flex flex-col gap-4 flex-1 overflow-hidden">
            <p className="gradient-text text-xs font-bold uppercase tracking-widest">{p.label}</p>
            <p className="text-white font-semibold text-base">{p.title}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {PILARES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-yellow-500" : "w-2 bg-zinc-600"}`}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopCarousel() {
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.offsetWidth;
      if (w <= 0) return;
      setCardWidth(Math.round(w < 1024 ? (w - GAP) / 2 : (w - GAP * 2) / 3));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!cardWidth || cardWidth <= 0) return;

    posRef.current = 0;
    const oneSetWidth = PILARES.length * (cardWidth + GAP);

    function loop() {
      posRef.current += SPEED;
      if (posRef.current >= oneSetWidth) posRef.current -= oneSetWidth;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      frameRef.current = requestAnimationFrame(loop);
    }

    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [cardWidth]);

  const cards = [...PILARES, ...PILARES];

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex" style={{ gap: GAP }}>
        {cards.map((pilar, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-zinc-900 rounded-lg overflow-hidden flex flex-col shadow-lg"
            style={{ width: cardWidth || undefined }}
          >
            <CardContent pilar={pilar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pilares() {
  return (
    <section className="text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-cormorant font-bold mb-3">
            <span className="gradient-text">Nos 3 dias vamos nos aprofundar nos 4 pilares para um investimento de sucesso.</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Esses são os mesmos 4 pilares que eu uso nos meus próprios investimentos.
          </p>
        </div>
      </div>

      <div className="block sm:hidden">
        <MobileKanban />
      </div>
      <div className="hidden sm:block">
        <DesktopCarousel />
      </div>
    </section>
  );
}
