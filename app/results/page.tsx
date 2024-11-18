"use client";

import { ResultFilters } from "@/components/results/result-filters";
import { ResultList } from "@/components/results/result-list";
import { SearchBar } from "@/components/search-bar";
import { useState } from "react";
import { ResultFiltersType } from "@/types/results";

export default function ResultsPage() {
  const [filters, setFilters] = useState<ResultFiltersType>({
    university: [],
    examType: [],
    year: undefined,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Exam Results</h1>
        <p className="text-muted-foreground">
          Access examination results from various universities and institutions.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <ResultFilters filters={filters} setFilters={setFilters} />
        <div className="lg:col-span-3">
          <ResultList filters={filters} />
        </div>
      </div>
    </div>
  );
}