import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function InteractiveLetter() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Referencia al formulario para EmailJS
    const form = useRef();
    
    // Estados para controlar el flujo de envío
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,   
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  
                form.current, 
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
            )
            .then(
                () => {
                    setStatus('success');
                    form.current.reset();
                    setTimeout(() => {
                        setIsOpen(false);
                        setStatus('idle');
                    }, 4000);
                },
                (error) => {
                    console.error('Error al enviar el mensaje:', error.text);
                    setStatus('error');
                }
            );
    };

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
                    onClick={() => {
                        setIsOpen(false);
                        if(status === 'success') setStatus('idle'); 
                    }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-burgundy transition-colors z-20"
                    title="Doblar carta"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* éxito envío */}
                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-10 fade-in">
                        <h3 className="text-4xl font-script text-burgundy mb-4">¡Gracias por tu mensaje!</h3>
                        <p className="text-gray-600 font-serif text-xl">
                            He recibido tu carta correctamente.<br/>Me pondré en contacto contigo muy pronto.
                        </p>
                    </div>
                ) : (
                    /* form */
                    <form ref={form} className="flex flex-col gap-5 relative z-10" onSubmit={sendEmail}>
                        <h3 className="text-3xl font-script text-gray-800 mb-2 -mt-2 font-semibold">Estimada Tania,</h3>

                        <div className="flex flex-col gap-1 mt-1">
                            <label htmlFor="nombre" className="text-xs font-semibold text-gray-500 uppercase tracking-widest bg-bg-paper w-max px-1">Mi nombre es</label>
                            <input
                                type="text"
                                id="nombre"
                                name="user_name" 
                                className="w-full bg-transparent border-b-2 border-gray-400 focus:border-burgundy focus:outline-none py-1 text-gray-800 font-serif text-xl transition-colors h-[32px] leading-[32px]"
                                placeholder="Ej: Reclutador Tech"
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-widest bg-bg-paper w-max px-1">Mi email es</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                className="w-full bg-transparent border-b-2 border-gray-400 focus:border-burgundy focus:outline-none py-1 text-gray-800 font-serif text-xl transition-colors h-[32px] leading-[32px]"
                                placeholder="ejemplo@empresa.com"
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="mensaje" className="text-xs font-semibold text-gray-500 uppercase tracking-widest bg-bg-paper w-max px-1">Te escribo para decirte que...</label>
                            <textarea
                                id="mensaje"
                                name="message"
                                rows="4"
                                className="w-full bg-transparent border-b-2 border-gray-400 focus:border-burgundy focus:outline-none py-1 text-gray-800 font-serif text-xl transition-colors resize-none leading-[32px]"
                                placeholder="Me ha encantado tu portfolio..."
                                required
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm mt-2 font-semibold">
                                Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.
                            </p>
                        )}

                        <div className="flex justify-end mt-8">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`bg-burgundy hover:bg-burgundy-hover text-white font-serif italic text-xl py-3 px-10 rounded-sm shadow-md transition-all hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed`}
                            >
                                {status === 'loading' ? 'Enviando...' : 'Enviar carta'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}