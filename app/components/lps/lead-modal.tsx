"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { LP_MODAL_EVENT } from "./events";
import { claritySet, clarityEvent, clarityUpgrade } from "./clarity";
import { pixelLead } from "./pixel";
import { SPRINTHUB_HOOK_LPS } from "../../sprinthub";

/** Parâmetros de link aceitos como identificação do anúncio, em ordem de prioridade. */
const AD_PARAMS = ["ad", "utm_content", "utm_campaign", "utm_source"];
const AD_KEY = "ari_ad";

/** Guarda o anúncio no primeiro acesso: a URL pode mudar antes do envio do formulário. */
function capturaAd(sp: URLSearchParams) {
  for (const chave of AD_PARAMS) {
    const valor = sp.get(chave);
    if (valor) {
      try {
        sessionStorage.setItem(AD_KEY, valor);
      } catch {
        /* sessionStorage indisponível (modo privado): segue só com o valor da URL */
      }
      return;
    }
  }
}

function leAd(sp: URLSearchParams) {
  for (const chave of AD_PARAMS) {
    const valor = sp.get(chave);
    if (valor) return valor;
  }
  try {
    return sessionStorage.getItem(AD_KEY) ?? "";
  } catch {
    return "";
  }
}

const CAPITAL = [
  "Até R$ 50 mil",
  "De R$ 50 mil a R$ 100 mil",
  "De R$ 100 mil a R$ 300 mil",
  "De R$ 300 mil a R$ 500 mil",
  "Acima de R$ 500 mil",
];

const MODALIDADES = [
  "Ainda não invisto",
  "Renda fixa (CDB, Tesouro, LCI/LCA)",
  "Fundos imobiliários (FIIs)",
  "Ações / bolsa",
  "Imóveis",
  "Mais de uma modalidade",
];

const VAZIO = {
  nome: "",
  telefone: "",
  email: "",
  valor: "",
  modalidade: "",
};

const campo =
  "w-full rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-white/35 bg-white/[0.04] border border-white/12 focus:outline-none focus:border-[#f7bc05]/70 transition-colors";

const rotulo = "block text-white/55 text-[11px] uppercase tracking-[0.14em] mb-2";

function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <label className={rotulo}>{label}</label>
      <div className="relative">
        <select
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${campo} appearance-none pr-10 ${value ? "" : "text-white/35"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#00102F] text-white">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-xs">
          ▾
        </span>
      </div>
    </div>
  );
}

function LeadModalInner({ origem }: { origem: string }) {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(VAZIO);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Captura o anúncio já no acesso à página, antes de qualquer interação.
  useEffect(() => {
    const sp = new URLSearchParams(searchParams.toString());
    capturaAd(sp);
    const ad = leAd(sp);
    if (ad) claritySet("ad", ad);
  }, [searchParams]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(LP_MODAL_EVENT, handler);
    return () => window.removeEventListener(LP_MODAL_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = anterior;
    };
  }, [open]);

  function close() {
    setOpen(false);
    setSuccess(false);
    setError(false);
    setLoading(false);
    setForm(VAZIO);
  }

  function set(k: keyof typeof VAZIO, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const telefone = form.telefone.replace(/\D/g, "");
    const payload: Record<string, string> = {
      nome: form.nome,
      whatsapp: "55" + telefone,
      email: form.email,
      modalidade: form.modalidade,
      valor: form.valor,
      origem,
    };

    try {
      const res = await fetch(`${SPRINTHUB_HOOK_LPS}&${new URLSearchParams(payload).toString()}`, {
        method: "POST",
        keepalive: true,
      });
      if (!res.ok) throw new Error(String(res.status));
      claritySet("lead", "sim");
      clarityEvent("lead_enviado");
      clarityUpgrade("lead_enviado");
      pixelLead({
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        origem,
        capital: form.valor,
        modalidade: form.modalidade,
      });
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 font-inter overflow-y-auto"
      style={{ background: "rgba(0,4,16,0.88)", backdropFilter: "blur(6px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de contato ARI"
    >
      <div
        className="w-full max-w-md my-auto rounded-2xl max-h-[92dvh] overflow-y-auto"
        style={{ background: "#000E28", border: "1px solid rgba(247,188,5,0.28)" }}
      >
        <div className="p-6 sm:p-8">
          {success ? (
            <div className="text-center py-6">
              <p className="font-carlasans text-3xl text-white mb-4">ARI</p>
              <p className="font-manrope text-white text-2xl leading-tight mb-3">Recebemos seus dados</p>
              <p className="lp-text text-sm leading-relaxed opacity-70">
                Um especialista vai entrar em contato pelo telefone informado para apresentar as operações
                abertas.
              </p>
              <button
                type="button"
                onClick={close}
                className="lp-btn shine relative overflow-hidden mt-8 w-full rounded-full py-3.5 text-[15px] font-semibold touch-manipulation active:scale-[0.98]"
              >
                <span className="relative z-10">Fechar</span>
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-end mb-3">
                <button
                  type="button"
                  onClick={close}
                  aria-label="Fechar"
                  className="text-white/40 hover:text-white transition-colors shrink-0 -mt-1 -mr-1 p-1 touch-manipulation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-clarity-mask="true">
                <div>
                  <label className={rotulo}>Nome completo</label>
                  <input
                    required
                    value={form.nome}
                    onChange={(e) => set("nome", e.target.value)}
                    className={campo}
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label className={rotulo}>WhatsApp</label>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    maxLength={15}
                    value={form.telefone}
                    onChange={(e) => set("telefone", e.target.value)}
                    className={campo}
                    placeholder="(48) 99999-9999"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label className={rotulo}>E-mail</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={campo}
                    placeholder="voce@email.com"
                    autoComplete="email"
                  />
                </div>

                <Select
                  label="Capital disponível"
                  value={form.valor}
                  onChange={(v) => set("valor", v)}
                  options={CAPITAL}
                  placeholder="Selecione uma faixa"
                />

                <Select
                  label="Já investe em alguma modalidade?"
                  value={form.modalidade}
                  onChange={(v) => set("modalidade", v)}
                  options={MODALIDADES}
                  placeholder="Selecione uma opção"
                />

                {error && (
                  <p className="text-red-300 text-sm text-center leading-snug">
                    Não conseguimos enviar seus dados. Tente novamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="lp-btn shine relative overflow-hidden mt-2 w-full rounded-full py-4 text-[15px] font-semibold disabled:opacity-60 touch-manipulation active:scale-[0.98]"
                >
                  <span className="relative z-10">{loading ? "Enviando..." : "Enviar"}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LpLeadModal({ origem }: { origem: string }) {
  return (
    <Suspense fallback={null}>
      <LeadModalInner origem={origem} />
    </Suspense>
  );
}
