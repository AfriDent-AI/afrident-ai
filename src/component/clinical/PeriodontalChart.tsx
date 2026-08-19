import { Info, PenLine } from "lucide-react";
import chartimg from '@/assets/periodentalchart.png'
export function PeriodontalChart() {
  const teeth = [
    "18", "17", "16", "15", "14", "13", "12", "11",
    "21", "22", "23", "24", "25", "26", "27", "28",
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                <img src={chartimg}  />


  {/* <div className="mb-3 flex items-center gap-2">
        <div className="flex size-7 items-center justify-center rounded bg-[#0875E1] text-white">
          <PenLine className="size-4" />
        </div>

        <h2 className="text-xl font-bold text-[#203E62]">
          Periodontal Chart
        </h2>

        <Info className="size-3.5 text-slate-400" />
      </div> */}

      {/* <div className="rounded-lg border border-slate-100 p-2"> */}

        {/* Teeth numbers */}
        {/* <div className="grid grid-cols-8 gap-1 text-center">
          {teeth.map((tooth) => (
            <span
              key={tooth}
              className="text-[8px] font-semibold text-[#0875E1]"
            >
              {tooth}
            </span>
          ))}
        </div> */}

        {/* Upper teeth */}
        {/* <div className="mt-1 grid grid-cols-8 gap-1">
          {teeth.map((tooth, index) => (
            <button
              key={`upper-${tooth}`}
              type="button"
              onClick={() =>
                console.log(`Tooth ${tooth}`)
              }
              className={`h-9 rounded-b-full border-2 border-slate-200 bg-white transition hover:border-[#078F9E] ${
                index === 2 || index === 5
                  ? "border-b-red-300"
                  : ""
              }`}
            />
          ))}
        </div> */}

        {/* Lower */}
        {/* <div className="mt-3 grid grid-cols-8 gap-1">
          {teeth.map((tooth, index) => (
            <button
              key={`lower-${tooth}`}
              type="button"
              onClick={() =>
                console.log(`Tooth ${tooth}`)
              }
              className={`h-9 rounded-t-full border-2 border-slate-200 bg-white transition hover:border-[#078F9E] ${
                index === 1 || index === 6
                  ? "border-t-red-300"
                  : ""
              }`}
            />
          ))}
        </div>
      </div> */}

      {/* Legend */}
      {/* <div className="mt-3 flex flex-wrap justify-center gap-3 text-[9px] font-semibold">
        <Legend color="bg-[#52A36A]" label="Healthy" />
        <Legend color="bg-[#4D9BF5]" label="Gingivitis" />
        <Legend color="bg-[#E05252]" label="Periodontitis" />
        <Legend color="bg-slate-300" label="Missing" />
      </div> */}
    </section>
  );
}

function Legend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1">
      <span className={`size-2.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}