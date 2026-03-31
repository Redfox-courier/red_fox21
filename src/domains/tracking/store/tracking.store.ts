import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { LoadingState } from "@/types/common";
import type { TrackingResult } from "../types";
import { trackingService } from "../services/tracking.service";

interface TrackingState {
  result: TrackingResult | null;
  loadingState: LoadingState;
  error: string | null;
  query: string;

  setQuery: (q: string) => void;
  track: (trackingNumber: string) => Promise<void>;
  reset: () => void;
}

export const useTrackingStore = create<TrackingState>()(
  devtools(
    (set) => ({
      result: null,
      loadingState: "idle",
      error: null,
      query: "",

      setQuery: (q) => set({ query: q }),

      track: async (trackingNumber) => {
        set({ loadingState: "loading", error: null, result: null });
        try {
          const res = await trackingService.trackShipment(trackingNumber);
          set({ result: res.data, loadingState: "success" });
        } catch (err) {
          set({ loadingState: "error", error: (err as Error).message });
        }
      },

      reset: () => set({ result: null, error: null, loadingState: "idle", query: "" }),
    }),
    { name: "TrackingStore" }
  )
);
