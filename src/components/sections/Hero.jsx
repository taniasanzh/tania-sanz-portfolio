export default function Hero() {
    return (
        <section id="hero" className="relative w-full flex flex-col items-center px-8 2xl:px-16 pt-20 pb-24 2xl:pb-70">
            {/* col 1 */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-8 items-center">
                <div className="relative flex flex-col text-center 2xl:text-left z-10 order-2 2xl:order-1">
                    <p className="text-gray-800 font-semibold">Hola, soy Tania Sanz</p>
                    <h1 className="flex justify-center 2xl:justify-start items-baseline text-[11vw] min-[840px]:text-[100px] tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-2 2xl:pr-4 ">D</span>
                        <span className="font-serif uppercase tracking-wider">esarrolladora</span>
                    </h1>
                    <h2 className="flex justify-center 2xl:justify-start items-baseline text-[11vw] min-[840px]:text-[100px] tracking-tight leading-none">
                        <span className="font-serif uppercase tracking-wider">Full Stack</span>
                    </h2>

                    <h2 className="flex justify-center 2xl:justify-start items-baseline text-[5.5vw] min-[840px]:text-[50px] tracking-tight leading-none">
                        <span className="font-serif  tracking-wider">Frontend Oriented</span>
                    </h2>
                    <div className="mt-6 2xl:mt-8 2xl:absolute 2xl:top-full 2xl:left-0 w-full max-w-2xl mx-auto 2xl:mx-0">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Desarrolladora Full Stack con alma de diseñadora. Me especializo en crear interfaces limpias, accesibles y enfocadas en la experiencia de usuario (UX/UI). Domino el ecosistema de React y JavaScript para la lógica, y Figma para el prototipado. Mi objetivo es desarrollar soluciones que sean tan sólidas en su arquitectura técnica como intuitivas en su diseño.
                        </p>

                        <div className="flex items-center justify-center 2xl:justify-start gap-6 mt-6">
                            <a href="public\Tania_Sanz_Hartmann_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 text-gray-700 font-semibold tracking-wide uppercase text-sm transition-colors py-1">
                                <span className="leading-none -translate-y-[1px] 2xl:translate-y-[2px]">Ver currículum</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </a>

                            <div className="w-[1px] h-6 bg-gray-300" />

                            <a
                                href="https://www.linkedin.com/in/tania-sanz-hartmann-9b10a6330/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[#0A66C2] text-2xl transition-colors flex items-center"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>

                            <a
                                href="https://github.com/taniasanzh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 text-2xl transition-colors flex items-center"
                                aria-label="GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* col 2 */}
                {/* col 2 */}
                <div className="flex justify-center items-center order-1 2xl:order-2">
                    <div className="w-64 h-64 2xl:w-[400px] 2xl:h-[400px] bg-gray-200 overflow-hidden shadow-xl relative rounded-[60%_40%_30%_70%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-700 ease-in-out animate-mobile-morph">
                        <img src="public\foto.jpg" alt="Tania Sanz - Desarrolladora Full Stack" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}