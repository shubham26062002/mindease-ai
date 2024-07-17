type ConversationItemProps = Readonly<{
    prompt: string,
    response: string,
}>

const ConversationItem = ({
    prompt,
    response,
}: ConversationItemProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <p className="w-fit max-w-[75%] text-sm text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 via-violet-600 py-1.5 px-2 rounded-xl">{prompt}</p>

            {!!response ? (
                <>

                    {response === "FAILED_TO_GET_RESPONSE_FROM_AI" ? (
                        <p className="ml-auto w-fit max-w-[75%] text-sm py-1.5 px-2 rounded-xl text-rose-500 bg-rose-500/10 border border-rose-500">AI failed to respond to the prompt</p>
                    ) : (
                        <p className="ml-auto w-fit max-w-[75%] text-sm py-1.5 px-2 rounded-xl text-slate-500 bg-slate-500/10 border border-slate-500" dangerouslySetInnerHTML={{
                            __html: response.replace(/(?:\r\n|\r|\n)/g, "<br />"),
                        }} />
                    )}

                </>
            ) : (
                <div className="ml-auto w-fit max-w-[75%] text-sm py-1.5 px-2 rounded-xl text-slate-500 bg-slate-500/10 border border-slate-500 animate-pulse">AI is thinking...</div>
            )}

        </div>
    )
}

export default ConversationItem