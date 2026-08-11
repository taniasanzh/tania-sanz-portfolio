export default function Footer() {
    // logic scroll 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-bg-inverse text-text-inverse pt-20 pb-6 md:pb-10 px-8 text-left overflow-hidden">

            {/* mobile < 768px*/}
            <div className="flex flex-col md:hidden w-full gap-12">

                {/* bottom */}
                <div className="flex justify-start py-4">
                    <button onClick={scrollToTop} className="p-3 rounded-full border border-white/20 text-white/70 transition-all group" aria-label="Volver arriba">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
                            <path d="m17 11-5-5-5 5" /><path d="m17 18-5-5-5 5" />
                        </svg>
                    </button>
                </div>


                {/* links */}
                <div className="flex flex-col gap-10">
                    <ul className="flex flex-col gap-5 font-serif text-lg underline decoration-1 underline-offset-4">
                        <li><a href="https://www.linkedin.com/in/tania-sanz-hartmann-9b10a6330" target="_blank" rel="noreferrer" className="flex items-center gap-3">LinkedIn</a></li>
                        <li><a href="https://github.com/taniasanzh" target="_blank" rel="noreferrer" className="flex items-center gap-3 ">GitHub</a></li>
                        <li><a href="mailto:taniasanzh@gmail.com" className="flex items-center gap-3 ">Email</a></li>
                    </ul>

                </div>
                {/* name */}
                <div className="flex flex-col">
                    <h2 className="flex items-baseline text-[100px] tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-4">T</span>
                        <span className="font-serif uppercase tracking-wider pr-5">ania</span>
                    </h2>
                    <h2 className="flex items-baseline text-[100px] tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-4">S</span>
                        <span className="font-serif uppercase tracking-wider">anz</span>
                    </h2>
                </div>
                {/* copy */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col w-full">
                        <p className="text-xs font-medium opacity-70">© {new Date().getFullYear()} Tania Sanz.</p>
                        <p className="text-xs opacity-70 mt-2 max-w-xs">Frontend Developer con enfoque en UX/UI & Lógica de Backend.</p>
                    </div>
                </div>
            </div>


            {/* desktop > 768px */}
            <div className="hidden md:flex flex-col justify-end w-full md:min-h-[300px] lg:min-h-[45vh] relative">

                {/* name */}
                <h2 className="flex items-baseline text-[10vw] md:text-[9vw] tracking-tight leading-none pointer-events-none -mb-6 lg:-mb-10">
                    <span className="font-script text-[1.5em] pr-4">T</span>
                    <span className="font-serif uppercase tracking-wider pr-5">ania</span>
                    <span className="font-script text-[1.5em] pr-4">S</span>
                    <span className="font-serif uppercase tracking-wider">anz</span>
                </h2>

                {/* bottom */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <button onClick={scrollToTop} className="p-3 rounded-full border border-white/20 text-white/70transition-all group" aria-label="Volver arriba">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
                            <path d="m17 11-5-5-5 5" /><path d="m17 18-5-5-5 5" />
                        </svg>
                    </button>
                </div>

                {/* links */}
                <ul className="absolute top-0 right-0 flex flex-col gap-5 text-right font-serif text-lg underline decoration-1 underline-offset-4">
                    <li><a href="https://www.linkedin.com/in/tania-sanz-hartmann-9b10a6330" target="_blank" rel="noreferrer" className="">LinkedIn</a></li>
                    <li><a href="https://github.com/taniasanzh" target="_blank" rel="noreferrer" className="">GitHub</a></li>
                    <li><a href="mailto:taniasanzh.com" className="">Email</a></li>
                </ul>

                {/* copy */}
                <div className="absolute bottom-0 right-0 flex flex-col items-end text-right">
                    <p className="text-xs font-medium opacity-70">© {new Date().getFullYear()} Tania Sanz.</p>
                    <p className="text-xs opacity-70 mt-1 max-w-xs">Frontend Developer con enfoque en UX/UI & Lógica de Backend.</p>
                </div>

            </div>
        </footer>
    );
}