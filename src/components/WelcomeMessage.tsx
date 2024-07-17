import cn from "../utils/cn"

type WelcomeMessageProps = Readonly<{
    className?: string,
}>

const WelcomeMessage = ({
    className = "",
}: WelcomeMessageProps) => {
    return (
        <h1 className={cn("text-3xl font-medium bg-clip-text bg-gradient-to-r text-transparent from-fuchsia-600 to-blue-600 via-violet-600 truncate", className)}>Welcome back, <span className="uppercase">Shubham</span></h1>
    )
}

export default WelcomeMessage