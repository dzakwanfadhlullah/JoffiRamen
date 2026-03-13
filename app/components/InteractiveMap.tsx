"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Import Map dynamically to avoid SSR issues with Leaflet
const Map = dynamic(() => import("./Map"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 animate-pulse rounded-[20px] flex items-center justify-center">
      <p className="text-xs text-gray-400 font-medium">Memuat Peta...</p>
    </div>
  )
});

export default function InteractiveMap() {
  return (
    <div className="w-full h-[250px] relative z-0">
      <Map />
    </div>
  );
}
