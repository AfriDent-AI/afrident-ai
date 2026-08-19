import {
  BrainCircuit,
  Languages,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-powered oral health",
    description:
      "Get intelligent support for oral health questions and clinical decisions.",
  },
  {
    icon: Languages,
    title: "Multilingual support",
    description:
      "Access oral health information in multiple African languages.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted information",
    description:
      "Connect with evidence-based dental resources and guidelines.",
  },
  {
    icon: HeartPulse,
    title: "Better oral health",
    description:
      "Helping communities across Africa make better oral health decisions.",
  },
];

export function AuthBranding() {
  return (
    <div className="relative hidden min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-[#EAF9FB] via-white to-[#DCEFFD] lg:flex lg:w-[48%]">

      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 size-[420px] rounded-full bg-[#078F9E]/5" />

      <div className="absolute -bottom-40 -right-40 size-[500px] rounded-full bg-[#0875E1]/5" />

      <div className="relative z-10 flex w-full flex-col justify-center px-14 py-12">

        {/* Logo */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex size-16 items-center justify-center rounded-full border-2 border-[#0875E1] bg-white">
              <span className="text-2xl font-extrabold text-[#0875E1]">
                AI
              </span>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                <span className="text-[#0875E1]">AfriDent</span>
                <span className="text-[#078F9E]">-AI</span>
              </h1>

              <p className="text-sm font-semibold italic text-[#078F9E]">
                Intelligent dentistry For Africa
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl">

          <div className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#078F9E] shadow-sm">
            🦷 Pan-African Oral Health Ecosystem
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-[#203E62]">
            Intelligent dentistry,
            <br />
            <span className="text-[#078F9E]">
              built for Africa.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-slate-600">
            Access multilingual AI assistance, patient education,
            clinical decision support, dental research and policy
            resources—all in one platform.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-[#E8F8FA] text-[#078F9E]">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-sm font-bold text-[#203E62]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
            <div className="flex -space-x-2">
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#078F9E] text-white">
                P
              </span>
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#0875E1] text-white">
                D
              </span>
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#8B5DE8] text-white">
                R
              </span>
            </div>

            <span>
              Patients · Dentists · Researchers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}