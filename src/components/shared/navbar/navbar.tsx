"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/core/utils/cn";
import { NAV_LINKS } from "@/core/constants/navigation";
import { ROUTES } from "@/core/constants/routes";
import { Container } from "../container/container";
import Image from "next/image";
import { Icons } from "@/core/constants/icons";
import { Typography } from "@/components/ui/typography";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const TrackIcon = Icons.logistics.truck;

  return (
    <header className="sticky top-0 z-50 bg-white-100 border-b border-neutral-100 ">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center shrink-0">
            <Image
              src="/Home/REDFOXCOURIER LOGO.svg"
              alt="Redfox Courier Logo"
              width={197}
              height={24}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg transition-colors hover:text-brand-600 hover:bg-brand-100"
                  )}
                >
                  <Typography
                    variant="b2Medium"
                    color="text.secondary"
                    as="span"
                    className="hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Typography>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200 text-neutral-600",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {link.hasDropdown && activeDropdown === link.label && "children" in link && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white-100 shadow-lg border border-neutral-200 py-1.5 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 hover:text-brand-600 hover:bg-brand-100 transition-colors"
                      >
                        <Typography variant="b2Regular" color="text.secondary" as="span" className="hover:text-brand-600">
                          {child.label}
                        </Typography>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={ROUTES.LOGIN} className="hover:text-brand-600 transition-colors">
              <Typography variant="t4Semi" color="text.primary" as="span" className="text-orange-500">
                Login
              </Typography>
            </Link>
            <Link
              href={ROUTES.TRACKING}
              className="inline-flex items-center gap-2 h-10 rounded-full bg-brand-600 hover:bg-brand-700 text-white-100 px-5 
              inset-shadow-sm inset-shadow-white/90 transition-colors ring-1 ring-inset ring-white-100/25"
            >
              <Typography variant="b2Semi" color="text.white" as="span">
                Track Order
              </Typography>
              <TrackIcon className="h-4 w-4 text-white-100" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white-100">
          <Container className="py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2.5 rounded-lg hover:text-brand-600 hover:bg-brand-100"
                onClick={() => setMobileOpen(false)}
              >
                <Typography variant="b2Medium" color="text.secondary" as="span" className="hover:text-brand-600">
                  {link.label}
                </Typography>
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
              <Link href={ROUTES.LOGIN} className="block px-4 py-2.5">
                <Typography variant="b2Medium" color="text.secondary" as="span">Login</Typography>
              </Link>
              <Link
                href={ROUTES.TRACKING}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 px-4 py-2 transition-colors"
              >
                <Icons.logistics.shipment className="h-4 w-4 text-white-100" />
                <Typography variant="b2Semi" color="text.white" as="span">Track Order</Typography>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
