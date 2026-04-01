import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { EmotionCacheProvider } from "@/lib/emotion-cache";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | RedFox Courier",
    default: "RedFox Courier",
  },
  description: "International courier and logistics platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white">
        <EmotionCacheProvider>{children}</EmotionCacheProvider>
      </body>
    </html>
  );
}
