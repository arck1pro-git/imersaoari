"use client";
import { useEffect, useRef, useState } from "react";

const PILARES = [
  {
    label: "Pilar 1",
    title: "O mercado de incorporação por dentro",
    body: "Como funciona um ciclo real: onde está o lucro, como o investidor entra, como acompanha a obra e como os retornos são distribuídos. O que separa um bom empreendimento de uma armadilha.",
    image: "/pilar1.webp",
  },
  {
    label: "Pilar 2",
    title: "Seleção de oportunidades",
    body: "Critérios técnicos para identificar o empreendimento certo. Como filtrar projetos viáveis de projetos problemáticos — antes de aportar.",
    image: "/pilar2.webp",
  },
  {
    label: "Pilar 3",
    title: "Segurança jurídica e financeira",
    body: "Como utilizar SPEs, SCP e garantias reais para proteger o capital investido. A estrutura por trás de cada operação.",
    image: "/pilar3.webp",
  },
  {
    label: "Pilar 4",
    title: "Ciclo de saída e realização do retorno",
    body: "Como e quando o investidor recebe. Como otimizar a saída do ativo e potencializar retornos.",
    image: "/pilar4.webp",
  },
];

const GAP = 24;
const SPEED = 0.8;

function CardContent({ pilar }: { pilar: typeof PILARES[0] }) {
  return (
    <div className="relative overflow-hidden aspect-[4/5]" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${pilar.image}')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 z-10 rounded-lg p-4 font-poppins"
        style={{
          background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.07) 0%, transparent 60%), rgba(0,0,0,0.6)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 1px 0 0 rgba(255,255,255,0.08)",
        }}
      >
        <p className="gradient-text-blue text-xs font-bold uppercase tracking-widest mb-2">{pilar.label}</p>
        <p className="text-white font-semibold text-sm leading-snug mb-1">{pilar.title}</p>
        <p className="text-gray-300 text-xs leading-relaxed">{pilar.body}</p>
      </div>
    </div>
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
      <div key={index} className="rounded-lg overflow-hidden fade-in relative aspect-[4/5]" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-10 rounded-lg p-4"
          style={{
            background: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.07) 0%, transparent 60%), rgba(0,0,0,0.6)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 1px 0 0 rgba(255,255,255,0.08)",
          }}
        >
          <p className="gradient-text-blue text-xs font-bold uppercase tracking-widest mb-2">{p.label}</p>
          <p className="text-white font-semibold text-sm leading-snug mb-1">{p.title}</p>
          <p className="text-gray-300 text-xs leading-relaxed">{p.body}</p>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {PILARES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8" : "w-2 bg-zinc-600"}`}
            style={i === index ? { width: "2rem", background: "var(--marquee-blue)" } : {}}
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
    let visible = true;

    function loop() {
      if (visible) {
        posRef.current += SPEED;
        if (posRef.current >= oneSetWidth) posRef.current -= oneSetWidth;
        if (trackRef.current) trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      frameRef.current = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [cardWidth]);

  const cards = [...PILARES, ...PILARES];

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex" style={{ gap: GAP }}>
        {cards.map((pilar, i) => (
          <div key={i} className="flex-shrink-0 rounded-lg overflow-hidden flex flex-col hover-scale" style={{ width: cardWidth || undefined }}>
            <CardContent pilar={pilar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OqueVaiTer() {
  return (
    <section className="text-white py-16 lg:py-24 font-poppins">
      <div className="max-w-6xl text-center mx-auto px-6 mb-12 font-poppins">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 font-poppins">
          O que você vai aprender{" "}
          <span className="gradient-text-blue">nas 3 noites?</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto font-poppins">
          Nos 3 dias vamos percorrer os 4 pilares do método ARI — o mesmo processo que uso em cada operação real.
        </p>
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
