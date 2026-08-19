import {
  BookOpen,
  CheckSquare,
  Headphones,
  Languages,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function EducationQuickActions() {
  const actions = [
    {
      title: "Language Selection",
      description: "Learn in your preferred African language",
      icon: Languages,
      iconClass: "bg-[#E5F7F9] text-[#008FA0]",
      button: "English",
      buttonClass: "border-slate-300 text-slate-800",
      action: () => console.log("Language selection"),
      isDropdown: true, // Add this flag
      options: ["English", "Swahili", "Yoruba", "Hausa", "Zulu", "Amharic"], // Example languages
    },
    {
      title: "Audio Learning",
      description: "Listen to topics with voice explanations",
      icon: Headphones,
      iconClass: "bg-[#EDF5FF] text-[#168FE7]",
      button: "Listen now",
      buttonClass: "border-[#168FE7] text-[#168FE7]",
      action: () => console.log("Listen now"),
      isDropdown: false,
    },
    {
      title: "Quiz Yourself",
      description: "Test your knowledge and track your progress",
      icon: CheckSquare,
      iconClass: "bg-[#EAF9EF] text-[#38A864]",
      button: "Start Quiz →",
      buttonClass: "border-[#38A864] text-[#38A864]",
      action: () => console.log("Start quiz"),
      isDropdown: false,
    },
    {
      title: "Nearby Dental Clinic",
      description: "Find trusted dental clinics near you",
      icon: MapPin,
      iconClass: "bg-[#F6ECFF] text-[#A763DF]",
      button: "Find clinic →",
      buttonClass: "border-[#A763DF] text-[#A763DF]",
      action: () => console.log("Find clinic"),
      isDropdown: false,
    },
  ];

  return (
    <section className="mt-7 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <div
              key={action.title}
              className={`flex items-center gap-4 px-3 ${
                index !== 0 ? "xl:border-l xl:border-slate-200" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-full ${action.iconClass}`}
              >
                <Icon className="size-6" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-[#203E62]">
                  {action.title}
                </h3>

                <p className="mt-1 text-[15px] leading-relaxed text-slate-800">
                  {action.description}
                </p>

                {/* Conditional rendering: Dropdown or Button */}
                {action.isDropdown ? (
                  <select
                    defaultValue={action.button}
                    onChange={(e) => {
                      console.log("Language selected:", e.target.value);
                      // You can call a custom handler here
                    }}
                    className="mt-2 h-8 cursor-pointer rounded-md border border-slate-300 bg-white px-2 
                    text-[13px] font-semibold text-slate-800 outline-none focus:border-[#008FA0] focus:ring-1 focus:ring-[#008FA0]"
                  >
                    {action.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={action.action}
                    className={`mt-2 h-8 text-[13px] font-semibold ${action.buttonClass} cursor-pointer`}
                  >
                    {action.button}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}