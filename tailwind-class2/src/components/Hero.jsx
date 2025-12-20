export function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10">
            <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4">
                Diseña interfaces modernas
                </h2>
                <p className="text-gray-600 mb-6">
                Construye landing pages profesionales con React y Tailwind.
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
                Comenzar ahora
                </button>
            </div>

            <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded">
                Mockup
            </div>
        </section>
    )
}