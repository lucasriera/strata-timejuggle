import { Bell } from "lucide-react";

interface TopbarProps {
  breadcrumb: string;
  title: string;
  children?: React.ReactNode;
}

export function Topbar({ breadcrumb, title, children }: TopbarProps) {
  return (
    <header className="h-14 bg-white border-b border-border flex items-center px-6 gap-4 sticky top-0 z-40">
      <div className="flex-1">
        <div className="text-[11px] text-cool-grey">{breadcrumb}</div>
        <div className="font-display font-semibold text-[15px] text-[#1a1a2e] leading-tight">
          {title}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {children}
        <button className="relative w-8 h-8 rounded-lg bg-strata-bg border border-border flex items-center justify-center text-cool-grey hover:bg-light-silver/30 transition-colors">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-bleu-france flex items-center justify-center text-white text-[11px] font-bold cursor-pointer">
          LR
        </div>
      </div>
    </header>
  );
}
