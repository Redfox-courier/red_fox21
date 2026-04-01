"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { cn } from "@/core/utils/cn";
import { TRENDING_COUNTRIES } from "@/components/marketing/country-grid/country-grid.data";
import { Typography } from "@/components/ui/typography";

const DESTINATIONS = TRENDING_COUNTRIES.map((c) => c.country);
const INTERVAL_MS = 2200;
const EXIT_DURATION_MS = 400;

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function cycle() {
      // 1. Start exit animation
      setPhase("exit");

      // 2. After exit finishes, swap text and start enter animation
      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
        setPhase("enter");
      }, EXIT_DURATION_MS);
    }

    const interval = setInterval(cycle, INTERVAL_MS);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section className="pb-6 pt-12 text-center">
      {/* Badge */}
      <div className="mb-5 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 border border-brand-500/20 px-3.5 py-1.5 text-xs font-semibold text-brand-600">
          <TrendingUp className="h-3.5 w-3.5" />
          97.3% On-time Deliveries
        </span>
      </div>

      {/* Headline */}
      <h1 className="mx-auto max-w-3xl type-display-sm sm:type-display-md text-neutral-900 tracking-tight">
        Ship Internationally to
        {/* Animated destination — overflow hidden clips the slide */}
        <span className="relative ml-3 inline-block overflow-hidden align-bottom">
          {/*
            We render two spans — the animating one and a hidden "sizer" that
            keeps the parent width stable so the rest of the headline never
            shifts as different-length country names cycle through.
          */}
          <span
            aria-hidden
            className="invisible block"
            style={{ minWidth: "1ch" }}
          >
            {/* Widest country name to reserve max space */}
            {DESTINATIONS.reduce((a, b) => (a.length >= b.length ? a : b))}
          </span>

          <span
            key={currentIndex}
            className={cn(
              "absolute inset-0 flex items-center justify-start  text-[#E84C14]",
              phase === "enter" && "destination-enter",
              phase === "exit"  && "destination-exit"
            )}
          >
            {DESTINATIONS[currentIndex]}.
          </span>
        </span>
      </h1>

      {/* Subheading */}
      <Typography variant="b1Regular" color="text.hint" className="mx-auto mt-5 max-w-lg">
        Compare trusted courier partners, schedule a pickup, and deliver
        worldwide—without the hassle.
      </Typography>
    </section>
  );
}
