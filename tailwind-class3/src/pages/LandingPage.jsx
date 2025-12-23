import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"
import ServiceCards from "../components/ServiceCard"

export default function LandingPage() {
    return (
        <>
            <Hero/>
            <div>
                <section className="max-w-7xl mx-auto px-6 md:py-16 gap-10">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
                        Nuestros Servicios
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCards 
                            title="Diseño Web"
                            description="Creamos sitios web atractivos y funcionales que capturan la esencia de tu marca."
                        />
                        <ServiceCards 
                            title="Desarrollo Frontend"
                            description="Desarrollamos interfaces de usuario interactivas y responsivas utilizando las últimas tecnologías."
                        />
                        <ServiceCards 
                            title="Optimización SEO"
                            description="Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico."
                        />
                    </div>
                </section>
            </div>
            <Testimonials/>
        </>
    )
}