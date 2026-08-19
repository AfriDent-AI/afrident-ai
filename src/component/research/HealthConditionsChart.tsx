import { ChevronRight } from "lucide-react";

const conditions = [
  {
    name: "Dental Caries",
    value: "60.3%",
    color: "#078F9E",
  },
  {
    name: "Periodontal Disease",
    value: "38.7%",
    color: "#0875E1",
  },
  {
    name: "Tooth Loss",
    value: "22.1%",
    color: "#8B5DE8",
  },
  {
    name: "Malocclusions",
    value: "33.5%",
    color: "#62AD67",
  },
  {
    name: "Oral Cancer",
    value: "2.8%",
    color: "#FF8A00",
  },
];

export function HealthConditionsChart() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#203E62]">
          Top oral Health Conditions
        </h2>

        <button className="text-[9px] font-semibold text-[#078F9E]">
          View all
        </button>
      </div>

      <div className="flex items-center justify-center gap-6">

        {/* Donut */}
        <div
          className="relative size-[115px] shrink-0 rounded-full"
          style={{
            background:
              "conic-gradient(#078F9E 0 60%, #0875E1 60% 82%, #8B5DE8 82% 90%, #62AD67 90% 97%, #FF8A00 97% 100%)",
          }}
        >
          <div className="absolute inset-[25px] flex items-center justify-center rounded-full bg-white">
            <span className="text-xs font-bold text-slate-600">
              Oral Health
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {conditions.map((condition) => (
            <div
              key={condition.name}
              className="flex items-center gap-2"
            >
              <span
                className="size-2.5 rounded-sm"
                style={{ backgroundColor: condition.color }}
              />

              <span className="text-[8px] text-slate-600">
                {condition.name}
              </span>

              <span className="text-[8px] font-semibold text-slate-700">
                {condition.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}