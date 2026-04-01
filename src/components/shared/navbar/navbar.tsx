"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Package } from "lucide-react";
import { cn } from "@/core/utils/cn";
import { NAV_LINKS } from "@/core/constants/navigation";
import { ROUTES } from "@/core/constants/routes";
import { Container } from "../container/container";
import Image from "next/image";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
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
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-colors hover:text-[#E84C14] hover:bg-orange-50"
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {link.hasDropdown && activeDropdown === link.label && "children" in link && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-lg border border-gray-100 py-1.5 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#E84C14] hover:bg-orange-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={ROUTES.LOGIN}
              className="text-sm font-medium text-orange-700 hover:text-[#E84C14] transition-colors"
            >
              Login
            </Link>
            <Link
              href={ROUTES.TRACKING}
              className="inline-flex items-center gap-2 h-10 rounded-full bg-[#E84C14] hover:bg-[#d0430f] text-white text-sm font-semibold px-5 shadow-sm transition-colors"
            >
              <Package className="h-4 w-4" />
              Track Order
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <Container className="py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:text-[#E84C14] hover:bg-orange-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link href={ROUTES.LOGIN} className="block px-4 py-2.5 text-sm font-medium text-gray-700">
                Login
              </Link>
              <Link
                href={ROUTES.TRACKING}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84C14] hover:bg-[#d0430f] text-white text-sm font-semibold px-4 py-2 transition-colors"
              >
                <Package className="h-4 w-4" />
                Track Order
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
