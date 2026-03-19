import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

const invoices = [
  { num: "FAC-2026-089", project: "BNA-PAN-CLD-2026-004", entity: "🇵🇦 Panamá", client: "Banco Nacional", type: "Real", amount: "$24,000", tax: "+ ITBMS 7%: $1,680", due: "14 Abr 2026", status: "Emitida" },
  { num: "FAC-2026-088", project: "PQS-ARG-DAT-2026-001", entity: "🇦🇷 Argentina", client: "Petroquímica del Sur", type: "Real", amount: "ARS 720,000", tax: "+ IVA 21%: ARS 151,200", due: "30 Mar 2026", status: "Cobrada" },
  { num: "FAC-2026-081", project: "BNA-PAN-CLD-2026-003", entity: "🇵🇦 Panamá", client: "Banco Nacional", type: "Real", amount: "$18,000", tax: "+ ITBMS 7%: $1,260", due: "2 Mar 2026 ⚠️", status: "Vencida" },
  { num: "FORE-2026-Q2-001", project: "TCI-USA-CLD-2026-001", entity: "🇺🇸 USA", client: "TechCorp International", type: "Forecast", amount: "$60,000", tax: "Estimado Q2 2026", due: "Jun 2026", status: "Forecast" },
];

const statusVariant: Record<string, "green" | "sky" | "red" | "grey" | "amber"> = {
  Emitida: "sky", Cobrada: "green", Vencida: "red", Forecast: "grey",
};

export default function M6Page() {
  return (
    <>
      <Topbar breadcrumb="M6 / Billing & Forecast" title="Facturación & Forecast" />
      <div className="p-6 flex-1">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard label="Facturado real (Mar 2026)" value="$84k" delta="+12% vs Feb" deltaType="up" accent="blue" />
          <StatCard label="Forecast Q2 2026" value="$310k" delta="3 entidades" accent="sky" />
          <StatCard label="POs sin facturar" value="$228k" delta="Backlog de facturación" accent="amethyst" />
          <StatCard label="Facturas vencidas" value="2" delta="Requiere acción" deltaType="down" accent="red" />
        </div>

        {/* Summary bar */}
        <div className="bg-white border border-border rounded-xl p-4 mb-5">
          <div className="text-[12px] font-semibold text-cool-grey mb-3">Utilización por entidad — Forecast Q2 2026</div>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "🇵🇦 Panamá (USD)", pct: 54, val: "$168,000", color: "bg-neon-blue" },
              { label: "🇺🇸 USA (USD)", pct: 29, val: "$90,000", color: "bg-bleu-france" },
              { label: "🇦🇷 Argentina (ARS)", pct: 17, val: "~$52,000", color: "bg-amethyst" },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-3">
                <div className="text-[12px] w-44 font-medium text-[#1a1a2e]">{r.label}</div>
                <div className="flex-1 h-2 bg-light-silver rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                </div>
                <div className="text-[12px] font-bold text-[#1a1a2e] w-28 text-right">{r.val}</div>
                <div className="text-[11px] text-cool-grey w-10 text-right">{r.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <input className="flex-1 max-w-[260px] h-8 border border-border rounded-md px-3 text-[13px] outline-none focus:border-bleu-france" placeholder="🔍  Buscar factura, cliente…" />
            <select className="h-8 border border-border rounded-md px-2 text-[13px] bg-white outline-none">
              <option>Todos los estados</option><option>Emitida</option><option>Cobrada</option><option>Vencida</option><option>Forecast</option>
            </select>
            <select className="h-8 border border-border rounded-md px-2 text-[13px] bg-white outline-none">
              <option>Todas las entidades</option><option>Panamá</option><option>USA</option><option>Argentina</option>
            </select>
            <button className="ml-auto h-8 px-3 bg-neon-blue text-white text-[12px] font-medium rounded-md hover:bg-ocean-blue transition-colors">
              + Nueva factura
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-strata-bg">
                {["N° Factura", "Proyecto", "Entidad", "Cliente", "Tipo", "Monto", "Impuesto", "Vencimiento", "Estado"].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.5px] text-cool-grey border-b border-border whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.num} className={`border-b border-[#f0f1f5] last:border-0 hover:bg-[#fafbff] ${inv.status === "Vencida" ? "bg-[#fffbfa]" : ""}`}>
                  <td className="px-4 py-3 font-mono text-[11px] font-bold text-neon-blue">{inv.num}</td>
                  <td className="px-4 py-3 font-mono text-[10px] text-cool-grey">{inv.project}</td>
                  <td className="px-4 py-3 text-[12px]">{inv.entity}</td>
                  <td className="px-4 py-3 text-[12px]">{inv.client}</td>
                  <td className="px-4 py-3">
                    <Badge variant={inv.type === "Real" ? "sky" : "violet"}>{inv.type}</Badge>
                  </td>
                  <td className="px-4 py-3 font-display font-bold text-[14px] text-[#1a1a2e]">{inv.amount}</td>
                  <td className="px-4 py-3 text-[11px] text-cool-grey">{inv.tax}</td>
                  <td className={`px-4 py-3 text-[12px] ${inv.status === "Vencida" ? "text-red-600 font-semibold" : "text-cool-grey"}`}>{inv.due}</td>
                  <td className="px-4 py-3">
                    <Badge variant={statusVariant[inv.status]}>{inv.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
