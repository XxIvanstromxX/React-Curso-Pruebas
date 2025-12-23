export default function Hero() {
    return (
        <section className="max-w-full mx-auto px-6 py-16 md:py-12 gap-10 h-3/4 md:h-150">
            <div className="flex flex-col items-center justify-center py-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Diseña interfaces modernas
                </h2>
                <p className="text-gray-600 dark:text-white/80 mb-6">
                Construye landing pages profesionales con React y Tailwind.
                </p>
                <button className="bg-linear-to-br from-amber-700 to-amber-500 text-white px-6 py-3 rounded-xl hover:bg-linear-to-br hover:from-amber-900 hover:to-amber-700 transition duration-200 shadow-md">
                Comenzar ahora
                </button>
            </div>

            <div className="w-full max-w-2xl mx-auto px-4">
                <div className="w-full h-fit bg-white/30 dark:bg-black/30 shadow-md rounded-[34px] flex flex-row items-center justify-evenly p-4 gap-3">
                    <div className="bg-amber-600 hover:bg-amber-700 dark:bg-gray-600 rounded-[30px] p-4 min-h-52 flex flex-col items-center justify-center flex-1">
                        <h1 className="text-white">Mobile App UI</h1>
                        <button></button>
                    </div>
                    <div className="bg-amber-600 hover:bg-amber-700 dark:bg-gray-600 rounded-[30px] p-4 min-h-52 flex flex-col items-center justify-center flex-1">
                        <h1 className="text-white">Web Dash Boards</h1>
                        <button></button>
                    </div>
                    <div className="bg-amber-600 hover:bg-amber-700 dark:bg-gray-600 rounded-[30px] p-4 min-h-52 flex flex-col items-center justify-center flex-1">
                        <h1 className="text-white">Desings Systems</h1>
                        <button></button>
                    </div>
                </div>
            </div>
        </section>
    )
}