import { useState } from 'react';
import DeviceToggle from '../ui/DeviceToggle';
import DesktopMockup from '../ui/DesktopMockup';
import MobileMockup from '../ui/MobileMockup';

export default function ProjectShowcase() {
    const [activeTab, setActiveTab] = useState('inicio');
    const [device, setDevice] = useState('desktop');

    const features = [
        {
            id: 'inicio',
            label: 'Inicio',
            videos: {
                desktop: '/videos/home-pc.mp4',
                mobile: '/videos/home-movil.mp4'
            }
        },
        {
            id: 'producto',
            label: 'Vista Producto',
            videos: {
                desktop: '/videos/producto-pc.mp4',
                mobile: '/videos/producto-movil.mp4'
            }
        },
        {
            id: 'perfil-empresa',
            label: 'Perfil Empresa',
            videos: {
                desktop: '/videos/perfil-empresa-pc.mp4',
                mobile: '/videos/perfil-empresa-movil.mp4'
            }
        },
        {
            id: 'usuario',
            label: 'Perfil Usuario',
            videos: {
                desktop: '/videos/usuario-pc.mp4',
                mobile: '/videos/usuario-movil.mp4'
            }
        }
    ];

    const currentFeature = features.find(f => f.id === activeTab);
    const currentVideoSrc = currentFeature.videos[device];

    return (
        <section id="projects" className="relative w-full flex flex-col items-center px-8 pt-12 pb-24 2xl:pt-16">

            <div className="w-full max-w-7xl mx-auto flex flex-col z-10">

                <div className="flex flex-col text-center 2xl:text-left">
                    <h2 className="flex justify-center 2xl:justify-start items-baseline text-4xl md:text-5xl tracking-tight leading-none">
                        <span className="font-script text-[1.5em] pr-2 2xl:pr-2">P</span>
                        <span className="font-serif tracking-wider">royectos</span>
                    </h2>

                    <div className="w-full max-w-3xl mx-auto 2xl:mx-0 mt-8">
                        <div className="flex items-center justify-center 2xl:justify-start gap-3 mb-3">
                            <h3 className="text-2xl font-serif font-bold text-red-900">
                                Fenix Tech
                            </h3>
                            <a
                                href="https://github.com/FenixxTech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-900 transition-colors"
                                title="Ver código fuente en GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>

                        <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 space-y-4">
                            <p>
                                FenixTech nace con el propósito de democratizar el acceso a la tecnología y promover la economía circular dando una segunda vida a los dispositivos electrónicos.
                                Nuestra aplicación web actúa como intermediario directo para reducir el impacto medioambiental de la basura electrónica.
                            </p>
                            <p>
                                Las empresas disponen de un espacio para donar u ofrecer a bajo coste los equipos que renuevan.
                                Por su parte, los usuarios tienen un papel proactivo: además de adquirir productos, pueden publicar peticiones tecnológicas, permitiendo a las empresas dirigir sus futuras donaciones hacia quienes más lo necesitan.
                            </p>
                        </div>

                        {/* Etiquetas de Tecnologías */}
                        <div className="flex flex-wrap justify-center 2xl:justify-start gap-2">
                            {['React', 'Bootstrap', 'Java', 'Spring Boot', 'Spring Security', 'MariaDB', 'Docker'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <div className="w-full flex overflow-x-auto hide-scrollbar mb-8 border-b border-gray-200">
                        <div className="flex w-full justify-start 2xl:justify-start md:justify-center gap-2 pb-2">
                            {features.map((feature) => (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveTab(feature.id)}
                                    className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${activeTab === feature.id
                                        ? 'text-burgundy border-b-2 border-burgundy bg-blue-50/50'
                                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                                        }`}
                                >
                                    {feature.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <DeviceToggle activeDevice={device} onToggle={setDevice} />

                    <div className="w-full max-w-7xl mx-auto mt-4 transition-all duration-500 ease-in-out">
                        {device === 'desktop' ? (
                            <DesktopMockup key={currentVideoSrc} videoSrc={currentVideoSrc} />
                        ) : (
                            <MobileMockup key={currentVideoSrc} videoSrc={currentVideoSrc} />
                        )}
                    </div>
                </div>

            </div>

        </section>
    );
}