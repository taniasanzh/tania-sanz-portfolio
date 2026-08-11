import { useState } from 'react';

export default function InteractiveLetter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full max-w-2xl flex justify-center">
            {/* Sobre cerrado */}
            <div
                className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${isOpen ? 'opacity-0 scale-75 pointer-events-none absolute' : 'opacity-100 scale-100 hover:scale-105 hover:-translate-y-2'}`}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src="/contacto.png"
                    alt="Sobre de contacto"
                    className="w-80 md:w-96 lg:w-[400px] h-auto drop-shadow-2xl object-contain"
                />
            </div>

            {/* Formulario abierto */}
            <div
                className={`w-full p-8 md:p-12 rounded-sm shadow-2xl transition-all duration-1000 ease-out transform origin-bottom border border-gray-200 bg-paper-pattern ${isOpen ? 'opacity-100 translate-y-0 scale-100 relative' : 'opacity-0 translate-y-24 scale-90 absolute pointer-events-none'}`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-burgundy transition-colors z-20"
                    title="Doblar carta"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <h3 className="text-3xl font-script text-gray-800 mb-2 -mt-2 font-semibold">Estimada Tania,</h3>

                    <div className="flex flex-col gap-1 mt-1">
                        <label htmlFor="nombre" className="text-xs font-semibold text-gray-500 uppercase tracking-widest bg-bg-paper w-max px-1">Mi nombre es</label>
                        <input
                            type="text"
                            id="nombre"
                            className="w-full bg-transparent border-b-2 border-gray-400 focus:border-burgundy focus:outline-none py-1 text-gray-800 font-serif text-xl transition-colors h-[32px] leading-[32px]"
                            placeholder="Ej: Reclutador Tech"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1 mt-4">
                        <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-widest bg-bg-paper w-max px-1">Mi email es</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent border-b-2 border-gray-400 focus:border-burgundy focus:outline-none py-1 text-gray-800 font-serif text-xl transition-colors h-[32px] leading-[32px]"
                            placeholder="ejemplo@empresa.com"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1 mt-4">
                        <label htmlFor="mensaje" className="text-xs font-semibold text-gray-500 uppercase tracking-widest bg-bg-paper w-max px-1">Te escribo para decirte que...</label>
                        <textarea
                            id="mensaje"
                            rows="4"
                            className="w-full bg-transparent border-b-2 border-gray-400 focus:border-burgundy focus:outline-none py-1 text-gray-800 font-serif text-xl transition-colors resize-none leading-[32px]"
                            placeholder="Me ha encantado tu portfolio..."
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-end mt-8">
                        <button
                            type="submit"
                            className="bg-burgundy hover:bg-burgundy-hover text-white font-serif italic text-xl py-3 px-10 rounded-sm shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            Enviar carta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}