import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
        <div className="grid grid-cols-1 gap-y-18 sm:grid-cols-2 lg:grid-cols-[220px_1fr_260px] lg:gap-x-8">

          {/* ── Brand Column ── */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/footer/Logo container.svg"
                alt="RedFox Courier"
                width={197}
                height={24}
                className="object-contain"
              />
            </Link>

            <Typography
              variant="c1Medium"
              color="text.disabled"
              className="leading-relaxed"
            >
              One-Stop-Shop for all of your logistics needs.
            </Typography>

            <Link
              href="/contact"
              className="inline-flex items-center gap-6 rounded-full border border-gray-600 px-13 py-2.5 text-xs font-large text-gray-300 hover:border-[#E84C14] hover:text-[#E84C14] transition-colors"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Social Icons + Copyright */}
            <div className="pt-10 flex items-end justify-between">

              {/* Social Icons */}
              <div className="space-y-3">
                <div>
                  <Link
                    href=""
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white-100"
                  >
                    <Image src="/footer/Vector-1.svg" alt="" width={14} height={14} />
                  </Link>
                </div>
                <div className="flex gap-3">
                  <Link
                    href=""
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white-100"
                  >
                    <Image src="/footer/Vector-2.svg" alt="" width={14} height={14} />
                  </Link>
                  <Link
                    href=""
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white-100"
                  >
                    <Image src="/footer/Vector-3.svg" alt="" width={14} height={14} />
                  </Link>
                </div>
                <div className="flex gap-3">
                  <Link
                    href=""
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white-100"
                  >
                    <Image src="/footer/Vector-4.svg" alt="" width={14} height={14} />
                  </Link>
                  <Link
                    href=""
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white-100"
                  >
                    <Image src="/footer/Vector.svg" alt="" width={14} height={14} />
                  </Link>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-xs text-neutral-400 leading-relaxed text-right">
                <p>© 2021 — Copyright</p>
                <p>All Rights reserved</p>
              </div>

            </div>
          </div>

          {/* ── Middle 3 columns: centered ── */}
          <div className="flex justify-center gap-10">

          {/*  Services */}
          <div>
            <Typography
              variant="c1Semi"
              color="text.disabled"
              as="h4"
              className="mb-4 uppercase tracking-widest text-white-100"
            >
              Our Services
            </Typography>
            <ul className="space-y-0.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="type-b2-reg text-neutral-400 hover:text-brand-500 transition-colors"
                  >
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
              className="mb-4 uppercase tracking-widest text-white-100"
            >
              Industries
            </Typography>
            <ul className="space-y-0.5">
              {FOOTER_INDUSTRIES.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="type-b2-reg text-neutral-400 hover:text-brand-500 transition-colors"
                  >
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
              className="mb-4 uppercase tracking-widest text-white-100"
            >
              Resources
            </Typography>
            <ul className="space-y-0.5">
              {FOOTER_RESOURCES.map((r) => (
                <li key={r.label}>
                  <Link
                    href={r.href}
                    className="type-b2-reg text-neutral-400 hover:text-brand-500 transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>

          {/* Contact Card */}
          <div>
            <div className="rounded-2xl border border-neutral-700 bg-black-200 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="type-t4-semi text-white-100">Get in touch</h4>
                <ArrowUpRight className="h-6 w-6 text-neutral-400" />
              </div>
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
      </Container>
    </footer>
  );
}