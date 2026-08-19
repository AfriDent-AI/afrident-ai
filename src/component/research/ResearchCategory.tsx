import {
  Users,
  BrainCircuit,
  Activity,
  ShieldCheck,
  GraduationCap,
  ChevronRight,
  Plus,
} from "lucide-react";

const categories = [
  {
    title: "Dental Public Health",
    description: "Epidemiology, community oral health, health systems",
    icon: Users,
    iconClass: "bg-[#078F9E]",
  },
  {
    title: "Artificial Intelligence",
    description: "AI in dentistry, diagnostics, machine learning",
    icon: BrainCircuit,
    iconClass: "bg-[#0875E1]",
  },
  {
    title: "Clinical Dentistry",
    description: "Diagnosis, treatment, clinical outcomes",
    icon: Activity,
    iconClass: "bg-[#8B5DE8]",
  },
  {
    title: "Preventive Dentistry",
    description: "Prevention strategies, fluoride, sealants",
    icon: ShieldCheck,
    iconClass: "bg-[#FF8A00]",
  },
  {
    title: "Dental Education",
    description: "Training, curriculum, education research",
    icon: GraduationCap,
    iconClass: "bg-[#299B61]",
  },
];

export function ResearchCategories() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="text-[#078F9E]">▦</span>
        Research Categories
      </h2>

      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.title}
              type="button"
              onClick={() => console.log(category.title)}
              className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-2 text-left transition hover:border-[#078F9E] hover:bg-[#F5FCFD]"
            >
              <div
                className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-white ${category.iconClass}`}
              >
                <Icon className="size-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-slate-800">
                  {category.title}
                </p>

                <p className="mt-0.5 text-[12px] leading-tight text-slate-600">
                  {category.description}
                </p>
              </div>

              <ChevronRight className="size-4 shrink-0 text-slate-500 transition group-hover:text-[#078F9E]" />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => console.log("Add category")}
        className="mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-[#9EDDE4] text-sm font-semibold text-[#078F9E] hover:bg-[#EAF9FB]"
      >
        <Plus className="size-3" />
        Add More Clinical Findings
        <ChevronRight className="size-3" />
      </button>
    </section>
  );
}