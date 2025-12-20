import { useState } from "react"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex flex-row items-center justify-between gap-12 py-4 md:px-32 px-6 dark:text-white text-gray-800">
            <h1 className="text-xl font-bold">
                My Website
            </h1>
            <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-row gap-6 text-sm">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Services</li>
                <li className="hover:underline cursor-pointer">Contact</li>
            </ul>

            <div className="hidden lg:flex flex-row gap-4">    
                <button className="bg-white hover:bg-white/90 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-200 dark:text-white text-gray-800 h-8 px-3 rounded-lg text-sm border-[0.5px] border-gray-300 dark:border-gray-600">
                    Sign Up
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white h-8 px-3 rounded-lg text-sm">
                    Get Started
                </button>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white dark:bg-gray-900 shadow-lg rounded-xl w-[95%] py-4 flex flex-col gap-4 z-50 border border-gray-300 dark:border-gray-600">
                        <a href="#" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
                        <a href="#" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
                        <a href="#" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Services</a>
                        <a href="#" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
                        <div className="border-t border-gray-300 dark:border-gray-600 mt-2 pt-2 px-4 flex flex-row gap-2">
                            <button className="w-full bg-white hover:bg-white/90 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-200 dark:text-white text-gray-800 h-8 rounded-lg text-sm border-[0.5px] border-gray-300 dark:border-gray-600">
                                Sign Up
                            </button>
                            <button className="w-full bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white h-8 rounded-lg text-sm">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}