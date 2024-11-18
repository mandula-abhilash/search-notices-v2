"use client";

import { UniversityFilters } from "@/components/universities/university-filters";
import { UniversityList } from "@/components/universities/university-list";
import { SearchBar } from "@/components/search-bar";
import { useState } from "react";
import { UniversityFiltersType } from "@/types/universities";

export default function UniversitiesPage() {
  const [filters, setFilters] = useState<UniversityFiltersType>({
    location: [],
    type: [],
    ranking: undefined,
    accreditation: [],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Universities</h1>
        <p className="text-muted-foreground">
          Explore top universities and educational institutions across India.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <UniversityFilters filters={filters} setFilters={setFilters} />
        <div className="lg:col-span-3">
          <UniversityList filters={filters} />
        </div>
      </div>
    </div>
  );
}