import { cn } from "@/lib/utils";

type Accent = "blue" | "sky" | "amethyst" | "ocean" | "green" | "amber" | "red";

const accents: Record<Accent, string> = {
  blue:     "border-t-neon-blue",
  sky:      "border-t-bleu-france",
  amethyst: "border-t-amethyst",
  ocean:    "border-t-ocean-blue",
  green:    "border-t-green-500",
  amber:    "border-t-amber-500",
  red:      "border-t-red-500",
};

interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
  deltaType?: "up" | "down" | "neutral";
  accent?: Accent;
  className?: string;
}

export function StatCard({
  label,
  value,
  delta,
  deltaType = "neutral",
  accent = "blue",
  className,
}: StatCardProps) {
  const deltaColor =
    deltaType === "up" ? "text-green-600" :
    deltaType === "down" ? "text-red-600" :
    "text-cool-grey";

  return (
    <div
      className={cn(
        "bg-white border border-border border-t-[3px] rounded-[10px] px-[18px] py-4",
        accents[accent],
        className
      )}
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.5px] text-cool-grey mb-1.5">
        {label}
      </div>
      <div className="font-display text-[26px] font-bold text-[#1a1a2e] leading-none">
        {value}
      </div>
      {delta && (
        <div className={cn("text-[11px] mt-1", deltaColor)}>{delta}</div>
      )}
    </div>
  );
}
