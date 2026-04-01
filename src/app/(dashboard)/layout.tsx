"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/core/utils/cn";
import { useAuthStore } from "@/domains/user/store/auth.store";
import { ROUTES } from "@/core/constants/routes";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

const SIDEBAR_LINKS: { label: string; href: string; icon: React.ElementType }[] = [
  { label: "Dashboard", href: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { label: "Shipments", href: ROUTES.SHIPMENTS, icon: Package },
  { label: "Tracking", href: ROUTES.TRACKING, icon: MapPin },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  return (
    <div className="flex min-h-screen bg-neutral-100">
      {/* Sidebar */}
      <aside className="sticky top-0 flex h-screen w-60 shrink-0 flex-col border-r border-neutral-200 bg-white-100">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-neutral-200 px-6">
          <Link href={ROUTES.HOME} className="flex items-center shrink-0">
            <Image
              src="/Home/REDFOXCOURIER LOGO.svg"
              alt="Redfox Courier Logo"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {SIDEBAR_LINKS.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href as never}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 type-b2-med transition-colors",
                  active
                    ? "bg-brand-100 text-brand-600"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                )}
              >
                <Icon className={cn("h-4 w-4", active ? "text-brand-600" : "text-neutral-400")} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t border-neutral-200 p-4">
          {user && (
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 type-c1-semi text-white-100">
                {user.name[0]}
              </div>
              <div className="min-w-0">
                <Typography variant="b3Semi" color="text.primary" className="truncate">
                  {user.name}
                </Typography>
                <Typography variant="c2Medium" color="text.disabled" className="truncate capitalize">
                  {user.role}
                </Typography>
              </div>
            </div>
          )}
          <button
            onClick={logout}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 type-b2-reg text-neutral-500 hover:bg-error-100 hover:text-error-600 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
