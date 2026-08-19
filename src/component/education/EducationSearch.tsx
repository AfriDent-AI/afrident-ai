// EducationSearch.tsx - Updated with clear button
import {
  Camera,
  Mic,
  Search,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type EducationSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  isLoading?: boolean;
  loadingMessage?: string;
};

export function EducationSearch({
  value,
  onChange,
  onSearch,
  onKeyDown,
  onClear,
  isLoading = false,
  loadingMessage = "Searching for:",
}: EducationSearchProps) {
  const handleSearch = () => {
    if (onSearch && value.trim()) {
      onSearch(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.trim()) {
      if (onKeyDown) {
        onKeyDown(event);
      } else {
        handleSearch();
      }
    }
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
    onChange("");
  };

  return (
    <div className="relative flex mx-auto  gap-7 max-w-[780px]">
      
      <div className="flex h-14 items-center rounded-xl border w-full border-slate-100 bg-white shadow-sm">
        {/* Input */}
        <div className="relative flex-1">
          <Input
            value={value}
            onChange={(event) =>
              onChange(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Search oral health topics (e.g., gum disease, children's oral health)"
            className="h-14 border-0 bg-transparent px-5 pr-2 text-sm shadow-none focus-visible:ring-0"
            disabled={isLoading}
          />
        </div>

        

        {/* Camera */}
        <button
          type="button"
          aria-label="Search by image"
          className="mr-3 text-slate-700 transition hover:text-[#008FA0]"
          onClick={() =>
            console.log("Image search clicked")
          }
          disabled={isLoading}
        >
          <Camera className="size-5" />
        </button>

        {/* Voice */}
        <button
          type="button"
          aria-label="Voice search"
          className="mr-4 text-slate-700 transition hover:text-[#008FA0]"
          onClick={() =>
            console.log("Voice search clicked")
          }
          disabled={isLoading}
        >
          <Mic className="size-5" />
        </button>

        {/* Search */}
        <Button
          type="button"
          onClick={handleSearch}
          disabled={isLoading || !value.trim()}
          className="mr-0 h-14 w-20 rounded-xl rounded-l-none bg-[#078F9E] hover:bg-[#067984] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <Search className="size-7 text-white" />
          )}
        </Button>
        
      </div>
      {/* Clear button - shows only when there's text and not loading */}
        {value && !isLoading && (
          <button
            type="button"
            onClick={handleClear}
            className="mr-1 text-red-400 font-bold w-5  relative left-10 mx-auto text-right transition hover:text-red-600"
            aria-label="Clear search"
          >
            <X className="size-8" />
          </button>
        )}
    </div>
  );
}