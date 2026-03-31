import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import type { User, LoginPayload, RegisterPayload } from "../types";
import { simulateLatency } from "@/core/utils/delay";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const MOCK_USERS: User[] = [
  {
    id: "USR-001",
    name: "Admin User",
    email: "admin@redfoxcourier.com",
    role: "admin",
    companyName: "RedFox Courier",
    createdAt: "2025-01-01T00:00:00Z",
  },
  {
    id: "USR-002",
    name: "Operator Smith",
    email: "operator@redfoxcourier.com",
    role: "operator",
    createdAt: "2025-06-01T00:00:00Z",
  },
  {
    id: "USR-003",
    name: "Rahul Mehta",
    email: "customer@example.com",
    role: "customer",
    companyName: "Mehta Exports",
    createdAt: "2026-01-15T00:00:00Z",
  },
];

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,

        login: async ({ email, password }) => {
          set({ isLoading: true, error: null });
          await simulateLatency(800);

          const found = MOCK_USERS.find((u) => u.email === email);
          if (!found || password.length < 6) {
            set({ isLoading: false, error: "Invalid email or password" });
            return;
          }

          if (typeof window !== "undefined") {
            localStorage.setItem("redfox:access_token", `mock_jwt_${found.id}`);
          }

          set({ user: found, isAuthenticated: true, isLoading: false });
        },

        register: async ({ name, email, companyName }) => {
          set({ isLoading: true, error: null });
          await simulateLatency(1000);

          const newUser: User = {
            id: `USR-${Date.now()}`,
            name,
            email,
            role: "customer",
            companyName,
            createdAt: new Date().toISOString(),
          };

          if (typeof window !== "undefined") {
            localStorage.setItem("redfox:access_token", `mock_jwt_${newUser.id}`);
          }

          set({ user: newUser, isAuthenticated: true, isLoading: false });
        },

        logout: () => {
          if (typeof window !== "undefined") {
            localStorage.removeItem("redfox:access_token");
          }
          set({ user: null, isAuthenticated: false });
        },

        clearError: () => set({ error: null }),
      }),
      { name: "redfox:auth" }
    ),
    { name: "AuthStore" }
  )
);
