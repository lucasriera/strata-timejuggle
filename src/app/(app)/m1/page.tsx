import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

const collabs = [
  { initials: "AG", name: "Alejandro García", area: "Cloud", seniority: "Senior", manager: "Lucas R.", rpBase: 32, rpOverride: null, costRate: "$85/h", status: "Activo" },
  { initials: "JT", name: "Juan Torres", area: "Datos & Analytics", seniority: "Senior", manager: "Lucas R.", rpBase: 32, rpOverride: 28, costRate: "$90/h", status: "Activo" },
  { initials: "MP", name: "María Pérez", area: "Consultoría", seniority: "Mid", manager: "Alejandro G.", rpBase: 24, rpOverride: null, costRate: "$65/h", status: "Activo" },
  { initials: "RL", name: "Rosa López", area: "Cloud", seniority: "Junior", manager: "Alejandro G.", rpBase: 16, rpOverride: null, costRate: "$40/h", status: "Activo" },
  { initials: "CS", name: "Carlos Soto", area: "Datos & Analytics", seniority: "Senior", manager: "Juan T.", rpBase: 32, rpOverride: 36, costRate: "$80/h", status: "Licencia" },
  { initials: "AV", name: "Andrea Vega", area: "Consultoría", seniority: "Mid", manager: "María P.", rpBase: 24, rpOverride: null, costRate: "$60/h", status: "Activo" },
];

export default function M1Page() {
  return (
    <>
      <Topbar breadcrumb="M1 / Colaboradores" title="Colaboradores" />
      <div className="p-6 flex-1">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard label="Total colaboradores" value="41" delta="+3 vs trimestre anterior" deltaType="up" accent="blue" />
          <StatCard label="RP total disponible" value="1,148" delta="pts / quincena" accent="sky" />
          <StatCard label="RP promedio" value="28" delta="pts / colaborador" accent="amethyst" />
          <StatCard label="Con override RP" value="7" delta="Capacidad ajustada" accent="ocean" />
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <input className="flex-1 max-w-[260px] h-8 border border-border rounded-md px-3 text-[13px] outline-none focus:border-bleu-france" placeholder="🔍  Buscar colaborador…" />
            <select className="h-8 border border-border rounded-md px-2 text-[13px] bg-white outline-none">
              <option>Todas las áreas</option>
              <option>Datos & Analytics</option><option>Cloud</option><option>Consultoría</option>
            </select>
            <select className="h-8 border border-border rounded-md px-2 text-[13px] bg-white outline-none">
              <option>Todos los niveles</option>
              <option>Principal</option><option>Senior</option><option>Mid</option><option>Junior</option>
            </select>
            <button className="ml-auto h-8 px-3 bg-neon-blue text-white text-[12px] font-medium rounded-md hover:bg-ocean-blue transition-colors">
              + Nuevo colaborador
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-strata-bg">
                {["Colaborador", "Área", "Seniority", "Manager", "RP Base", "RP Override", "Cost Rate", "Estado", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.5px] text-cool-grey border-b border-border whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {collabs.map((c) => (
                <tr key={c.name} className="border-b border-[#f0f1f5] last:border-0 hover:bg-[#fafbff]">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-ocean-blue flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                        {c.initials}
                      </div>
                      <div className="text-[13px] font-medium text-[#1a1a2e]">{c.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px]">{c.area}</td>
                  <td className="px-4 py-3">
                    <Badge variant={c.seniority === "Senior" || c.seniority === "Principal" ? "blue" : c.seniority === "Mid" ? "sky" : "grey"}>
                      {c.seniority}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-[12px] text-cool-grey">{c.manager}</td>
                  <td className="px-4 py-3 text-[13px] font-semibold text-[#1a1a2e]">{c.rpBase} pts</td>
                  <td className="px-4 py-3">
                    {c.rpOverride ? (
                      <span className="text-[13px] font-semibold text-amethyst">{c.rpOverride} pts</span>
                    ) : (
                      <Badge variant="grey">—</Badge>
                    )}
                  </td>
                  <td className="px-4 py-3 font-mono text-[12px]">{c.costRate}</td>
                  <td className="px-4 py-3">
                    <Badge variant={c.status === "Activo" ? "green" : "amber"}>{c.status}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[12px] px-2.5 py-1 border border-border rounded-md hover:bg-strata-bg transition-colors">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-3 text-center text-[12px] text-cool-grey border-t border-border">
            Mostrando 6 de 41 colaboradores
          </div>
        </div>

        {/* RP Matrix */}
        <div className="mt-6 bg-white border border-border rounded-xl p-4 overflow-x-auto">
          <h3 className="font-display font-semibold text-[13px] text-[#1a1a2e] mb-3">Matriz RP — Capacidad por Seniority × Área (pts/quincena)</h3>
          <table className="w-full text-[12px]">
            <thead>
              <tr className="bg-strata-bg">
                {["Seniority", "Datos & Analytics", "Cloud", "Consultoría", "Operaciones"].map((h) => (
                  <th key={h} className="px-3 py-2 font-semibold text-cool-grey border border-border text-center">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Principal", "40", "40", "38", "36"],
                ["Senior", "32", "32", "30", "28"],
                ["Mid", "24", "24", "22", "20"],
                ["Junior", "16", "16", "14", "12"],
              ].map(([level, ...vals]) => (
                <tr key={level}>
                  <td className="px-3 py-2 font-semibold text-[#1a1a2e] border border-border">{level}</td>
                  {vals.map((v, i) => (
                    <td key={i} className="px-3 py-2 text-center font-bold text-neon-blue border border-border">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
