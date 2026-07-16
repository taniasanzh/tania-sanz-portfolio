export default function About() {
    return (
        <section id="about" className="relative w-full flex flex-col items-center px-8 pb-30">
            {/* col 1 */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-8 items-center">
                <div className="flex flex-col text-center 2xl:text-left z-10 order-2 2xl:order-1">
                    <h2 className="flex justify-center 2xl:justify-start items-baseline text-5xl md:text-6xl lg:text-5xl tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-2 2xl:pr-2">¿Q</span>
                        <span className="font-serif tracking-wider">uién soy?</span>
                    </h2>
                    <div className="w-full max-w-2xl mx-auto 2xl:mx-0">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            texto ejemplo dhdhbdswjdswjdjdakjdnj
                        </p>
                    </div>
                </div>

                {/* col 2 */}
                <div className="flex justify-center items-center order-1 2xl:order-2">

                </div>
            </div>
        </section>
    );
}