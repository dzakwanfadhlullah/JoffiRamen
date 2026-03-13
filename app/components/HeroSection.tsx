"use client";

import Image from "next/image";
import { MessageCircle, BookOpen, ChevronRight, Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  onOpenMenu: () => void;
}

export default function HeroSection({ onOpenMenu }: HeroSectionProps) {
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
        <nav className="flex justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center"
          >
            {/* Circular Logo Container */}
            <div className="bg-white p-2.5 rounded-full shadow-2xl border border-white/20 flex items-center justify-center w-20 h-20 -ml-2 -mt-2">
              <div className="relative h-35 w-35">
                <Image
                  src="/images/menu/logo-joffi.png"
                  alt="Joffi Ramen Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
          <button className="w-10 h-10 bg-black/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition relative z-10 shadow-sm mt-2">
            <Menu className="w-5 h-5" />
          </button>
        </nav>

        {/* Floating Vapor Effect (Zen in Motion) */}
        <div className="absolute top-20 left-0 w-full h-64 pointer-events-none overflow-hidden z-0 opacity-20">
          {[1, 2, 3].map((i) => (
            <motion.svg
              key={i}
              className="absolute text-white/40 fill-current"
              width="200"
              height="400"
              viewBox="0 0 200 400"
              initial={{ y: 200, x: i * 80, opacity: 0, scale: 0.5 }}
              animate={{
                y: -100,
                x: i * 80 + (Math.sin(i) * 30),
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 1.5]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 3
              }}
            >
              <path d="M100,300 Q130,250 100,200 T100,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </motion.svg>
          ))}
        </div>

        {/* Main Text with Framer Motion fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-white relative z-10"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-xs tracking-[0.2em] font-semibold mb-1"
            >
              AUTHENTIC
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-xl font-bold tracking-wider mb-0"
            >
              JAPAN
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-6xl font-extrabold tracking-tight mt-0"
            >
              RAMEN
            </motion.h1>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Primary CTA: Premium Solid Vibrant Red with Sheen */}
          <motion.a
            href="https://wa.me/6282379809008"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="group relative overflow-hidden w-full text-white h-[52px] px-6 rounded-[16px] flex justify-between items-center font-bold text-sm tracking-wide transition shadow-[0_8px_20px_rgba(179,27,27,0.5)] border-t border-red-400/50 bg-gradient-to-b from-[#E52A2A] to-[#A01616]"
          >
            <div className="flex items-center gap-3 relative z-10">
              <MessageCircle className="w-5 h-5 drop-shadow-md" />
              <span className="drop-shadow-md tracking-wider">RESERVASI MEJA</span>
            </div>
            <ChevronRight className="w-5 h-5 relative z-10 drop-shadow-md text-white/90 group-hover:translate-x-1 transition-transform" />

            {/* Shimmer shining effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, repeatDelay: 4, duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 z-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
            />
          </motion.a>

          {/* Secondary CTA: Pure Frosted Glass */}
          <motion.button
            onClick={onOpenMenu}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            style={{ WebkitBackdropFilter: "blur(12px)" }}
            className="group w-full text-white h-[52px] px-6 rounded-[16px] flex justify-between items-center font-bold text-sm tracking-wide transition shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20"
          >
            <div className="flex items-center gap-3 drop-shadow-md">
              <BookOpen className="w-5 h-5" />
              <span>LIHAT MENU</span>
            </div>
            <ChevronRight className="w-5 h-5 drop-shadow-md text-white/70 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
