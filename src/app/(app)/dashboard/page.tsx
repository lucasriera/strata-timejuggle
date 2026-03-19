import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const modules = [
  { href: "/m0", tag: "M0", name: "Core Platform", desc: "Auth, RBAC 3 niveles, catálogos, audit log", accent: "bg-neon-blue" },
  { href: "/m1", tag: "M1", name: "Colaboradores", desc: "People master: RP capacity, cost rate, seniority", accent: "bg-bleu-france" },
  { href: "/m2", tag: "M2 ⭐", name: "Project Registry", desc: "Proyectos, generador de código, POs, clientes", accent: "bg-amethyst" },
  { href: "/m3", tag: "M3", name: "Demand Planning", desc: "Grilla quincenal col × proyecto × %. Real-time", accent: "bg-ocean-blue" },
  { href: "/m4", tag: "M4", name: "TimeJuggle", desc: "% real semanal por proyecto. Debe sumar 100%", accent: "bg-neon-blue" },
  { href: "/m5", tag: "M5", name: "PM Scrum", desc: "Backlog, sprints, US, tareas, riesgos, SP+ER", accent: "bg-bleu-france" },
  { href: "/m6", tag: "M6 ⭐", name: "Billing & Forecast", desc: "Facturas real + forecast. Multi-entidad, multi-moneda", accent: "bg-amethyst" },
  { href: "/m7", tag: "M7", name: "KPIs & Dashboards", desc: "12 KPIs. Performance = Facturado − Gasto Real", accent: "bg-ocean-blue" },
];

export default function DashboardPage() {
  return (
    <>
      <Topbar breadcrumb="Strata PMS" title="Dashboard" />
      <div className="p-6 flex-1">

        {/* Hero KPI bar */}
        <div className="bg-gradient-to-r from-neon-blue to-deep-violet rounded-xl p-5 text-white mb-6 flex items-center gap-8">
          <div>
            <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Performance — Marzo 2026</div>
            <div className="font-display text-4xl font-black">$+18,240</div>
            <div className="text-sm opacity-70 mt-0.5">Facturado − Gasto Real</div>
          </div>
          <div className="w-px bg-white/20 self-stretch" />
          <div>
            <div className="text-sm opacity-70">Facturado real</div>
            <div className="font-display text-2xl font-bold">$84,000</div>
          </div>
          <div className="w-px bg-white/20 self-stretch" />
          <div>
            <div className="text-sm opacity-70">Gasto Real (TimeJuggle × Cost)</div>
            <div className="font-display text-2xl font-bold">$65,760</div>
          </div>
          <div className="w-px bg-white/20 self-stretch" />
          <div>
            <div className="text-sm opacity-70">Margen</div>
            <div className="font-display text-2xl font-bold">21.7%</div>
          </div>
          <div className="ml-auto">
            <Link href="/m7" className="text-[12px] font-semibold bg-white/15 hover:bg-white/25 px-3 py-2 rounded-lg transition-colors">
              Ver KPIs completos →
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard label="Proyectos activos" value="23" delta="+4 este trimestre" deltaType="up" accent="blue" />
          <StatCard label="Colaboradores" value="41" delta="1,148 RP/quincena" accent="sky" />
          <StatCard label="SP contratados (POs)" value="1,840" delta="En POs abiertas" accent="amethyst" />
          <StatCard label="Facturas vencidas" value="2" delta="Requiere acción" deltaType="down" accent="red" />
        </div>

        {/* Modules grid */}
        <div>
          <h2 className="font-display font-semibold text-[13px] text-cool-grey uppercase tracking-wider mb-3">
            Módulos del sistema
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {modules.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="bg-white border border-border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold text-white mb-2 ${m.accent}`}>
                  {m.tag}
                </div>
                <div className="font-display font-bold text-[14px] text-[#1a1a2e] mb-1 group-hover:text-neon-blue transition-colors">
                  {m.name}
                </div>
                <div className="text-[11px] text-cool-grey leading-snug">{m.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick status */}
        <div className="mt-6 bg-white border border-border rounded-xl p-4">
          <h3 className="font-display font-semibold text-[13px] text-[#1a1a2e] mb-3">Actividad reciente</h3>
          <div className="flex flex-col gap-2">
            {[
              { icon: "📊", text: "Quincena Q1-2026-06 cerrada automáticamente (auto-dump viernes 18:00)", time: "Ayer 18:00", tag: "M3" },
              { icon: "💳", text: "Factura FAC-2026-089 emitida — Banco Nacional · $24,000", time: "Hoy 10:22", tag: "M6" },
              { icon: "📁", text: "Proyecto BNA-PAN-CLD-2026-004 creado — Cloud Migration Phase 2", time: "Hoy 09:12", tag: "M2" },
              { icon: "⏱", text: "TimeJuggle W11 cerrado — 38/41 colaboradores completaron entrada", time: "Hace 3 días", tag: "M4" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                <span className="text-base">{item.icon}</span>
                <span className="flex-1 text-[12px] text-[#1a1a2e]">{item.text}</span>
                <Badge variant="sky">{item.tag}</Badge>
                <span className="text-[11px] text-cool-grey whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
