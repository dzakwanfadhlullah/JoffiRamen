"use client";

import { MapPin, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section>
      {/* Compact Info Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md rounded-[20px] py-4 px-5 mb-4 shadow-sm flex items-center justify-between"
      >
        {/* Address */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-[var(--color-brand-red)]" />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900 leading-tight mb-0.5">Jl. R. E. Martadinata</p>
            <p className="text-[10px] text-gray-500">Palembang</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 mx-2"></div>

        {/* Hours */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-[var(--color-brand-red)]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 mb-0.5">Buka Setiap Hari</p>
            <p className="font-bold text-sm text-gray-900 leading-tight">10.00 - 22.00</p>
          </div>
        </div>
      </motion.div>

      {/* Map Button */}
      <motion.a 
        href="https://maps.app.goo.gl/zJJVAabod4ahAJmP6"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[var(--color-brand-black)] text-white h-[52px] px-6 rounded-[14px] flex justify-center items-center gap-2 font-bold text-sm tracking-widest shadow-md hover:bg-gray-800 transition"
      >
        <MapPin className="w-4 h-4 text-[var(--color-brand-red)]" />
        <span>BUKA DI GOOGLE MAPS</span>
        <ChevronRight className="w-4 h-4 ml-auto" />
      </motion.a>
    </section>
  );
}
