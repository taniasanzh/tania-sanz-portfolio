import { useEffect, useRef } from 'react';

export default function DesktopMockup({ videoSrc }) {
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
        <div className="w-full max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="flex items-center px-4 py-3 bg-gray-900 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="relative w-full bg-gray-950 flex justify-center">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="w-full h-auto block"
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