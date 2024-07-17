import { create } from "zustand"

type ConversationsStore = {
    conversations: {
        prompt: string,
        response: string,
    }[],
    addConversation: (prompt: string, response: string) => void,
    updateLastConversation: (response: string) => void,
    clearConversations: () => void,
}

const useConversations = create<ConversationsStore>((set) => ({
    conversations: [],
    addConversation: (prompt, response) => set((state) => ({
        conversations: [...state.conversations, {
            prompt,
            response,
        }],
    })),
    updateLastConversation: (response) => set((state) => ({
        conversations: state.conversations.map((item, index) => index === state.conversations.length - 1 ? { ...item, response } : item),
    })),
    clearConversations: () => set({
        conversations: [],
    }),
}))

export default useConversations