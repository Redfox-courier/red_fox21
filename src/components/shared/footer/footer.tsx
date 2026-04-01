import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Package } from "lucide-react";
import { Container } from "../container/container";
import {
  FOOTER_INDUSTRIES,
  FOOTER_RESOURCES,
  FOOTER_SERVICES,
} from "@/core/constants/navigation";
import { Typography } from "@/components/ui/typography";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container className="py-26">
        <div className="grid grid-cols-1 gap-18 sm:grid-cols-2 lg:grid-cols-[220px_1fr_1fr_1fr_260px]">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/">
              <Image
                src="/footer/Logo container.svg"
                alt="RedFox Courier"
                width={197}
                height={24}
                className="object-contain"
              />
            </Link>
            <Typography variant="c1Medium" color="text.disabled" className="leading-relaxed">
              One-Stop-Shop for all of your logistics needs.
            </Typography>
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 rounded-full border border-gray-600 px-13 py-2.5 text-xs font-large text-gray-300 hover:border-[#E84C14] hover:text-[#E84C14] transition-colors"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <Typography
              variant="c1Semi"
              color="text.disabled"
              as="h4"
              className="mb-4 uppercase tracking-widest"
            >
              Our Services
            </Typography>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link href="#" className="type-b2-reg text-neutral-400 hover:text-brand-500 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <Typography
              variant="c1Semi"
              color="text.disabled"
              as="h4"
              className="mb-4 uppercase tracking-widest"
            >
              Industries
            </Typography>
            <ul className="space-y-2.5">
              {FOOTER_INDUSTRIES.map((s) => (
                <li key={s}>
                  <Link href="#" className="type-b2-reg text-neutral-400 hover:text-brand-500 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <Typography
              variant="c1Semi"
              color="text.disabled"
              as="h4"
              className="mb-4 uppercase tracking-widest"
            >
              Resources
            </Typography>
            <ul className="space-y-2.5">
              {FOOTER_RESOURCES.map((r) => (
                <li key={r.label}>
                  <Link href={r.href} className="type-b2-reg text-neutral-400 hover:text-brand-500 transition-colors">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <div className="rounded-2xl border border-neutral-700 bg-black-200 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <Typography variant="t4Semi" color="text.white" as="h4">
                  Get in touch
                </Typography>
                <ArrowUpRight className="h-4 w-4 text-neutral-400" />
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-brand-500" />
                <Typography variant="c1Medium" color="text.disabled" as="p" className="leading-relaxed">
                  Unit no. 404, Felix Tower,<br />
                  LBS Marg, Dadar, Asalfa,<br />
                  Pandra, Sakinpur, Bhandup<br />
                  West, Mumbai,<br />
                  Maharashtra 400078
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 pt-6">
          <div className="flex items-center gap-4">
            {["ok.ru", "vk.com", "facebook", "telegram", "instagram"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 type-c2-semi text-neutral-400 hover:border-brand-600 hover:text-brand-500 transition-colors"
                aria-label={icon}
              >
                {icon[0].toUpperCase()}
              </a>
            ))}
          </div>
          <Typography variant="c2Medium" color="text.hint">
            © 2021 – Copyright · All rights reserved
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
