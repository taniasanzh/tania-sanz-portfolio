export default function DeviceToggle({ activeDevice, onToggle }) {
    return (
        <div className="flex justify-center w-full mb-10">
            <div className="flex gap-2 p-1 bg-gray-100 border border-gray-200 rounded-full">
                <button
                    onClick={() => onToggle('desktop')}
                    className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        activeDevice === 'desktop'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    Escritorio
                </button>
                <button
                    onClick={() => onToggle('mobile')}
                    className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        activeDevice === 'mobile'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    Móvil
                </button>
            </div>
        </div>
    );
}