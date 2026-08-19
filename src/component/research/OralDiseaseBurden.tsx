import {
  Activity,
  ChevronRight,
} from "lucide-react";

const diseases = [
  {
    name: "Dental caries",
    value: "60.3%",
    width: "60%",
    className: "bg-[#078F9E]",
  },
  {
    name: "Periodontal Disease",
    value: "38.7%",
    width: "39%",
    className: "bg-[#0875E1]",
  },
  {
    name: "Tooth loss",
    value: "22.1%",
    width: "22%",
    className: "bg-[#8B5DE8]",
  },
  {
    name: "Oral cancer",
    value: "2.8%",
    width: "8%",
    className: "bg-[#FF8A00]",
  },
  {
    name: "Malocclusion",
    value: "33.5%",
    width: "34%",
    className: "bg-[#62AD67]",
  },
];

export function OralDiseaseBurden() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#203E62]">
          <Activity className="size-5 text-[#078F9E]" />
          Oral Disease Burden
        </h2>

        <button className="text-[9px] font-semibold text-[#078F9E]">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {diseases.map((disease) => (
          <div
            key={disease.name}
            className="flex items-center gap-2"
          >
            <span className="w-28 text-[9px] font-semibold text-slate-500">
              {disease.name}
            </span>

            <div className="h-1.5 flex-1 rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full ${disease.className}`}
                style={{ width: disease.width }}
              />
            </div>

            <span className="w-10 text-right text-[8px] font-semibold text-slate-600">
              {disease.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}