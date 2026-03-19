import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

const columns = [
  {
    title: "TODO", color: "bg-cool-grey", count: 3,
    cards: [
      { id: "US-018", title: "Configurar IAM roles para entornos prod", sp: 8, er: 40, type: "Cloud", assignee: "AG" },
      { id: "US-019", title: "Documentar runbooks de DR", sp: 5, er: 24, type: "Docs", assignee: "RL" },
      { id: "US-020", title: "Tests de performance en staging", sp: 13, er: 64, type: "QA", assignee: "CS" },
    ]
  },
  {
    title: "IN PROGRESS", color: "bg-bleu-france", count: 2,
    cards: [
      { id: "US-014", title: "Migrar DB Oracle → Cloud SQL", sp: 21, er: 120, type: "DB", assignee: "JT" },
      { id: "US-015", title: "Configurar VPC peering entre regiones", sp: 8, er: 48, type: "Cloud", assignee: "AG" },
    ]
  },
  {
    title: "REVIEW / QA", color: "bg-amethyst", count: 1,
    cards: [
      { id: "US-012", title: "Setup Terraform IaC para ambientes", sp: 13, er: 80, type: "DevOps", assignee: "AG" },
    ]
  },
  {
    title: "DONE ✓", color: "bg-green-600", count: 7,
    cards: [
      { id: "US-008", title: "Inventario de servicios on-premise", sp: 5, er: 24, type: "Análisis", assignee: "MP" },
      { id: "US-009", title: "Diseño arquitectura cloud target state", sp: 13, er: 72, type: "Arch", assignee: "AG" },
    ]
  },
];

export default function M5Page() {
  return (
    <>
      <Topbar breadcrumb="M5 / PM Scrum" title="PM Scrum — Cloud Migration Phase 2" />
      <div className="p-6 flex-1">
        {/* Sprint banner */}
        <div className="bg-gradient-to-r from-neon-blue to-ocean-blue rounded-xl p-4 text-white mb-5 flex items-center gap-8">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Sprint activo</div>
            <div className="font-display text-lg font-bold">Sprint 3 · Mar 3 – Mar 30, 2026</div>
          </div>
          <div>
            <div className="text-[11px] opacity-70 mb-1.5">Progreso SP</div>
            <div className="flex items-center gap-3">
              <div className="w-44 h-2.5 bg-white/25 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: "35%" }} />
              </div>
              <span className="font-bold text-[15px]">56/160 SP</span>
            </div>
          </div>
          <div><div className="text-[11px] opacity-70">ER planificados</div><div className="font-bold text-[15px] mt-0.5">2,400 pts</div></div>
          <div><div className="text-[11px] opacity-70">Días restantes</div><div className="font-bold text-[15px] mt-0.5">11 días</div></div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-5">
          <StatCard label="SP comprometidos" value="160" accent="blue" />
          <StatCard label="SP entregados" value="56" delta="Sprint en curso" accent="sky" />
          <StatCard label="US en sprint" value="12" accent="amethyst" />
          <StatCard label="Riesgos activos" value="3" delta="1 crítico" deltaType="down" accent="red" />
        </div>

        {/* Kanban */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {columns.map((col) => (
            <div key={col.title} className="flex-shrink-0 w-[260px]">
              <div className={`${col.color} text-white text-[11px] font-bold px-3 py-2 rounded-t-lg flex items-center justify-between`}>
                {col.title}
                <span className="bg-white/30 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{col.count}</span>
              </div>
              <div className="bg-strata-bg border border-border border-t-0 rounded-b-lg p-2 min-h-[200px] flex flex-col gap-2">
                {col.cards.map((card) => (
                  <div key={card.id} className={`bg-white border border-border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow ${col.title.includes("DONE") ? "opacity-70" : ""}`}>
                    <div className="font-mono text-[10px] text-cool-grey mb-1">{card.id}</div>
                    <div className="text-[13px] font-medium text-[#1a1a2e] leading-snug mb-2">{card.title}</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold bg-[#e8eeff] text-neon-blue px-1.5 py-0.5 rounded">{card.sp} SP</span>
                      <span className="text-[10px] font-bold bg-[#f0eaff] text-amethyst px-1.5 py-0.5 rounded">{card.er} ER</span>
                      <Badge variant="grey" className="text-[9px]">{card.type}</Badge>
                      <div className="ml-auto w-5 h-5 rounded-full bg-bleu-france flex items-center justify-center text-white text-[8px] font-bold">{card.assignee}</div>
                    </div>
                  </div>
                ))}
                {col.cards.length < col.count && (
                  <div className="text-[11px] text-cool-grey text-center py-2">+{col.count - col.cards.length} más…</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
