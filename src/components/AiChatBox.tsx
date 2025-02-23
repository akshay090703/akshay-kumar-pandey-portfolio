"use client"

import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react"
import { Bot, Loader2, SendHorizonal, Trash, XCircle } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "./ui/button";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";

interface AiChatBoxProps {
    open: boolean;
    onClose: () => void;
}

export default function AiChatBox({ onClose, open }: AiChatBoxProps) {
    const {
        messages,
        setMessages,
        input,
        setInput,
        handleInputChange,
        // handleSubmit,
    } = useChat(); // default: /api/chat

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages])

    useEffect(() => {
        if (open) {
            inputRef.current?.focus();
        }
    }, [open])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true)

        const newMessage: Message = {
            id: crypto.randomUUID(),
            content: input,
            role: "user",
        };

        const updatedMessages = [...messages, newMessage];

        setInput("");
        setMessages(updatedMessages);

        const response = await axios.post("/api/chat", {
            messages: updatedMessages
        })

        console.log(response)

        if (response.status === 500) {
            setMessages((prev) => [
                ...prev,
                { id: crypto.randomUUID(), content: "Something went wrong or Database is down.", role: "assistant" },
            ]);
        } else if (response.status === 200) {
            setMessages((prev) => [
                ...prev,
                { id: crypto.randomUUID(), content: response.data.message, role: "assistant" },
            ])
        }

        setIsLoading(false)
    }

    const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

    // xl:right-36
    return (
        <div className={cn("bottom-0 right-0 z-50 w-full max-w-[500px] p-1", open ? "fixed" : "hidden")}>
            <button onClick={onClose} className="mb-1 ms-auto block">
                <XCircle size={30} className="rounded-full bg-background" />
            </button>

            <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">
                <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
                    {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}

                    {isLoading && lastMessageIsUser && (
                        <ChatMessage
                            message={{
                                id: "loading",
                                role: "assistant",
                                content: "Thinking..."
                            }}
                        />
                    )}

                    {error && (
                        <ChatMessage
                            message={{
                                id: "error",
                                role: "assistant",
                                content: "Something went wrong. Please try again"
                            }}
                        />
                    )}

                    {!error && messages.length === 0 && (
                        <div className="flex flex-col h-full items-center justify-center gap-3 text-center mx-8">
                            <Bot size={28} />
                            <p className="text-lg font-medium">
                                Send a message to start the AI chat!
                            </p>
                            <p>
                                You can ask the chatbot any question about me and it will find the relevant information on the website.
                            </p>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="m-3 flex gap-1">
                    <button
                        type="button"
                        className="flex items-center justify-center w-10 flex-none"
                        title="Clear chat"
                        onClick={() => setMessages([])}
                    >
                        <Trash size={24} />
                    </button>

                    <input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Say something..."
                        className="grow border rounded bg-background px-3 py-2"
                        ref={inputRef}
                    />

                    <button
                        type="submit"
                        className="flex items-center justify-center w-10 flex-none disabled:opacity-50"
                        disabled={isLoading || !input}
                        title="Send message"
                    >
                        {
                            isLoading
                                ?
                                <Loader2 size={24} className="animate-spin" />
                                :
                                <SendHorizonal size={24} />
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

interface ChatMessageProps {
    message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
    const isAiMessage = role === "assistant";

    return (
        <div className={cn("mb-3 flex items-center", isAiMessage ? "me-5 justify-start" : "ms-5 justify-end")}>
            {isAiMessage && <Bot className="mr-2 flex-none" />}
            <div className={cn("rounded-md border px-3 py-2", isAiMessage ? "bg-background" : "bg-foreground text-background")}>
                <Markdown components={{
                    a: ({ node, ref, ...props }) => (
                        <Link
                            {...props}
                            href={props.href ?? ""}
                            className="text-primary hover:underline"
                        />
                    ),
                    p: ({ node, ref, ...props }) => (
                        <p {...props} className="mt-3 first:mt-0" />
                    ),
                    ul: ({ node, ref, ...props }) => (
                        <ul {...props} className="list-inside mt-3 list-disc first:mt-0" />
                    ),
                    li: ({ node, ref, ...props }) => (
                        <li {...props} className="mt-1" />
                    ),
                }}>
                    {content}
                </Markdown>
            </div>
        </div>
    )
}