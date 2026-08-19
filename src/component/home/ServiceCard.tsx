import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  title: string;
  items: string[];
  icon: React.ElementType;
  path: string;
};

export function ServiceCard({
  title,
  items,
  icon: Icon,
  path,
}: ServiceCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(path);
  };

  return (
    <Card 
      className="group flex mt-4 h-50 flex-col border-none ring-white
       bg-white px-3 shadow-md transition-all 
       duration-300 hover:-translate-y-1 hover:shadow-x cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-center gap-2">
        <div className="flex size-10 items-center justify-center shrink-0 rounded-xl
         bg-[#218792] text-white">
          <Icon className="size-8" />
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900">
            {title}
          </h3>
        </div>
      </div>

      <ul className="mt-1 flex-1 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-sm"
          >
            <span className="size-2 rounded-full bg-[#00A8B5]" />
            {item}
          </li>
        ))}
      </ul>

      {/* Button container - centers the button at the bottom */}
      <div className="mx-auto flex justify-center -mt-3">
        <Button 
          variant="outline"
          onClick={(e) => {
            e.stopPropagation(); // Prevent double navigation
            navigate(path);
          }}
          className="w-fit border-[#8BDDE2] text-[#078B9B] hover:bg-[#E6F8FA]"
        >
          Explore
          <ArrowRight />
        </Button>
      </div>
    </Card>
  );
}