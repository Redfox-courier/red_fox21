/**
 * Color Tokens
 *
 * Maps MUI-style semantic color names (used in <Typography color="...">)
 * to Tailwind text utility classes generated from globals.css @theme tokens.
 *
 * Usage in Typography:
 *   color="text.primary"   → text-neutral-900
 *   color="text.secondary" → text-neutral-600
 *   color="primary.main"   → text-brand-600
 *   color="error.main"     → text-error-600
 *
 * You can also pass any raw Tailwind class (e.g. color="text-neutral-500")
 * and the Typography component will apply it directly.
 */
export const colorTokens = {
  primary: {
    main:  "text-brand-600",
    light: "text-brand-500",
    dark:  "text-brand-700",
  },

  secondary: {
    main:  "text-neutral-500",
    light: "text-neutral-400",
    dark:  "text-neutral-600",
  },

  text: {
    primary:   "text-neutral-900",
    secondary:  "text-neutral-600",
    disabled:   "text-neutral-400",
    hint:       "text-neutral-600",
    white:      "text-white-100",
    brand:      "text-brand-600",
  },

  error: {
    main:  "text-error-600",
    light: "text-error-500",
    dark:  "text-error-700",
  },

  warning: {
    main:  "text-warning-500",
    light: "text-warning-400",
    dark:  "text-warning-600",
  },

  success: {
    main:  "text-success-500",
    light: "text-success-400",
    dark:  "text-success-600",
  },

  info: {
    main:  "text-info-500",
    light: "text-info-400",
    dark:  "text-info-600",
  },
} as const;

/** Flat color lookup used by the Typography component. */
export const colorMap: Record<string, string> = {
  // Primary / Brand
  "primary.main":  colorTokens.primary.main,
  "primary.light": colorTokens.primary.light,
  "primary.dark":  colorTokens.primary.dark,

  // Secondary / Neutral
  "secondary.main":  colorTokens.secondary.main,
  "secondary.light": colorTokens.secondary.light,
  "secondary.dark":  colorTokens.secondary.dark,

  // Text
  "text.primary":   colorTokens.text.primary,
  "text.secondary": colorTokens.text.secondary,
  "text.disabled":  colorTokens.text.disabled,
  "text.hint":      colorTokens.text.hint,
  "text.white":     colorTokens.text.white,
  "text.brand":     colorTokens.text.brand,

  // Semantic states
  "error.main":    colorTokens.error.main,
  "error.light":   colorTokens.error.light,
  "error.dark":    colorTokens.error.dark,
  "warning.main":  colorTokens.warning.main,
  "warning.light": colorTokens.warning.light,
  "warning.dark":  colorTokens.warning.dark,
  "success.main":  colorTokens.success.main,
  "success.light": colorTokens.success.light,
  "success.dark":  colorTokens.success.dark,
  "info.main":     colorTokens.info.main,
  "info.light":    colorTokens.info.light,
  "info.dark":     colorTokens.info.dark,
};

/** Resolve a color value to a Tailwind class. Falls back to the raw string. */
export function resolveColor(color: string): string {
  return colorMap[color] ?? color;
}
