"use client";

import { useEffect } from "react";
import { Package, ArrowUpRight, Loader2 } from "lucide-react";
import { useShipmentStore } from "@/domains/shipment/store/shipment.store";
import { cn } from "@/core/utils/cn";

const STATUS_STYLES: Record<string, { label: string; className: string }> = {
  pending: { label: "Pending", className: "bg-yellow-100 text-yellow-700" },
  picked_up: { label: "Picked Up", className: "bg-blue-100 text-blue-700" },
  in_transit: { label: "In Transit", className: "bg-orange-100 text-orange-700" },
  out_for_delivery: { label: "Out for Delivery", className: "bg-purple-100 text-purple-700" },
  delivered: { label: "Delivered", className: "bg-green-100 text-green-700" },
  returned: { label: "Returned", className: "bg-gray-100 text-gray-700" },
  failed: { label: "Failed", className: "bg-red-100 text-red-700" },
};

export default function ShipmentsPage() {
  const { shipments, loadingState, fetchShipments } = useShipmentStore();

  useEffect(() => {
    fetchShipments();
  }, [fetchShipments]);

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Shipments</h1>
        <button className="flex items-center gap-2 rounded-xl bg-[#E84C14] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#d0430f] transition-colors">
          <Package className="h-4 w-4" />
          New Shipment
        </button>
      </div>

      {loadingState === "loading" && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-6 w-6 animate-spin text-[#E84C14]" />
        </div>
      )}

      {loadingState === "success" && (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {["Tracking #", "Origin", "Destination", "Status", "Courier", "Est. Delivery", ""].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {shipments.map((s) => {
                const statusStyle = STATUS_STYLES[s.status] ?? STATUS_STYLES.pending;
                return (
                  <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-mono text-xs font-semibold text-gray-800">{s.trackingNumber}</td>
                    <td className="px-5 py-4 text-gray-600">{s.origin.city}, {s.origin.country}</td>
                    <td className="px-5 py-4 text-gray-600">{s.destination.city}, {s.destination.country}</td>
                    <td className="px-5 py-4">
                      <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", statusStyle.className)}>
                        {statusStyle.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{s.courier}</td>
                    <td className="px-5 py-4 text-gray-600">
                      {new Date(s.estimatedDelivery).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-gray-400 hover:text-[#E84C14] transition-colors">
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
