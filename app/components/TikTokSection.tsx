"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TnCPopup from "./TnCPopup";

export default function TikTokSection() {
  const tiktokImages = [
    "/images/menu/JoffiTiktok1.jpeg",
    "/images/menu/JoffiTiktok2.jpeg",
    "/images/menu/JoffiTiktok3.jpeg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTnCOpen, setIsTnCOpen] = useState(false);

  const handleClick = () => {
    setActiveIndex((prev) => (prev + 1) % tiktokImages.length);
  };

  // Reorder images so the active one is on top
  const getStackOrder = () => {
    const ordered = [];
    for (let i = 0; i < tiktokImages.length; i++) {
      const index = (activeIndex + i) % tiktokImages.length;
      ordered.push({ src: tiktokImages[index], originalIndex: index });
    }
    return ordered.reverse(); // reverse so first item renders on top (last in DOM = highest z)
  };

  const stack = getStackOrder();

  return (
    <>
      <section>
        <div className="text-center mb-6 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-xl font-bold tracking-widest text-gray-900">
              JOFFI RAMEN X <span className="text-[var(--color-brand-red)] uppercase">TIKTOK</span>
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

        {/* Stacked Cards */}
        <div 
          className="relative w-full flex justify-center cursor-pointer select-none"
          style={{ height: 380 }}
          onClick={handleClick}
        >
          <AnimatePresence mode="popLayout">
            {stack.map((item, i) => {
              const isTop = i === stack.length - 1;
              const depth = stack.length - 1 - i; // 0 = top, 1 = middle, 2 = back

              return (
                <motion.div
                  key={item.originalIndex}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: 1 - depth * 0.05,
                    y: depth * 12,
                    x: depth * 6,
                    opacity: 1 - depth * 0.15,
                    rotateZ: depth * 2,
                  }}
                  exit={{ 
                    x: -300, 
                    opacity: 0, 
                    rotateZ: -15,
                    scale: 0.8,
                    transition: { duration: 0.4, ease: "easeIn" }
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute rounded-[24px] overflow-hidden shadow-xl border border-white/50"
                  style={{ 
                    width: 220, 
                    height: 360, 
                    zIndex: i,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={`TikTok Post ${item.originalIndex + 1}`}
                    width={220}
                    height={360}
                    className="object-cover pointer-events-none w-full h-full"
                  />

                  {/* Tap hint on top card only */}
                  {isTop && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
                      <span className="text-[9px] text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full font-medium tracking-wider uppercase">
                        Tap untuk lihat lainnya
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {tiktokImages.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex 
                  ? "bg-[var(--color-brand-red)] w-4" 
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Promotional Text Block */}
        <div className="mt-[16px] text-center text-[14px] leading-[1.5] text-gray-600 px-4">
          <p>Harga lebih hemat tersedia di TikTok Shop.</p>
          <p className="mb-2">Pesan sekarang sebelum promonya berakhir.</p>
          <div className="font-bold tracking-tight">
            <a 
              href="https://vt.tiktok.com/ZS9dcqf7HKQck-LL7ud/?poisharing=JOFFI-RAMEN---LEMABANG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              TIKTOK SHOP
            </a>
            <span className="mx-2 text-gray-300">|</span>
            <button
              onClick={() => setIsTnCOpen(true)}
              className="text-blue-600 underline bg-transparent border-0 p-0 font-bold cursor-pointer"
            >
              SYARAT &amp; KETENTUAN
            </button>
          </div>
        </div>
      </section>

      <TnCPopup isOpen={isTnCOpen} onClose={() => setIsTnCOpen(false)} />
    </>
  );
}
