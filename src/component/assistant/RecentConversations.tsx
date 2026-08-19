import {
  Clock3,
  MessageSquareText,
} from "lucide-react";

const conversations = [
  {
    title: "Tooth sensitivity after filling",
    time: "10:15 AM",
  },
  {
    title: "Swollen gums and bleeding",
    time: "Yesterday",
  },
];

export function RecentConversations() {
  return (
    <div className="min-h-[150px] rounded-2xl border border-slate-200
     bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock3 className="size-5 text-[#008FA0]" />

          <h2 className="text-base font-semibold text-[#183A61]">
            Recent conversations
          </h2>
        </div>

        <button
          type="button"
          className="text-[12px] font-bold text-[#008FA0] hover:underline"
          onClick={() => console.log("View all conversations")}
        >
          View all
        </button>
      </div>

      <div className="space-y-4">
        {conversations.map((conversation) => (
          <button
            key={conversation.title}
            type="button"
            className="flex w-full items-start gap-2 text-left hover:text-[#008FA0]"
            onClick={() =>
              console.log(
                "Open conversation:",
                conversation.title,
              )
            }
          >
            <MessageSquareText className="mt-0.5 size-3.5 shrink-0 text-slate-500" />

            <span className="flex-1 text-[12px] font-medium">
              {conversation.title}
            </span>

            <span className="text-[11px] text-slate-600">
              {conversation.time}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}