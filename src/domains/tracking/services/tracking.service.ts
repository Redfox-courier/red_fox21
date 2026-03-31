import { simulateLatency } from "@/core/utils/delay";
import type { ApiResponse } from "@/types/common";
import type { TrackingResult } from "../types";

const MOCK_TRACKING: Record<string, TrackingResult> = {
  RFC8A3F92B1: {
    trackingNumber: "RFC8A3F92B1",
    currentStatus: "in_transit",
    estimatedDelivery: "2026-04-05T00:00:00Z",
    carrier: "DHL Express",
    events: [
      {
        id: "EVT-001",
        type: "order_placed",
        description: "Shipment order created",
        location: "Mumbai, India",
        timestamp: "2026-03-28T10:00:00Z",
      },
      {
        id: "EVT-002",
        type: "picked_up",
        description: "Package picked up from sender",
        location: "Mumbai, India",
        timestamp: "2026-03-29T08:30:00Z",
      },
      {
        id: "EVT-003",
        type: "in_transit",
        description: "Departed from origin hub",
        location: "Mumbai International Airport",
        timestamp: "2026-03-30T02:00:00Z",
      },
    ],
  },
};

class TrackingService {
  async trackShipment(trackingNumber: string): Promise<ApiResponse<TrackingResult>> {
    await simulateLatency(500);
    const result = MOCK_TRACKING[trackingNumber];
    if (!result) throw new Error(`No tracking info for ${trackingNumber}`);
    return { success: true, message: "OK", data: result };
  }
}

export const trackingService = new TrackingService();
