import InteractiveLetter from '../ui/InteractiveLetter';

export default function Contact() {
    return (
        <section id="contact" className="relative w-full flex flex-col items-center px-8 pt-12 pb-24 2xl:pt-16 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto flex flex-col z-10">

                {/* Cabecera */}
                <div className="flex flex-col text-center 2xl:text-left mb-12">
                    <h2 className="flex justify-center 2xl:justify-start items-baseline text-4xl md:text-5xl tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-2">C</span>
                        <span className="font-serif tracking-wider">ontacto</span>
                    </h2>
                </div>

                <div className="relative w-full mt-4 flex justify-center">
                    <InteractiveLetter />
                </div>
                
            </div>
        </section>
    );
}