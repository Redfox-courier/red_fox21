import { TrendingUp } from "lucide-react";
import { cn } from "@/core/utils/cn";

interface HeroSectionProps {
  destination?: string;
  className?: string;
}

export function HeroSection({ destination = "London", className }: HeroSectionProps) {
  return (
    <section className={cn("pb-6 pt-12 text-center", className)}>
      {/* Badge */}
      <div className="mb-5 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#E84C14]/20 px-3.5 py-1.5 text-xs font-semibold text-[#E84C14]">
          <TrendingUp className="h-3.5 w-3.5" />
          97.3% On-time Deliveries
        </span>
      </div>

      {/* Headline */}
      <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
        Ship Internationally to{" "}
        <span className="text-[#E84C14]">{destination}.</span>
      </h1>

      {/* Subheading */}
      <p className="mx-auto mt-4 max-w-lg text-base text-gray-500 leading-relaxed">
        Compare trusted courier partners, schedule a pickup, and deliver
        worldwide—without the hassle.
      </p>
    </section>
  );
}
