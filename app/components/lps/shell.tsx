/** Fundo tinta com degradê claro (azul/céu) na direita, na base + malha de pontos por cima. */
export function LpBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0" style={{ background: "#00081C" }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(95% 75% at 100% 100%, rgba(0,180,252,0.22) 0%, rgba(0,91,197,0.14) 28%, rgba(1,38,119,0.07) 52%, transparent 74%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 70% at 0% 0%, rgba(0,2,10,0.88) 0%, rgba(0,2,10,0.35) 45%, transparent 72%)",
        }}
      />
      <div className="lp-dots absolute inset-0" />
    </div>
  );
}
