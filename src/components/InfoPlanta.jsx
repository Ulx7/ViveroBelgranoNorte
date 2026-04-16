import React from 'react';
import { Sun, Droplets, Home, TreePine } from 'lucide-react';

export default function InfoPlanta({ sol, riego, ubicacion }) {
  const etiquetas = {
    sol_directo: "Sol directo",
    sombra: "Sin sol directo",
    media_sombra: "Media sombra",
    luz_indirecta: "Mucha claridad",
    bajo: "Poco riego",
    medio: "Riego regular",
    alto: "Riego frecuente",
    interior: "Interior",
    exterior: "Exterior",
    mixta: "Int / Ext"
  };

  if (!sol && !riego && !ubicacion) return null;

  const estiloBase = "flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-full border border-[#6B5E4C]/10 shadow-sm";
  const estiloTexto = "text-[9px] font-black uppercase tracking-tighter text-[#6B5E4C]";
  const estiloIcono = "opacity-50";

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {sol && (
        <div className={estiloBase}>
          <Sun size={12} className={estiloIcono} />
          <span className={estiloTexto}>
            {etiquetas[sol] || sol}
          </span>
        </div>
      )}

      {riego && (
        <div className={estiloBase}>
          <Droplets size={12} className={estiloIcono} />
          <span className={estiloTexto}>
            {etiquetas[riego] || riego}
          </span>
        </div>
      )}

      {ubicacion && (
        <div className={estiloBase}>
          {ubicacion === 'interior' ? (
            <Home size={11} className={estiloIcono} />
          ) : (
            <TreePine size={11} className={estiloIcono} />
          )}
          <span className={estiloTexto}>
            {etiquetas[ubicacion] || ubicacion}
          </span>
        </div>
      )}
    </div>
  );
}