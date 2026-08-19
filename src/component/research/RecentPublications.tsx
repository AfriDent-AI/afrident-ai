import {
  BookOpen,
  ChevronRight,
} from "lucide-react";

const publications = [
  {
    title: "Prevalence of Dental caries in 12 African Countries",
    description: "African Journal of Oral Health 2026",
    className: "bg-[#FF3B30]",
  },
  {
    title: "AI for Dental Radiograph Analysis: A Systematic Review",
    description: "BMC Oral Health 2026",
    className: "bg-[#936126]",
  },
];

export function RecentPublications() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#203E62]">
          <BookOpen className="size-5 text-[#078F9E]" />
          Recent Publications
        </h2>

        <button className="text-[9px] font-semibold text-[#078F9E]">
          View all
        </button>
      </div>

      <div className="space-y-2">
        {publications.map((publication) => (
          <button
            key={publication.title}
            type="button"
            onClick={() => console.log(publication.title)}
            className="group flex w-full gap-3 rounded-xl border border-slate-200 p-2 text-left hover:border-[#078F9E]"
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-white ${publication.className}`}
            >
              <BookOpen className="size-5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold leading-tight text-slate-700">
                {publication.title}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {publication.description}
              </p>
            </div>

            <ChevronRight className="mt-1 size-3 shrink-0 text-slate-500 group-hover:text-[#078F9E]" />
          </button>
        ))}
      </div>
    </section>
  );
}