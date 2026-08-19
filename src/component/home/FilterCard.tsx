// SearchBar.tsx
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/Service";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ElementType;
  path: string;
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter services based on search query
  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchQuery = query.toLowerCase().trim();
    const filtered = services.filter((service) => {
      // Search in title
      if (service.title.toLowerCase().includes(searchQuery)) return true;
      // Search in description
      if (service.description.toLowerCase().includes(searchQuery)) return true;
      // Search in items
      if (service.items.some((item) => 
        item.toLowerCase().includes(searchQuery)
      )) return true;
      return false;
    });

    setResults(filtered);
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            handleResultClick(results[selectedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          closeSearch();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    closeSearch();
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-200 text-black">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search services..."
          className="w-full rounded-full border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-[#00A8B5] focus:ring-2 focus:ring-[#00A8B5]/20"
        />
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        {query && (
          <button
            onClick={closeSearch}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 hover:bg-gray-100"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          <div className="max-h-96 overflow-y-auto py-2">
            {results.map((result, index) => (
              <div
                key={result.id}
                onClick={() => handleResultClick(result)}
                className={`cursor-pointer px-4 py-3 transition-colors ${
                  index === selectedIndex
                    ? "bg-[#E6F8FA]"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#218792] text-white">
                    <result.icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {highlightMatch(result.title, query)}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {highlightMatch(result.description, query)}
                    </p>
                    {result.items && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {result.items.slice(0, 2).map((item) => (
                          <span
                            key={item}
                            className="text-xs text-gray-400"
                          >
                            • {highlightMatch(item, query)}
                          </span>
                        ))}
                        {result.items.length > 2 && (
                          <span className="text-xs text-gray-400">
                            +{result.items.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center">
                    <span className="text-xs font-medium text-[#00A8B5]">
                      Explore
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer with result count */}
          <div className="border-t border-gray-100 bg-gray-50 px-4 py-2 text-xs text-gray-500">
            Found {results.length} {results.length === 1 ? "result" : "results"}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {isOpen && results.length === 0 && query.trim() && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg">
          <p className="text-sm text-gray-500">
            No services found matching "
            <span className="font-medium text-gray-700">{query}</span>"
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Try searching for "dental", "education", "clinical", "research", "AI", or "policy"
          </p>
        </div>
      )}
    </div>
  );
}