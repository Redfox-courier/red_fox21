export type ShipmentStatus =
  | "pending"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "returned"
  | "failed";

export interface Shipment {
  id: string;
  trackingNumber: string;
  origin: Address;
  destination: Address;
  status: ShipmentStatus;
  weight: number; // kg
  estimatedDelivery: string; // ISO date
  courier: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone?: string;
}

export interface CreateShipmentPayload {
  origin: Address;
  destination: Address;
  weight: number;
  courierId: string;
}
