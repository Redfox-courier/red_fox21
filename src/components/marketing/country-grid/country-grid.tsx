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
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Flame className="h-4 w-4 text-[#E84C14]" />
            Trending Countries
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter destination country or city"
              className="h-10 pl-9 pr-4 rounded-full border-gray-200 bg-gray-50 text-sm focus-visible:ring-[#E84C14]/30 focus-visible:border-[#E84C14]"
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
          <div className="py-20 text-center text-gray-400">
            <Search className="mx-auto mb-3 h-8 w-8 opacity-40" />
            <p className="text-sm">No countries found for &quot;{query}&quot;</p>
          </div>
        )}
      </Container>
    </section>
  );
}
