const ITEM = (
  <>
    <span className="text-xl text-white px-4">AO VIVO</span>
    <span style={{ color: "var(--marquee-blue)" }} className="text-xl px-2">◇</span>
    <span className="text-xl text-white px-4">26, 27 E 28 DE MAIO</span>
    <span style={{ color: "var(--marquee-blue)" }} className="text-xl px-2">◇</span>
  </>
);

function Track() {
  return (
    <div className="flex items-center shrink-0">
      {ITEM}{ITEM}{ITEM}{ITEM}{ITEM}{ITEM}
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <section className="bg-[#0a0a0a] py-4 border-y border-[#222] overflow-hidden font-poppins">
      <div
        className="animate-marquee flex items-center whitespace-nowrap"
        style={{ width: "max-content", willChange: "transform" }}
      >
        <Track />
        <Track />
      </div>
    </section>
  );
}
