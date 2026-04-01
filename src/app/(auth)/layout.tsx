import type { Metadata } from "next";
import Link from "next/link";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: { template: "%s | RedFox Courier", default: "Auth | RedFox Courier" },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-linear-to-br from-brand-600 to-brand-700 p-12 text-white-100">
        <Link href="/" className="flex items-center gap-2 type-t2-bold tracking-tight">
          <Package className="h-6 w-6" />
          REDFOX COURIER
        </Link>
        <div>
          <blockquote className="type-h2-bold leading-snug mb-4">
            &ldquo;Delivering trust, one package at a time.&rdquo;
          </blockquote>
          <p className="text-white-100/70 type-b1-reg">
            Join 50,000+ businesses shipping internationally with RedFox.
          </p>
        </div>
        <p className="text-white-100/50 type-c1-med">© 2026 RedFox Courier. All rights reserved.</p>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 bg-neutral-100">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
