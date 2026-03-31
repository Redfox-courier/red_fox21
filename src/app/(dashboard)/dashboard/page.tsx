"use client";

import { Package, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { useAuthStore } from "@/domains/user/store/auth.store";

const STATS = [
  { label: "Total Shipments", value: "1,284", icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "In Transit", value: "47", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
  { label: "Pending Pickup", value: "12", icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
  { label: "Delivered (30d)", value: "398", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
];

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name?.split(" ")[0] ?? "there"} 👋
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here&apos;s what&apos;s happening with your shipments today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {STATS.map(({ label, value, icon: Icon, color, bg }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder content area */}
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
        <Package className="mx-auto mb-3 h-10 w-10 text-gray-300" />
        <p className="text-sm font-medium text-gray-400">
          Charts, recent activity, and analytics will appear here once backend is integrated.
        </p>
      </div>
    </div>
  );
}
