import { cn } from "@/core/utils/cn";
import { Container } from "@/components/shared/container/container";
import { Smartphone, Truck, MapPin } from "lucide-react";

interface Step {
  id: number;
  icon: React.ReactNode;
  illustrationBg: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    icon: <Smartphone className="h-10 w-10 text-[#E84C14]" />,
    illustrationBg: "bg-[#EEF2FF]",
    title: "Submit Shipment Details",
    description:
      "Share your pickup address, parcel information, and destination details on our website.",
  },
  {
    id: 2,
    icon: <Truck className="h-10 w-10 text-[#E84C14]" />,
    illustrationBg: "bg-[#FFF3ED]",
    title: "Pickup & International Dispatch",
    description:
      "A verified courier partner collects your parcel from your doorstep and dispatches it for international delivery.",
  },
  {
    id: 3,
    icon: <MapPin className="h-10 w-10 text-[#E84C14]" />,
    illustrationBg: "bg-[#F0FFF4]",
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
    <div className="flex flex-col items-start gap-5">
      {/* Illustration placeholder */}
      <div
        className={cn(
          "flex h-52 w-full items-center justify-center rounded-3xl",
          step.illustrationBg
        )}
      >
        <div className="flex flex-col items-center gap-3">
          {step.icon}
          <span className="text-4xl font-black text-gray-200 select-none">0{step.id}</span>
        </div>
      </div>

      <div>
        <h3 className="text-base font-bold text-gray-900 mb-1.5">{step.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Section label */}
        <div className="mb-12 flex items-center justify-center gap-2">
          <Truck className="h-4 w-4 text-[#E84C14]" />
          <span className="text-sm font-semibold text-gray-600">
            How RedFoxCourier works
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
