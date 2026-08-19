import { Flag, ChevronRight } from "lucide-react";

const countries = [
  ["South Africa", "2,345"],
  ["Nigeria", "1,890"],
  ["Egypt", "1,234"],
  ["Ethiopia", "987"],
  ["Kenya", "876"],
  ["Ghana", "654"],
  ["Tanzania", "432"],
];

export function ResearchByCountry() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-2 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#203E62]">
          <Flag className="size-5 text-[#078F9E]" />
          Research by country
        </h2>

        <button className="text-[9px] font-semibold text-[#078F9E]">
          View all
        </button>
      </div>

      <div className="flex gap-4">

        {/* Map placeholder */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative h-[130px] w-[130px]">
            <div className="absolute inset-4 rotate-12 rounded-[45%] bg-[#BFEAF0]" />
            <div className="absolute left-12 top-3 h-20 w-14 rotate-[25deg] rounded-[45%] bg-[#72C9D2]" />
            <div className="absolute bottom-3 left-10 h-16 w-12 rotate-[15deg] rounded-[40%] bg-[#A9DFE5]" />
          </div>
        </div>

        {/* Table */}
        <div className="flex-1">
          <div className="mb-1 flex justify-between text-[8px] font-bold text-slate-500">
            <span>Country</span>
            <span>Publications</span>
          </div>

          {countries.map(([country, count]) => (
            <div
              key={country}
              className="flex justify-between border-b border-slate-50 py-1 text-[8px]"
            >
              <span className="text-slate-600">{country}</span>
              <span className="font-semibold text-slate-700">{count}</span>
            </div>
          ))}

          <button className="mt-2 flex h-6 w-full items-center justify-center gap-1 rounded border border-[#9EDDE4] text-[8px] font-semibold text-[#078F9E]">
            View full report
            <ChevronRight className="size-3" />
          </button>
        </div>
      </div>
    </section>
  );
}