// SearchLoading.tsx - Faster loading animation
import { useEffect, useState } from "react";

interface SearchLoadingProps {
  searchQuery: string;
}

export function SearchLoading({ searchQuery }: SearchLoadingProps) {
  const [thinkingStep, setThinkingStep] = useState(0);
  
  const thinkingPhrases = [
    "Analyzing...",
    "Searching database...",
    "Processing...",
    "Finding answers...",
    "Almost there..."
  ];

  useEffect(() => {
    // Faster phrase rotation - 400ms instead of 500ms
    const interval = setInterval(() => {
      setThinkingStep((prev) => (prev + 1) % thinkingPhrases.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start px-6 -mt-72 max-w-2xl mx-auto">
      {/* Search query display */}
      <div className="text-center mb-6">
        <p className="text-sm font-bold text-gray-100 mb-2">
          {searchQuery.includes("Processing") ? "Processing" : "Searching for:"}
        </p>
        <p className="text-lg font-semibold text-white">"{searchQuery}"</p>
      </div>

      {/* Loading animation */}
      <div className="flex flex-col items-center space-y-6 py-4">
        {/* AI Brain Animation - Smaller for faster feel */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-20 h-20 rounded-full border-4 border-white border-t-transparent animate-spin" />
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full animate-ping" />
            <div className="absolute w-6 h-6 bg-white rounded-full animate-pulse" />
          </div>
          
          {/* Pulsing rings - faster animation */}
          <div className="absolute -inset-3">
            <div className="w-26 h-26 rounded-full border-2 border-white animate-ping" />
          </div>
          <div className="absolute -inset-6">
            <div className="w-32 h-32 rounded-full border-2 border-white animate-ping" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        {/* Thinking text */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-base font-medium text-gray-200">
              {thinkingPhrases[thinkingStep]}
            </span>
            <span className="inline-flex">
              <span className="animate-bounce text-[#00A8B5]" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce text-[#00A8B5]" style={{ animationDelay: '100ms' }}>.</span>
              <span className="animate-bounce text-[#00A8B5]" style={{ animationDelay: '200ms' }}>.</span>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}