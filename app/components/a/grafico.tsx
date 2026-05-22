const PAD_L = 72, PAD_R = 90, PAD_T = 30, PAD_B = 50;
const SVG_W = 620, SVG_H = 310;
const CHART_W = SVG_W - PAD_L - PAD_R;
const CHART_H = SVG_H - PAD_T - PAD_B;
const Y_MIN = 85, Y_MAX = 215;

const cx = (month: number) => PAD_L + (month / 36) * CHART_W;
const cy = (value: number) => PAD_T + CHART_H - ((value - Y_MIN) / (Y_MAX - Y_MIN)) * CHART_H;

// ARI: dobra em 3 anos (taxa mensal composta ~1,94%)
const ARI: [number, number][] = [
  [0, 100], [6, 112.25], [12, 126.0], [18, 141.4],
  [24, 158.7], [30, 178.2], [36, 200],
];

// Tradicional: +20% linear em 3 anos
const TRAD: [number, number][] = [
  [0, 100], [6, 103.33], [12, 106.67], [18, 110],
  [24, 113.33], [30, 116.67], [36, 120],
];

function smoothPath(data: [number, number][]) {
  let d = `M ${cx(data[0][0]).toFixed(1)},${cy(data[0][1]).toFixed(1)}`;
  for (let i = 1; i < data.length; i++) {
    const px = cx(data[i - 1][0]), py = cy(data[i - 1][1]);
    const x = cx(data[i][0]), y = cy(data[i][1]);
    const dx = (x - px) / 3;
    d += ` C ${(px + dx).toFixed(1)},${py.toFixed(1)} ${(x - dx).toFixed(1)},${y.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return d;
}

function linePath(data: [number, number][]) {
  return data.map(([m, v], i) => `${i === 0 ? "M" : "L"} ${cx(m).toFixed(1)},${cy(v).toFixed(1)}`).join(" ");
}

const GOLD = "#D4A017";
const RED = "#ef4444";
const GRID_YS = [100, 120, 140, 160, 180, 200];
const X_TICKS: [number, string][] = [[0, "Início"], [12, "1 ano"], [24, "2 anos"], [36, "3 anos"]];

const ariPath = smoothPath(ARI);
const tradPath = linePath(TRAD);
const ariArea = `${ariPath} L ${cx(36).toFixed(1)},${(PAD_T + CHART_H).toFixed(1)} L ${cx(0).toFixed(1)},${(PAD_T + CHART_H).toFixed(1)} Z`;

export default function Grafico() {
  return (
    <section className="bg-zinc-950 py-20 px-6 font-montserrat border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-4xl lg:text-5xl font-bold text-center mb-4">
          O poder da{" "}
          <span className="gradient-text">incorporação imobiliária</span>
        </h2>
        <p className="text-gray-400 text-center text-lg lg:text-base mb-12">
          Simulação: R$100.000 investidos ao longo de 3 anos
        </p>

        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full"
          style={{ height: "auto" }}
        >
          <defs>
            <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GOLD} stopOpacity="0.18" />
              <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid horizontal */}
          {GRID_YS.map((v) => (
            <g key={v}>
              <line
                x1={PAD_L} y1={cy(v)}
                x2={SVG_W - PAD_R} y2={cy(v)}
                stroke="rgba(255,255,255,0.07)" strokeWidth="1"
              />
              <text
                x={PAD_L - 8} y={cy(v)}
                textAnchor="end" dominantBaseline="middle"
                fill="rgba(255,255,255,0.35)" fontSize="10"
              >
                {`R$${v}k`}
              </text>
            </g>
          ))}

          {/* Eixo X */}
          <line
            x1={PAD_L} y1={PAD_T + CHART_H}
            x2={SVG_W - PAD_R} y2={PAD_T + CHART_H}
            stroke="rgba(255,255,255,0.15)" strokeWidth="1"
          />

          {/* Labels X */}
          {X_TICKS.map(([m, label]) => (
            <text
              key={m}
              x={cx(m)} y={PAD_T + CHART_H + 20}
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)" fontSize="11"
            >
              {label}
            </text>
          ))}

          {/* Área ARI */}
          <path d={ariArea} fill="url(#goldFill)" />

          {/* Linha Tradicional */}
          <path
            d={tradPath} fill="none"
            stroke={RED} strokeWidth="2.5"
            strokeLinejoin="round" strokeOpacity="0.9"
          />

          {/* Linha ARI */}
          <path
            d={ariPath} fill="none"
            stroke={GOLD} strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Pontos finais */}
          <circle cx={cx(36)} cy={cy(200)} r="5" fill={GOLD} />
          <circle cx={cx(36)} cy={cy(120)} r="5" fill={RED} />

          {/* Labels finais */}
          <text
            x={cx(36) + 10} y={cy(200)}
            dominantBaseline="middle"
            fill={GOLD} fontSize="12" fontWeight="bold"
          >
            +100%
          </text>
          <text
            x={cx(36) + 10} y={cy(120)}
            dominantBaseline="middle"
            fill={RED} fontSize="12" fontWeight="bold"
          >
            +20%
          </text>
        </svg>

        {/* Legenda */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-4">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 rounded" style={{ background: GOLD }} />
            <span className="text-white text-base lg:text-sm font-semibold">
              Metodologia ARI
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 rounded bg-red-500" />
            <span className="text-gray-400 text-base lg:text-sm">Imóvel Tradicional</span>
          </div>
        </div>

        {/* Cards comparativos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          <div
            className="rounded-xl border p-6 text-center"
            style={{ borderColor: GOLD + "40", background: GOLD + "0A" }}
          >
            <p
              className="text-sm lg:text-xs uppercase tracking-widest mb-2 font-semibold"
              style={{ color: GOLD }}
            >
              ARI
            </p>
            <p className="text-white text-3xl font-bold mb-1">R$200 mil</p>
            <p className="text-base lg:text-sm font-semibold" style={{ color: GOLD }}>
              +100% em 3 anos
            </p>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <p className="text-sm lg:text-xs uppercase tracking-widest text-red-400 mb-2 font-semibold">
              Imóvel Tradicional
            </p>
            <p className="text-white text-3xl font-bold mb-1">R$120 mil</p>
            <p className="text-base lg:text-sm font-semibold text-red-400">+20% em 3 anos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
