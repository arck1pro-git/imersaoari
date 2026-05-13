import GarantirVagaBtn from "./garantir-vaga-btn";
import { ShieldCheck } from "lucide-react";

export default function Valor() {
  return (
    <section className="relative py-16 lg:py-24 px-6 font-poppins text-white overflow-hidden">
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[900px] pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at right center, rgba(37,99,235,0.3) 0%, rgba(30,58,138,0.1) 40%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="max-w-xl mx-auto relative z-10">
        <div className="border-spin-blue rounded-xl hover-scale" style={{ padding: "6px" }}>
          <div className="rounded-xl px-6 pt-6 pb-8 text-center lg:px-24 lg:pt-10 lg:pb-24 relative z-10 bg-zinc-950" style={{ backgroundImage: "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 65%)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
          <div className="mb-6">
            <p className="text-gray-500 text-lg line-through mb-1">De R$ 297,00</p>
            <p className="gradient-text-blue text-4xl lg:text-6xl shine-text font-bold">R$ 89,00</p>
            <p className="text-gray-400 text-base mt-2">ou 12x de R$ 9,20 no cartão</p>
          </div>

          <GarantirVagaBtn className="mb-4" variant="blue" />

          <p className="text-gray-500 text-xs text-center mb-8">
            Pagamento via Pix ou cartão de crédito · Acesso enviado por e-mail após confirmação
          </p>

          <div className="border-t border-white/10 pt-6 flex gap-4">
            <ShieldCheck className="w-6 h-6 shrink-0 mt-1" style={{ color: "var(--marquee-blue)" }} />
            <div className="text-left">
              <p className="text-white font-semibold text-sm mb-1">7 dias de garantia total.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Se após a primeira aula você sentir que o conteúdo não é para o seu momento como investidor, basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
