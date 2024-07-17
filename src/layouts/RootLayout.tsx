import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

const RootLayout = () => {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <main className="flex-grow min-h-[calc(100vh-112.8px)] sm:min-h-[calc(100vh-128.8px)] lg:min-h-[calc(100vh-72.8px)] overflow-y-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout