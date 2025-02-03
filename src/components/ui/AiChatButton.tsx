"use client";

import React, { forwardRef } from "react";
import { Button } from "./button";
import { Bot } from "lucide-react";
import { useAiChat } from "@/contexts/AiChatContext";

const AiChatButton = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ ...props }, ref) => {
        const { chatboxOpen, setChatboxOpen } = useAiChat();

        return (
            <div ref={ref} {...props}>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setChatboxOpen(!chatboxOpen)}
                >
                    <Bot size={24} />
                </Button>
            </div>
        );
    }
);

AiChatButton.displayName = "AiChatButton";
export default AiChatButton;
