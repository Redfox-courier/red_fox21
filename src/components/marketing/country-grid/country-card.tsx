"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/core/utils/cn";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';

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
        "w-full h-55 sm:h-70 md:h-80 lg:h-90",
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
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Top badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center justify-center gap-1 min-w-[110px] sm:min-w-[139px] h-[25px] sm:h-[29px] px-2 sm:px-[10px] py-[4px] sm:py-[6px] rounded-[80px] bg-white/90 backdrop-blur-sm type-c2-semi text-neutral-800 shadow-sm whitespace-nowrap">
          <DiscountOutlinedIcon
            sx={{ fontSize: { xs: 13, sm: 16 } }}
            className="text-brand-600"
          />
          Est. from {data.estimatedRate}
        </span>
      </div>

      {/* Card content */}
      <div className="relative z-10 p-3 pt-0 sm:p-4">
        <div className="flex items-end justify-between mb-1">
          <h3 className="type-t4-bold sm:type-t3-bold text-white-100 leading-tight">{data.country}</h3>
          <span className="hidden sm:block type-c2-med text-white-100 text-right shrink-0 ml-1">
            {data.ordersDelivered} Orders
          </span>
        </div>

        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          <CalendarTodayOutlinedIcon
            sx={{
              width: "11.6667px",
              height: "12.8333px",
              fontSize: "12.8333px",
            }}
            className="text-white-100"
          />
          <span className="type-c2-med text-neutral-300 truncate">
            <span className="hidden sm:inline">Est. delivery: </span>
            <strong className="text-white-100 font-semibold">{data.deliveryTime}</strong>
          </span>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <button className="flex-1 flex items-center justify-center gap-1 h-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md px-4 type-c1-semi text-neutral-900 transition-all group-hover:bg-brand-600 group-hover:text-white">
            Get shipping quote
          </button>

          {/* Arrow Circle */}
          <button
            className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 rounded-full cursor-pointer transition-all duration-200 group-hover:bg-brand-600/85 group-hover:border-brand-600/60 bg-transparent"
            style={{
              background: 'transparent',
              border: '0.5px solid rgba(255, 255, 255, 0.35)',
              // boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1.5px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.2)',
               boxShadow: `
  0 4px 24px rgba(0,0,0,0.3),
  inset 1px 1px 0 rgba(255,255,255,0.7),
  inset -1px -1px 0 rgba(255,255,255,0.7)
`
            }}
          >
            <ArrowUpRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </Link>
  );
}
