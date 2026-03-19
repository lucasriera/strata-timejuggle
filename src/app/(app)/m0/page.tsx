import { Topbar } from "@/components/layout/topbar";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";

const users = [
  { initials: "LR", name: "Lucas Rodríguez", email: "lucas@strata-analytics.us", tier: "SUPERADMIN", area: "Dirección", lastSeen: "Hoy 10:22", status: "Activo" },
  { initials: "CM", name: "Carolina Manzano", email: "carolina@strata-analytics.us", tier: "FINANCE", area: "Finanzas", lastSeen: "Hoy 09:15", status: "Activo" },
  { initials: "AG", name: "Alejandro García", email: "alejandro@strata-analytics.us", tier: "MANAGER_EL", area: "Cloud", lastSeen: "Ayer 18:44", status: "Activo" },
  { initials: "JT", name: "Juan Torres", email: "juan@strata-analytics.us", tier: "TECH_LEAD", area: "Datos & Analytics", lastSeen: "Hoy 11:30", status: "Activo" },
  { initials: "MP", name: "María Pérez", email: "maria@strata-analytics.us", tier: "PO", area: "Consultoría", lastSeen: "Hace 2 días", status: "Activo" },
  { initials: "RL", name: "Rosa López", email: "rosa@strata-analytics.us", tier: "COLLABORATOR", area: "Cloud", lastSeen: "Hace 3 días", status: "Activo" },
  { initials: "PC", name: "Pedro Castillo", email: "pedro@strata-analytics.us", tier: "VIEWER", area: "Operaciones", lastSeen: "Hace 1 semana", status: "Inactivo" },
];

const tierVariant: Record<string, "blue" | "sky" | "violet" | "grey" | "green"> = {
  SUPERADMIN: "blue", ADMIN: "blue", FINANCE: "violet",
  MANAGER_EL: "sky", PO: "sky", TECH_LEAD: "sky",
  COLLABORATOR: "green", VIEWER: "grey",
};

export default function M0Page() {
  return (
    <>
      <Topbar breadcrumb="M0 / Core Platform" title="Gestión de Usuarios" />
      <div className="p-6 flex-1">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard label="Total usuarios" value="47" accent="blue" />
          <StatCard label="Admins" value="4" delta="SUPERADMIN + ADMIN" accent="sky" />
          <StatCard label="Colaboradores" value="38" delta="+3 este mes" deltaType="up" accent="amethyst" />
          <StatCard label="Con override activo" value="5" delta="Excepciones de módulo" accent="ocean" />
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <input
              className="flex-1 max-w-[280px] h-8 border border-border rounded-md px-3 text-[13px] text-cool-grey outline-none focus:border-bleu-france"
              placeholder="🔍  Buscar usuario…"
            />
            <select className="h-8 border border-border rounded-md px-2 text-[13px] text-cool-grey bg-white outline-none">
              <option>Todos los tiers</option>
              <option>SUPERADMIN</option><option>ADMIN</option><option>FINANCE</option>
              <option>MANAGER_EL</option><option>PO</option><option>TECH_LEAD</option>
              <option>COLLABORATOR</option><option>VIEWER</option>
            </select>
            <button className="ml-auto h-8 px-3 bg-neon-blue text-white text-[12px] font-medium rounded-md hover:bg-ocean-blue transition-colors">
              + Invitar usuario
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-strata-bg">
                {["Usuario", "Tier", "Área", "Último acceso", "Estado", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.5px] text-cool-grey border-b border-border whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email} className="border-b border-[#f0f1f5] last:border-0 hover:bg-[#fafbff]">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-bleu-france to-amethyst flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                        {u.initials}
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-[#1a1a2e]">{u.name}</div>
                        <div className="text-[11px] text-cool-grey">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={tierVariant[u.tier] ?? "grey"}>{u.tier}</Badge>
                  </td>
                  <td className="px-4 py-3 text-[13px]">{u.area}</td>
                  <td className="px-4 py-3 text-[12px] text-cool-grey">{u.lastSeen}</td>
                  <td className="px-4 py-3">
                    <Badge variant={u.status === "Activo" ? "green" : "amber"}>{u.status}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[12px] px-2.5 py-1 border border-border rounded-md hover:bg-strata-bg transition-colors">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RBAC Matrix */}
        <div className="mt-6 bg-white border border-border rounded-xl p-4 overflow-x-auto">
          <h3 className="font-display font-semibold text-[13px] text-[#1a1a2e] mb-3">Matriz RBAC — Permisos por Tier</h3>
          <table className="w-full text-[11px]">
            <thead>
              <tr className="bg-strata-bg">
                {["Tier", "M0", "M1", "M2", "M3", "M4", "M5", "M6", "M7"].map((h) => (
                  <th key={h} className="px-3 py-2 text-left font-semibold text-cool-grey border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { tier: "SUPERADMIN", v: "blue", perms: ["FULL","FULL","FULL","FULL","FULL","FULL","FULL","FULL"] },
                { tier: "ADMIN", v: "blue", perms: ["EDITOR","EDITOR","EDITOR","EDITOR","EDITOR","EDITOR","EDITOR","VIEWER"] },
                { tier: "FINANCE", v: "violet", perms: ["NONE","NONE","VIEWER","VIEWER","NONE","NONE","EDITOR","VIEWER"] },
                { tier: "MANAGER_EL", v: "sky", perms: ["NONE","VIEWER","EDITOR","EDITOR","VIEWER","EDITOR","VIEWER","VIEWER"] },
                { tier: "COLLABORATOR", v: "green", perms: ["NONE","NONE","NONE","VIEWER*","EDITOR","VIEWER","NONE","NONE"] },
              ].map((row) => (
                <tr key={row.tier} className="border-b border-[#f0f1f5] last:border-0">
                  <td className="px-3 py-2"><Badge variant={row.v as "blue" | "sky" | "violet" | "green"}>{row.tier}</Badge></td>
                  {row.perms.map((p, i) => (
                    <td key={i} className="px-3 py-2">
                      <Badge variant={p === "FULL" || p === "EDITOR" ? "blue" : p === "VIEWER" || p.startsWith("VIEWER") ? "green" : "grey"}>
                        {p}
                      </Badge>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[10px] text-cool-grey mt-2">* COLLABORATOR en M3 solo ve su propia fila</p>
        </div>
      </div>
    </>
  );
}
