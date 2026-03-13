"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MenuPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuPopup({ isOpen, onClose }: MenuPopupProps) {
  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const menuImages = [
    { src: "/images/menu/ramen.jpeg", alt: "Ramen Variants Menu" },
    { src: "/images/menu/dry_ramen.jpeg", alt: "Dry Ramen Menu" },
    { src: "/images/menu/sides.jpeg", alt: "Sides Menu" },
    { src: "/images/menu/drinks.jpeg", alt: "Drinks Menu" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Darkens and blurs background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Bottom Sheet Modal */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md bg-[#F8F5F0] rounded-t-[32px] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)] flex flex-col h-[85dvh]"
          >
            {/* Header / Drag Area */}
            <div className="shrink-0 flex flex-col items-center pt-3 pb-4 px-6 bg-white border-b border-gray-100 relative z-10 w-full rounded-t-[32px]">
              {/* Drag Indicator */}
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-4 cursor-grab active:cursor-grabbing" />
              
              <div className="flex justify-between items-center w-full">
                <h2 className="font-heading font-extrabold text-2xl tracking-wider text-gray-900">
                  MENU
                </h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Region */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 hide-scrollbar">
              {menuImages.map((image, index) => (
                <div key={index} className="relative w-full rounded-[16px] overflow-hidden shadow-sm bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800} // Large arbitrary number, will be constrained by w-full
                    height={1200} // Approximate Aspect ratio
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 430px) 100vw, 430px"
                    priority={index === 0} // Load the first image instantly
                  />
                </div>
              ))}
              
              {/* Bottom padding to ensure last image isn't stuck to bottom completely */}
              <div className="h-6 w-full shrink-0" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
