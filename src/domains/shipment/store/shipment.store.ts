import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { LoadingState } from "@/types/common";
import type { Shipment, CreateShipmentPayload } from "../types";
import { shipmentService } from "../services/shipment.service";

interface ShipmentState {
  shipments: Shipment[];
  selectedShipment: Shipment | null;
  loadingState: LoadingState;
  error: string | null;

  fetchShipments: () => Promise<void>;
  fetchShipmentById: (id: string) => Promise<void>;
  createShipment: (payload: CreateShipmentPayload) => Promise<void>;
  selectShipment: (shipment: Shipment | null) => void;
}

export const useShipmentStore = create<ShipmentState>()(
  devtools(
    (set) => ({
      shipments: [],
      selectedShipment: null,
      loadingState: "idle",
      error: null,

      fetchShipments: async () => {
        set({ loadingState: "loading", error: null });
        try {
          const res = await shipmentService.getShipments();
          set({ shipments: res.data, loadingState: "success" });
        } catch (err) {
          set({ loadingState: "error", error: (err as Error).message });
        }
      },

      fetchShipmentById: async (id) => {
        set({ loadingState: "loading", error: null });
        try {
          const res = await shipmentService.getShipmentById(id);
          set({ selectedShipment: res.data, loadingState: "success" });
        } catch (err) {
          set({ loadingState: "error", error: (err as Error).message });
        }
      },

      createShipment: async (payload) => {
        set({ loadingState: "loading", error: null });
        try {
          const res = await shipmentService.createShipment(payload);
          set((state) => ({
            shipments: [res.data, ...state.shipments],
            loadingState: "success",
          }));
        } catch (err) {
          set({ loadingState: "error", error: (err as Error).message });
        }
      },

      selectShipment: (shipment) => set({ selectedShipment: shipment }),
    }),
    { name: "ShipmentStore" }
  )
);
