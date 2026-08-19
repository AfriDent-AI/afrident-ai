import { Users, ChevronRight } from "lucide-react";

const workforce = [
  ["South Africa", "18,765"],
  ["Nigeria", "15,432"],
  ["Egypt", "11,243"],
  ["Kenya", "7,890"],
  ["Ghana", "6,321"],
  ["Ethiopia", "5,678"],
  ["Tanzania", "4,567"],
  ["Uganda", "3,444"],
];

export function WorkforceByCountry() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#203E62]">
          <Users className="size-5 text-[#078F9E]" />
          Dental workforce by country
        </h2>

        <button className="text-[9px] font-semibold text-[#078F9E]">
          View all
        </button>
      </div>

      <div className="space-y-2">
        {workforce.map(([country, value]) => {
          const width =
            Math.max(
              25,
              (Number(value.replace(",", "")) / 18765) * 100
            );

          return (
            <div
              key={country}
              className="flex items-center gap-2"
            >
              <span className="w-16 text-[8px] text-slate-600">
                {country}
              </span>

              <div className="h-1.5 flex-1 rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-[#078F9E]"
                  style={{ width: `${width}%` }}
                />
              </div>

              <span className="w-9 text-right text-[8px] font-semibold text-slate-600">
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}