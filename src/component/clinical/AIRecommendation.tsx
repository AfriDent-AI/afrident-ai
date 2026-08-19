import { useState, useEffect } from "react";
import {
  Camera,
  CircleAlert,
  Pill,
  Stethoscope,
  UsersRound,
  Info,
  Loader2,
  Sparkles,
} from "lucide-react";
import aiCamera from '@/assets/Group 95.png';
import { Button } from "@/components/ui/button";
import type { PatientData } from "./PatienInformation";

interface AIRecommendationProps {
  patientData?: PatientData | null;
  isVisible?: boolean;
  isThinking?: boolean;
}

export function AIRecommendation({ patientData, isVisible = false, isThinking = false }: AIRecommendationProps) {
  // Generate recommendations based on patient data
  const generateRecommendations = (data: PatientData) => {
    let diagnosisItems = ["Acute apical abscess (most likely)"];
    let treatmentItems = ["Incision and drainage", "Root canal treatment"];
    let drugItems = ["Amoxicillin 500mg TID for 5–7 days"];
    let referralItems = ["Refer to oral & maxillofacial surgeon if:"];

    // Customize based on pain level
    if (data.pain === "Severe") {
      diagnosisItems.push("Severe periapical abscess");
      treatmentItems.push("Immediate drainage procedure");
      drugItems.push("Stronger analgesics for pain management");
    } else if (data.pain === "Moderate") {
      diagnosisItems.push("Periapical abscess");
      treatmentItems.push("Root canal treatment");
    }

    // Customize based on swelling
    if (data.swelling === "Yes") {
      diagnosisItems.push("Cellulitis of odontogenic origin");
      treatmentItems.push("Incision and drainage");
      drugItems.push("Systemic antibiotics (if indicated)");
      referralItems.push("Swelling increases or involves deep spaces");
    }

    // Customize based on mobility
    if (data.mobility === "Severe" || data.mobility === "Moderate") {
      treatmentItems.push("Consider tooth extraction if severe mobility");
    }

    // Add gender-specific or age-specific recommendations
    if (data.gender === "Female" && parseInt(data.age) > 50) {
      drugItems.push("Consider osteoporosis medications and their dental implications");
    }

    return {
      diagnosis: diagnosisItems,
      treatment: treatmentItems,
      drug: drugItems,
      referral: referralItems,
    };
  };

  // If thinking/showing loading state
  if (isThinking) {
    return (
      <section className="rounded-2xl border sticky border-slate-200 bg-white p-4 shadow-sm">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={aiCamera} className="size-10" />
            <h2 className="text-2xl font-bold text-slate-900">AI Recommendation</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Confidence Score</span>
            <span className="rounded-md bg-[#078F9E] px-2 py-1 text-xs font-bold text-white animate-pulse">
              --
            </span>
          </div>
        </div>

        {/* Loading state */}
        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-4 border-[#078F9E]/20"></div>
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#078F9E] border-t-transparent"></div>
          </div>
          
          <div className="mt-6 flex items-center gap-2">
            <Sparkles className="size-5 text-[#078F9E] animate-pulse" />
            <p className="text-lg font-semibold text-slate-700">AI is thinking...</p>
          </div>
          
          <div className="mt-2 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#078F9E] animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="h-2 w-2 rounded-full bg-[#078F9E] animate-bounce" style={{ animationDelay: '200ms' }}></span>
            <span className="h-2 w-2 rounded-full bg-[#078F9E] animate-bounce" style={{ animationDelay: '400ms' }}></span>
          </div>
          
          <p className="mt-4 text-sm text-slate-400">Analyzing patient data and generating recommendations</p>
          
          {/* Loading skeleton cards */}
          <div className="mt-6 w-full space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl bg-[#F8FAFC] px-4 py-3 border-l-4 border-slate-200 animate-pulse">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-200"></div>
                  <div className="flex-1">
                    <div className="h-5 w-32 bg-slate-200 rounded mb-2"></div>
                    <div className="space-y-1">
                      <div className="h-4 w-full bg-slate-100 rounded"></div>
                      <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                      <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If not visible or no patient data, show placeholder
  if (!isVisible || !patientData) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <img src={aiCamera} className="size-10" />
          <h2 className="text-2xl font-bold text-slate-900">AI Recommendation</h2>
        </div>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-slate-100 p-4 mb-4">
            <Stethoscope className="size-12 text-slate-400" />
          </div>
          <p className="text-slate-500 font-medium">No patient data submitted yet</p>
          <p className="text-sm text-slate-400 mt-1">Submit patient information to get AI recommendations</p>
        </div>
      </section>
    );
  }

  const recommendations = generateRecommendations(patientData);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={aiCamera} className="size-10" />
          <h2 className="text-2xl font-bold text-slate-900">AI Recommendation</h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Confidence Score</span>
          <span className="rounded-md bg-[#078F9E] px-2 py-1 text-xs font-bold text-white animate-in fade-in duration-700">
            92%
          </span>
        </div>
      </div>

      <div className="space-y-3 animate-in fade-in duration-500 delay-100">
        <RecommendationCard
          type="diagnosis"
          title="Possible Diagnosis"
          icon={<CircleAlert />}
          items={recommendations.diagnosis}
          delay={100}
        />

        <RecommendationCard
          type="treatment"
          title="Treatment Options"
          icon={<Stethoscope />}
          items={recommendations.treatment}
          delay={200}
        />

        <RecommendationCard
          type="drug"
          title="Drug Considerations"
          icon={<Pill />}
          items={recommendations.drug}
          delay={300}
        />

        <RecommendationCard
          type="referral"
          title="Referral Recommendation"
          icon={<UsersRound />}
          items={recommendations.referral}
          delay={400}
        />
      </div>
    </section>
  );
}

type RecommendationType =
  | "diagnosis"
  | "treatment"
  | "drug"
  | "referral";

function RecommendationCard({
  title,
  icon,
  items,
  type,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  type: RecommendationType;
  delay?: number;
}) {
  const styles = {
    diagnosis: {
      border: "border-l-[#078F9E]",
      icon: "bg-[#078F9E]",
    },
    treatment: {
      border: "border-l-[#FF9B32]",
      icon: "bg-[#FF9B32]",
    },
    drug: {
      border: "border-l-[#9B6BEB]",
      icon: "bg-[#9B6BEB]",
    },
    referral: {
      border: "border-l-[#FF7A00]",
      icon: "bg-[#FF7A00]",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`rounded-xl border-l-4 bg-[#F8FAFC] px-4 py-3 ${style.border} animate-in fade-in slide-in-from-left-4 duration-300`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-3">
        <div
          className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-white ${style.icon}`}
        >
          <span className="[&>svg]:size-4">
            {icon}
          </span>
        </div>

        <div className="min-w-0 flex-1 flex items-center justify-between">
          <div className="w-full">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">
                {title}
              </h3>

              {type === "diagnosis" && (
                <div className="flex justify-end w-full">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-bold">Evidence level</span>
                      <Info className="size-3.5 text-slate-400" />
                    </div>
                    <span className="rounded bg-[#D9F5E3] px-2 py-1 text-[10px] font-semibold text-[#16864B] animate-in fade-in duration-500">
                      High
                    </span>
                  </div>
                </div>
              )}
            </div>

            <ul className="mt-2 space-y-1">
              {items.map((item, index) => (
                <li
                  key={item}
                  className="list-disc pl-1 text-sm font-medium leading-relaxed text-slate-900 marker:text-[#203E62] animate-in fade-in slide-in-from-left-4 duration-300"
                  style={{ animationDelay: `${delay + index * 100}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {type !== "diagnosis" && (
            <Button
              variant="outline"
              type="button"
              onClick={() => console.log(`View details: ${title}`)}
              className="mt-2 h-7 px-6 text-[12px] font-bold text-[#078F9E] shrink-0 ml-4"
            >
              View Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}