export const env = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api/v1",
  APP_ENV: (process.env.NEXT_PUBLIC_APP_ENV ?? "development") as "development" | "staging" | "production",
  APP_NAME: "RedFox Courier",
  APP_VERSION: "1.0.0",
} as const;
