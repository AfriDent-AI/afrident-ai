import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
} from "lucide-react";

import { LanguageSelector } from "@/component/assistant/LanguageSelector";
import { ChatWindow } from "@/component/assistant/ChatWindow";
import { RecentConversations } from "@/component/assistant/RecentConversations";
import { SuggestedQuestions } from "@/component/assistant/SuggestedQuestions";
import { EvidenceSources } from "@/component/assistant/EvidenceSource";
import sparkls from '@/assets/Sparkles.png';
import allbg from '@/assets/all bg.png'
export default function AIAssistantPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${allbg})` }}
    >
      {/* Page heading */}
      <section className="relative overflow-hidden mx-auto max-w-395 px-4 pb-2">
        {/* Africa/map decorative effect */}
        <div className="pointer-events-none absolute right-[28%] top-0 h-44 w-90 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle,#00B8D4_1.5px,transparent_1.5px)] bg-size:[7px_7px] mask-[linear-gradient(to_bottom,black,transparent)]" />
        </div>

        <div className="mx-auto max-w-395 pb-5 pt-5">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#008C9E]"
          >
            <ArrowLeft className="size-7" />
            Home
          </Link>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex size-12 shrink-0 items-center justify-center">
              <img src={sparkls} alt="Circle decoration" />
            </div>

            <div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Multilingual AI - Assistant
              </h1>

              <p className="mt-1 text-base font-medium text-slate-500">
                Your multilingual AI companion for oral health across Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-395 px-4 pb-8">
        <div className="grid gap-4 xl:grid-cols-[300px_minmax(500px,1fr)_300px]">
          
          {/* LEFT */}
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />

          {/* CENTER */}
          <ChatWindow language={selectedLanguage} />

          {/* RIGHT */}
          <aside className="space-y-4">
            <RecentConversations />
            <SuggestedQuestions />
            <EvidenceSources />
          </aside>
        </div>
      </section>
    </main>
  );
}