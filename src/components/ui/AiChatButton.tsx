"use client"

import React from 'react'
import { Button } from './button';
import { Bot } from 'lucide-react';
import AiChatBox from '../AiChatBox';
import { useAiChat } from '@/contexts/AiChatContext';

const AiChatButton = () => {
    const { chatboxOpen, setChatboxOpen } = useAiChat();
    return (
        <>
            <Button variant={'ghost'} size={'icon'} onClick={() => setChatboxOpen(!chatboxOpen)}>
                <Bot size={24} />
            </Button>
        </>
    )
}

export default AiChatButton