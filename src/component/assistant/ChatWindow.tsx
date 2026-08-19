// ChatWindow.tsx - Updated with search responses and loading animation
import { useState } from "react";
import {
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
import { getSearchAnswer, type SEARCH_ANSWERS } from "@/data/SearchAnswers";
import { SearchLoading } from "../searchLoading";


type ChatWindowProps = {
    language: string;
};

type Message = {
    id: number;
    text: string;
    time: string;
    isUser: boolean;
    answer?: typeof SEARCH_ANSWERS[0];
};


export function ChatWindow({
    language,
}: ChatWindowProps) {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("Searching for:");

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
                isUser: true,
            },
        ]);

        setQuestion("");
        setIsLoading(true);
        setLoadingMessage(`Searching for: "${value}"`);

        // Simulate AI thinking with delay
        await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

        // Get search answer
        const answer = getSearchAnswer(value);
        
        if (answer) {
            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    text: answer.title,
                    time: new Date().toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                    }),
                    isUser: false,
                    answer: answer,
                },
            ]);
        } else {
            // Fallback message if no answer found
            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    text: "I couldn't find specific information about that topic. Please try asking about: cavities, tooth pain, sensitivity, gum disease, or wisdom teeth.",
                    time: new Date().toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                    }),
                    isUser: false,
                },
            ]);
        }

        setIsLoading(false);
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
        setIsLoading(false);
    };

    // Render AI answer card
    const renderAIAnswer = (answer: typeof SEARCH_ANSWERS[0]) => {
        return (
            <div className="mt-3 rounded-xl border border-[#00A8B5]/20 bg-[#F0FBFC] p-4">
                <div className="space-y-3">
                    {/* Diagnosis */}
                    <div>
                        <h4 className="text-xs font-semibold text-[#00A8B5] uppercase tracking-wider">
                            Possible Diagnosis
                        </h4>
                        <p className="text-sm font-medium text-gray-800">{answer.diagnosis}</p>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <h4 className="text-xs font-semibold text-[#00A8B5] uppercase tracking-wider">
                            Symptoms
                        </h4>
                        <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                            {answer.symptoms.map((symptom, index) => (
                                <li key={index}>{symptom}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatment */}
                    <div>
                        <h4 className="text-xs font-semibold text-[#00A8B5] uppercase tracking-wider">
                            Treatment
                        </h4>
                        <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                            {answer.treatment.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Recommendation */}
                    <div className="bg-blue-50 border-l-4 border-[#00A8B5] p-3 rounded-r-lg">
                        <h4 className="text-xs font-semibold text-[#00A8B5] uppercase tracking-wider">
                            Recommendation
                        </h4>
                        <p className="text-sm text-gray-800">{answer.recommendation}</p>
                    </div>
                </div>
            </div>
        );
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
                        disabled={isLoading}
                    />

                    {!question && (
                        <p className="pointer-events-none absolute bottom-1.5 left-3 text-[11px] text-slate-400">
                            Example: I have severe tooth pain and facial swelling
                        </p>
                    )}
                </div>

                <Button
                    onClick={handleAsk}
                    disabled={isLoading || !question.trim()}
                    className="h-14 rounded-xl bg-[#078F9E] px-5 hover:bg-[#067984] disabled:opacity-70"
                >
                    {isLoading ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <>
                            <Send className="size-4" color="white" />
                            <span className="hidden text-white sm:inline">
                                Ask AI
                            </span>
                        </>
                    )}
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
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className="rounded-xl border border-slate-200 bg-[#F7FAFD]"
                            >
                                <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-2">
                                    <div className={`flex size-8 items-center justify-center rounded-full border ${message.isUser ? 'border-[#00A0B1] bg-white text-[#008FA0]' : 'border-[#00A0B1] bg-[#00A0B1] text-white'}`}>
                                        {message.isUser ? (
                                            <UserCircle className="size-6" />
                                        ) : (
                                            <Bot className="size-5" />
                                        )}
                                    </div>

                                    <div className={`flex-1 text-lg font-bold ${message.isUser ? 'text-[#008FA0]' : 'text-[#078F9E]'}`}>
                                        {message.isUser ? 'You' : 'AI Assistant'}
                                    </div>

                                    <span className="text-base font-semibold text-slate-500">
                                        {message.time}
                                    </span>
                                </div>

                                <div className="px-4 py-3">
                                    {message.isUser ? (
                                        <p className="text-base text-slate-500">
                                            {message.text}
                                        </p>
                                    ) : (
                                        <>
                                            <p className="text-base font-semibold text-[#008FA0]">
                                                {message.text}
                                            </p>
                                            {message.answer && renderAIAnswer(message.answer)}
                                            {!message.answer && (
                                                <p className="text-base text-slate-500 mt-2">
                                                    {message.text}
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Loading animation - Same as HeroSection */}
                        {isLoading && (
                            <div className="rounded-xl   p-4">
                                <SearchLoading searchQuery={loadingMessage} />
                            </div>
                        )}
                    </>
                )}

                {/* Empty state - only show when NO messages exist */}
                {messages.length === 0 && !isLoading && (
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