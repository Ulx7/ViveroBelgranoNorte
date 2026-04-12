import React, { useState } from 'react';
import { urlFor } from "../lib/sanity";

export default function CatalogoInteractivo({ plantasIniciales, categorias }) {
    const [busqueda, setBusqueda] = useState("");
    const [categoriaActiva, setCategoriaActiva] = useState("Todo");

    // Lógica de filtrado (esto ya funcionaba)
    const plantasFiltradas = plantasIniciales.filter(planta => {
        const coincideBusqueda = planta.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaActiva === "Todo" || planta.categoria === categoriaActiva;
        return coincideBusqueda && coincideCategoria;
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
            {/* HEADER CON BUSCADOR (Diseño Recuperado) */}
            <header className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
                <div className="text-center lg:text-left">
                    <span className="text-xs uppercase tracking-[0.4em] text-[#6B5E4C]/60 font-medium">Vivero Belgrano Norte</span>
                    <h1 className="text-7xl md:text-8xl font-black text-black tracking-tighter leading-[0.8] mt-2">CATÁLOGO</h1>
                    <p className="text-xl md:text-2xl italic text-[#6B5E4C]/80 mt-4 font-light">Nuestra Selección de Vida</p>
                </div>

                <div className="w-full max-w-md relative group">
                    <input
                        type="text"
                        placeholder="¿Qué planta buscás?"
                        className="w-full bg-white/50 border-b-2 border-[#6B5E4C]/20 py-4 px-12 text-lg focus:outline-none focus:border-[#8A9A5B] transition-all placeholder:text-[#6B5E4C]/40 rounded-t-xl hover:bg-white/80"
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-30">🔍</span>
                </div>
            </header>

            {/* NAVEGACIÓN DE CATEGORÍAS (Diseño Recuperado + Indicador Activo) */}
            <nav className="flex flex-wrap justify-center lg:justify-start gap-4">
                {categorias.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategoriaActiva(cat)}
                        className={`px-8 py-3 rounded-full border text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm ${categoriaActiva === cat
                            ? "bg-[#6B5E4C] text-[#F4F1EA] border-[#6B5E4C]" // Estilo cuando está seleccionada
                            : "border-[#6B5E4C]/20 text-[#6B5E4C] hover:bg-[#6B5E4C] hover:text-[#F4F1EA]" // Estilo normal
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </nav>

            {/* GRILLA DE PRODUCTOS (Diseño Recuperado con tus animaciones) */}
            <main className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {plantasFiltradas.length > 0 ? (
                        plantasFiltradas.map((planta, index) => (
                            <div key={index} className="group cursor-pointer">
                                {/* Contenedor de Imagen con bordes blancos y sombra */}
                                <div className="aspect-3/4 overflow-hidden rounded-[2.5rem] bg-white shadow-xl border-8 border-white transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                    {planta.imagen ? (
                                        <img
                                            src={urlFor(planta.imagen).width(600).url()}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            alt={planta.nombre}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Sin foto</div>
                                    )}
                                </div>

                                {/* Textos de la tarjeta */}
                                <div className="mt-6 text-center lg:text-left px-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#8A9A5B]">
                                        {planta.categoria}
                                    </p>
                                    <h3 className="text-2xl font-bold text-black tracking-tight mt-1 group-hover:text-[#8A9A5B] transition-colors">
                                        {planta.nombre}
                                    </h3>
                                    {/* He mantenido el precio como texto simple ya que Sanity lo devuelve así */}
                                    <p className="text-xl font-light opacity-60 mt-1">
                                        {planta.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center py-20 text-[#6B5E4C]/50 italic text-xl bg-white/30 rounded-2xl">
                            No se encontraron plantas que coincidan...
                        </p>
                    )}
                </div>
            </main>
            {/* BOTÓN AL FINAL DEL CATÁLOGO */}
            {/* Línea sutil de separación para que no parezca que el botón flota perdido */}
            <div className="border-t border-[#6B5E4C]/10 mt-20 pt-10 flex flex-col items-center gap-6">

                <p className="text-[#6B5E4C]/40 text-[10px] uppercase tracking-[0.5em] font-medium">
                    ¿No encontraste lo que buscabas?
                </p>

                <a
                    href="/"
                    className="group flex items-center gap-4 bg-[#6B5E4C] text-[#F4F1EA] px-10 py-4 rounded-full hover:bg-[#8A9A5B] transition-all duration-300 shadow-lg shadow-[#6B5E4C]/20"
                >
                    {/* Flecha hacia la izquierda = VOLVER */}
                    <span className="text-xl group-hover:-translate-x-2 transition-transform duration-300">
                        ←
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] font-bold">
                        Volver a la Página Principal
                    </span>
                </a>

                <span className="text-[10px] text-[#6B5E4C]/30 mt-4">
                    © 2024 Vivero Belgrano Norte
                </span>
            </div>
        </div>
    );
}