import {
  BookOpen,
  Globe2,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "African Publications",
    value: "12,458",
    change: "+18.6% from last year",
    icon: BookOpen,
    iconClass: "bg-[#E9F8F9] text-[#078F9E]",
  },
  {
    title: "Countries covered",
    value: "54",
    change: "+6 from last year",
    icon: Globe2,
    iconClass: "bg-[#EDF6FF] text-[#0875E1]",
  },
  {
    title: "Oral Disease Burden",
    value: "8.7M",
    change: "Affected people",
    icon: TrendingUp,
    iconClass: "bg-[#EEF5FF] text-[#0875E1]",
  },
  {
    title: "Dental Workforce",
    value: "95,342",
    change: "Professionals",
    icon: Users,
    iconClass: "bg-[#E9F8F9] text-[#078F9E]",
  },
];

export function ResearchStats() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className={`flex size-9 items-center justify-center rounded-lg ${stat.iconClass}`}
              >
                <Icon className="size-5" />
              </div>

              <div>
                <p className="text-[9px] font-semibold text-slate-600">
                  {stat.title}
                </p>

                <p className="text-2xl font-extrabold leading-none text-slate-950">
                  {stat.value}
                </p>

                <p className="mt-1 text-[7px] text-[#299B61]">
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}