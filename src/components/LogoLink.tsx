import { Link } from "react-router-dom"

import cn from "../utils/cn"

type LogoLinkProps = Readonly<{
    className?: string,
}>

const LogoLink = ({
    className = "",
}: LogoLinkProps) => {
    return (
        <Link className={cn("flex items-center gap-x-2 w-fit text-2xl tracking-tight leading-none font-medium text-slate-700 drop-shadow-sm custom-ring transition-all transform-gpu", className)} to="/">
            <img className="object-cover h-8" src="/images/logo.svg" alt="Logo" loading="eager" />
            <p>Mindease AI.</p>
        </Link>
    )
}

export default LogoLink