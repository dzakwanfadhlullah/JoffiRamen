"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function QuickAccessGrid() {
  const links = [
    {
      title: "GOOGLE MAPS",
      subtitle: "Buka Peta",
      iconSrc: "/icons/maps.svg",
      href: "#",
    },
    {
      title: "BUKU MENU",
      subtitle: "Lihat Menu Lengkap",
      iconSrc: "/icons/notes.png",
      href: "#",
    },
    {
      title: "WHATSAPP",
      subtitle: "Hubungi Kami",
      iconSrc: "/icons/whatsapp.svg",
      href: "#",
    },
    {
      title: "INSTAGRAM",
      subtitle: "Ikuti Kami",
      iconSrc: "/icons/instagram.svg",
      href: "#",
    },
  ];

  return (
    <section>
      <div className="text-center mb-6">
        <h2 className="font-heading text-xl font-bold tracking-widest text-gray-900">
          AKSES <span className="text-[var(--color-brand-red)]">CEPAT</span>
        </h2>
        <div className="w-10 h-0.5 bg-[var(--color-brand-red)] mx-auto mt-2"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {links.map((link, index) => (
          <motion.a
            key={link.title}
            href={link.href}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
            className="bg-white p-4 rounded-[16px] shadow-sm flex items-center justify-between hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-8 h-8 shrink-0 drop-shadow-sm">
                <Image src={link.iconSrc} alt={link.title} fill className="object-contain" />
              </div>
              <div className="pt-0.5">
                <h3 className="font-heading font-bold text-[11px] tracking-wider text-gray-900 mb-0.5 leading-tight">
                  {link.title}
                </h3>
                <p className="text-[9px] text-gray-500 leading-tight">{link.subtitle}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 ml-1 shrink-0" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
