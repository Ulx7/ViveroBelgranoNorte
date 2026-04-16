import React, { useState, useEffect } from 'react';
import { urlFor } from "../lib/sanity";
import InfoPlanta from './InfoPlanta';

const RedesSociales = ({ compacto }) => (
    <div className={`flex items-center gap-3 bg-white/40 px-3 py-1.5 rounded-full border border-white/20 transition-all duration-500 ${compacto ? 'opacity-0 scale-90 pointer-events-none w-0 p-0 overflow-hidden' : 'opacity-100 scale-100'}`}>
        {/* WhatsApp */}
        <a href="https://wa.me/+59891951434" target="_blank" className="text-[#6B5E4C] hover:text-[#25D366] transition-colors shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z" /></svg>
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/viverobelgranonorte" target="_blank" className="text-[#6B5E4C] hover:text-[#8A9A5B] transition-colors shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.51" /></svg>
        </a>
        {/* TikTok */}
        <a href="https://www.tiktok.com/@viverobelgranonorte" target="_blank" className="text-[#6B5E4C] hover:text-[#8A9A5B] transition-colors shrink-0 opacity-60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
        </a>
        {/* Facebook */}
        <a href="https://www.facebook.com/share/1CZkVvrWnR/" target="_blank" className="text-[#6B5E4C] hover:text-[#1877F2] transition-colors shrink-0 opacity-60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
    </div>
);

export default function CatalogoInteractivo({ plantasIniciales, categorias }) {
    const [busqueda, setBusqueda] = useState("");
    const [categoriaActiva, setCategoriaActiva] = useState("Todo");
    const [isScrolled, setIsScrolled] = useState(false);

    // Lógica para detectar el scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const plantasFiltradas = plantasIniciales.filter(planta => {
        const coincideBusqueda = planta.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaActiva === "Todo" || planta.categoria === categoriaActiva;
        return coincideBusqueda && coincideCategoria;
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            
            {/* HEADER - Ajustado para que no se rompa */}
            <header className="w-full text-center mb-10 overflow-hidden px-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#6B5E4C]/60 font-black block">Vivero Belgrano Norte</span>
                {/* 'text-clamp' manual: 12vw para móvil, 8xl para desktop */}
                <h1 className="text-[12vw] md:text-8xl font-black text-black tracking-tighter leading-[0.8] mt-2 whitespace-nowrap">
                    CATÁLOGO
                </h1>
                <p className="text-lg md:text-xl italic text-[#6B5E4C]/60 mt-4 font-light tracking-tight">Nuestra Selección de Vida</p>
            </header>

            {/* NAV DINÁMICO */}
            <div className={`sticky top-4 z-50 bg-[#F4F1EA]/95 backdrop-blur-md px-4 md:px-8 py-4 rounded-[2.5rem] shadow-2xl shadow-[#6B5E4C]/10 border border-white/40 mb-16 transition-all duration-500`}>
                <div className="flex flex-col gap-4">
                    
                    {/* Fila 1: Logo e Inicio (Izquierda) + Redes (Derecha) */}
                    {/* Esta fila desaparece al scrollear */}
                    <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden mb-[-1rem]' : 'h-10 opacity-100 mb-0'}`}>
                        <a href="/" className="flex items-center gap-2 group shrink-0">
                            <div className="w-9 h-9 bg-[#6B5E4C] rounded-full flex items-center justify-center text-[#F4F1EA] text-[10px] font-black">VB</div>
                            <span className="text-[10px] uppercase tracking-widest font-black text-[#6B5E4C]">Inicio</span>
                        </a>
                        <RedesSociales compacto={isScrolled} />
                    </div>

                    {/* Fila 2: Buscador */}
                    <div className="w-full flex justify-center transition-all duration-500">
                        <div className={`relative transition-all duration-500 ${isScrolled ? 'w-full max-w-md' : 'w-full'}`}>
                            <input
                                type="text"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                placeholder="Buscar plantas..."
                                className="w-full bg-white/50 border border-[#6B5E4C]/5 py-3 px-10 text-[11px] rounded-full focus:ring-2 focus:ring-[#8A9A5B]/20 shadow-inner outline-none transition-all"
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[12px] opacity-40">🔍</span>
                        </div>
                    </div>

                    {/* Fila 3: Categorías */}
                    <nav className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pb-1">
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoriaActiva(cat)}
                                className={`px-4 py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase transition-all duration-300 ${
                                    categoriaActiva === cat
                                        ? "bg-[#6B5E4C] text-[#F4F1EA] shadow-md"
                                        : "text-[#6B5E4C]/50 bg-white/30 hover:bg-white/60"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
            
            {/* Plants */}
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {plantasFiltradas.length > 0 ? (
                    plantasFiltradas.map((planta, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col h-full">
                            <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-white shadow-lg border-4 border-white transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 relative">
                                {planta.imagen ? (
                                    <img
                                        src={urlFor(planta.imagen).width(600).url()}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                        alt={planta.nombre}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#F4F1EA] flex items-center justify-center text-[#6B5E4C]/20 text-xs">Sin imagen</div>
                                )}
                            </div>

                            <div className="mt-6 px-1 flex flex-col grow">
                                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-[#6B5E4C]/60 mb-1">{planta.categoria}</p>
                                <h3 className="text-2xl font-bold text-black group-hover:text-[#8A9A5B] transition-colors tracking-tight leading-tight mb-3">{planta.nombre}</h3>

                                <div className="mb-4">
                                    <InfoPlanta sol={planta.sol} riego={planta.riego} ubicacion={planta.ubicacion} />
                                </div>

                                <p className="text-sm font-light text-[#6B5E4C]/60 leading-relaxed line-clamp-2 italic mb-6">{planta.descripcion}</p>

                                <div className="mt-auto">
                                    <div className="flex justify-between items-end pl-1 pr-3 pb-3">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#6B5E4C]/30 leading-none mb-1">Disponibilidad</span>
                                            <span className="text-[10px] font-medium text-[#6B5E4C]/50 leading-none">Unidad</span>
                                        </div>

                                        {planta.precio && (
                                            <div className="flex items-end gap-0.5 leading-none">
                                                <span className="text-sm font-bold text-[#6B5E4C]/40 tracking-tighter mb-1">$</span>
                                                <span className="text-4xl font-black text-[#6B5E4C] tracking-tighter leading-[0.8]">{planta.precio}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-t-2 border-[#6B5E4C]/20 mx-1"></div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-24 text-center">
                        <p className="text-[#6B5E4C]/30 italic text-lg tracking-tight">No encontramos esa planta en nuestro jardín...</p>
                    </div>
                )}
            </main>

            <footer className="border-t border-[#6B5E4C]/10 mt-16 pb-10 pt-8 flex flex-col items-center gap-4">
                <div className="opacity-10 hover:opacity-30 transition-all duration-700">
                    <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60 10.5C52.1678 18.3322 46.5 29.5 46.5 39.5C46.5 49.5 52.1678 60.6678 60 68.5C67.8322 60.6678 73.5 49.5 73.5 39.5C73.5 29.5 67.8322 18.3322 60 10.5Z" fill="#6B5E4C" />
                        <path d="M109.5 60C101.668 67.8322 90.5 73.5 80.5 73.5C70.5 73.5 59.3322 67.8322 51.5 60C59.3322 52.1678 70.5 46.5 80.5 46.5C90.5 46.5 101.668 52.1678 109.5 60Z" fill="#6B5E4C" />
                        <path d="M10.5 60C18.3322 52.1678 29.5 46.5 39.5 46.5C49.5 46.5 60.6678 52.1678 68.5 60C60.6678 67.8322 49.5 73.5 39.5 73.5C29.5 73.5 18.3322 67.8322 10.5 60Z" fill="#6B5E4C" />
                    </svg>
                </div>

                <div className="text-center space-y-0.5">
                    <p className="text-[#6B5E4C]/40 text-[9px] uppercase tracking-[0.4em] font-black">
                        Vivero Belgrano Norte
                    </p>
                    <p className="text-[#6B5E4C]/20 text-[8px] uppercase tracking-[0.2em]">
                        Viverobelgranonorte@outlook.com • 2026
                    </p>
                </div>
            </footer>
        </div>
    );
}