import Link from "next/link";
import { ArrowUpRight, MapPin, Package } from "lucide-react";
import { Container } from "../container/container";
import {
  FOOTER_INDUSTRIES,
  FOOTER_RESOURCES,
  FOOTER_SERVICES,
} from "@/core/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[220px_1fr_1fr_1fr_260px]">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1 text-white">
              <span className="text-lg font-black tracking-tight">
                <span className="text-[#E84C14]">REDF</span>
                <Package className="inline h-4 w-4 text-[#E84C14] -mt-0.5" />
                <span>X COURIER</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              One-Stop-Shop for all of your logistics needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2 text-xs font-medium text-gray-300 hover:border-[#E84C14] hover:text-[#E84C14] transition-colors"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#E84C14] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_INDUSTRIES.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#E84C14] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_RESOURCES.map((r) => (
                <li key={r.label}>
                  <Link
                    href={r.href}
                    className="text-sm text-gray-400 hover:text-[#E84C14] transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <div className="rounded-2xl border border-gray-700 bg-[#242424] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">Get in touch</h4>
                <ArrowUpRight className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#E84C14]" />
                <p>
                  Unit no. 404, Felix Tower,<br />
                  LBS Marg, Dadar, Asalfa,<br />
                  Pandra, Sakinpur, Bhandup<br />
                  West, Mumbai,<br />
                  Maharashtra 400078
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800 pt-6">
          <div className="flex items-center gap-4">
            {["ok.ru", "vk.com", "facebook", "telegram", "instagram"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-400 hover:border-[#E84C14] hover:text-[#E84C14] transition-colors"
                aria-label={icon}
              >
                {icon[0].toUpperCase()}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            © 2021 – Copyright · All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
