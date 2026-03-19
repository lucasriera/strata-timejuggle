import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

const projects = [
  { code: "BNA-PAN-CLD-2026-004", name: "Cloud Migration Phase 2", client: "Banco Nacional", type: "Billable", sp: 320, delivered: 48, pos: 2, status: "Activo" },
  { code: "BNA-PAN-CLD-2026-003", name: "Cloud Migration Phase 1", client: "Banco Nacional", type: "Billable", sp: 240, delivered: 210, pos: 2, status: "Cierre" },
  { code: "PQS-ARG-DAT-2026-001", name: "Data Warehouse Upgrade", client: "Petroquímica del Sur", type: "Billable", sp: 180, delivered: 72, pos: 3, status: "Activo" },
  { code: "TCI-USA-CLD-2026-001", name: "Cloud Modernization", client: "TechCorp International", type: "Billable", sp: 400, delivered: 20, pos: 1, status: "Activo" },
  { code: "STRA-INT-PMS-2026-001", name: "StrataPMS TimeJuggle 2.0", client: "Strata (Interno)", type: "Interno", sp: 0, delivered: 0, pos: 0, status: "Activo" },
  { code: "STRA-VACL-2026", name: "Vacaciones", client: "Strata (Interno)", type: "No billable", sp: 0, delivered: 0, pos: 0, status: "Activo" },
];

export default function M2Page() {
  return (
    <>
      <Topbar breadcrumb="M2 / Project Registry" title="Proyectos & POs" />
      <div className="p-6 flex-1">

        {/* Code generator banner */}
        <div className="bg-gradient-to-r from-neon-blue to-deep-violet rounded-xl px-6 py-4 text-white mb-6">
          <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Generador de código automático</div>
          <div className="font-display text-3xl font-black tracking-widest mb-2">BNA-PAN-CLD-2026-005</div>
          <div className="flex gap-2 flex-wrap">
            {[["BNA = Banco Nacional", "bg-bleu-france/60"], ["PAN = Panamá", "bg-amethyst/60"], ["CLD = Cloud", "bg-ocean-blue/60"], ["2026", "bg-sky-blue/60"], ["#005 auto-inc", "bg-white/20"]].map(([label, bg]) => (
              <span key={label} className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${bg}`}>{label}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard label="Proyectos activos" value="23" delta="+4 este trimestre" deltaType="up" accent="blue" />
          <StatCard label="SP contratados totales" value="1,840" delta="En POs abiertas" accent="sky" />
          <StatCard label="POs activas" value="31" delta="En 12 proyectos" accent="amethyst" />
          <StatCard label="Clientes activos" value="8" delta="3 países" accent="ocean" />
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <input className="flex-1 max-w-[260px] h-8 border border-border rounded-md px-3 text-[13px] outline-none focus:border-bleu-france" placeholder="🔍  Buscar proyecto…" />
            <select className="h-8 border border-border rounded-md px-2 text-[13px] bg-white outline-none">
              <option>Todos los estados</option><option>Activo</option><option>Cierre</option><option>Finalizado</option>
            </select>
            <select className="h-8 border border-border rounded-md px-2 text-[13px] bg-white outline-none">
              <option>Todos los tipos</option><option>Billable</option><option>Interno</option><option>No billable</option>
            </select>
            <button className="ml-auto h-8 px-3 bg-neon-blue text-white text-[12px] font-medium rounded-md hover:bg-ocean-blue transition-colors">
              + Nuevo proyecto
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-strata-bg">
                {["Código", "Nombre", "Cliente", "Tipo", "SP Contratados", "SP Entregados", "POs", "Estado", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.5px] text-cool-grey border-b border-border whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.code} className="border-b border-[#f0f1f5] last:border-0 hover:bg-[#fafbff]">
                  <td className="px-4 py-3 font-mono text-[11px] font-bold text-neon-blue">{p.code}</td>
                  <td className="px-4 py-3 text-[13px] font-medium text-[#1a1a2e]">{p.name}</td>
                  <td className="px-4 py-3 text-[12px] text-cool-grey">{p.client}</td>
                  <td className="px-4 py-3">
                    <Badge variant={p.type === "Billable" ? "sky" : p.type === "Interno" ? "violet" : "grey"}>{p.type}</Badge>
                  </td>
                  <td className="px-4 py-3 text-[13px] font-semibold">{p.sp > 0 ? `${p.sp} SP` : "—"}</td>
                  <td className="px-4 py-3 text-[13px]">{p.delivered > 0 ? `${p.delivered} SP` : "—"}</td>
                  <td className="px-4 py-3 text-[13px]">{p.pos}</td>
                  <td className="px-4 py-3">
                    <Badge variant={p.status === "Activo" ? "green" : p.status === "Cierre" ? "amber" : "grey"}>{p.status}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[12px] px-2.5 py-1 border border-border rounded-md hover:bg-strata-bg transition-colors">Ver</button>
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
