import {
  Database,
  FileText,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    title: "Download Dataset",
    description: "Access raw data for research",
    icon: Database,
    className: "text-[#078F9E]",
  },
  {
    title: "Generate Report",
    description: "Create customized research report",
    icon: FileText,
    className: "text-[#0875E1]",
  },
  {
    title: "Export Statistics",
    description: "Export charts and statistics",
    icon: BarChart3,
    className: "text-[#8B5DE8]",
  },
  {
    title: "Policy Brief",
    description: "Generate Policy brief",
    icon: ShieldCheck,
    className: "text-[#299B61]",
  },
];

export function ResearchActionBar() {

  const navigate = useNavigate();
  return (
    <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">

      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.title}
            type="button"
             onClick={() => {
              if (action.title === "Generate Report") {
                navigate("/researchers/report");
                return;
              } }}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 ${action.className}`}>
              <Icon className="size-6" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold text-slate-700">
                {action.title}
              </p>

              <p className="mt-1 text-[10px] text-slate-500">
                {action.description}
              </p>
            </div>

            <ArrowRight className="size-4 text-slate-400" />
          </button>
        );
      })}
    </div>
  );
}