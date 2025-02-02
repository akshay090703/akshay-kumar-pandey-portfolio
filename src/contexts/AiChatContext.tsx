"use client"

import { createContext } from "react"
import * as React from 'react';

interface AiChatContextType {
    chatboxOpen: boolean;
    setChatboxOpen: (open: boolean) => void;
}

const AiChatContext = createContext<AiChatContextType | undefined>(undefined)

export const AiChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [chatboxOpen, setChatboxOpen] = React.useState(false);

    return (
        <AiChatContext.Provider value={{ chatboxOpen, setChatboxOpen }}>
            {children}
        </AiChatContext.Provider>
    )
}

export const useAiChat = (): AiChatContextType => {
    const context = React.useContext(AiChatContext)
    if (!context) {
        throw new Error('useAiChat must be used within an AiChatProvider')
    }
    return context;
}