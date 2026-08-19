import {
  FileText,
  ChevronRight,
} from "lucide-react";

const documents = [
  {
    title: "WHO Reports",
    description: "Global oral health reports",
  },
  {
    title: "FDI Guidelines",
    description: "Clinical practice guidelines",
  },
  {
    title: "Africa CDC Reports",
    description: "Disease surveillance reports",
  },
];

export function PolicyDocuments() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 ">
        <FileText className="size-5 text-[#078F9E]" />
        Policy & Guidelines Documents
      </h2>

      <div className="space-y-2">
        {documents.map((document) => (
          <button
            key={document.title}
            type="button"
            onClick={() => console.log(document.title)}
            className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-[#078F9E] hover:bg-[#F5FCFD]"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[#078F9E]">
              <FileText className="size-5" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-slate-700">
                {document.title}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {document.description}
              </p>
            </div>

            <ChevronRight className="size-4 text-slate-500 group-hover:text-[#078F9E]" />
          </button>
        ))}
      </div>
    </section>
  );
}