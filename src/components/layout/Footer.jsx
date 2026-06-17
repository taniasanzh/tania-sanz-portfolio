export default function Footer() {
    // logic scroll 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-bg-inverse text-text-inverse pt-20 pb-6 md:pb-2 px-8 text-left">

            {/* container grid: 1 mobile, 2 desk*/}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* col left */}
                    <div className="flex flex-col">
                        <h2 className="flex items-baseline text-[100px] md:text-[10vw] tracking-tight leading-none">
                            <span className="font-script text-[1.5em] pr-4">T</span>
                            <span className="font-serif uppercase tracking-wider pr-5">ania</span>
                            <span className="font-script text-[1.5em] pr-4">S</span>
                            <span className="font-serif uppercase tracking-wider">anz</span>
                        </h2>

                        <h2 className="flex items-baseline text-[100px] md:text-[10vw] tracking-tight leading-none md:ml-8">

                        </h2>
                    </div>

                <div className="flex flex-col justify-between items-start md:items-end h-full">
                    {/* Links */}
                    <ul className="flex flex-col gap-5 text-left md:text-right font-serif md:text-lg">
                        <li>
                            <a href="https://www.linkedin.com/in/tania-sanz-hartmann-9b10a6330"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 justify-start md:justify-end">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/tania-sanz-hartmann-9b10a6330"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 justify-start md:justify-end">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/tania-sanz-hartmann-9b10a6330"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 justify-start md:justify-end">
                                Email
                            </a>
                        </li>
                    </ul>
                    <div className="flex flex-col items-start md:items-end w-full mb-4 md:mb-[2.5vw]">
                        <p className="text-xs font-medium opacity-70">
                            © {new Date().getFullYear()} Tania Sanz.
                        </p>
                        <p className="text-xs opacity-70 mt-2">
                            Frontend Developer con enfoque en UX/UI & Lógica de Backend.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}