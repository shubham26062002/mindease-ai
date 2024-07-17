import { FaRobot } from "react-icons/fa6"
import { useRef, useEffect } from "react"

import PromptForm from "../components/PromptForm"
import useConversations from "../hooks/use-conversations"
import ConversationItem from "../components/ConversationItem"

const HomePage = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    const { conversations } = useConversations()

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
            })
        }
    }, [scrollRef, conversations])

    return (
        <div className="h-full py-6 px-6 sm:px-10">
            <div className="h-full w-full max-w-screen-xl mx-auto flex flex-col gap-y-4">
                <div className="flex-grow overflow-y-auto">

                    {conversations.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center gap-y-3 text-slate-500 text-2xl text-center px-6">
                            <FaRobot className="size-10 flex-shrink-0" />
                            <p className="flex-shrink-0">Your conversations will appear here</p>
                        </div>
                    ) : (
                        <div className="h-full overflow-y-auto space-y-4">

                            {conversations.map((item, index) => (
                                <ConversationItem key={index} {...item} />
                            ))}

                            <div ref={scrollRef} />
                        </div>
                    )}

                </div>
                <div className="w-full sm:max-w-xl mx-auto">
                    <PromptForm />
                </div>
            </div>
        </div >
    )
}

export default HomePage