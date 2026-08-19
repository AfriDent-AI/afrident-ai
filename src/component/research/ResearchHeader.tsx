import {
  FileText,
  Camera,
  Mic,
  Search,
  ArrowLeft,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ResearchHeader() {
  return (
    <div className="relative">
 <Link
          to="/"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#078F9E]"
        >
          <ArrowLeft className="size-4" />
           Home
        </Link>
      <div className="flex items-start justify-between gap-6">
       
        <div className="flex items-start gap-4">
          <div className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#4D9BF5] text-white">
            <FileText className="size-7" />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Dental Research and Policy
            </h1>

            <p className=" max-w-[650px] text-[14px] leading-relaxed text-slate-700">
              Access African oral health research, statistics and policy
              resources to inform decisions and drive better outcomes
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden w-[390px] md:flex">
          <div className="relative w-full">
            <Input
              placeholder="Search Publications....."
              className="h-10 rounded-lg border-slate-200 bg-white pr-24 text-xs"
            />

            <div className="absolute right-1 top-1 flex h-8">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => console.log("Camera search")}
              >
                <Camera className="size-4" />
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => console.log("Voice search")}
              >
                <Mic className="size-4" />
              </Button>

              <Button
                type="button"
                size="icon"
                className="h-8 w-14 rounded-md bg-[#078F9E] hover:bg-[#067984]"
                onClick={() => console.log("Search")}
              >
                <Search className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}