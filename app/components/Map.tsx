"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Fix for default marker icon in Leaflet + Next.js
const customIcon = L.icon({
  iconUrl: "/icons/maps.svg", // Reusing the maps icon for consistency
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const center: [number, number] = [-2.9657515, 104.7895538];

export default function Map() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full h-full rounded-[20px] overflow-hidden border border-gray-100 shadow-inner"
    >
      <MapContainer 
        center={center} 
        zoom={16} 
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup className="custom-leaflet-popup">
            <div className="text-center py-1 px-0.5 min-w-[120px]">
              <h3 className="font-heading font-extrabold text-[var(--color-brand-red)] text-sm tracking-tight mb-0.5">
                JOFFI RAMEN
              </h3>
              <p className="text-[10px] text-gray-400 font-medium mb-3 uppercase tracking-widest">
                Lemabang, Palembang
              </p>
              <a 
                href="https://maps.app.goo.gl/zJJVAabod4ahAJmP6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[var(--color-brand-red)] text-white text-[10px] px-4 py-2 rounded-xl font-bold uppercase tracking-wider shadow-md hover:bg-red-700 transition-all active:scale-95 no-underline"
              >
                <MapPin className="w-3 h-3 text-white/90" />
                <span>Petunjuk Jalan</span>
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
}
