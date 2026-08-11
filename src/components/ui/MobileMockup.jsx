import { useEffect, useRef } from 'react';

export default function MobileMockup({ videoSrc }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play().catch(() => console.log("Esperando interacción del usuario"));
                    } else {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.4 } 
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full max-w-[320px] mx-auto bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-gray-900 relative">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-xl w-32 mx-auto z-10"></div>

            <div className="relative w-full aspect-[9/19] bg-gray-950">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="w-full h-full object-cover rounded-[2rem]"
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                />
            </div>
        </div>
    );
}