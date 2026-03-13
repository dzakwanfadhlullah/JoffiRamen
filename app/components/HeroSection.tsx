"use client";

import Image from "next/image";
import { MessageCircle, BookOpen, ChevronRight, Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <header className="relative pt-8 pb-10 px-6 rounded-b-[40px] shadow-lg overflow-hidden">
      {/* Background Image using Next.js Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110 origin-top">
        <Image
          src="/images/hero-ramen.webp"
          alt="Joffi Ramen Hero"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 430px"
        />
      </motion.div>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/20 to-[#F8F5F0]" />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-24">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--color-brand-red)] rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-[var(--color-brand-red)] shadow-sm">
              <span>R</span>
            </div>
            <div className="text-white flex flex-col leading-none justify-center">
              <span className="font-heading font-bold text-3xl tracking-widest leading-none">
                JOFFI
              </span>
              <span className="text-sm tracking-[0.3em] ml-1 mt-1 leading-none text-white/90">RAMEN</span>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/20 transition">
            <Menu className="w-5 h-5" />
          </button>
        </nav>

        {/* Main Text with Framer Motion fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-white"
        >
          <p className="font-heading text-xs tracking-[0.2em] font-semibold mb-1">
            OTENTIK
          </p>
          <p className="font-heading text-xl font-bold tracking-wider mb-0">
            JEPANG
          </p>
          <h1 className="font-heading text-6xl font-extrabold tracking-tight mt-0">
            RAMEN
          </h1>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Primary CTA: Solid Red with Subtle Pulse */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{ boxShadow: ["0px 8px 20px rgba(179,27,27,0.3)", "0px 8px 35px rgba(179,27,27,0.6)", "0px 8px 20px rgba(179,27,27,0.3)"] }}
            transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            className="w-full bg-[var(--color-brand-red)] text-white h-[52px] px-6 rounded-[14px] flex justify-between items-center font-bold text-sm tracking-wide hover:bg-red-800 transition"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span>RESERVASI MEJA</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
          
          {/* Secondary CTA: Outline Style */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-transparent border-2 border-white text-white h-[52px] px-6 rounded-[14px] flex justify-between items-center font-bold text-sm tracking-wide hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              <span>LIHAT MENU</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
