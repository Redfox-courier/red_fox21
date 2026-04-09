"use client";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { cn } from "@/core/utils/cn";
import { Typography } from "@/components/ui/typography";

const STEPS = [
    { label: "Shipment", icon: FlightTakeoffIcon },
    { label: "Verify", icon: ShieldOutlinedIcon },
    { label: "Details", icon: DescriptionOutlinedIcon },
    { label: "Payment", icon: PaymentOutlinedIcon },
];

interface Props {
    currentStep?: number;
}

export default function ShipmentStepper({ currentStep = 0 }: Props) {
    return (
        <div className="w-[483px] h-[52px] bg-white-100 border border-[#F8F6F6] rounded-t-[24px] flex overflow-hidden">

            {STEPS.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                    <div key={step.label} className="flex flex-1">

                        {/* Step */}
                        <div
                            className={cn(
                                "flex-1 flex items-center justify-center gap-2 px-5 ",
                                isActive && "bg-brand-50"
                            )}
                        >
                            <Icon
                                sx={{ fontSize: 20 }}
                                className={cn(
                                    (isActive || isCompleted) && "text-brand-600"
                                )}
                            />

                            <Typography
                                variant={isActive || isCompleted ? "t4Bold" : "t4Medium"}
                            >
                                {step.label}
                            </Typography>
                        </div>

                        {/* Divider BETWEEN steps */}
                        {index !== STEPS.length - 1 && (
                            <div className="w-px bg-[#F8F6F6]" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}