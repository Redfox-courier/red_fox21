"use client";

import { useState, useMemo } from "react";
import { Flame, Search } from "lucide-react";
import { CountryCard } from "./country-card";
import { TRENDING_COUNTRIES } from "./country-grid.data";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/shared/container/container";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export function CountryGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return TRENDING_COUNTRIES;
    return TRENDING_COUNTRIES.filter((c) =>
      c.country.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section className="py-10">
      <Container>
        {/* Section header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-white ">
              <Search className="h-3.5 w-3.5 text-brand-600" />
            </span>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter destination country or city"
              className="h-10 pl-10 pr-4 rounded-full border-[#F8F6F6] bg-[#FCFAFA] "
            />
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-[#FFF7F5]">
            
            <Typography variant="b2Semi" color="text.secondary" as="span">
              Trending Countries
            </Typography>
       <span className="rounded-full bg-white px-2 py-1.5">
              <Image
                          src="/Icons/flame.svg"
                          alt="Redfox Courier Logo"
                          width={10}
                          height={10}
                          priority
                          className="h-4 w-auto"
                        />
                        </span>
            {/* <Flame className="h-4 w-4 text-brand-600" /> */}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((country) => (
              <CountryCard key={country.id} data={country} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Search className="mx-auto mb-3 h-8 w-8 text-neutral-400 opacity-40" />
            <Typography variant="b2Regular" color="text.disabled">
              No countries found for &quot;{query}&quot;
            </Typography>
          </div>
        )}
      </Container>
    </section>
  );
}
