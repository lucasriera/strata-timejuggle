import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

const entries = [
  { code: "BNA-PAN-CLD-2026-004", name: "Cloud Migration Phase 2", client: "Banco Nacional", pct: 40 },
  { code: "PQS-ARG-DAT-2026-001", name: "Data Warehouse Upgrade", client: "Petroquímica del Sur", pct: 35 },
  { code: "STRA-INT-PMS-2026-001", name: "StrataPMS TimeJuggle 2.0", client: "Interno", pct: 0 },
];

const total = entries.reduce((a, e) => a + e.pct, 0);
const remaining = 100 - total;

export default function M4Page() {
  return (
    <>
      <Topbar breadcrumb="M4 / TimeJuggle" title="Registro de tiempo semanal" />
      <div className="p-6 flex-1">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard label="Semana" value="W12" delta="Mar 16 – 22, 2026" accent="blue" />
          <StatCard label="Total asignado" value={`${total}%`} delta={`Falta ${remaining}%`} deltaType={remaining > 0 ? "down" : "up"} accent={remaining > 0 ? "amber" : "green"} />
          <StatCard label="Proyectos esta semana" value={entries.filter(e => e.pct > 0).length.toString()} accent="amethyst" />
          <StatCard label="Estado" value="Borrador" delta="Confirmar cuando sea 100%" accent="ocean" />
        </div>

        {/* Total indicator */}
        <div className={`flex items-center gap-4 p-4 rounded-xl mb-5 border-[1.5px] ${
          remaining > 0 ? "bg-[#fff8e1] border-amber-300" : "bg-[#e8f5e9] border-green-300"
        }`}>
          <span className={`font-display text-4xl font-black ${remaining > 0 ? "text-amber-600" : "text-green-600"}`}>
            {total}%
          </span>
          <div>
            <div className={`font-semibold text-[14px] ${remaining > 0 ? "text-amber-700" : "text-green-700"}`}>
              {remaining > 0 ? `Falta asignar ${remaining}%` : "✓ Listo para confirmar"}
            </div>
            <div className="text-[12px] text-cool-grey">Debe sumar exactamente 100% para confirmar la semana</div>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="h-9 px-4 border border-border bg-white rounded-lg text-[13px] font-medium hover:bg-strata-bg transition-colors">
              Guardar borrador
            </button>
            <button className={`h-9 px-4 rounded-lg text-[13px] font-medium transition-colors text-white ${
              remaining === 0 ? "bg-neon-blue hover:bg-ocean-blue" : "bg-cool-grey/40 cursor-not-allowed"
            }`} disabled={remaining !== 0}>
              Confirmar semana
            </button>
          </div>
        </div>

        {/* Project entries */}
        <div className="flex flex-col gap-3 mb-4">
          {entries.map((e) => (
            <div key={e.code} className="bg-white border border-border rounded-xl px-5 py-4 flex items-center gap-4">
              <div className="flex-1">
                <div className="font-mono text-[11px] font-bold text-neon-blue">{e.code}</div>
                <div className="text-[13px] font-medium text-[#1a1a2e] mt-0.5">{e.name}</div>
                <div className="text-[11px] text-cool-grey">{e.client}</div>
                <div className="mt-2 h-1.5 bg-light-silver rounded-full overflow-hidden w-48">
                  <div className="h-full bg-bleu-france rounded-full transition-all" style={{ width: `${e.pct}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 border border-border rounded-lg flex items-center justify-center font-bold text-cool-grey hover:bg-strata-bg transition-colors">−</button>
                <div className={`w-16 h-9 border-[1.5px] rounded-lg text-center font-display text-[15px] font-bold flex items-center justify-center ${
                  e.pct > 0 ? "border-bleu-france bg-[#f0f6ff] text-[#1a1a2e]" : "border-border text-cool-grey/40"
                }`}>
                  {e.pct > 0 ? `${e.pct}%` : "0%"}
                </div>
                <button className="w-8 h-8 border border-border rounded-lg flex items-center justify-center font-bold text-cool-grey hover:bg-strata-bg transition-colors">+</button>
              </div>
            </div>
          ))}

          {/* Add project */}
          <button className="flex items-center gap-3 border-[1.5px] border-dashed border-light-silver rounded-xl px-5 py-4 text-cool-grey hover:border-bleu-france hover:text-bleu-france transition-colors">
            <span className="text-xl">＋</span>
            <span className="text-[13px]">Agregar otro proyecto a esta semana</span>
          </button>
        </div>

        <div className="bg-[#fff8e1] border border-amber-200 rounded-lg px-4 py-3 text-[12px] text-amber-800">
          ⚠️ Los porcentajes deben ser múltiplos de 5%. Una vez confirmado, solo el ADMIN puede editar retroactivamente.
        </div>
      </div>
    </>
  );
}
