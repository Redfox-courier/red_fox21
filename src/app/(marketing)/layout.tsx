import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Footer } from "@/components/shared/footer/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | RedFox Courier",
    default: "RedFox Courier – Ship Internationally Without the Hassle",
  },
  description:
    "Compare trusted courier partners, schedule a pickup, and deliver worldwide—without the hassle.",
  keywords: ["international shipping", "courier", "logistics", "India", "worldwide delivery"],
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
}
