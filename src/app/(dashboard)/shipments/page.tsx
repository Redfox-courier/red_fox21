"use client";

import { useEffect } from "react";
import { Package, ArrowUpRight, Loader2 } from "lucide-react";
import { useShipmentStore } from "@/domains/shipment/store/shipment.store";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/core/utils/cn";

const STATUS_STYLES: Record<string, { label: string; className: string }> = {
  pending:          { label: "Pending",          className: "bg-info-100    text-info-700"    },
  picked_up:        { label: "Picked Up",         className: "bg-brand-100   text-brand-700"   },
  in_transit:       { label: "In Transit",        className: "bg-warning-100 text-warning-700" },
  out_for_delivery: { label: "Out for Delivery",  className: "bg-success-100 text-success-700" },
  delivered:        { label: "Delivered",         className: "bg-success-100 text-success-600" },
  returned:         { label: "Returned",          className: "bg-neutral-100 text-neutral-700" },
  failed:           { label: "Failed",            className: "bg-error-100   text-error-600"   },
};

export default function ShipmentsPage() {
  const { shipments, loadingState, fetchShipments } = useShipmentStore();

  useEffect(() => {
    fetchShipments();
  }, [fetchShipments]);

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <Typography variant="h2Bold" color="text.primary">Shipments</Typography>
        <button className="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 type-b2-semi text-white-100 hover:bg-brand-700 transition-colors">
          <Package className="h-4 w-4" />
          New Shipment
        </button>
      </div>

      {loadingState === "loading" && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
        </div>
      )}

      {loadingState === "success" && (
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white-100 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-100">
                {["Tracking #", "Origin", "Destination", "Status", "Courier", "Est. Delivery", ""].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left type-c1-semi uppercase tracking-wider text-neutral-400">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {shipments.map((s) => {
                const statusStyle = STATUS_STYLES[s.status] ?? STATUS_STYLES.pending;
                return (
                  <tr key={s.id} className="hover:bg-neutral-100 transition-colors">
                    <td className="px-5 py-4 font-mono type-c1-semi text-neutral-800">{s.trackingNumber}</td>
                    <td className="px-5 py-4 type-b2-reg text-neutral-600">{s.origin.city}, {s.origin.country}</td>
                    <td className="px-5 py-4 type-b2-reg text-neutral-600">{s.destination.city}, {s.destination.country}</td>
                    <td className="px-5 py-4">
                      <span className={cn("rounded-full px-2.5 py-1 type-c1-semi", statusStyle.className)}>
                        {statusStyle.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 type-b2-reg text-neutral-600">{s.courier}</td>
                    <td className="px-5 py-4 type-b2-reg text-neutral-600">
                      {new Date(s.estimatedDelivery).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-neutral-400 hover:text-brand-600 transition-colors">
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
