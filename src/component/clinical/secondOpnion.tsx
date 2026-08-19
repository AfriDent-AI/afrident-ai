// src/component/clinical/SecondOpinion.tsx
import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface SecondOpinionProps {
  onChange?: (opinion: string) => void;
}

export function SecondOpinion({ onChange }: SecondOpinionProps) {
  const [opinion, setOpinion] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setOpinion(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleSubmit = () => {
    if (opinion.trim()) {
      // Submit the opinion - could trigger a notification or API call
      console.log("Second opinion request submitted:", opinion);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-lg bg-[#FFF3E0]">
          <MessageSquare className="size-4 text-[#FF9B32]" />
        </div>
        <h2 className="text-base font-bold text-slate-900">
          Request Second Opinion
        </h2>
      </div>

      <p className="text-xs text-slate-500 mb-3">
        Provide details for the second opinion consultation request
      </p>

      {/* Input Area */}
      <div className="relative">
        <Textarea
          value={opinion}
          onChange={handleChange}
          placeholder="Enter the specific details of the second opinion you're requesting..."
          className="min-h-[120px] resize-none text-sm p-3 pr-12"
        />
        
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!opinion.trim()}
          className="absolute bottom-3 right-3 h-8 w-8 p-0 rounded-full bg-[#FF9B32] hover:bg-[#E88A2A] disabled:opacity-50"
        >
          <Send className="size-4 text-white" />
        </Button>
      </div>

      {/* Character counter */}
      <div className="mt-2 flex justify-between text-xs text-slate-400">
        <span>This request will be sent for review</span>
        <span>{opinion.length} characters</span>
      </div>

      {opinion.trim() && (
        <div className="mt-2 text-xs text-green-600">
          ✓ Opinion request ready for report
        </div>
      )}
    </div>
  );
}