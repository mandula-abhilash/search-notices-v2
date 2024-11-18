"use client";

import { NotificationFilters } from "@/components/notifications/notification-filters";
import { NotificationList } from "@/components/notifications/notification-list";
import { SearchBar } from "@/components/search-bar";
import { useState } from "react";
import { NotificationFiltersType } from "@/types/notifications";

export default function NotificationsPage() {
  const [filters, setFilters] = useState<NotificationFiltersType>({
    state: [],
    examType: [],
    date: undefined,
  });

  return (
    <div className="mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Exam Notifications</h1>
        <p className="text-muted-foreground">
          Browse and filter through the latest exam notifications from various institutions.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <NotificationFilters filters={filters} setFilters={setFilters} />
        <div className="lg:col-span-3">
          <NotificationList filters={filters} />
        </div>
      </div>
    </div>
  );
}