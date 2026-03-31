"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Package2, ArrowUpRight } from "lucide-react";
import { cn } from "@/core/utils/cn";

export interface CountryCardData {
  id: string;
  country: string;
  slug: string;
  imageUrl: string;
  estimatedRate: string; // e.g. "₹570/kg"
  ordersDelivered: string; // e.g. "20k+"
  deliveryTime: string; // e.g. "2–5 days"
}

interface CountryCardProps {
  data: CountryCardData;
  className?: string;
}

export function CountryCard({ data, className }: CountryCardProps) {
  return (
    <Link
      href={`/ship-to/${data.slug}` as never}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl",
        "h-65 cursor-pointer",
        "shadow-[0_2px_12px_rgba(0,0,0,0.10)] transition-all duration-300",
        "hover:shadow-[0_8px_32px_rgba(232,76,20,0.18)] hover:-translate-y-1",
        className
      )}
    >
      {/* Background image */}
      <Image
        src={data.imageUrl}
        alt={`Ship to ${data.country}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      />

      {/* Gradient overlay — bottom fade */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Top badge — Est. from ₹XXX/kg */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-gray-800 shadow-sm whitespace-nowrap">
          <MapPin className="h-2.5 w-2.5 text-[#E84C14]" />
          Est. from {data.estimatedRate}
        </span>
      </div>

      {/* Card content — sits above gradient */}
      <div className="relative z-10 p-4 pt-0">
        {/* Country + orders */}
        <div className="flex items-end justify-between mb-1.5">
          <h3 className="text-base font-bold text-white leading-tight">{data.country}</h3>
          <span className="text-[10px] text-gray-300 font-medium">
            {data.ordersDelivered} Orders Delivered
          </span>
        </div>

        {/* Delivery time */}
        <div className="flex items-center gap-1 mb-3">
          <Clock className="h-3 w-3 text-gray-300" />
          <span className="text-[11px] text-gray-300">
            Est. delivery: <strong className="text-white">{data.deliveryTime}</strong>
          </span>
        </div>

        {/* CTA Button */}
        <button className="flex w-full items-center justify-between rounded-xl bg-white px-3.5 py-2.5 text-xs font-semibold text-gray-900 transition-colors group-hover:bg-[#E84C14] group-hover:text-white">
          <span className="flex items-center gap-1.5">
            <Package2 className="h-3.5 w-3.5" />
            Get shipping quote
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
        </button>
      </div>
    </Link>
  );
}
