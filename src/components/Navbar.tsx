import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex items-center gap-x-4">
            <Link className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 hover:opacity-90 active:opacity-80 transition-all transform-gpu custom-ring flex-shrink-0" to="#">
                <img className="h-full w-full object-cover" src="/images/profile-placeholder.png" alt="Profile placeholder" loading="eager" />
            </Link>
            <Link className="text-sm flex w-fit items-center justify-center h-10 px-5 rounded-full bg-violet-600 text-white font-medium hover:opacity-90 active:opacity-80 transition-all transform-gpu custom-ring flex-shrink-0" to="#">Sign in</Link>
        </nav>
    )
}

export default Navbar