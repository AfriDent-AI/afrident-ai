import { CircleHelp } from "lucide-react";

const questions = [
  "What are the causes of tooth sensitivity?",
  "How do I manage a dental abscess?",
];

export function SuggestedQuestions() {
  const handleQuestion = (question: string) => {
    console.log("Selected question:", question);

    // Later this can communicate directly with ChatWindow
    // or your AI API.
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <CircleHelp className="size-5 text-[#008FA0]" />

        <h2 className="text-lg font-semibold text-[#183A61]">
          Suggested questions
        </h2>
      </div>

      <div className="space-y-2">
        {questions.map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => handleQuestion(question)}
            className="w-full rounded-lg border border-[#C4E7EB] px-3 py-2 text-left text-[12px] font-semibold text-[#008FA0] transition hover:bg-[#F0FBFC]"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}