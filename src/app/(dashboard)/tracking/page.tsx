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
        <h1 className="type-h2-bold text-neutral-900">Track Shipment</h1>
        <p className="mt-1 type-b2-reg text-neutral-500">
          Enter your tracking number to see real-time updates.
        </p>
      </div>

      {/* Search form */}
      <form onSubmit={handleTrack} className="mb-8 flex gap-3 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 pointer-events-none" />
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
          className="h-11 rounded-xl bg-brand-600 hover:bg-brand-700 text-white-100 type-b2-semi px-6"
        >
          {loadingState === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Track"
          )}
        </Button>
      </form>

      {error && (
        <div className="max-w-xl rounded-xl bg-error-100 border border-error-300 px-4 py-3 type-b2-reg text-error-600 mb-6">
          {error}
        </div>
      )}

      {result && (
        <div className="max-w-2xl rounded-2xl border border-neutral-200 bg-white-100 p-6 shadow-sm space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="type-c1-semi uppercase tracking-widest text-neutral-400 mb-1">Tracking Number</p>
              <p className="font-mono type-t2-bold text-neutral-900">{result.trackingNumber}</p>
            </div>
            <span className="rounded-full bg-warning-100 text-warning-700 px-3 py-1 type-c1-semi capitalize">
              {result.currentStatus.replace("_", " ")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="type-c1-med text-neutral-400 mb-0.5">Carrier</p>
              <p className="type-b2-semi text-neutral-800">{result.carrier}</p>
            </div>
            <div>
              <p className="type-c1-med text-neutral-400 mb-0.5">Est. Delivery</p>
              <p className="type-b2-semi text-neutral-800">
                {new Date(result.estimatedDelivery).toLocaleDateString("en-IN", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="type-c1-semi uppercase tracking-widest text-neutral-400 mb-4">
              Tracking History
            </p>
            <ol className="relative space-y-5 border-l-2 border-neutral-200 pl-6">
              {result.events.map((event, i) => {
                const isFirst = i === 0;
                return (
                  <li key={event.id} className="relative">
                    <div className={cn(
                      "absolute -left-6.25 flex h-5 w-5 items-center justify-center rounded-full",
                      isFirst ? "bg-brand-600" : "bg-neutral-200"
                    )}>
                      {isFirst
                        ? <CheckCircle2 className="h-4 w-4 text-white-100" />
                        : <Circle className="h-3 w-3 text-neutral-400" />}
                    </div>
                    <div>
                      <p className="type-b2-semi text-neutral-800">{event.description}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <MapPin className="h-3 w-3 text-neutral-400" />
                        <p className="type-c1-med text-neutral-400">
                          {event.location} ·{" "}
                          {new Date(event.timestamp).toLocaleString("en-IN", {
                            day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
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
