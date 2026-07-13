import React, { useState, useEffect } from 'react';
export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // block scroll  
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="relative w-full px-8 md:px-16 py-4 flex justify-between items-center z-50">
                <a href="#hero" className="text-xl font-medium text-gray-700">
                    Tania Sanz Hartmann
                </a>
                {/* --- NAVBAR ESCRITORIO --- */}
                <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    <li><a href="#about" className="text-gray-600 hover:text-burgundy transition-colors">Sobre mí</a></li>
                    <li><a href="#projects" className="text-gray-600 hover:text-burgundy transition-colors">Proyectos</a></li>
                    <li><a href="#skills" className="text-gray-600 hover:text-burgundy transition-colors">Stack</a></li>
                    <li><a href="#contact" className="text-gray-600 hover:text-burgundy transition-colors">Contacto</a></li>
                </ul>
                            {/* --- BTN HAMBURGUESA --- */}
            <button
                className='md:hidden pl-3 text-gray-600'
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                {isMenuOpen ? (
                    /* Icono X (Cerrar) */
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 rotate-90">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    /* Icono Hamburguesa (Abrir) */
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                )}
            </button>
            </div>



            {/* --- NAVBAR HAMBURGUESA --- */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className="flex flex-col space-y-8 text-center font-serif text-3xl text-gray-800">
                    <li>
                        <a href="#about" onClick={handleLinkClick} className="hover:text-burgundy transition-colors">
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={handleLinkClick} className="hover:text-burgundy transition-colors">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={handleLinkClick} className="hover:text-burgundy transition-colors">
                            Stack
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleLinkClick} className="hover:text-burgundy transition-colors">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
    );
}