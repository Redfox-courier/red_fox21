"use client";

import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/core/constants/routes";
import { cn } from "@/core/utils/cn";

interface LogoProps {
  className?: string;
  clickable?: boolean;
}

export function Logo({ className, clickable = true }: LogoProps) {
  const logo = (
    <Image
      src="/Home/REDFOXCOURIER LOGO.svg"
      alt="Redfox Courier Logo"
      width={198}
      height={24}
      priority
      className={cn("h-6 w-auto", className)}
    />
  );

  if (!clickable) return logo;

  return (
    <Link href={ROUTES.HOME} className="flex items-center shrink-0">
      {logo}
    </Link>
  );
}