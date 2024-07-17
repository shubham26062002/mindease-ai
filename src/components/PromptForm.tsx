import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IoSend } from "react-icons/io5"
import { FiTrash2 } from "react-icons/fi"
import axios from "axios"

import useConversations from "../hooks/use-conversations"

const schema = z.object({
    prompt: z.string().refine((value) => value.trim() !== "", {
        message: "Prompt cannot be empty",
    }),
})

const PromptForm = () => {
    const { addConversation, clearConversations, updateLastConversation } = useConversations()

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            prompt: "",
        },
        mode: "onChange",
    })

    const handleSubmit = form.handleSubmit(async (data) => {
        addConversation(data.prompt, "")

        try {
            const response = await axios.post(import.meta.env.VITE_META_AZURE_FUNCTION_URL, data)

            if (response.status !== 200) {
                return alert("Something went wrong")
            }

            const responseData = response.data

            const promptResponse = responseData.response as string

            return updateLastConversation(promptResponse)
        } catch (error) {
            updateLastConversation("FAILED_TO_GET_RESPONSE_FROM_AI")

            return alert("Something went wrong")
        }
    })

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <textarea className="h-16 w-full block resize-none py-2 px-4 rounded-2xl focus-visible:outline-none bg-violet-600/10 text-sm text-slate-950 shadow-inner shadow-black/5 border border-violet-600/20 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-violet-600 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Enter your prompt here..." disabled={form.formState.isSubmitting} {...form.register("prompt")} />
            <div className="flex items-center justify-end gap-x-3">
                <button className="custom-ring h-9 w-9 flex items-center justify-center rounded-full overflow-hidden text-white bg-violet-600 hover:opacity-90 active:opacity-80 transition-all transform-gpu disabled:opacity-50 disabled:pointer-events-none" type="submit" disabled={form.formState.isSubmitting}>
                    <IoSend className="size-4" />
                </button>
                <button className="custom-ring h-9 w-9 flex items-center justify-center rounded-full overflow-hidden text-white bg-rose-600 hover:opacity-90 active:opacity-80 transition-all transform-gpu disabled:opacity-50 disabled:pointer-events-none" type="button" disabled={form.formState.isSubmitting} onClick={clearConversations}>
                    <FiTrash2 className="size-4" />
                </button>
            </div>
        </form>
    )
}

export default PromptForm