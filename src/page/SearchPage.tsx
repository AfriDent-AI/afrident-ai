import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { services } from "@/data/Service";

export default function SearchPage() {
  const [params] = useSearchParams();

  const initialQuery = params.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = services.filter((service) => {
    const text = [
      service.title,
      service.description,
      ...service.items,
    ]
      .join(" ")
      .toLowerCase();

    return text.includes(query.toLowerCase());
  });

  return (
    <main className="min-h-[70vh] bg-[#F4FCFD] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link to="/">
          <Button variant="ghost">
            <ArrowLeft />
            Home
          </Button>
        </Link>

        <h1 className="mt-8 text-4xl font-extrabold text-slate-950">
          Search AfriDent-AI
        </h1>

        <div className="mt-6 flex gap-2">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search symptoms, treatments, professionals..."
            className="h-12 bg-white"
          />

          <Button className="h-12 bg-[#078B9B] hover:bg-[#067785]">
            <Search />
            Search
          </Button>
        </div>

        <div className="mt-8">
          {query && (
            <p className="mb-4 text-sm text-slate-500">
              {results.length} result{results.length !== 1 ? "s" : ""} for "
              {query}"
            </p>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {results.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="font-bold text-slate-900">
                  {service.title}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          {query && results.length === 0 && (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <p className="font-semibold text-slate-800">
                No results found.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another symptom, treatment or service.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}