"use client";

import { useState } from "react";
import { Search, MapPin, CheckCircle2, Circle, Loader2 } from "lucide-react";
import { useTrackingStore } from "@/domains/tracking/store/tracking.store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
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
        <Typography variant="h2Bold" color="text.primary">Track Shipment</Typography>
        <Typography variant="b2Regular" color="text.hint" className="mt-1">
          Enter your tracking number to see real-time updates.
        </Typography>
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
              <Typography variant="c1Semi" color="text.disabled" className="uppercase tracking-widest mb-1">
                Tracking Number
              </Typography>
              <Typography variant="t2Bold" color="text.primary" className="font-mono">
                {result.trackingNumber}
              </Typography>
            </div>
            <span className="rounded-full bg-warning-100 text-warning-700 px-3 py-1 type-c1-semi capitalize">
              {result.currentStatus.replace("_", " ")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="c1Medium" color="text.disabled" className="mb-0.5">Carrier</Typography>
              <Typography variant="b2Semi" color="text.primary">{result.carrier}</Typography>
            </div>
            <div>
              <Typography variant="c1Medium" color="text.disabled" className="mb-0.5">Est. Delivery</Typography>
              <Typography variant="b2Semi" color="text.primary">
                {new Date(result.estimatedDelivery).toLocaleDateString("en-IN", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </Typography>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <Typography variant="c1Semi" color="text.disabled" className="uppercase tracking-widest mb-4">
              Tracking History
            </Typography>
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
                      <Typography variant="b2Semi" color="text.primary">{event.description}</Typography>
                      <div className="flex items-center gap-2 mt-0.5">
                        <MapPin className="h-3 w-3 text-neutral-400" />
                        <Typography variant="c1Medium" color="text.disabled">
                          {event.location} ·{" "}
                          {new Date(event.timestamp).toLocaleString("en-IN", {
                            day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                          })}
                        </Typography>
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
