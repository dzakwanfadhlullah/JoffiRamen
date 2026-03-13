"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface QuickAccessGridProps {
  onOpenMenu: () => void;
}

export default function QuickAccessGrid({ onOpenMenu }: QuickAccessGridProps) {
  const links = [
    {
      title: "GOOGLE MAPS",
      subtitle: "Buka Peta",
      iconSrc: "/icons/maps.svg",
      href: "https://maps.app.goo.gl/zJJVAabod4ahAJmP6",
      isModalTrigger: false,
    },
    {
      title: "MENU LENGKAP",
      subtitle: "Lihat Menu Lengkap",
      iconSrc: "/icons/notes.svg",
      href: "#",
      isModalTrigger: true,
    },
    {
      title: "WHATSAPP",
      subtitle: "Hubungi Kami",
      iconSrc: "/icons/whatsapp.svg",
      href: "https://wa.me/6282379809008",
      isModalTrigger: false,
    },
    {
      title: "INSTAGRAM",
      subtitle: "Ikuti Kami",
      iconSrc: "/icons/instagram.svg",
      href: "https://instagram.com/joffiramen_lemabang.palembang",
      isModalTrigger: false,
    },
  ];

  return (
    <section>
      <div className="text-center mb-6 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading text-xl font-bold tracking-widest text-gray-900">
            QUICK <span className="text-[var(--color-brand-red)]">ACCESS</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-10 h-0.5 bg-[var(--color-brand-red)] mx-auto mt-2 origin-center"
          ></motion.div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {links.map((link, index) => {
          // If the link is meant to open the modal, we render a button element logically
          const MotionWrapper = link.isModalTrigger ? motion.button : motion.a;
          
          return (
            <MotionWrapper
              key={link.title}
              href={!link.isModalTrigger ? link.href : undefined}
              target={!link.isModalTrigger ? "_blank" : undefined}
              rel={!link.isModalTrigger ? "noopener noreferrer" : undefined}
              onClick={link.isModalTrigger ? onOpenMenu : undefined}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                boxShadow: [
                  "0px 2px 8px rgba(0,0,0,0.05)", 
                  "0px 2px 15px rgba(179,27,27,0.1)", 
                  "0px 2px 8px rgba(0,0,0,0.05)"
                ]
              }}
              viewport={{ once: true }}
              transition={{ 
                y: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 },
                boxShadow: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.5 }
              }}
              className="bg-white p-4 rounded-[16px] shadow-sm flex items-center justify-between transition w-full text-left border border-gray-50"
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
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
}
