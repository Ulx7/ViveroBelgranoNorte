import React, { useState } from 'react';
import { urlFor } from "../lib/sanity";
import InfoPlanta from './InfoPlanta';

const RedesSociales = () => (
    <div className="flex items-center gap-2 md:gap-3.5 bg-white/40 px-2.5 py-1.5 rounded-full border border-white/20 shrink-0">
        {/* Instagram */}
        <a href="https://www.instagram.com/viverobelgranonorte?igsh=MXRkMjlrYXd0amFzdA==" target="_blank" className="text-[#6B5E4C] hover:text-[#8A9A5B] transition-colors scale-90">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.51" /></svg>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/+59891951434" target="_blank" className="text-[#6B5E4C] hover:text-[#25D366] transition-colors scale-90">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z" /></svg>
        </a>

        {/* TikTok */}
        <a href="https://www.tiktok.com/@viverobelgranonorte?_r=1&_t=ZS-95UdNlkWCdV" target="_blank" className="text-[#6B5E4C] hover:text-[#8A9A5B] transition-colors scale-90">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
        </a>

        {/* Facebook - ELIMINADO 'hidden sm:block' */}
        <a href="https://www.facebook.com/share/1CZkVvrWnR/" target="_blank" className="text-[#6B5E4C] hover:text-[#1877F2] transition-colors scale-90">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
    </div>
);

export default function CatalogoInteractivo({ plantasIniciales, categorias }) {
    const [busqueda, setBusqueda] = useState("");
    const [categoriaActiva, setCategoriaActiva] = useState("Todo");

    const plantasFiltradas = plantasIniciales.filter(planta => {
        const coincideBusqueda = planta.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaActiva === "Todo" || planta.categoria === categoriaActiva;
        return coincideBusqueda && coincideCategoria;
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* 1. HEADER */}
            <header className="w-full text-center lg:text-left mb-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#6B5E4C]/60 font-black">Vivero Belgrano Norte</span>
                <h1 className="text-7xl md:text-8xl font-black text-black tracking-tighter leading-[0.8] mt-2">CATÁLOGO</h1>
                <p className="text-lg md:text-xl italic text-[#6B5E4C]/60 mt-4 font-light tracking-tight">Nuestra Selección de Vida</p>
            </header>

            {/* 2. NAV STICKY - Optimizado */}
            <div className="sticky top-4 z-50 bg-[#F4F1EA]/95 backdrop-blur-md px-4 md:px-8 py-4 rounded-[2rem] shadow-2xl shadow-[#6B5E4C]/10 border border-white/40 mb-16 transition-all duration-300">
                <div className="flex flex-col gap-5">

                    {/* FILA SUPERIOR: Distribución mejorada */}
                    <div className="flex items-center justify-between gap-4">

                        {/* 1. IZQUIERDA: Inicio */}
                        <div className="shrink-0">
                            <a href="/" className="flex items-center gap-2 group">
                                <div className="w-9 h-9 bg-[#6B5E4C] rounded-full flex items-center justify-center text-[#F4F1EA] text-[10px] font-black transition-transform group-hover:scale-110">
                                    VB
                                </div>
                                <span className="text-[10px] uppercase tracking-widest font-black text-[#6B5E4C] xs:block">
                                    Inicio
                                </span>
                            </a>
                        </div>

                        {/* 2. CENTRO: Buscador expandido */}
                        <div className="flex-1 max-w-md relative">
                            <input
                                type="text"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                placeholder="Buscar plantas..."
                                className="w-full bg-white/50 border border-[#6B5E4C]/5 py-2.5 px-10 text-[11px] rounded-full focus:ring-2 focus:ring-[#8A9A5B]/20 placeholder:text-[#6B5E4C]/30 shadow-inner outline-none transition-all"
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[12px] opacity-40">🔍</span>
                        </div>

                        {/* 3. DERECHA: Redes (Sin el fondo gris para que no ocupe tanto) */}
                        <div className="shrink-0 flex items-center">
                            <RedesSociales />
                        </div>
                    </div>

                    {/* FILA INFERIOR: Categorías */}
                    <nav className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-1">
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoriaActiva(cat)}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter transition-all duration-300 ${categoriaActiva === cat
                                    ? "bg-[#6B5E4C] text-[#F4F1EA] shadow-md transform -translate-y-0.5"
                                    : "text-[#6B5E4C]/50 hover:text-[#6B5E4C] hover:bg-white/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* 3. GRILLA DE PRODUCTOS */}
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {plantasFiltradas.length > 0 ? (
                    plantasFiltradas.map((planta, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col h-full">
                            {/* Imagen Contenedor */}
                            <div className="aspect-3/4 overflow-hidden rounded-[2.5rem] bg-white shadow-lg border-4 border-white transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                {planta.imagen ? (
                                    <img
                                        src={urlFor(planta.imagen).width(600).url()}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={planta.nombre}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#F4F1EA] flex items-center justify-center text-[#6B5E4C]/20 text-xs">Sin imagen</div>
                                )}
                            </div>

                            {/* Cuerpo de la Tarjeta */}
                            <div className="mt-6 px-1 flex flex-col grow">
                                {/* Categoría con un poco más de aire inferior */}
                                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-[#8A9A5B] mb-1">
                                    {planta.categoria}
                                </p>

                                {/* Título más grande y con margen para no pisar los tags */}
                                <h3 className="text-2xl font-bold text-black group-hover:text-[#8A9A5B] transition-colors tracking-tight leading-tight mb-3">
                                    {planta.nombre}
                                </h3>

                                {/* Contenedor de Tags (asegúrate que InfoPlanta use flex gap-2) */}
                                <div className="mb-4">
                                    <InfoPlanta
                                        sol={planta.sol}
                                        riego={planta.riego}
                                        ubicacion={planta.ubicacion}
                                    />
                                </div>

                                {/* Descripción con interlineado más elegante */}
                                <p className="text-sm font-light text-[#6B5E4C]/60 leading-relaxed line-clamp-2 italic">
                                    {planta.descripcion}
                                </p>

                                {/* SECCIÓN PRECIO: Ajuste de márgenes y alineación */}
                                <div className="mt-auto pt-6 border-t border-[#6B5E4C]/10 flex justify-between items-baseline pr-1">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#6B5E4C]/30 leading-none">
                                            Disponibilidad
                                        </span>
                                        <span className="text-[10px] font-medium text-[#6B5E4C]/50">
                                            Unidad
                                        </span>
                                    </div>

                                    {planta.precio && (
                                        <div className="flex items-baseline gap-0.5">
                                            <span className="text-sm font-bold text-[#6B5E4C]/40 tracking-tighter self-start mt-1">
                                                $
                                            </span>
                                            <span className="text-4xl font-black text-[#6B5E4C] tracking-tighter leading-none">
                                                {planta.precio}
                                            </span>
                                        </div>
                                    )}
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

            {/* 4. FOOTER */}
            <footer className="border-t border-[#6B5E4C]/10 mt-40 pb-16 pt-16 flex flex-col items-center gap-8">
                <div className="opacity-10 hover:opacity-40 transition-all duration-700">
                    <svg width="35" height="35" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60 10.5C52.1678 18.3322 46.5 29.5 46.5 39.5C46.5 49.5 52.1678 60.6678 60 68.5C67.8322 60.6678 73.5 49.5 73.5 39.5C73.5 29.5 67.8322 18.3322 60 10.5Z" fill="#6B5E4C" />
                        <path d="M109.5 60C101.668 67.8322 90.5 73.5 80.5 73.5C70.5 73.5 59.3322 67.8322 51.5 60C59.3322 52.1678 70.5 46.5 80.5 46.5C90.5 46.5 101.668 52.1678 109.5 60Z" fill="#6B5E4C" />
                        <path d="M10.5 60C18.3322 52.1678 29.5 46.5 39.5 46.5C49.5 46.5 60.6678 52.1678 68.5 60C60.6678 67.8322 49.5 73.5 39.5 73.5C29.5 73.5 18.3322 67.8322 10.5 60Z" fill="#6B5E4C" />
                    </svg>
                </div>
                <div className="text-center space-y-1">
                    <p className="text-[#6B5E4C]/40 text-[9px] uppercase tracking-[0.7em] font-black">Vivero Belgrano Norte</p>
                    <p className="text-[#6B5E4C]/20 text-[8px] uppercase tracking-[0.3em]">Curaduría Botánica • 2026</p>
                </div>
            </footer>
        </div>
    );
}