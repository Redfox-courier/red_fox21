import { simulateLatency } from "@/core/utils/delay";
import type { ApiResponse, PaginatedResponse } from "@/types/common";
import type { CreateShipmentPayload, Shipment } from "../types";
import { MOCK_SHIPMENTS } from "./shipment.mock";

/**
 * ShipmentService
 *
 * All methods currently return mock data.
 * To integrate with the real microservice:
 *   1. Replace `simulateLatency()` + mock return with `apiClient.get/post/...`
 *   2. The return type contracts remain unchanged — no consumer code breaks.
 */
class ShipmentService {
  async getShipments(): Promise<PaginatedResponse<Shipment[]>> {
    await simulateLatency();
    return {
      success: true,
      message: "Shipments fetched",
      data: MOCK_SHIPMENTS,
      meta: { total: MOCK_SHIPMENTS.length, page: 1, perPage: 10, totalPages: 1 },
    };
  }

  async getShipmentById(id: string): Promise<ApiResponse<Shipment>> {
    await simulateLatency();
    const shipment = MOCK_SHIPMENTS.find((s) => s.id === id);
    if (!shipment) throw new Error(`Shipment ${id} not found`);
    return { success: true, message: "OK", data: shipment };
  }

  async createShipment(payload: CreateShipmentPayload): Promise<ApiResponse<Shipment>> {
    await simulateLatency(600);
    const newShipment: Shipment = {
      id: `SHP-${Date.now()}`,
      trackingNumber: `RFC${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
      origin: payload.origin,
      destination: payload.destination,
      weight: payload.weight,
      status: "pending",
      courier: payload.courierId,
      estimatedDelivery: new Date(Date.now() + 7 * 86_400_000).toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { success: true, message: "Shipment created", data: newShipment };
  }
}

export const shipmentService = new ShipmentService();
