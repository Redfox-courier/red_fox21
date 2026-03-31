"use client";

import { useState } from "react";
import { Search, MapPin, CheckCircle2, Circle, Loader2 } from "lucide-react";
import { useTrackingStore } from "@/domains/tracking/store/tracking.store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/core/utils/cn";

export default function TrackingPage() {
  const { track, result, loadingState, error } = useTrackingStore();
  const [value, setValue] = useState("RFC8A3F92B1");

  async function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim()) await track(value.trim());
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Track Shipment</h1>
        <p className="mt-1 text-sm text-gray-500">
          Enter your tracking number to see real-time updates.
        </p>
      </div>

      {/* Search form */}
      <form onSubmit={handleTrack} className="mb-8 flex gap-3 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. RFC8A3F92B1"
            className="h-11 pl-10 rounded-xl"
          />
        </div>
        <Button
          type="submit"
          disabled={loadingState === "loading"}
          className="h-11 rounded-xl bg-[#E84C14] hover:bg-[#d0430f] text-white font-semibold px-6"
        >
          {loadingState === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Track"
          )}
        </Button>
      </form>

      {error && (
        <div className="max-w-xl rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600 mb-6">
          {error}
        </div>
      )}

      {result && (
        <div className="max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Tracking Number</p>
              <p className="font-mono text-lg font-bold text-gray-900">{result.trackingNumber}</p>
            </div>
            <span className="rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-semibold capitalize">
              {result.currentStatus.replace("_", " ")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Carrier</p>
              <p className="font-medium text-gray-800">{result.carrier}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Est. Delivery</p>
              <p className="font-medium text-gray-800">
                {new Date(result.estimatedDelivery).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Tracking History
            </p>
            <ol className="relative space-y-5 border-l-2 border-gray-200 pl-6">
              {result.events.map((event, i) => {
                const isFirst = i === 0;
                return (
                  <li key={event.id} className="relative">
                    <div className={cn(
                      "absolute -left-[25px] flex h-5 w-5 items-center justify-center rounded-full",
                      isFirst ? "bg-[#E84C14]" : "bg-gray-200"
                    )}>
                      {isFirst
                        ? <CheckCircle2 className="h-4 w-4 text-white" />
                        : <Circle className="h-3 w-3 text-gray-400" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{event.description}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <p className="text-xs text-gray-400">
                          {event.location} ·{" "}
                          {new Date(event.timestamp).toLocaleString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
