// HealthTopicCard.tsx - Updated with SearchLoading animation
import {
  BookOpen,
  FileText,
  Play,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import sparkls from '@/assets/Sparkles.png'
import teethImg from '@/assets/TeethImg.png'
import { SearchLoading } from "../searchLoading";

type HealthTopicCardProps = {
  category: string;
  searchTerm: string;
  isLoading?: boolean;
  loadingMessage?: string;
};

const topicData: Record<
  string,
  {
    description: string;
    symptoms: string[];
    causes: string[];
    prevention: string[];
    treatment: string[];
  }
> = {
  "Dental Caries": {
    description:
      "Dental caries (tooth decay) is one of the most common oral health problems.",
    symptoms: [
      "Toothache",
      "Sensitivity to sweets, hot or cold",
      "Visible holes in the tooth",
      "Pain while eating",
    ],
    causes: [
      "Plaque build up",
      "Sugary foods and drinks",
      "Poor oral hygiene",
      "Frequent snacking",
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss daily",
      "Eat healthy foods",
      "Visit your dentist regularly",
    ],
    treatment: [
      "Fillings",
      "Fluoride treatment",
      "Crowns",
      "Root canal when clinically indicated",
    ],
  },

  "Tooth Brushing": {
    description:
      "Good tooth-brushing habits help remove plaque and protect your teeth and gums.",
    symptoms: [
      "Plaque buildup",
      "Bad breath",
      "Gum irritation",
    ],
    causes: [
      "Infrequent brushing",
      "Incorrect technique",
      "Skipping difficult areas",
    ],
    prevention: [
      "Brush twice daily",
      "Use fluoride toothpaste",
      "Replace your toothbrush regularly",
    ],
    treatment: [
      "Professional cleaning",
      "Improved brushing technique",
      "Dental assessment when needed",
    ],
  },
};

// Hardcoded search results for specific keywords
const SEARCH_RESULTS: Record<
  string,
  {
    title: string;
    description: string;
    icon: string;
    symptoms: string[];
    causes?: string[];
    prevention: string[];
    treatment: string[];
    recommendation: string;
  }
> = {
  "gum disease": {
    title: "Gum Disease",
    description: "Gingivitis / Periodontitis - Gum inflammation and infection",
    icon: "🦷",
    symptoms: [
      "Red or swollen gums",
      "Bleeding when brushing",
      "Bad breath",
      "Tender or receding gums",
      "Loose teeth in advanced cases"
    ],
    causes: [
      "Plaque buildup",
      "Poor oral hygiene",
      "Smoking",
      "Hormonal changes",
      "Certain medications"
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss daily",
      "Use antibacterial mouthwash",
      "Regular dental checkups",
      "Quit smoking"
    ],
    treatment: [
      "Professional dental cleaning",
      "Improved brushing and flossing",
      "Deep cleaning (scaling and root planing)",
      "Additional periodontal treatment if needed"
    ],
    recommendation: "See a dentist for a gum examination, especially if bleeding or swelling persists."
  },
  "gum": {
    title: "Gum Disease",
    description: "Gingivitis / Periodontitis - Gum inflammation and infection",
    icon: "🦷",
    symptoms: [
      "Red or swollen gums",
      "Bleeding when brushing",
      "Bad breath",
      "Tender or receding gums",
      "Loose teeth in advanced cases"
    ],
    causes: [
      "Plaque buildup",
      "Poor oral hygiene",
      "Smoking",
      "Hormonal changes",
      "Certain medications"
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss daily",
      "Use antibacterial mouthwash",
      "Regular dental checkups",
      "Quit smoking"
    ],
    treatment: [
      "Professional dental cleaning",
      "Improved brushing and flossing",
      "Deep cleaning (scaling and root planing)",
      "Additional periodontal treatment if needed"
    ],
    recommendation: "See a dentist for a gum examination, especially if bleeding or swelling persists."
  },
  "gingivitis": {
    title: "Gum Disease",
    description: "Gingivitis / Periodontitis - Gum inflammation and infection",
    icon: "🦷",
    symptoms: [
      "Red or swollen gums",
      "Bleeding when brushing",
      "Bad breath",
      "Tender or receding gums",
      "Loose teeth in advanced cases"
    ],
    causes: [
      "Plaque buildup",
      "Poor oral hygiene",
      "Smoking",
      "Hormonal changes",
      "Certain medications"
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss daily",
      "Use antibacterial mouthwash",
      "Regular dental checkups",
      "Quit smoking"
    ],
    treatment: [
      "Professional dental cleaning",
      "Improved brushing and flossing",
      "Deep cleaning (scaling and root planing)",
      "Additional periodontal treatment if needed"
    ],
    recommendation: "See a dentist for a gum examination, especially if bleeding or swelling persists."
  },
  "periodontitis": {
    title: "Gum Disease",
    description: "Gingivitis / Periodontitis - Gum inflammation and infection",
    icon: "🦷",
    symptoms: [
      "Red or swollen gums",
      "Bleeding when brushing",
      "Bad breath",
      "Tender or receding gums",
      "Loose teeth in advanced cases"
    ],
    causes: [
      "Plaque buildup",
      "Poor oral hygiene",
      "Smoking",
      "Hormonal changes",
      "Certain medications"
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss daily",
      "Use antibacterial mouthwash",
      "Regular dental checkups",
      "Quit smoking"
    ],
    treatment: [
      "Professional dental cleaning",
      "Improved brushing and flossing",
      "Deep cleaning (scaling and root planing)",
      "Additional periodontal treatment if needed"
    ],
    recommendation: "See a dentist for a gum examination, especially if bleeding or swelling persists."
  },
  "children": {
    title: "Children's Oral Health",
    description: "Common Concerns & Prevention for young smiles",
    icon: "👶",
    symptoms: [
      "Cavities/tooth decay",
      "Gum inflammation",
      "Tooth sensitivity",
      "Early tooth loss",
      "Thumb sucking or other oral habits"
    ],
    causes: [
      "Frequent sugary snacks and drinks",
      "Poor brushing habits",
      "Irregular dental visits",
      "Thumb sucking or pacifier use",
      "Lack of fluoride"
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss once teeth touch each other",
      "Limit sugary snacks and drinks",
      "Regular dental checkups every 6 months",
      "Apply dental sealants"
    ],
    treatment: [
      "Professional dental cleaning",
      "Fluoride treatments",
      "Dental sealants for prevention",
      "Early intervention for developmental issues",
      "Cavity fillings if needed"
    ],
    recommendation: "Start dental visits early and have children checked regularly to monitor tooth development."
  },
  "child": {
    title: "Children's Oral Health",
    description: "Common Concerns & Prevention for young smiles",
    icon: "👶",
    symptoms: [
      "Cavities/tooth decay",
      "Gum inflammation",
      "Tooth sensitivity",
      "Early tooth loss",
      "Thumb sucking or other oral habits"
    ],
    causes: [
      "Frequent sugary snacks and drinks",
      "Poor brushing habits",
      "Irregular dental visits",
      "Thumb sucking or pacifier use",
      "Lack of fluoride"
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss once teeth touch each other",
      "Limit sugary snacks and drinks",
      "Regular dental checkups every 6 months",
      "Apply dental sealants"
    ],
    treatment: [
      "Professional dental cleaning",
      "Fluoride treatments",
      "Dental sealants for prevention",
      "Early intervention for developmental issues",
      "Cavity fillings if needed"
    ],
    recommendation: "Start dental visits early and have children checked regularly to monitor tooth development."
  },
  "kids": {
    title: "Children's Oral Health",
    description: "Common Concerns & Prevention for young smiles",
    icon: "👶",
    symptoms: [
      "Cavities/tooth decay",
      "Gum inflammation",
      "Tooth sensitivity",
      "Early tooth loss",
      "Thumb sucking or other oral habits"
    ],
    causes: [
      "Frequent sugary snacks and drinks",
      "Poor brushing habits",
      "Irregular dental visits",
      "Thumb sucking or pacifier use",
      "Lack of fluoride"
    ],
    prevention: [
      "Brush twice daily with fluoride toothpaste",
      "Floss once teeth touch each other",
      "Limit sugary snacks and drinks",
      "Regular dental checkups every 6 months",
      "Apply dental sealants"
    ],
    treatment: [
      "Professional dental cleaning",
      "Fluoride treatments",
      "Dental sealants for prevention",
      "Early intervention for developmental issues",
      "Cavity fillings if needed"
    ],
    recommendation: "Start dental visits early and have children checked regularly to monitor tooth development."
  }
};

// Function to check if search term matches any keywords
const getSearchResult = (searchTerm: string) => {
  if (!searchTerm.trim()) return null;
  
  const normalizedTerm = searchTerm.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(SEARCH_RESULTS)) {
    if (normalizedTerm.includes(key) || key.includes(normalizedTerm)) {
      return value;
    }
  }
  return null;
};

// No Results Component
function NoResults({ searchTerm }: { searchTerm: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">No Results Found</h3>
        <p className="text-slate-500 max-w-md">
          We couldn't find any educational information matching "{searchTerm}".
        </p>
        
      </div>
    </article>
  );
}

export function HealthTopicCard({
  category,
  searchTerm,
  isLoading = false,
  loadingMessage = "Searching for:",
}: HealthTopicCardProps) {
  const topic = topicData[category] ?? topicData["Dental Caries"];
  const hasSearch = searchTerm.trim().length > 0;
  const searchResult = getSearchResult(searchTerm);

  // Show loading animation - Same as HeroSection
  if (isLoading) {
    return (
      <div className="  mt-72  p-7 ">
        <SearchLoading searchQuery={loadingMessage} />
      </div>
    );
  }

  // Show no results if search term doesn't match anything
  if (hasSearch && !searchResult) {
    return <NoResults searchTerm={searchTerm} />;
  }

  // If there's a search result, display it like a regular topic
  if (hasSearch && searchResult) {
    return (
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#EAF9FB]">
            <span className="text-2xl">{searchResult.icon}</span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {searchResult.title}
            </h2>
            <p className="mt-1 text-base font-semibold text-slate-500">
              {searchResult.description}
            </p>
          </div>
        </div>

        {/* Content - Same layout as Dental Caries */}
        <div className="mt-7 grid gap-7 md:grid-cols-[130px_1fr]">
          {/* Icon illustration */}
          <div className="flex items-center justify-center">
            <div className="relative flex h-[145px] w-[110px] items-center justify-center">
              <div className="text-[100px] leading-none grayscale-[20%]">
                {searchResult.icon === "🦷" ? (
                  <img src={teethImg} alt="Teeth illustration" />
                ) : (
                  <span className="text-8xl">👶</span>
                )}
              </div>
            </div>
          </div>

          {/* Information - 4 columns like Dental Caries */}
          <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            {/* Symptoms */}
            <InfoSection
              icon={<span className="text-xl">📋</span>}
              title="Symptoms"
              iconClass="text-[#009BB2]"
              items={searchResult.symptoms}
            />

            {/* Causes */}
            {searchResult.causes && (
              <InfoSection
                icon={<span className="text-xl">🔍</span>}
                title="Causes"
                iconClass="text-[#168FE7]"
                items={searchResult.causes}
              />
            )}

            {/* Prevention */}
            <InfoSection
              icon={<ShieldCheck />}
              title="Prevention"
              iconClass="text-[#45A954]"
              items={searchResult.prevention}
            />

            {/* Treatment */}
            <InfoSection
              icon={<Stethoscope />}
              title="Treatment"
              iconClass="text-[#A763DF]"
              items={searchResult.treatment}
            />
          </div>
        </div>

        {/* Recommendation Section - Extra row */}
        {searchResult.recommendation && (
          <div className="mt-4 bg-blue-50 border-l-4 border-[#00A8B5] p-4 rounded-r-lg">
            <div className="flex items-start gap-2">
              <span className="text-xl">💡</span>
              <div>
                <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-1">
                  Recommendation
                </h4>
                <p className="text-gray-800">{searchResult.recommendation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          <Button
            type="button"
            onClick={() =>
              console.log("Watch video:", searchResult.title)
            }
            className="min-w-[185px] cursor-pointer rounded-lg bg-[#078F9E] text-white hover:bg-[#067984]"
          >
            <Play className="size-4 text-white fill-current" />
            Watch Video
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              console.log("Read more:", searchResult.title)
            }
            className="min-w-[185px] rounded-lg border-[#078F9E] text-[#078F9E] hover:bg-[#F0FBFC]"
          >
            <BookOpen className="size-4" />
            Read more
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 flex items-start gap-2 text-[10px] text-slate-400">
          <FileText className="mt-0.5 size-3.5 shrink-0" />
          <p>
            Educational information only. It does not replace
            professional dental examination or diagnosis.
          </p>
        </div>
      </article>
    );
  }

  // Default display for categories (Dental Caries, Tooth Brushing, etc.)
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#EAF9FB]">
          <img src={sparkls} alt="Circle decoration" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {category}
          </h2>

          <p className="mt-1 text-base font-semibold text-slate-500">
            {topic.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-7 grid gap-7 md:grid-cols-[130px_1fr]">
        {/* Tooth illustration */}
        <div className="flex items-center justify-center">
          <div className="relative flex h-[145px] w-[110px] items-center justify-center">
            <div className="text-[100px] leading-none grayscale-[20%]">
              <img src={teethImg} alt="Circle decoration" />
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
          <InfoSection
            icon={<span className="text-xl">📋</span>}
            title="Symptoms"
            iconClass="text-[#009BB2]"
            items={topic.symptoms}
          />

          <InfoSection
            icon={<span className="text-xl">🔍</span>}
            title="Causes"
            iconClass="text-[#168FE7]"
            items={topic.causes}
          />

          <InfoSection
            icon={<ShieldCheck />}
            title="Prevention"
            iconClass="text-[#45A954]"
            items={topic.prevention}
          />

          <InfoSection
            icon={<Stethoscope />}
            title="Treatment"
            iconClass="text-[#A763DF]"
            items={topic.treatment}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-7 flex flex-wrap justify-center gap-5">
        <Button
          type="button"
          onClick={() =>
            console.log("Watch video:", category)
          }
          className="min-w-[185px] cursor-pointer rounded-lg bg-[#078F9E] text-white hover:bg-[#067984]"
        >
          <Play className="size-4 text-white fill-current" />
          Watch Video
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            console.log("Read more:", category)
          }
          className="min-w-[185px] rounded-lg border-[#078F9E] text-[#078F9E] hover:bg-[#F0FBFC]"
        >
          <BookOpen className="size-4" />
          Read more
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="mt-5 flex items-start gap-2 text-[10px] text-slate-400">
        <FileText className="mt-0.5 size-3.5 shrink-0" />
        <p>
          Educational information only. It does not replace
          professional dental examination or diagnosis.
        </p>
      </div>
    </article>
  );
}

function InfoSection({
  icon,
  title,
  items,
  iconClass,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  iconClass: string;
}) {
  return (
    <div className="px-5 py-4 first:pl-0 last:pr-0">
      <div className="flex items-center gap-2">
        <span className={iconClass}>
          {icon}
        </span>

        <h3 className="text-xl font-bold text-[#203E62]">
          {title}
        </h3>
      </div>

      <ul className="mt-3 space-y-2 pl-4">
        {items.map((item) => (
          <li
            key={item}
            className="list-disc text-[16px] leading-relaxed text-slate-800"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}