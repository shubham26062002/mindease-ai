import { FaStarHalfAlt } from "react-icons/fa"
import { FaEnvelope, FaLocationDot, FaPhone, FaRegStar, FaStar } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 px-6 sm:px-10 py-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 flex-shrink-0">
                        <h3 className="text-slate-500">Contact</h3>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-x-2 text-sm text-slate-500">
                                <FaLocationDot className="size-4 text-violet-600" />
                                <p>Ahmedabad, India</p>
                            </div>
                            <div className="flex items-center gap-x-2 text-sm text-slate-500">
                                <FaPhone className="size-4 text-violet-600" />
                                <p>+91 9191919191</p>
                            </div>
                            <div className="flex items-center gap-x-2 text-sm text-slate-500">
                                <FaEnvelope className="size-4 text-violet-600" />
                                <p>jhondoe@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 flex-1 text-right">
                        <h3 className="text-slate-500">Feedback/Ratings</h3>
                        <div className="mt-4 text-violet-600 flex items-center justify-end gap-x-2">
                            <FaStar className="size-4" />
                            <FaStar className="size-4" />
                            <FaStarHalfAlt className="size-4" />
                            <FaRegStar className="size-4" />
                            <FaRegStar className="size-4" />
                        </div>
                    </div>
                </div>
                <p className="text-center mt-6 text-sm text-violet-600">&copy; Ahmedabad, India, All rights are reserved.</p>
            </div>
        </footer>
    )
}

export default Footer