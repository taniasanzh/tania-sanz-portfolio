export default function About() {
    return (
        <section id="about" className="relative w-full flex flex-col items-center px-8 pt-12 pb-24 2xl:pt-16">
            {/* col 1 */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-8 items-center">
                <div className="flex flex-col text-center 2xl:text-left z-10 order-2 2xl:order-1">
                    <h2 className="flex justify-center 2xl:justify-start items-baseline text-4xl md:text-5xl tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-2 2xl:pr-2">¿Q</span>
                        <span className="font-serif tracking-wider">uién soy?</span>
                    </h2>
                    <div className="w-full max-w-2xl mx-auto 2xl:mx-0 mt-6">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Graduada en Desarrollo de Aplicaciones Web (DAW). Aunque tengo una visión integral del desarrollo (Full Stack), me he especializado en el Frontend y el diseño UX/UI. Me apasiona construir aplicaciones atractivas y funcionales. Mi filosofía se basa en escribir código limpio para crear interfaces intuitivas, accesibles y que los usuarios realmente disfruten usando.
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