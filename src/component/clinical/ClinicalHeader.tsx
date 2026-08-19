import { Camera } from "lucide-react";
import clinical from '@/assets/clinical.png'
export function ClinicalHeader() {
  return (
    <div className="flex items-start gap-4 px-2">
        <img src={clinical} className="size-12" />

      <div >
        <h1 className="text-5xl mb-4 font-bold tracking-tight
         text-slate-950 md:text-3xl">
          Clinical Decision Support
        </h1>

        <p className="mt-3 max-w-[720px] text-[14px] leading-relaxed text-slate-800">
          AI-powered insights to support dental professionals in making
          accurate, evidence-based clinical decisions
        </p>
      </div>
    </div>
  );
}