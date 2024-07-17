import LogoLink from "./LogoLink"
import Navbar from "./Navbar"
import WelcomeMessage from "./WelcomeMessage"

const Header = () => {
    return (
        <header className="py-4 px-6 sm:px-10 border-b border-slate-200">
            <div className="max-w-screen-xl mx-auto space-y-5">
                <div className="flex items-center justify-between gap-x-5">
                    <LogoLink className="flex-shrink-0" />
                    <WelcomeMessage className="flex-shrink-0 hidden lg:block" />
                    <Navbar />
                </div>
                <WelcomeMessage className="lg:hidden" />
            </div>
        </header>
    )
}

export default Header