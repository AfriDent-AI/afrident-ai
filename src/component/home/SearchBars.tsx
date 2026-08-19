// SearchBar.tsx - Updated
import { Button } from "@base-ui/react";
import { Search, X, Camera, Mic } from "lucide-react";
import { useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  placeholder?: string;
  onCameraClick?: (file?: File) => void;
  onMicClick?: () => void;
  onSearchSubmit?: () => void;
  isRecording?: boolean;
  isLoading?: boolean;
}

export function SearchBar({ 
  value, 
  onChange, 
  onClear, 
  placeholder = "Search services, symptoms. . . .",
  onCameraClick,
  onMicClick,
  onSearchSubmit,
  isRecording = false,
  isLoading = false
}: SearchBarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onCameraClick) {
      onCameraClick(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <div className="relative flex items-center w-full max-w-md">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="environment"
        className="hidden"
        aria-label="Upload image"
      />
      
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full rounded-l-full border border-gray-200 bg-white 
        py-2.5 pl-10 pr-24
         text-sm shadow-sm transition-all focus:border-[#00A8B5] focus:outline-none focus:ring-2 focus:ring-[#00A8B5]/20"
      />
      
      <div className="absolute right-2 flex items-center gap-1">
        {/* Camera button */}
        {onCameraClick && (
          <button
            onClick={handleCameraClick}
            className="rounded-full p-1.5 text-[#00A8B5] transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Upload image"
          >
            <Camera className="h-4 w-4" />
          </button>
        )}
        
        {/* Microphone button */}
        {onMicClick && (
          <button
            onClick={onMicClick}
            className={`rounded-4xl p-1.5 transition-colors ${
              isRecording 
                ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
            }`}
            aria-label="Search with voice"
          >
            <Mic className="h-4 w-4 text-[#00A8B5]" />
          </button>
        )}
        
        {/* Clear button */}
        {value && (
          <button
            onClick={onClear}
            className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        
        <Button
          onClick={onSearchSubmit}
          disabled={isLoading || !value.trim()}
          className="h-10 w-10 absolute -right-10 rounded-r-4xl bg-[#078B9B] hover:bg-[#067785] disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Search"
        >
          {isLoading ? (
            <div className="h-4 w-4 border-2 border-white  rounded-full animate-spin" />
          ) : (
            <Search className="w-10 h-4 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
}