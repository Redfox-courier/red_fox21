import { type ElementType, type HTMLAttributes } from "react";
import { cn } from "@/core/utils/cn";
import { variantMap } from "@/core/theme/tokens/typography.tokens";
import { resolveColor } from "@/core/theme/tokens/color.tokens";

export type TypographyVariant =
  // Display
  | "displayLarge" | "displayMedium" | "displaySmall"
  // Headline
  | "h1Bold" | "h1Semi"
  | "h2Bold" | "h2Semi"
  | "h3Bold" | "h3Semi"
  // Title
  | "t1Bold" | "t1Semi" | "t1Medium"
  | "t2Bold" | "t2Semi" | "t2Medium"
  | "t3Bold" | "t3Semi" | "t3Medium"
  | "t4Bold" | "t4Semi" | "t4Medium"
  // Body
  | "b1Semi" | "b1Medium" | "b1Regular"
  | "b2Semi" | "b2Medium" | "b2Regular"
  | "b3Semi" | "b3Medium" | "b3Regular"
  | "b4Semi" | "b4Medium" | "b4Regular"
  // Caption
  | "c1Semi" | "c1Medium"
  | "c2Semi" | "c2Medium";

/**
 * Color accepts:
 *   - Semantic token: "text.primary", "primary.main", "error.main" …
 *   - Raw Tailwind class: "text-neutral-500", "text-brand-600" …
 */
export type TypographyColor =
  | "text.primary" | "text.secondary" | "text.disabled" | "text.hint" | "text.white" | "text.brand"
  | "primary.main" | "primary.light" | "primary.dark"
  | "secondary.main" | "secondary.light" | "secondary.dark"
  | "error.main" | "error.light" | "error.dark"
  | "warning.main" | "warning.light" | "warning.dark"
  | "success.main" | "success.light" | "success.dark"
  | "info.main" | "info.light" | "info.dark"
  | (string & {});  // allow raw Tailwind classes without losing autocomplete

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Forwarded to <label> when as="label" */
  htmlFor?: string;
  variant?: TypographyVariant;
  color?: TypographyColor;
  /**
   * Override the rendered HTML element.
   * By default, the element is chosen automatically per variant
   * (e.g. h1Bold → <h1>, b2Semi → <p>, c1Semi → <span>).
   */
  as?: ElementType;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Typography — Tailwind-native equivalent of MUI <Typography>.
 *
 * Usage (mirrors seller-management pattern):
 *   <Typography variant="b2Semi" color="text.secondary">Hello</Typography>
 *   <Typography variant="h1Bold" color="primary.main">RedFox Courier</Typography>
 *   <Typography variant="c1Medium" color="text.disabled" as="label">hint</Typography>
 */
export function Typography({
  variant = "b2Regular",
  color,
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  const token = variantMap[variant];
  const Tag = (as ?? token?.tag ?? "p") as ElementType;
  const colorClass = color ? resolveColor(color) : undefined;

  return (
    <Tag
      className={cn(token?.cssClass, colorClass, className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
