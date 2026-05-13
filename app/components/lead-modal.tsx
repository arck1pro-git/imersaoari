"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_SPRINTHUB_HOOK_URL!;

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-lead-modal", handler);
    return () => window.removeEventListener("open-lead-modal", handler);
  }, []);

  function close() {
    setOpen(false);
    setSuccess(false);
    setError(false);
    setForm({ nome: "", email: "", whatsapp: "" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const phone = form.whatsapp.replace(/\D/g, "");
    const params = new URLSearchParams({ nome: form.nome, email: form.email, whatsapp: "55" + phone });
    fetch(`${API}&${params.toString()}`, { method: "POST", keepalive: true }).catch(() => {});
    const hotmart = new URL("https://pay.hotmart.com/X105745330Y");
    hotmart.searchParams.set("bid", "1778252969085");
    hotmart.searchParams.set("name", form.nome);
    hotmart.searchParams.set("email", form.email);
    hotmart.searchParams.set("phone", phone);
    try {
      window.location.assign(hotmart.toString());
    } catch {
      window.location.href = hotmart.toString();
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 font-poppins"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
      onClick={e => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="w-full max-w-md rounded-xl border border-white/15 bg-zinc-950">
        <div className="p-8">
          {success ? (
            <div className="text-center py-6">
              <p className="text-white text-2xl font-bold mb-3">Vaga Garantida!</p>
              <p className="text-gray-400 text-sm leading-relaxed">Em breve você receberá as instruções de acesso no seu e-mail e WhatsApp.</p>
              <button onClick={close} className="mt-8 border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-3 text-sm rounded-lg hover:bg-white/5 transition-colors">
                FECHAR
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Imersão ARI</p>
                  <h2 className="text-white text-2xl font-bold leading-tight">Garanta sua vaga</h2>
                </div>
                <button onClick={close} className="text-gray-500 hover:text-white transition-colors text-lg leading-none mt-1">✕</button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Nome completo</label>
                  <input
                    required
                    name="nome"
                    value={form.nome}
                    onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">E-mail</label>
                  <input
                    required
                    name="email"
                    type="email"
                    pattern="[\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,}"
                    title="Digite um e-mail válido"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="joao@email.com"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">WhatsApp</label>
                  <input
                    required
                    name="whatsapp"
                    type="tel"
                    maxLength={11}
                    value={form.whatsapp}
                    onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="(48) 9 9999-9999"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs text-center">Ocorreu um erro. Tente novamente.</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 text-sm mt-1 disabled:opacity-50 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {loading ? "ENVIANDO..." : "GARANTIR MINHA VAGA"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
