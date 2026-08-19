// ResearchReportPage.tsx - Updated with print styles
import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  Download,
  FileText,
  Globe2,
  Printer,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const reportStats = [
  {
    label: "Total Studies",
    value: "1,248",
    change: "+12.4%",
    icon: FileText,
  },
  {
    label: "Countries Covered",
    value: "38",
    change: "+4",
    icon: Globe2,
  },
  {
    label: "Population Studied",
    value: "4.8M",
    change: "+8.7%",
    icon: Users,
  },
  {
    label: "Research Growth",
    value: "18.6%",
    change: "vs. 2025",
    icon: TrendingUp,
  },
];

const keyFindings = [
  {
    title: "Dental caries remains the leading condition",
    description:
      "Dental caries continues to represent the largest reported oral health burden across the African regions included in this report.",
    value: "64.8%",
  },
  {
    title: "Periodontal disease shows significant prevalence",
    description:
      "Periodontal conditions account for a substantial proportion of reported oral health cases, particularly among adults.",
    value: "42.3%",
  },
  {
    title: "Research activity is increasing",
    description:
      "The number of published oral health studies has increased steadily over the reporting period.",
    value: "+18.6%",
  },
];

const regionalData = [
  {
    country: "Ethiopia",
    studies: 184,
    prevalence: "61.4%",
  },
  {
    country: "Nigeria",
    studies: 172,
    prevalence: "58.9%",
  },
  {
    country: "Kenya",
    studies: 136,
    prevalence: "55.7%",
  },
  {
    country: "South Africa",
    studies: 214,
    prevalence: "49.2%",
  },
  {
    country: "Ghana",
    studies: 98,
    prevalence: "57.8%",
  },
];

const researchCategories = [
  { name: "Dental Caries", percentage: 64 },
  { name: "Periodontal Disease", percentage: 42 },
  { name: "Oral Cancer", percentage: 18 },
  { name: "Malocclusion", percentage: 27 },
  { name: "Tooth Loss", percentage: 35 },
];

export default function ResearchReportPage() {
  return (
    <>
      {/* Print Styles - Hide everything except the report */}
      <style>{`
        @media print {
          /* Hide everything except the report content */
          body * {
            visibility: hidden;
          }
          #report-content, #report-content * {
            visibility: visible;
          }
          #report-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
            background: white;
          }
          /* Hide the print button container */
          .print-hide {
            display: none !important;
          }
          /* Hide the back button and header actions */
          .no-print {
            display: none !important;
          }
          /* Ensure the report takes full page */
          .report-container {
            margin: 0;
            padding: 0;
            max-width: 100%;
          }
          /* Remove shadows and borders for print */
          .report-card {
            box-shadow: none !important;
            border-color: #e2e8f0 !important;
          }
          /* Ensure proper page breaks */
          .page-break {
            page-break-after: always;
          }
          /* Print background colors */
          .bg-white {
            background: white !important;
          }
          .bg-slate-50 {
            background: #f8fafc !important;
          }
          .bg-[#F2FCFD] {
            background: #f2fcfd !important;
          }
          .bg-[#E8F8FA] {
            background: #e8f8fa !important;
          }
          /* Ensure text colors are preserved */
          .text-white {
            color: white !important;
          }
          .text-[#203E62] {
            color: #203E62 !important;
          }
          .text-[#087F8C] {
            color: #087F8C !important;
          }
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-[#F9FDFE] via-white to-[#DDF6FB]">
        <div className="mx-auto max-w-[1500px] px-5 py-6 lg:px-8">
          {/* Header - Hidden when printing */}
          <div className="no-print mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/researchers"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-[#087F8C]"
              >
                <ArrowLeft className="size-5" />
              </Link>

              <div>
                <div className="flex items-center gap-2">
                  <FileText className="size-5 text-[#087F8C]" />
                  <h1 className="text-xl font-bold text-[#203E62]">
                    Dental Research Overview Report
                  </h1>
                </div>
                <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
                  Comprehensive overview of oral health research,
                  disease burden and workforce indicators across Africa.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Printer className="size-4" />
                Print
              </button>

              <button
                type="button"
                onClick={() => console.log("Download report")}
                className="flex items-center gap-2 rounded-lg bg-[#218792] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#067785]"
              >
                <Download className="size-4" />
                Download Report
              </button>
            </div>
          </div>

          {/* Report Content - This is what gets printed */}
          <div id="report-content" className="report-container">
            {/* Report information - Hidden when printing (part of header) */}
            <div className="no-print mb-5 flex flex-wrap items-center gap-5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-500 shadow-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="size-4 text-[#087F8C]" />
                <span>
                  Reporting period:{" "}
                  <strong className="text-slate-700">
                    January – December 2025
                  </strong>
                </span>
              </div>

              <div className="hidden h-4 w-px bg-slate-200 sm:block" />

              <span>
                Generated:{" "}
                <strong className="text-slate-700">
                  August 17, 2026
                </strong>
              </span>

              <div className="hidden h-4 w-px bg-slate-200 sm:block" />

              <span>
                Report ID:{" "}
                <strong className="text-slate-700">
                  AFR-DENT-2025-001
                </strong>
              </span>
            </div>

            {/* Statistics - Print version with background */}
            <section className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {reportStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="report-card rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500">
                          {stat.label}
                        </p>

                        <p className="mt-2 text-2xl font-bold text-[#203E62]">
                          {stat.value}
                        </p>
                      </div>

                      <div className="flex size-10 items-center justify-center rounded-lg bg-[#E8F8FA]">
                        <Icon className="size-5 text-[#087F8C]" />
                      </div>
                    </div>

                    <p className="mt-3 text-xs font-semibold text-[#299B61]">
                      {stat.change}
                    </p>
                  </div>
                );
              })}
            </section>

            {/* Main report */}
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_350px]">
              {/* Left */}
              <div className="space-y-5">
                {/* Executive summary */}
                <section className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#E8F8FA]">
                      <FileText className="size-5 text-[#087F8C]" />
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-[#203E62]">
                        Executive Summary
                      </h2>

                      <p className="text-xs text-slate-500">
                        Key insights from the research dataset
                      </p>
                    </div>
                  </div>

                  <p className="text-[15px] leading-7 text-slate-600">
                    This report provides a high-level overview of dental and
                    oral health research activity across Africa. The analysis
                    summarizes research publications, disease burden,
                    workforce indicators and country-level research activity.
                    The findings presented here are illustrative and are
                    intended to demonstrate the structure of a future
                    evidence-based research reporting system.
                  </p>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    Overall, the available research indicates that dental
                    caries and periodontal diseases continue to represent major
                    oral health challenges, while research capacity and
                    publication activity continue to expand across multiple
                    African countries.
                  </p>
                </section>

                {/* Key findings */}
                <section className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-[#203E62]">
                    Key Findings
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Important findings highlighted by the report
                  </p>

                  <div className="mt-5 space-y-3">
                    {keyFindings.map((finding) => (
                      <div
                        key={finding.title}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-sm font-bold text-slate-700">
                              {finding.title}
                            </h3>

                            <p className="mt-1 text-xs leading-relaxed text-slate-500">
                              {finding.description}
                            </p>
                          </div>

                          <div className="shrink-0 text-lg font-bold text-[#087F8C]">
                            {finding.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Country table */}
                <section className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-[#203E62]">
                        Research Activity by Country
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Selected country-level research indicators
                      </p>
                    </div>

                    <Globe2 className="size-5 text-[#087F8C]" />
                  </div>

                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[500px] text-left">
                      <thead>
                        <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                          <th className="pb-3 font-semibold">
                            Country
                          </th>

                          <th className="pb-3 font-semibold">
                            Studies
                          </th>

                          <th className="pb-3 font-semibold">
                            Oral Disease Prevalence
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {regionalData.map((country) => (
                          <tr
                            key={country.country}
                            className="border-b border-slate-100 last:border-0"
                          >
                            <td className="py-4 text-sm font-semibold text-slate-700">
                              {country.country}
                            </td>

                            <td className="py-4 text-sm text-slate-600">
                              {country.studies}
                            </td>

                            <td className="py-4">
                              <span className="rounded-full bg-[#E8F8FA] px-3 py-1 text-xs font-semibold text-[#087F8C]">
                                {country.prevalence}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              {/* Right */}
              <aside className="space-y-5">
                {/* Disease burden */}
                <section className="report-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#F0EAFE]">
                      <BarChart3 className="size-5 text-[#8B5DE8]" />
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-[#203E62]">
                        Disease Burden
                      </h2>

                      <p className="text-xs text-slate-500">
                        Reported conditions
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    {researchCategories.map((category) => (
                      <div key={category.name}>
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="font-medium text-slate-600">
                            {category.name}
                          </span>

                          <span className="font-bold text-[#203E62]">
                            {category.percentage}%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-[#218792]"
                            style={{
                              width: `${category.percentage}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Report methodology */}
                <section className="report-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-base font-bold text-[#203E62]">
                    Report Methodology
                  </h2>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    This demonstration report uses predefined sample values
                    representing potential research indicators. In the
                    production system, these values will be populated from
                    verified research datasets and APIs.
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-xs">
                      <span className="text-slate-500">
                        Data sources
                      </span>

                      <span className="font-semibold text-slate-700">
                        24
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-slate-100 pb-2 text-xs">
                      <span className="text-slate-500">
                        Countries
                      </span>

                      <span className="font-semibold text-slate-700">
                        38
                      </span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">
                        Reporting period
                      </span>

                      <span className="font-semibold text-slate-700">
                        2025
                      </span>
                    </div>
                  </div>
                </section>

                {/* Recommended actions */}
                <section className="report-card rounded-2xl border border-[#CDECEF] bg-[#F2FCFD] p-5">
                  <h2 className="text-base font-bold text-[#203E62]">
                    Recommended Focus Areas
                  </h2>

                  <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600">
                    <li>• Strengthen preventive oral health programs.</li>
                    <li>• Expand dental workforce capacity.</li>
                    <li>• Improve rural oral health accessibility.</li>
                    <li>• Increase regional research collaboration.</li>
                    <li>• Improve standardized data collection.</li>
                  </ul>
                </section>
              </aside>
            </div>

            {/* Footer */}
            <div className="report-card mt-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                AfriDent-AI Research Intelligence Platform
              </p>

              <p>
                Illustrative report — not based on live research data.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}