import { SearchBar } from "@/components/search-bar";
import { FeaturedSection } from "@/components/featured-section";
import { RecentNotifications } from "@/components/recent-notifications";
import { TopUniversities } from "@/components/top-universities";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your Gateway to{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Academic Success
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Stay updated with the latest exam notifications, results, and university information.
          Your one-stop destination for all academic updates.
        </p>
        <SearchBar />
      </section>

      <FeaturedSection />
      
      <div className="grid gap-8 md:grid-cols-2">
        <RecentNotifications />
        <TopUniversities />
      </div>
    </div>
  );
}