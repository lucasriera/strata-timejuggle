"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const modules = [
  { href: "/m0",        icon: "⚙️",  label: "M0 Core Platform" },
  { href: "/m1",        icon: "👥",  label: "M1 Colaboradores" },
  { href: "/m2",        icon: "📁",  label: "M2 Proyectos",     badge: "MVP" },
  { href: "/m3",        icon: "📊",  label: "M3 Demand Planning" },
  { href: "/m4",        icon: "⏱",  label: "M4 TimeJuggle" },
  { href: "/m5",        icon: "🏃",  label: "M5 PM Scrum" },
  { href: "/m6",        icon: "💳",  label: "M6 Billing",       badge: "MVP" },
  { href: "/m7",        icon: "📈",  label: "M7 KPIs" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[220px] min-h-screen bg-neon-blue flex flex-col fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-white/10">
        <div>
          <div className="font-display font-bold text-[17px] text-white tracking-wide">
            STRATA
          </div>
          <div className="text-[10px] text-white/45 font-normal leading-none">
            PMS TimeJuggle 2.0
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3">
        <div className="px-5 mb-2 text-[9px] font-bold uppercase tracking-widest text-white/35">
          Módulos
        </div>
        {modules.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-5 py-[9px] text-[12.5px] transition-colors border-l-[3px]",
                active
                  ? "bg-white/[0.14] text-white border-bleu-france font-medium"
                  : "text-white/68 border-transparent hover:bg-white/[0.07] hover:text-white"
              )}
            >
              <span className="text-[13px] w-4">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[9px] font-bold bg-bleu-france text-white px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-white/10 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-bleu-france flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
          LR
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[12px] text-white font-medium truncate">
            Lucas Rodríguez
          </div>
          <div className="text-[10px] text-white/45">SUPERADMIN</div>
        </div>
      </div>
    </aside>
  );
}
