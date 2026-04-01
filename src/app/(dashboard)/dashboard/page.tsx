"use client";

import { Package, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { useAuthStore } from "@/domains/user/store/auth.store";
import { Typography } from "@/components/ui/typography";

const STATS = [
  { label: "Total Shipments", value: "1,284", icon: Package,      color: "text-info-700",    bg: "bg-info-100"    },
  { label: "In Transit",       value: "47",    icon: TrendingUp,   color: "text-brand-600",   bg: "bg-brand-100"   },
  { label: "Pending Pickup",   value: "12",    icon: Clock,        color: "text-warning-600", bg: "bg-warning-100" },
  { label: "Delivered (30d)",  value: "398",   icon: CheckCircle2, color: "text-success-600", bg: "bg-success-100" },
];

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="p-8">
      <div className="mb-8">
        <Typography variant="h2Bold" color="text.primary">
          Welcome back, {user?.name?.split(" ")[0] ?? "there"} 👋
        </Typography>
        <Typography variant="b2Regular" color="text.hint" className="mt-1">
          Here&apos;s what&apos;s happening with your shipments today.
        </Typography>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {STATS.map(({ label, value, icon: Icon, color, bg }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white-100 p-5 shadow-sm"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <div>
              <Typography variant="h3Bold" color="text.primary">{value}</Typography>
              <Typography variant="c1Medium" color="text.hint">{label}</Typography>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder */}
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white-100 p-12 text-center">
        <Package className="mx-auto mb-3 h-10 w-10 text-neutral-300" />
        <Typography variant="b2Medium" color="text.disabled">
          Charts, recent activity, and analytics will appear here once backend is integrated.
        </Typography>
      </div>
    </div>
  );
}
