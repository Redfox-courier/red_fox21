"use client";

import { useState, useMemo } from "react";
import { Flame, Search } from "lucide-react";
import { CountryCard } from "./country-card";
import { TRENDING_COUNTRIES } from "./country-grid.data";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/shared/container/container";

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
          <div className="flex items-center gap-2 type-b2-semi text-neutral-700">
            <Flame className="h-4 w-4 text-brand-600" />
            Trending Countries
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 pointer-events-none" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter destination country or city"
              className="h-10 pl-9 pr-4 rounded-full border-neutral-200 bg-neutral-100 type-b2-reg focus-visible:ring-brand-600/30 focus-visible:border-brand-600"
            />
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
          <div className="py-20 text-center text-neutral-400">
            <Search className="mx-auto mb-3 h-8 w-8 opacity-40" />
            <p className="type-b2-reg">No countries found for &quot;{query}&quot;</p>
          </div>
        )}
      </Container>
    </section>
  );
}
