"use client";

import ShipmentStepper from "@/components/shipment-flow/ShipmentStepper";
import { Logo } from "@/components/shared/Logo";

export default function ShippingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white-100 border-b border-neutral-200">
  <div className="h-[76px] px-6 md:px-12 lg:px-20 flex items-center relative">

    {/* Logo (left) */}
    <Logo />

    {/* Stepper (true center of screen) */}
    <div className="absolute left-1/2 -translate-x-1/2">
      <div className="w-full max-w-[480px]">
        <ShipmentStepper currentStep={0} />
      </div>
    </div>

  </div>
</header>

      {/* Page Content */}
      <main className="flex-1 py-6 px-4">
        <div className="max-w-xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}