export const ROUTES = {
  // Marketing
  HOME: "/",
  BLOG: "/blog",
  CONTACT: "/contact",

  // Auth
  LOGIN: "/login",
  REGISTER: "/register",

  // Dashboard
  DASHBOARD: "/dashboard",
  SHIPMENTS: "/dashboard/shipments",
  TRACKING: "/dashboard/tracking",
  BILLING: "/dashboard/billing",
  SETTINGS: "/dashboard/settings",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
