import { useChat } from "ai/react"

interface AiChatBoxProps {
    open: boolean;
    onClose: () => void;
}

export default function AiChatBox({ onClose, open }: AiChatBoxProps) {
    const {
        messages,
        setMessages,
        input,
        handleInputChange,
        handleSubmit,
        isLoading,
        error
    } = useChat(); // default: /api/chat
}