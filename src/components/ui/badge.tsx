import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "sky" | "green" | "amber" | "red" | "grey" | "violet";

const variants: Record<BadgeVariant, string> = {
  blue:   "bg-[#e8eeff] text-neon-blue",
  sky:    "bg-[#e3f0ff] text-bleu-france",
  green:  "bg-[#e8f5e9] text-green-600",
  amber:  "bg-[#fff8e1] text-amber-600",
  red:    "bg-[#fdecea] text-red-600",
  grey:   "bg-[#f0f1f5] text-cool-grey",
  violet: "bg-[#f0eaff] text-amethyst",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "grey", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
