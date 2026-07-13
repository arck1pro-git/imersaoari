const ITEM = (
  <>
    <span className="text-xl text-white px-4 font-manrope">AO VIVO</span>
    <span className="mx-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#d4af37]" />
    <span className="text-xl text-white px-4 font-manrope">23 DE JULHO</span>
    <span className="mx-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#d4af37]" />
    <span className="text-xl text-white px-4 font-manrope">100% GRATUITO</span>
    <span className="mx-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#d4af37]" />
  </>
);

function Track() {
  return (
    <div className="flex items-center shrink-0">
      {ITEM}{ITEM}{ITEM}{ITEM}
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <section className="bg-black py-4 overflow-hidden">
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
