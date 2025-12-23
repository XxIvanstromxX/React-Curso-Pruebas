export default function ServiceCards({ title, description }) {
    return (
        <div className="bg-white/30 dark:bg-white/5 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/60 dark:border-white/10 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-white/70 leading-relaxed">{description}</p>
        </div>
    )
}