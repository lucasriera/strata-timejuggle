import { Topbar } from "@/components/layout/topbar";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/ui/stat-card";

const projects = ["BNA-PAN-CLD-004", "PQS-ARG-DAT-001", "TCI-USA-CLD-001", "STRA-INT-PMS", "STRA-VACL"];

const data = [
  { name: "Alejandro García", area: "Cloud", seniority: "Senior", rp: 32, sa: "0%", values: [60, 40, 0, 0, 0] },
  { name: "Juan Torres", area: "Datos & Analytics", seniority: "Senior", rp: 28, sa: "0%", values: [35, 45, 0, 20, 0] },
  { name: "Rosa López", area: "Cloud", seniority: "Junior", rp: 16, sa: "0%", values: [100, 0, 0, 0, 0] },
  { name: "María Pérez", area: "Consultoría", seniority: "Mid", rp: 24, sa: "25%", values: [0, 0, 75, 0, 0] },
  { name: "Andrea Vega", area: "Consultoría", seniority: "Mid", rp: 24, sa: "0%", values: [0, 60, 20, 20, 0] },
  { name: "Carlos Soto", area: "Datos & Analytics", seniority: "Senior", rp: 0, sa: "100%", values: [0, 0, 0, 0, 0] },
];

function PctCell({ value }: { value: number }) {
  if (value === 0) return <td className="px-1 py-2 text-center text-[12px] text-light-silver">—</td>;
  return (
    <td className="px-1 py-2 text-center">
      <span className="inline-flex items-center justify-center w-10 h-7 rounded text-[12px] font-semibold bg-[#e3f0ff] text-bleu-france">
        {value}%
      </span>
    </td>
  );
}

export default function M3Page() {
  return (
    <>
      <Topbar breadcrumb="M3 / Demand Planning" title="Demand Planning">
        <div className="flex items-center gap-2">
          <Badge variant="sky">Quincena 2026-07</Badge>
          <Badge variant="amber">DRAFT</Badge>
          <button className="h-8 px-3 bg-neon-blue text-white text-[12px] font-medium rounded-md hover:bg-ocean-blue transition-colors">
            Guardar
          </button>
        </div>
      </Topbar>
      <div className="p-6 flex-1">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard label="Período" value="2026-07" delta="Mar 16 – Mar 31" accent="blue" />
          <StatCard label="Colaboradores" value="41" delta="6 con asignación parcial" accent="sky" />
          <StatCard label="Proyectos activos" value="23" delta="En esta quincena" accent="amethyst" />
          <StatCard label="Usuarios conectados" value="3" delta="Edición en tiempo real" deltaType="up" accent="ocean" />
        </div>

        {/* Real-time indicator */}
        <div className="bg-[#e8f5e9] border border-green-200 rounded-lg px-4 py-2.5 text-[12px] text-green-700 font-medium mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          3 usuarios conectados — AG, AM, PL están editando este período
        </div>

        {/* Grid */}
        <div className="bg-white border border-border rounded-xl overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="bg-strata-bg border-b border-border">
                <th className="sticky left-0 bg-strata-bg px-4 py-3 text-left font-semibold text-cool-grey whitespace-nowrap min-w-[180px] border-r border-border">
                  Colaborador
                </th>
                <th className="px-3 py-3 text-center font-semibold text-cool-grey whitespace-nowrap min-w-[52px]">RP</th>
                <th className="px-3 py-3 text-center font-semibold text-[#e74c3c] whitespace-nowrap min-w-[68px]">Sin Asig.</th>
                {projects.map((p) => (
                  <th key={p} className="px-1 py-3 text-center whitespace-nowrap min-w-[80px]">
                    <div className="font-mono text-[10px] font-bold text-neon-blue">{p}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => {
                const total = row.values.reduce((a, b) => a + b, 0);
                const unassigned = 100 - total;
                return (
                  <tr key={row.name} className="border-b border-[#f0f1f5] last:border-0 hover:bg-[#fafbff]">
                    <td className="sticky left-0 bg-white px-4 py-2.5 border-r border-border">
                      <div className="font-medium text-[13px] text-[#1a1a2e]">{row.name}</div>
                      <div className="text-[10px] text-cool-grey">{row.area} · {row.seniority}</div>
                    </td>
                    <td className="px-3 py-2 text-center font-semibold text-[#1a1a2e]">{row.rp}</td>
                    <td className="px-3 py-2 text-center">
                      {unassigned > 0 ? (
                        <span className="inline-flex items-center justify-center w-12 h-7 rounded text-[12px] font-bold bg-[#fdecea] text-red-600">
                          {unassigned}%
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-12 h-7 rounded text-[12px] font-bold bg-[#e8f5e9] text-green-600">
                          ✓
                        </span>
                      )}
                    </td>
                    {row.values.map((v, i) => (
                      <PctCell key={i} value={v} />
                    ))}
                  </tr>
                );
              })}
              {/* Totals row */}
              <tr className="bg-strata-bg border-t-2 border-border font-semibold">
                <td className="sticky left-0 bg-strata-bg px-4 py-2.5 text-[12px] font-bold text-[#1a1a2e] border-r border-border">Σ Total % por proyecto</td>
                <td className="px-3 py-2 text-center text-[12px] font-bold">148</td>
                <td />
                {[195, 145, 95, 40, 0].map((t, i) => (
                  <td key={i} className="px-1 py-2 text-center">
                    <span className="text-[12px] font-bold text-neon-blue">{t}%</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[11px] text-cool-grey mt-3">
          Los % deben ser múltiplos de 5. Hard-block en 100% por colaborador. Notificación Slack al EL/PO del proyecto al guardar.
        </p>
      </div>
    </>
  );
}
