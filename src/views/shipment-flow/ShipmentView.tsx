"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Lock, ChevronUp } from "lucide-react";
// import { StepWrapper } from "@/components/shipment-flow/StepWrapper";
import { Typography } from "@/components/ui/typography";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const pricingTiers = [
  {
    threshold: "For 6 kg+",
    price: "₹570/kg",
    description: "Add up to 6 kg and this rate kicks in",
  },
  {
    threshold: "For 11 kg+",
    price: "₹530/kg",
    description: "Cross 11 kg and save ₹40 more per kg",
  },
  {
    threshold: "For 20 kg+",
    price: "₹490/kg",
    description: "Our lowest rate · unlocked at 20 kg+",
  },
];

export default function ShipmentView() {
  const [unit, setUnit] = useState<"kg" | "lbs">("kg");
  const [weight, setWeight] = useState("");
  const [showDimensions, setShowDimensions] = useState(true);
  const [showPricing, setShowPricing] = useState(true);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const hasWeight = weight.trim() !== "" && parseFloat(weight) > 0;

  return (
    <div className="max-w-xl mx-auto">

      {/* Outer wrapper — brand-primary-100 gap ring */}
      <div className="p-0.5 bg-[#FFF7F5] rounded-3xl flex flex-col gap-0.5">

        {/* ── Trust badge ── */}
        <div className="py-1.5 flex justify-center items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center">
            <VerifiedOutlinedIcon sx={{ color: "#FF9F43", fontSize: 16 }} />
          </div>
          <Typography variant="b2Semi" className="text-neutral-900">
            Safely delivered 20k+ parcels to USA
          </Typography>
        </div>

        {/* ── Inner white card ── */}
        <div className="p-4 bg-white rounded-3xl border border-neutral-100 flex flex-col gap-6">

          {/* Route banner */}
          <div className="relative rounded-2xl overflow-hidden h-28">
            <Image
              src="/Redfox Country images/USA Horizontal.png"
              alt="Shipment Route"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient + blur overlays matching Figma layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-bl-2xl rounded-br-2xl" />
            <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[3px] rounded-2xl" />

            {/* From / To labels */}
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-3">
              <div className="flex flex-col gap-0.5">
                <Typography variant="b3Regular" className="text-white/70">From</Typography>
                <Typography variant="t3Bold" className="text-white">India</Typography>
              </div>
              <div className="flex flex-col gap-0.5 items-end">
                <Typography variant="b3Regular" className="text-right text-white/70">To</Typography>
                <Typography variant="t3Bold" className="text-right text-white">USA</Typography>
              </div>
            </div>

            {/* Flight path row */}
            <div className="absolute left-4 right-4 flex items-center gap-1" style={{ bottom: "44px" }}>
              <div className="w-2.5 h-2.5 rounded-full border border-white/80 shrink-0" />
              <div className="flex-1 border-t border-dashed border-white/50" />
              <div className="w-5 h-5 flex items-center justify-center rotate-90 shrink-0">
                <svg width="16" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <div className="flex-1 border-t border-dashed border-white/50" />
              <div className="w-2.5 h-2.5 rounded-full border border-white/80 shrink-0" />
            </div>
          </div>

          {/* ── Form ── */}
          <div className="flex flex-col gap-4">

            {/* Title */}
            <div className="flex flex-col gap-0.5">
              <Typography variant="t2Bold">
                How Heavy is your package?
              </Typography>
              <Typography variant="b2Regular" className="text-neutral-500">
                We'll use this to fetch live rates from all carrier partners.
              </Typography>
            </div>

            <div className="flex flex-col gap-3">

              {/* Shipping From */}
              <div className="flex flex-col gap-1">
                <Typography variant="b2Medium" className="text-neutral-900">
                  Shipping from
                </Typography>
                <div className="px-2 py-3 rounded-lg border border-neutral-300 flex items-center gap-2">
                  <MapPin size={14} className="text-neutral-500 shrink-0" />
                  <Typography variant="b1Regular" className="text-neutral-700">
                    Mumbai, Maharashtra
                  </Typography>
                </div>
              </div>

              {/* Package Weight row */}
              <div className="flex items-start gap-0.5">

                {/* Input col */}
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex flex-col gap-1">
                    <Typography variant="b2Medium" className="text-neutral-900">
                      Package Weight
                    </Typography>
                    <div className="px-2 py-3 rounded-lg border border-neutral-300 flex items-center gap-2">
                      <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 3h12l3 9H3z"/><path d="M3 12h18"/><path d="M12 3v9"/>
                          <path d="M8 21h8"/><path d="M12 17v4"/>
                        </svg>
                      </div>
                      <input
                        type="number"
                        placeholder="00.0"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="flex-1 text-base font-normal font-['DM_Sans'] leading-6 text-neutral-400 placeholder:text-neutral-400 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <Typography variant="c2Medium" className="text-neutral-400">
                    Rates for packages under 6 kg vary by carrier, enter weight to see options
                  </Typography>
                </div>

                {/* Unit toggle — w-28, pt-6 pb-4 to vertically align button with input */}
                <div className="w-28 pt-6 pb-4 flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch h-12 p-0.5 rounded-lg border border-neutral-300 flex items-center">
                    <button
                      onClick={() => setUnit("kg")}
                      className={`flex-1 self-stretch px-4 py-1.5 rounded-lg text-base font-normal font-['DM_Sans'] leading-6 transition-colors ${
                        unit === "kg" ? "bg-orange-500 text-white" : "bg-white text-neutral-900"
                      }`}
                    >
                      <Typography variant="b1Regular">kg</Typography>
                    </button>
                    <button
                      onClick={() => setUnit("lbs")}
                      className={`flex-1 self-stretch px-4 py-1.5 rounded-lg text-base font-normal font-['DM_Sans'] leading-6 transition-colors ${
                        unit === "lbs" ? "bg-orange-500 text-white" : "bg-white text-neutral-900"
                      }`}
                    >
                      <Typography variant="b1Regular">lbs</Typography>
                    </button>
                  </div>
                </div>
              </div>

              {/* Package Dimensions */}
              <div className="p-1.5 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col gap-3">
                {/* Header row */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 p-1.5 bg-neutral-50 rounded-2xl shadow-[inset_1px_2px_6px_0px_rgba(255,238,232,1)] flex justify-center items-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9"/>
                      <polyline points="9 21 3 21 3 15"/>
                      <line x1="21" y1="3" x2="14" y2="10"/>
                      <line x1="3" y1="21" x2="10" y2="14"/>
                    </svg>
                  </div>
                  <div className="flex-1 pr-1.5 flex justify-between items-center">
                    <div className="flex flex-col gap-0.5">
                      <Typography variant="t4Bold" className="text-neutral-900">
                        Package Dimensions
                      </Typography>
                      <Typography variant="b3Regular" className="text-neutral-500">
                        Size affects your final rate.
                      </Typography>
                    </div>
                    <button onClick={() => setShowDimensions(!showDimensions)}>
                      <ChevronUp size={16} className={`text-neutral-500 transition-transform duration-200 ${showDimensions ? "" : "rotate-180"}`} />
                    </button>
                  </div>
                </div>

                {/* Dimension inputs */}
                {showDimensions && (
                  <div className="flex items-start gap-2">
                    {[
                      { label: "Length", value: length, setter: setLength },
                      { label: "Width",  value: width,  setter: setWidth },
                      { label: "Height", value: height, setter: setHeight },
                    ].map(({ label, value, setter }) => (
                      <div key={label} className="flex-1 flex flex-col gap-0.5">
                        <div className="flex flex-col gap-1">
                          <Typography variant="b3Medium" className="text-neutral-900">
                            {label}
                          </Typography>
                          <div className="p-2 bg-white rounded-md border border-neutral-300 flex items-center">
                            <input
                              type="number"
                              value={value}
                              onChange={(e) => setter(e.target.value)}
                              className="flex-1 text-sm font-['DM_Sans'] outline-none bg-transparent"
                            />
                          </div>
                        </div>
                        <Typography variant="c2Medium" className="text-neutral-400">
                          in cm
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Rate drops */}
              <div className="p-3 rounded-2xl border border-neutral-100 flex flex-col gap-2">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                      <polyline points="17 18 23 18 23 12"/>
                    </svg>
                  </div>
                  <div className="flex-1 pr-1.5 flex justify-between items-center">
                    <Typography variant="b2Semi" className="text-neutral-900">
                      Rate drops as weight goes up
                    </Typography>
                    <button onClick={() => setShowPricing(!showPricing)}>
                      <ChevronUp size={16} className={`text-neutral-500 transition-transform duration-200 ${showPricing ? "" : "rotate-180"}`} />
                    </button>
                  </div>
                </div>

                {/* Tier cards */}
                {showPricing && (
                  <div className="flex items-start gap-2">
                    {pricingTiers.map((tier) => (
                      <div
                        key={tier.threshold}
                        className="flex-1 p-4 bg-neutral-50 rounded-[10px] border border-neutral-100 flex flex-col gap-2"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <Lock size={16} className="text-neutral-400" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex flex-col gap-0.5">
                            <Typography variant="b4Medium" className="text-neutral-500">
                              {tier.threshold}
                            </Typography>
                            <Typography variant="t4Bold" className="text-neutral-900">
                              {tier.price}
                            </Typography>
                          </div>
                          <Typography variant="b4Regular" className="text-neutral-500">
                            {tier.description}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* CTA */}
            <button
              disabled={!hasWeight}
              className={`h-10 px-5 py-2 rounded-[80px] border flex justify-center items-center gap-4 overflow-hidden w-full transition-all ${
                hasWeight
                  ? "bg-orange-500 border-orange-500 hover:bg-orange-600"
                  : "bg-orange-200 border-orange-200 cursor-not-allowed"
              }`}
            >
              <Typography variant="b2Medium" className="text-white">
                Compare Courier Rates
              </Typography>
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}