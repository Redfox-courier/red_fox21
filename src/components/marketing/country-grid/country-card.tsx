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
  estimatedRate: string;
  ordersDelivered: string;
  deliveryTime: string;
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
        "group relative flex flex-col justify-end overflow-hidden",
        "w-full aspect-[9/10]",
        "rounded-2xl sm:rounded-[24px]",
        "cursor-pointer",
        "shadow-[0_2px_12px_rgba(0,0,0,0.10)] transition-all duration-300",
        "hover:shadow-[0_8px_32px_rgba(193,66,27,0.18)] hover:-translate-y-1",
        className
      )}
    >
      {/* Background image */}
      <Image
        src={data.imageUrl}
        alt={`Ship to ${data.country}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px)   25vw, 20vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Top badge */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-white-100/90 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 type-c2-semi text-neutral-800 shadow-sm whitespace-nowrap">
          <MapPin className="h-2.5 w-2.5 text-brand-600 shrink-0" />
          <span className="truncate">Est. from {data.estimatedRate}</span>
        </span>
      </div>

      {/* Card content */}
      <div className="relative z-10 p-3 pt-0 sm:p-4">
        <div className="flex items-end justify-between mb-1">
          <h3 className="type-t4-bold sm:type-t3-bold text-white-100 leading-tight">{data.country}</h3>
          <span className="hidden sm:block type-c2-med text-neutral-300 text-right shrink-0 ml-1">
            {data.ordersDelivered} Orders
          </span>
        </div>

        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-neutral-300 shrink-0" />
          <span className="type-c2-med text-neutral-300 truncate">
            <span className="hidden xs:inline">Est. delivery: </span>
            <strong className="text-white-100 font-semibold">{data.deliveryTime}</strong>
          </span>
        </div>

        {/* CTA Button */}
        <button className="flex w-full items-center justify-between rounded-lg sm:rounded-xl bg-white-100 px-2.5 py-2 sm:px-3.5 sm:py-2.5 type-c2-semi sm:type-c1-semi text-neutral-900 transition-colors group-hover:bg-brand-600 group-hover:text-white-100">
          <span className="flex items-center gap-1 sm:gap-1.5">
            <Package2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
            <span className="truncate">Get shipping quote</span>
          </span>
          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
        </button>
      </div>
    </Link>
  );
}
