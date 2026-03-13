"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";

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
          <Popup>
            <div className="text-center">
              <p className="font-bold text-[var(--color-brand-red)] mb-0">Joffi Ramen</p>
              <p className="text-[10px] text-gray-500 mt-0">Lemabang, Palembang</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
}
