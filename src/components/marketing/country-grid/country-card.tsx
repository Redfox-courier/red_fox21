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
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl",
        "h-65 cursor-pointer",
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
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Top badge */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-white-100/90 backdrop-blur-sm px-2.5 py-1 type-c2-semi text-neutral-800 shadow-sm whitespace-nowrap">
          <MapPin className="h-2.5 w-2.5 text-brand-600" />
          Est. from {data.estimatedRate}
        </span>
      </div>

      {/* Card content */}
      <div className="relative z-10 p-4 pt-0">
        <div className="flex items-end justify-between mb-1.5">
          <h3 className="type-t3-bold text-white-100 leading-tight">{data.country}</h3>
          <span className="type-c2-med text-neutral-300">
            {data.ordersDelivered} Orders Delivered
          </span>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Clock className="h-3 w-3 text-neutral-300" />
          <span className="type-c2-med text-neutral-300">
            Est. delivery: <strong className="text-white-100 font-semibold">{data.deliveryTime}</strong>
          </span>
        </div>

        {/* CTA Button */}
        <button className="flex w-full items-center justify-between rounded-xl bg-white-100 px-3.5 py-2.5 type-c1-semi text-neutral-900 transition-colors group-hover:bg-brand-600 group-hover:text-white-100">
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
