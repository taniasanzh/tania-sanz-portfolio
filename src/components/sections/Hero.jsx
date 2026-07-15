export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex flex-col items-center px-8 2xl:px-16 pt-20">
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
                    </div>
                </div>

                {/* col 2 */}
                <div className="flex justify-center items-center order-1 2xl:order-2">
                    <div className="w-64 h-64 2xl:w-[400px] 2xl:h-[400px] bg-gray-200 overflow-hidden shadow-xl relative rounded-[60%_40%_30%_70%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-700 ease-in-out">
                        <img src="public\foto.jpg" alt="Tania Sanz - Desarrolladora Full Stack" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}