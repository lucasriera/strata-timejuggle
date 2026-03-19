import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

export default function M7Page() {
  return (
    <>
      <Topbar breadcrumb="M7 / KPIs & Dashboards" title="KPIs & Dashboards" />
      <div className="p-6 flex-1">

        {/* Hero performance */}
        <div className="bg-gradient-to-r from-neon-blue to-deep-violet rounded-xl p-5 text-white mb-6 flex items-center gap-8 flex-wrap">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Performance = Facturado − Gasto Real</div>
            <div className="font-display text-5xl font-black">$+18,240</div>
            <div className="text-sm opacity-70 mt-1">Margen neto — Marzo 2026</div>
          </div>
          <div className="w-px bg-white/20 self-stretch" />
          <div><div className="text-sm opacity-70">Facturado real</div><div className="font-display text-2xl font-bold mt-0.5">$84,000</div></div>
          <div className="w-px bg-white/20 self-stretch" />
          <div><div className="text-sm opacity-70">Gasto Real (TJ × Cost)</div><div className="font-display text-2xl font-bold mt-0.5">$65,760</div></div>
          <div className="w-px bg-white/20 self-stretch" />
          <div><div className="text-sm opacity-70">Margen %</div><div className="font-display text-2xl font-bold mt-0.5">21.7%</div></div>
        </div>

        {/* KPI grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">

          {/* SP Último Sprint */}
          <div className="bg-white border border-t-[3px] border-t-bleu-france border-border rounded-xl p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.5px] text-cool-grey mb-2">SP Último Sprint — Vendido vs Entregado</div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-3xl font-black text-neon-blue">120</span>
              <span className="text-[13px] text-cool-grey">vendidos</span>
              <span className="text-[18px] text-light-silver">→</span>
              <span className="font-display text-3xl font-black text-green-600">128</span>
              <span className="text-[13px] text-cool-grey">entregados</span>
            </div>
            <div className="text-[11px] text-cool-grey mb-3">Sprint 2 cerrado · <strong className="text-green-600">+8 SP sobre lo comprometido</strong></div>
            <div className="h-3 rounded-full bg-[#e3f0ff] overflow-hidden mb-1 relative">
              <div className="absolute inset-y-0 left-0 bg-neon-blue/30 rounded-full" style={{ width: "100%" }} />
              <div className="absolute inset-y-0 left-0 bg-bleu-france rounded-full" style={{ width: "106.7%" }} />
            </div>
            <div className="flex justify-between text-[10px] text-cool-grey">
              <span>0</span><span className="text-neon-blue font-bold">120 vendidos</span><span className="text-green-600 font-bold">128 ✓</span>
            </div>
            <div className="mt-2 text-[11px] font-semibold text-green-600">▲ 106.7% delivery rate</div>
          </div>

          {/* Eficiencia SP/RP */}
          <div className="bg-white border border-t-[3px] border-t-amethyst border-border rounded-xl p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.5px] text-cool-grey mb-2">Eficiencia — SP entregado por RP ejecutado</div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-3xl font-black text-amethyst">0.81</span>
              <span className="text-[14px] text-cool-grey">SP/RP</span>
            </div>
            <div className="text-[11px] text-cool-grey mb-3">128 SP entregados ÷ 158 RP consumidos · Sprint 2</div>
            <div className="bg-[#f5f3ff] rounded-lg p-3 text-[11px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-cool-grey">RP consumidos (costo real)</span>
                <strong className="text-[#1a1a2e]">158 RP</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-cool-grey">SP entregados (valor cliente)</span>
                <strong className="text-amethyst">128 SP</strong>
              </div>
            </div>
            <div className="mt-2 text-[11px] font-semibold text-cool-grey">Meta: ≥ 0.85 SP/RP — levemente por debajo</div>
          </div>

          {/* Utilización */}
          <div className="bg-white border border-t-[3px] border-t-green-500 border-border rounded-xl p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.5px] text-cool-grey mb-2">Utilización — Billable · Non-billable · Sin asignar</div>
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="font-display text-3xl font-black text-green-600">71%</span>
              <span className="text-[13px] text-cool-grey">billable</span>
            </div>
            <div className="flex h-3.5 rounded-full overflow-hidden mb-3 gap-[2px]">
              <div className="bg-green-500 rounded-l-full" style={{ width: "71%" }} />
              <div className="bg-amber-400" style={{ width: "16%" }} />
              <div className="bg-light-silver rounded-r-full" style={{ width: "13%" }} />
            </div>
            <div className="flex flex-col gap-1.5 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-green-500 flex-shrink-0" /><span className="flex-1 text-cool-grey">Billable</span><strong className="text-green-600">815 RP · 71%</strong></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-amber-400 flex-shrink-0" /><span className="flex-1 text-cool-grey">Non-billable</span><strong className="text-amber-600">184 RP · 16%</strong></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-light-silver flex-shrink-0" /><span className="flex-1 text-cool-grey">Sin asignar</span><strong className="text-cool-grey">149 RP · 13%</strong></div>
            </div>
          </div>
        </div>

        {/* Performance table */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <h3 className="font-display font-semibold text-[13px] text-[#1a1a2e]">Performance por proyecto — Marzo 2026</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-strata-bg">
                {["Proyecto", "Facturado", "Gasto Real", "Performance", "Margen %"].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.5px] text-cool-grey border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { code: "BNA-PAN-CLD-004", billed: "$24,000", cost: "$18,400", perf: "+$5,600", pct: "23.3%", positive: true },
                { code: "BNA-PAN-CLD-003", billed: "$18,000", cost: "$14,200", perf: "+$3,800", pct: "21.1%", positive: true },
                { code: "PQS-ARG-DAT-001", billed: "~$7,200", cost: "$9,160", perf: "-$1,960", pct: "-27.2%", positive: false },
                { code: "TCI-USA-CLD-001", billed: "$0", cost: "$24,000", perf: "-$24,000", pct: "Setup", positive: false },
              ].map((r) => (
                <tr key={r.code} className="border-b border-[#f0f1f5] last:border-0">
                  <td className="px-4 py-3 font-mono text-[11px] font-bold text-neon-blue">{r.code}</td>
                  <td className="px-4 py-3 text-[13px]">{r.billed}</td>
                  <td className="px-4 py-3 text-[13px]">{r.cost}</td>
                  <td className={`px-4 py-3 font-display font-bold text-[15px] ${r.positive ? "text-green-600" : "text-red-600"}`}>{r.perf}</td>
                  <td className="px-4 py-3"><Badge variant={r.positive ? "green" : r.pct === "Setup" ? "amber" : "red"}>{r.pct}</Badge></td>
                </tr>
              ))}
              <tr className="bg-strata-bg font-bold border-t-2 border-border">
                <td className="px-4 py-3 text-[13px] font-bold text-[#1a1a2e]">TOTAL</td>
                <td className="px-4 py-3 text-[13px] font-bold">$84,000</td>
                <td className="px-4 py-3 text-[13px] font-bold">$65,760</td>
                <td className="px-4 py-3 font-display font-black text-[15px] text-green-600">+$18,240</td>
                <td className="px-4 py-3"><Badge variant="green">21.7%</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
