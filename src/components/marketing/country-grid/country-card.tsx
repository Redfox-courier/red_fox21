"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/core/utils/cn";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
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
          <Typography variant="b3Semi">From {data.estimatedRate}</Typography>
        </span>
      </div>

      {/* Card content */}
      <div className="relative z-10 p-3 pt-0 sm:p-4">
        <div className="flex items-end justify-between mb-1">

          <Typography variant="t3Bold" color="text-white-100">{data.country}</Typography>

          <span className="hidden sm:block text-right shrink-0 ml-1">
            <Typography variant="b3Medium" color="text-white-100">{data.ordersDelivered} Orders Shipped</Typography>
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/50 mb-1 sm:mb-3" />

        {/* Delivery row */}
        <div className="flex items-center justify-between gap-2 mb-2">

          {/* Left */}
          <div className="flex items-center gap-1 min-w-0">
            <CalendarTodayOutlinedIcon
              sx={{
                width: "11.6667px",
                height: "12.8333px",
                fontSize: "12.8333px",
              }}
              className="text-white-100 shrink-0"
            />

            <Typography
              variant="b3Regular"
              className="text-white-100"
            >
              Est. delivery:
            </Typography>
          </div>

          {/* Right */}
          <Typography
            variant="c2Semi"
            className="text-white-100 shrink-0"
          >
            {data.deliveryTime}
          </Typography>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <button className="flex-1 flex items-center justify-center gap-1 h-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md px-4 type-c1-semi text-neutral-900 transition-all group-hover:bg-brand-600 group-hover:text-white">
            <Typography variant="c1Semi">Get shipping quote</Typography>
          </button>

          {/* Arrow Circle */}
         <button
  className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer 
  transition-all duration-300 group-hover:scale-110
  
  /* Liquid Glass Base */
  bg-white/10 backdrop-blur-md border border-white/40
  
  /* Depth + Glow */
  shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_4px_24px_rgba(0,0,0,0.3)]
  
  /* Refraction Layers */
  before:absolute before:inset-0 before:rounded-full 
  before:bg-gradient-to-br before:from-white/70 before:via-transparent before:to-transparent 
  before:opacity-70 before:pointer-events-none
  
  after:absolute after:inset-0 after:rounded-full 
  after:bg-gradient-to-tl after:from-white/40 after:via-transparent after:to-transparent 
  after:opacity-50 after:pointer-events-none
  
  /* Interaction */
  hover:bg-white/20 hover:border-white/60 hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),0_6px_28px_rgba(0,0,0,0.35)]
  
  antialiased"
>
  <ArrowUpRight className="h-4 w-4 text-white drop-shadow-md" />
</button>

        </div>
      </div>
    </Link>
  );
}
