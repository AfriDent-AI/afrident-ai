import {
  ExternalLink,
  FileText,
} from "lucide-react";

const sources = [
  {
    organization: "ADA Clinical Guidelines",
    publisher: "American Dental Association",
    abbreviation: "ADA",
  },
  {
    organization: "WHO Oral Health Fact Sheets",
    publisher: "World Health Organization",
    abbreviation: "WHO",
  },
];

export function EvidenceSources() {
  return (
    <div className="min-h-42.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="size-5 text-[#183A61]" />

          <h2 className="text-lg font-semibold text-[#183A61]">
            Evidence source
          </h2>
        </div>

        <button
          type="button"
          className="text-[13px] font-bold text-[#008FA0] hover:underline"
        >
          View all
        </button>
      </div>

      <div className="space-y-4">
        {sources.map((source) => (
          <div
            key={source.organization}
            className="flex items-center gap-2"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded bg-[#E8F7FA] text-[12px] font-extrabold text-[#008FA0]">
              {source.abbreviation}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-slate-700">
                {source.organization}
              </p>

              <p className="truncate text-[10px] text-slate-700">
                {source.publisher}
              </p>
            </div>

            <button
              type="button"
              aria-label={`Open ${source.organization}`}
              className="text-slate-400 hover:text-[#008FA0]"
            >
              <ExternalLink className="size-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}