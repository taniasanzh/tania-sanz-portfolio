export default function MobileMockup({ videoSrc }) {
    return (
        <div className="w-full max-w-[320px] mx-auto bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-gray-900 relative">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-xl w-32 mx-auto z-10"></div>

            <div className="relative w-full aspect-[9/19] bg-gray-950">
                <video
                    src={videoSrc}
                    className="w-full h-full object-cover rounded-[2rem]"
                    autoPlay
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