export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            content: "Increíble trabajo. La atención al detalle y el diseño moderno transformaron completamente nuestra presencia en línea.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        },
        {
            name: "Michael Chen",
            role: "CTO @ TechFlow",
            content: "La implementación fue rápida y el código es muy limpio. Definitivamente volveremos a trabajar juntos.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
        },
        {
            name: "Ana García",
            role: "Marketing Director",
            content: "Superó nuestras expectativas. El diseño responsive funciona perfectamente en todos los dispositivos.",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d"
        }
    ];

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Lo que dicen nuestros clientes
                </h2>
                <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                    Historias de éxito de equipos que confiaron en nosotros para sus productos digitales.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/40 dark:bg-white/5 p-8 rounded-3xl border border-white/30 dark:border-white/10 relative shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/20"
                            />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                <p className="text-sm text-amber-600 dark:text-amber-500">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-white/80 italic">
                            "{testimonial.content}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
