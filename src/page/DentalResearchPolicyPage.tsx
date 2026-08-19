import { HealthConditionsChart } from "@/component/research/HealthConditionsChart";
import { OralDiseaseBurden } from "@/component/research/OralDiseaseBurden";
import { PolicyDocuments } from "@/component/research/PolicyDocument";
import { RecentPublications } from "@/component/research/RecentPublications";
import { ResearchByCountry } from "@/component/research/ResearchByCountry";
import { ResearchCategories } from "@/component/research/ResearchCategory";
import { ResearchHeader } from "@/component/research/ResearchHeader";
import { ResearchStats } from "@/component/research/ResearchStats";
import { WorkforceByCountry } from "@/component/research/WorkForceByCountry";
import { ResearchActionBar } from "@/component/research/ResearcherActionBar";
import allBg from '@/assets/all bg.png'; 

export default function DentalResearchPolicyPage() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${allBg})` }}
    >
      <div className="mx-auto max-w-500 px-10 pt-6 pb-8">
        <ResearchHeader />

        <div className="mt-5 grid gap-4 xl:grid-cols-[300px_minmax(0,1fr)_330px]">

          {/* Left */}
          <ResearchCategories />

          {/* Center */}
          <div className="min-w-0">
            <ResearchStats />

            <div className="mt-3 grid gap-3 lg:grid-cols-2">
              <ResearchByCountry />
              <WorkforceByCountry />
              <OralDiseaseBurden />
              <HealthConditionsChart />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3">
            <PolicyDocuments />
            <RecentPublications />
          </div>
        </div>

        <ResearchActionBar />
      </div>
    </main>
  );
}