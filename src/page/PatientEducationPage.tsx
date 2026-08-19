// PatientEducationPage.tsx - Updated with clear handler
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
} from "lucide-react";
import { EducationSearch } from "@/component/education/EducationSearch";
import { EducationCategories } from "@/component/education/EducationCategories";
import { HealthTopicCard } from "@/component/education/HealthTopicCard";
import { EducationQuickActions } from "@/component/education/educationQuickActions";
import allBg from '@/assets/all bg.png';
import patientIcon from '@/assets/patientIcon.png'

export default function PatientEducationPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("Dental Caries");

  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Searching for:");

  const handleSearch = (value: string) => {
    if (!value.trim()) return;
    
    setIsLoading(true);
    setLoadingMessage(`Searching for: "${value}"`);
    setActiveSearchTerm(value);
    
    // Simulate API call with delay
    setTimeout(() => {
      setIsLoading(false);
    }, 700 + Math.random() * 500);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      handleSearch(searchTerm);
    }
  };

  // Clear search - resets everything back to default
  const handleClearSearch = () => {
    setSearchTerm("");
    setActiveSearchTerm("");
    setIsLoading(false);
    setLoadingMessage("Searching for:");
    // Optionally reset category to default
    setSelectedCategory("Dental Caries");
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${allBg})` }}
    >
      
      {/* Main content */}
      <section className="mx-auto max-w-566.5 px-10 pb-10 pt-5 lg:px-7">
        <div className="flex items-start gap-10">
          {/* Back */}
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#008FA0]"
          >
            <ArrowLeft className="size-4" />
            Home
          </Link>

          {/* Header */}
          <div className="mb-5 flex items-start gap-4">
            <div className="mt-1 flex size-12 items-center justify-center">
              <img 
              src={patientIcon}
                className="size-14d "
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Patient Education center
              </h1>

              <p className="mt-2 text-base font-medium text-slate-500">
                Learn, understand and take better care of your oral health
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <EducationSearch
          value={searchTerm}
          onChange={handleInputChange}
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
          onClear={handleClearSearch}
          isLoading={isLoading}
          loadingMessage={loadingMessage}
        />

        {/* Main education area */}
        <div className="mt-4 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Categories */}
          <EducationCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Topic - Shows loading animation when searching */}
          <HealthTopicCard
            category={selectedCategory}
            searchTerm={activeSearchTerm}
            isLoading={isLoading}
            loadingMessage={loadingMessage}
          />
        </div>

        {/* Bottom actions */}
        <EducationQuickActions />
      </section>
    </main>
  );
}