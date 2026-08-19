import {
  Bot,
  ClipboardList,
  FileSearch,
  Search,
  Stethoscope,
} from "lucide-react";
import logo from '@/assets/logo (2).png'

export function AIResult() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 
    shadow-sm">
      {/* AI heading */}
      <div className="flex items-center gap-3">
        <div className="flex  items-center justify-center">
             <img src={logo} className="h-15 w-20" />
        </div>

        <h3 className="text-lg font-bold text-[#00A0B1]">
          Afrident-AI: results
        </h3>
      </div>

      {/* Diagnosis */}
      <div className="mt-3 rounded-lg bg-[#F6F9FC] p-3">
        <div className="grid gap-4 md:grid-cols-3">

          <ResultColumn
            icon={<Stethoscope />}
            title="Possible diagnosis"
            items={[
              "Acute Odontogenic abscess",
              "Periapical abscess",
              "Cellulitis of odontogenic origin",
            ]}
          />

          <ResultColumn
            icon={<Search />}
            title="Differential Diagnosis"
            items={[
              "Pericoronitis",
              "Sinusitis",
            ]}
          />

          <ResultColumn
            icon={<ClipboardList />}
            title="Recommended Investigation"
            items={[
              "Clinical examination",
              "Periapical radiograph",
            ]}
          />

        </div>
      </div>

      {/* Treatment */}
      <div className="mt-3 rounded-lg bg-[#F6F9FC] p-3">
        <div className="flex items-center gap-2 text-lg font-bold text-[#183A61]">
          <ClipboardList className="size-6" />
          Treatment Recommendations
        </div>

        <ul className="mt-2 space-y-1 pl-5 text-[16px] text-slate-600">
          <li className="list-disc">
            Pain management (NSAIDs)
          </li>

          <li className="list-disc">
            Antibiotics (Amoxicillin / Metronidazole)
          </li>
        </ul>
      </div>

      {/* References */}
      <div className="mt-3 rounded-lg bg-[#F6F9FC] p-3">
        <div className="flex items-center gap-2 text-lg font-bold text-[#183A61]">
          <FileSearch className="size-6" />
          References
        </div>

        <ol className="mt-2 space-y-1 pl-5 text-[16px] text-slate-600">
          <li>
            ADA. (2022). Oral Health Topics: Dental Abscess.
            American Dental Association
          </li>

          <li>
            Nair, P. N. R. (2016). Seltzer and Bender's
            Dental Pulp. Elsevier
          </li>
        </ol>
      </div>

      <p className="mt-3 text-[14px] text-slate-400">
        AI-generated information is for educational purposes
        and should not replace professional dental evaluation.
      </p>
    </div>
  );
}

function ResultColumn({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[17px] font-bold text-[#183A61]">
        {icon}
        {title}
      </div>

      <ul className="mt-2 space-y-1.5 pl-3 text-[16px] text-slate-600">
        {items.map((item) => (
          <li
            key={item}
            className="list-disc"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}