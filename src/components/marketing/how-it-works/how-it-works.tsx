"use client";

import Image from "next/image";
import { Workflow } from "lucide-react";
import { cn } from "@/core/utils/cn";
import { Container } from "@/components/shared/container/container";

interface Step {
  id: number;
  image: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    image: "/footer/Submit Shipment.svg",
    title: "Submit Shipment Details",
    description:
      "Share your pickup address, parcel information, and destination details on our website.",
  },
  {
    id: 2,
    image: "/footer/Pickup & INternational.svg",
    title: "Pickup & International Dispatch",
    description:
      "A verified courier partner collects your parcel from your doorstep and dispatches it for international delivery.",
  },
  {
    id: 3,
    image: "/footer/Track until final.svg",
    title: "Track Until Final Delivery",
    description:
      "Monitor your shipment in real time until it is delivered to the recipient.",
  },
];

interface StepCardProps {
  step: Step;
}

function StepCard({ step }: StepCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start",
        "rounded-3xl bg-white overflow-hidden",
        "border border-white",
        "shadow-sm"
      )}
    >
      {/* Image area */}
      <div className="relative w-full h-[322px] bg-brand-100">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-contain p-6"
        />
      </div>

      {/* Text area */}
      <div className="p-6">
        <h3 className="type-t3-bold text-neutral-900 mb-1.5">
          {step.title}
        </h3>
        <p className="type-b2-reg text-neutral-500">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      className="py-16 bg-white"
      style={{
        background:
          "radial-gradient(ellipse 30% 50% at 0% 50%, rgba(253,189,165,0.3) 0%, transparent 70%), radial-gradient(ellipse 30% 50% at 100% 50%, rgba(253,189,165,0.3) 0%, transparent 70%), #ffffff",
      }}
    >
      <Container>
        {/* Section label */}
        <div className="mb-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-[40px] border border-brand-200 bg-brand-100 px-4 py-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-300 bg-brand-600/10">
              <Workflow className="h-3.5 w-3.5 text-brand-600" />
            </span>
            <span className="type-b2-semi text-neutral-700">
              How RedFoxCourier works
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
