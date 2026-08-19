import {
  Apple,
  Baby,
  CigaretteOff,
  CircleAlert,
  Droplets,
  HeartPulse,
  Leaf,
  Ribbon,
  Smile,
  Syringe,
  type LucideIcon,
} from "lucide-react";

type Category = {
  name: string;
  icon: LucideIcon;
  iconColor: string;
};

const categories: Category[] = [
  {
    name: "Tooth Brushing",
    icon: Syringe,
    iconColor: "text-[#2685F2]",
  },
  {
    name: "Dental Caries",
    icon: Smile,
    iconColor: "text-[#168DA0]",
  },
  {
    name: "Gum Disease",
    icon: Droplets,
    iconColor: "text-[#E52D36]",
  },
  {
    name: "Children's oral Health",
    icon: Baby,
    iconColor: "text-[#FFB74D]",
  },
  {
    name: "Pregnancy",
    icon: HeartPulse,
    iconColor: "text-[#EF65B3]",
  },
  {
    name: "Nutrition",
    icon: Apple,
    iconColor: "text-[#40B453]",
  },
  {
    name: "Tobacco",
    icon: CigaretteOff,
    iconColor: "text-[#F01E26]",
  },
  {
    name: "Oral Cancer",
    icon: Ribbon,
    iconColor: "text-[#A867E8]",
  },
];

type EducationCategoriesProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export function EducationCategories({
  selectedCategory,
  onCategoryChange,
}: EducationCategoriesProps) {
  return (
    <aside className="">
      <h2 className="mb-3 text-lg font-bold text-slate-900">
        Categories
      </h2>

      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const selected =
            selectedCategory === category.name;

          return (
            <button
              key={category.name}
              type="button"
              onClick={() =>
                onCategoryChange(category.name)
              }
              className={`group flex h-10.5 w-full items-center gap-3 rounded-xl border px-4 transition-all ${
                selected
                  ? "border-[#8ED8E0] bg-[#F0FBFC] shadow-sm"
                  : "border-slate-200 bg-white hover:border-[#8ED8E0] hover:bg-[#F7FDFE]"
              }`}
            >
              <Icon
                className={`size-5 ${category.iconColor}`}
                strokeWidth={2.5}
              />

              <span className="flex-1 text-left text-base font-medium">
                {category.name}
              </span>

              <span className="text-lg leading-none text-slate-600 transition-transform group-hover:translate-x-0.5">
                ›
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}