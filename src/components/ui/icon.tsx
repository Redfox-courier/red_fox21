import { type LucideIcon, type LucideProps } from "lucide-react";
import { cn } from "@/core/utils/cn";

/* ─────────────────────────────────────────────────────────────
   Icon Size Scale
   Mirrors the typography scale: xs → caption, sm → body, md → title,
   lg → headline, xl → display. Use these instead of raw px values
   so the icon weight stays optically balanced with adjacent text.
   ───────────────────────────────────────────────────────────── */
export const ICON_SIZES = {
  xs:  "h-3 w-3",       /* 12px — captions, dense table cells        */
  sm:  "h-3.5 w-3.5",   /* 14px — body text, form labels              */
  md:  "h-4 w-4",       /* 16px — default, inline with T3/B1 text     */
  lg:  "h-5 w-5",       /* 20px — headline context, card headers      */
  xl:  "h-6 w-6",       /* 24px — section headers, empty states      */
  "2xl": "h-8 w-8",     /* 32px — illustrations, step indicators      */
  "3xl": "h-10 w-10",   /* 40px — hero / loading states               */
} as const;

export type IconSize = keyof typeof ICON_SIZES;

/* ─────────────────────────────────────────────────────────────
   Icon Component
   Wraps any LucideIcon with enforced size scale and strokeWidth.
   Colour is applied via className (use text-brand-600 etc.).

   Usage:
     <Icon icon={Package} size="lg" className="text-brand-600" />
     <Icon icon={CheckCircle2} size="md" className="text-success-600" />
     <Icon icon={AlertTriangle} size="sm" className="text-warning-500" />
   ───────────────────────────────────────────────────────────── */
interface IconProps extends Omit<LucideProps, "size"> {
  icon: LucideIcon;
  size?: IconSize;
  /**
   * strokeWidth defaults to 1.75 — optically balanced at all sizes.
   * Use 1.5 for large decorative icons, 2 for small dense contexts.
   */
  strokeWidth?: number;
}

export function Icon({
  icon: LucideIcon,
  size = "md",
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <LucideIcon
      className={cn(ICON_SIZES[size], "shrink-0", className)}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...props}
    />
  );
}
