"use client";

import WebhookIcon from "@mui/icons-material/Webhook";
import { cn } from "@/core/utils/cn";
import { Container } from "@/components/shared/container/container";
import { Typography } from "@/components/ui/typography";

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
        "flex flex-col",
        "rounded-2xl bg-white overflow-hidden",
        "border border-white",
        "shadow-sm"
      )}
    >
      {/* Image area */}
      <div className="w-full h-[412px] overflow-hidden">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mx-5" />

      {/* Text area */}
      <div className="p-6">
        <Typography variant="t3Bold" color="text.primary" as="h3" className="mb-1.5">
          {step.title}
        </Typography>
        <Typography variant="b2Regular" color="text.hint">
          {step.description}
        </Typography>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      className="py-12"
      style={{
        background:
          "radial-gradient(ellipse 30% 50% at 0% 50%, rgba(253,189,165,0.3) 0%, transparent 70%), radial-gradient(ellipse 30% 50% at 100% 50%, rgba(253,189,165,0.3) 0%, transparent 70%), #ffffff",
      }}
    >
      <Container>
        {/* Section label */}
        <div className="mb-8 flex items-center justify-center">
          <div
            className="
              inline-flex items-center gap-2
              rounded-[40px]
              border border-[#FFEEE8]
              bg-[#FFF7F5]
              px-4 py-1.5
            "
          >
            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full
                border border-[#FDBDA5]
                bg-[#E84C14]/10
              "
            >
              <WebhookIcon sx={{ fontSize: 14, color: "#E84C14" }} />
            </span>
            <Typography variant="b2Semi" color="text.secondary" as="span">
              How RedFoxCourier works
            </Typography>
          </div>
        </div>

        {/* Cards — constrained max width and centered */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 pb-20">
          {STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
