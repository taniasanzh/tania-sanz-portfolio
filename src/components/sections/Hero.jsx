export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex flex-col items-center px-8 md:px-16 pt-20">
            {/* col 1 */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
                <div className="flex flex-col text-center md:text-left z-10 order-2 md:order-1">
                    <p className="text-gray-800 font-semibold">Hola, soy Tania Sanz</p>
                    <h1 className="flex items-baseline text-[100px] tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-4">D</span>
                        <span className="font-serif uppercase tracking-wider pr-5">esarrolladora</span>
                    </h1>
                    <h2 className="flex items-baseline text-[100px] tracking-tight leading-none">
                        <span className="font-serif uppercase tracking-wider pr-5">Full Stack</span>
                    </h2>

                    <h2 className="flex items-baseline text-center text-[50px] tracking-tight leading-none">
                        <span className="font-serif  tracking-wider pr-5">Frontend Oriented</span>
                    </h2>
                </div>

                {/* col 2 */}
                <div className="flex justify-center items-center order-1 md:order-2">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-gray-200 overflow-hidden shadow-xl relative rounded-[60%_40%_30%_70%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-700 ease-in-out">
                        <img src="public\foto.jpg" alt="Tania Sanz - Desarrolladora Full Stack" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}