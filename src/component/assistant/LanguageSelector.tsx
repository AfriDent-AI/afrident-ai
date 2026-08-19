import { useState } from "react";
import {
  CheckCircle2,
  CirclePile,
  CircleStar,
  GlobeIcon,
  MessageCircleCheck,
  Search,
} from "lucide-react";
import engFlag from '@/assets/Engl.png'
import AmhFlag from '@/assets/eth.png'
import swahi from '@/assets/swahi.png'
import french from '@/assets/fren.png'
import arab from '@/assets/arab.png'
import hausa from '@/assets/hausa.png'
import { Input } from "@/components/ui/input";

type LanguageSelectorProps = {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
};

const languages = [
  {
    name: "English",
    flag: engFlag,
  },
  {
    name: "Amharic",
    flag: AmhFlag,
  },
  {
    name: "Swahili",
    flag: swahi,
  },
  {
    name: "French",
    flag: french,
  },
  {
    name: "Arabic",
    flag: arab,
  },
  {
    name: "Affan Oromoo",
    flag: AmhFlag,
  },
  {
    name: "Hausa",
    flag: hausa,
  },
];

export function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  const [search, setSearch] = useState("");

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <GlobeIcon className="size-6 text-[#008FA0]" />

        <h2 className="text-xl font-bold text-slate-900">
          Language selection
        </h2>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search language..."
          className="h-10 pr-10 text-xs"
        />

        <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#008FA0]" />
      </div>

      {/* Languages */}
      <div className="space-y-2">
        {filteredLanguages.map((language) => {
          const selected = selectedLanguage === language.name;

          return (
            <button
              key={language.name}
              type="button"
              onClick={() => onLanguageChange(language.name)}
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
                selected
                  ? "border-[#008FA0] bg-[#0795A5] text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-800 hover:border-[#7BD5DC] hover:bg-[#F0FBFC]"
              }`}
            >
                
                <img 
            src={language.flag} 
            className="w-6 h-4 object-cover rounded-sm"
          />
              <span className="flex-1 text-base font-medium">
                {language.name}
              </span>

              {selected && (
                <CheckCircle2 className="size-4" />
              )}
            </button>
          );
        })}
      </div>

      {/* Description */}
      <div className="mt-5 flex gap-2 rounded-xl bg-[#F0FBFC] p-3">
        <div className="mt-0.5">
          <MessageCircleCheck className="size-6 text-[#159BE8]" />
        </div>

        <p className="text-[15px] leading-relaxed text-slate-500">
          Our AI understands and communicates in multiple African languages.
        </p>
      </div>
    </div>
  );
}