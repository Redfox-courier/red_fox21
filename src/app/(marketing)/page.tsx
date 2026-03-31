import type { Metadata } from "next";
import { HeroSection } from "@/components/marketing/hero/hero-section";
import { CountryGrid } from "@/components/marketing/country-grid/country-grid";
import { HowItWorks } from "@/components/marketing/how-it-works/how-it-works";

export const metadata: Metadata = {
  title: "Ship Internationally – RedFox Courier",
};

export default function HomePage() {
  return (
    <>
      <HeroSection destination="London" />
      <CountryGrid />
      <HowItWorks />
    </>
  );
}
