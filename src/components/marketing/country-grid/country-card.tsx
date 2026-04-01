"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Package2, ArrowUpRight } from "lucide-react";
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { cn } from "@/core/utils/cn";
import { Height } from "@mui/icons-material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

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
        "w-[325.2px] h-[360px]", // ✅ Figma exact size
        "rounded-[24px]", // closer to Figma than rounded-2xl
        "cursor-pointer",
        "group relative flex flex-col justify-end overflow-hidden",
        "w-[325.2px] h-[360px]", // ✅ Figma exact size
        "rounded-[24px]", // closer to Figma than rounded-2xl
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
        sizes="243px" // ✅ optimized for fixed width
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />

      {/* Top badge */}
<div className="absolute top-3 right-3 z-10">
  <span
    className="
      inline-flex items-center justify-center gap-1
      w-[139px] h-[29px]
      px-[0px] py-[6px]
      rounded-[80px]
      bg-white/90 backdrop-blur-sm
      type-c2-semi text-neutral-800
      shadow-sm whitespace-nowrap
    "
  >
    <DiscountOutlinedIcon
  sx={{ fontSize: 16 }}
  className="text-brand-600"
/>
    From {data.estimatedRate}
  </span>
</div>

      {/* Card content */}
      <div className="relative z-10 p-4 pt-0">
        <div className="flex items-end justify-between mb-1.5">
          <h3 className="type-t3-bold text-white-100 leading-tight">{data.country}</h3>
          <span className="type-c2-med text-white-100">
            {data.ordersDelivered} Orders Delivered
          </span>
        </div>

        <div className="flex items-center gap-1 mb-3">
         <CalendarTodayOutlinedIcon
  sx={{
    width: "11.6667px",
    height: "12.8333px",
    // fontSize: "12.8333px", // important for MUI scaling
  }}
  className="text-white-100"
/>
          <span className="type-c2-med text-white-100">
            Est. delivery: <strong className="text-white-100 font-semibold">{data.deliveryTime}</strong>
          </span>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
  {/* Main CTA */}
  <button className="
    flex-1
    flex items-center justify-center gap-2
    h-[48px]
    rounded-full
    bg-white/100
    backdrop-blur-md
    px-4
    type-c1-semi text-neutral-900
    transition-all
    group-hover:bg-brand-600 group-hover:text-white
  ">
    {/* <Package2 className="h-4 w-4" /> */}
    Get shipping quote
  </button>

  {/* Arrow Circle */}
  <button
  className="
    relative flex items-center justify-center
    w-[48px] h-[48px]
    rounded-full

    bg-gradient-to-br
    from-[#ffffff1a]
    via-[#F3551E33]
    to-[#00000033]

    border border-white/60

    shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_20px_rgba(0,0,0,0.25)]

    transition-all duration-300
    hover:scale-105
  "
>
  <ArrowUpRight className="h-4 w-4 text-white" />
</button>
</div>
      </div>
    </Link>
  );
}