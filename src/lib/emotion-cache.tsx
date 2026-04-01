"use client";

/**
 * EmotionCacheProvider — passthrough shell.
 *
 * Originally bootstrapped for MUI's AppRouter SSR cache.
 * Since we standardized on Tailwind + shadcn (no MUI Material),
 * this is now a lightweight wrapper kept for compatibility.
 * If MUI Material is re-introduced later, restore:
 *   import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
 *   return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
 */
export function EmotionCacheProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
