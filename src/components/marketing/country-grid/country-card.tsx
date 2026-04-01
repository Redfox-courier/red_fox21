"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Package2, ArrowUpRight } from "lucide-react";
import { cn } from "@/core/utils/cn";
import { Typography } from "@/components/ui/typography";

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
        "w-[325.2px] h-90",
        "rounded-[24px]",
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
        sizes="243px"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Top badge */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-white-100/90 backdrop-blur-sm px-2.5 py-1 shadow-sm whitespace-nowrap">
          <MapPin className="h-2.5 w-2.5 text-brand-600" />
          <Typography variant="c2Semi" color="text.primary" as="span">
            Est. from {data.estimatedRate}
          </Typography>
        </span>
      </div>

      {/* Card content */}
      <div className="relative z-10 p-4 pt-0">
        <div className="flex items-end justify-between mb-1.5">
          <Typography variant="t3Bold" color="text.white" as="h3" className="leading-tight">
            {data.country}
          </Typography>
          <Typography variant="c2Medium" as="span" className="text-neutral-300">
            {data.ordersDelivered} Orders Delivered
          </Typography>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Clock className="h-3 w-3 text-neutral-300" />
          <Typography variant="c2Medium" as="span" className="text-neutral-300">
            Est. delivery:{" "}
            <strong className="text-white-100 font-semibold">{data.deliveryTime}</strong>
          </Typography>
        </div>

        {/* CTA Button */}
        <button className="flex w-full items-center justify-between rounded-xl bg-white-100 px-3.5 py-2.5 transition-colors group-hover:bg-brand-600 group-hover:text-white-100">
          <span className="flex items-center gap-1.5">
            <Package2 className="h-3.5 w-3.5" />
            <Typography variant="c1Semi" color="text.primary" as="span" className="group-hover:text-white-100">
              Get shipping quote
            </Typography>
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
        </button>
      </div>
    </Link>
  );
}
