export type TrackingEventType =
  | "order_placed"
  | "picked_up"
  | "in_transit"
  | "customs_clearance"
  | "out_for_delivery"
  | "delivered"
  | "exception";

export interface TrackingEvent {
  id: string;
  type: TrackingEventType;
  description: string;
  location: string;
  timestamp: string;
}

export interface TrackingResult {
  trackingNumber: string;
  currentStatus: TrackingEventType;
  estimatedDelivery: string;
  carrier: string;
  events: TrackingEvent[];
}
