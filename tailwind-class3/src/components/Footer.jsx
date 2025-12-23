export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent w-fit">
                        My Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                        Creando experiencias digitales memorables con las últimas tecnologías web. Diseño moderno y rendimiento excepcional.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Enlaces</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Inicio</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Servicios</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Proyectos</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Contacto</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Legal</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Privacidad</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Términos</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Cookies</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} My Website. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
