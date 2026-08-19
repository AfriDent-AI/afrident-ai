import { useState } from "react";
import {
    Camera,
    Mic,
    Send,
    Trash2,
    Languages,
    Upload,
    UserCircle,
    Bot,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AIResult } from "./AIResult";

type ChatWindowProps = {
    language: string;
};

type Message = {
    id: number;
    text: string;
    time: string;
};

export function ChatWindow({
    language,
}: ChatWindowProps) {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState<Message[]>([]); // ← Start with empty array
    const [aiResponse, setAiResponse] = useState<string | null>(null); // ← Add state for AI response
    const [isLoading, setIsLoading] = useState(false); // ← Optional: for loading state

    const handleAsk = async () => {
        const value = question.trim();

        if (!value) return;

        const now = new Date();
        const time = now.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
        });

        // Add user message
        setMessages((previous) => [
            ...previous,
            {
                id: Date.now(),
                text: value,
                time,
            },
        ]);

        setQuestion("");
        setIsLoading(true);
        setAiResponse(null); // Clear previous AI response

        // Simulate AI response (replace with your actual API call)
        try {
            // This is where you'd call your AI API
          

            // Simulating a delay
            setTimeout(() => {
                setAiResponse("This is the AI's response to your dental question. It will provide helpful information based on your query.");
                setIsLoading(false);
            }, 1500);
        } catch (error) {
            console.error("Error getting AI response:", error);
            setAiResponse("Sorry, I couldn't process your request. Please try again.");
            setIsLoading(false);
        }
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === "Enter") {
            handleAsk();
        }
    };

    const clearChat = () => {
        setMessages([]);
        setAiResponse(null); // Also clear AI response
        setIsLoading(false);
    };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            {/* Header */}
            <h2 className="mb-3 text-xl font-bold text-[#008FA0]">
                Chat window
            </h2>

            {/* Question input */}
            <div className="flex gap-2">
                <div className="relative flex-1 border-b-gray-400">
                    <Input
                        value={question}
                        onChange={(event) =>
                            setQuestion(event.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="Ask your dental questions ......"
                        className="h-15 pr-4 text-base"
                    />

                    {!question && (
                        <p className="pointer-events-none absolute bottom-1.5 left-3 text-[11px] text-slate-400">
                            Example: I have severe tooth pain and facial swelling
                        </p>
                    )}
                </div>

                <Button
                    onClick={handleAsk}
                    className="h-14 rounded-xl bg-[#078F9E] px-5 hover:bg-[#067984]"
                >
                    <Send className="size-4" color="white" />
                    <span className="hidden text-white sm:inline">
                        Ask AI
                    </span>
                </Button>
            </div>

            {/* Actions */}
            <div className="mt-3 flex flex-wrap gap-2">
                <Button
                    variant="outline"
                    size="lg"
                    className="h-8 border-[#B9E5EA] text-[15px] text-[#008FA0]"
                >
                    <Languages />
                    Translate
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="h-8 border-[#B9E5EA] text-[15px] text-[#008FA0]"
                >
                    <Mic />
                    Voice input
                </Button>

                <label className="inline-flex h-8 cursor-pointer items-center gap-2 rounded-md border border-[#B9E5EA] px-3 text-[13.6px] font-medium text-[#008FA0] hover:bg-[#F0FBFC]">
                    <Upload className="size-4.5" />
                    Upload image

                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                            const file = event.target.files?.[0];

                            if (file) {
                                console.log("Uploaded image:", file.name);
                            }
                        }}
                    />
                </label>

                <Button
                    variant="outline"
                    size="lg"
                    onClick={clearChat}
                    className="h-8 border-red-200 text-[15px] text-red-500 hover:bg-red-50"
                >
                    <Trash2 />
                    Clear chat
                </Button>
            </div>

            {/* Current language */}
            <div className="mt-3 text-[15px] text-slate-400">
                Responding in: {" "}
                <span className="font-semibold text-[#008FA0]">
                    {language}
                </span>
            </div>

            {/* Messages */}
            <div className="mt-3 space-y-3">
                {/* Show conversation only if there are messages */}
                {messages.length > 0 && (
                    <>
                        {/* User messages */}
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className="rounded-xl border border-slate-200 bg-[#F7FAFD]"
                            >
                                <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-2">
                                    <div className="flex size-8 items-center justify-center rounded-full border border-[#00A0B1] bg-white text-[#008FA0]">
                                        <UserCircle className="size-6" />
                                    </div>

                                    <div className="flex-1 text-lg font-bold text-[#008FA0]">
                                        You
                                    </div>

                                    <span className="text-base font-semibold text-slate-500">
                                        {message.time}
                                    </span>
                                </div>

                                <p className="px-4 py-3 text-base text-slate-500">
                                    {message.text}
                                </p>
                            </div>
                        ))}

                        {/* AI Response - show loading or actual response */}
                        {isLoading && (
                            <div className="rounded-xl border border-slate-200 bg-[#F7FAFD] p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full border border-[#00A0B1] bg-[#00A0B1] text-white">
                                        <Bot className="size-5" />
                                    </div>
                                    <div className="flex-1 text-sm font-bold text-[#008FA0]">
                                        AI Assistant
                                    </div>
                                </div>
                                <div className="mt-2 flex items-center gap-2 px-4 py-2">
                                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#00A0B1] [animation-delay:-0.3s]"></div>
                                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#00A0B1] [animation-delay:-0.15s]"></div>
                                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#00A0B1]"></div>
                                    <span className="ml-2 text-xs text-slate-400">Thinking...</span>
                                </div>
                            </div>
                        )}

                        {!isLoading && aiResponse && (
                            <AIResult />
                        )}
                    </>
                )}

                {/* Empty state - only show when NO messages exist */}
                {messages.length === 0 && (
                    <div className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 text-center">
                        <Bot className="size-10 text-[#00A0B1]" />

                        <p className="mt-3 text-sm font-semibold text-slate-700">
                            Start a conversation
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Ask anything about oral health.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}