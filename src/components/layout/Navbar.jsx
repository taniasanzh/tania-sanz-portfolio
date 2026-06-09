export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="w-full px-8 md:px-16 py-4 flex justify-between items-center">
                <a href="#hero" className="text-xl font-medium text-gray-700 hover:text-burgundy transition-colors">
                    Tania Sanz Hartmann
                </a>
                <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    <li><a href="#about" className="text-gray-600 hover:text-burgundy transition-colors">Sobre mí</a></li>
                    <li><a href="#projects" className="text-gray-600 hover:text-burgundy transition-colors">Proyectos</a></li>
                    <li><a href="#skills" className="text-gray-600 hover:text-burgundy transition-colors">Stack</a></li>
                    <li><a href="#contact" className="text-gray-600 hover:text-burgundy transition-colors">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}