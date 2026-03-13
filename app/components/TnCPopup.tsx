"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TnCPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TnCPopup({ isOpen, onClose }: TnCPopupProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Darkened Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Bottom Sheet */}
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
            className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md bg-[#F8F5F0] rounded-t-[32px] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)] flex flex-col"
            style={{ maxHeight: "75dvh" }}
          >
            {/* Header */}
            <div className="shrink-0 flex flex-col items-center pt-3 pb-4 px-6 bg-white border-b border-gray-100 relative z-10 w-full rounded-t-[32px]">
              {/* Drag Indicator */}
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-4 cursor-grab active:cursor-grabbing" />

              <div className="flex justify-between items-center w-full">
                <h2 className="font-heading font-extrabold text-2xl tracking-wider text-gray-900">
                  SYARAT & KETENTUAN
                </h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 hide-scrollbar">
              <p className="text-[11px] text-gray-400 font-semibold tracking-widest uppercase mb-5">
                TikTok Shop · Joffi Ramen
              </p>
              <ol className="space-y-4 text-[14px] leading-relaxed text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-brand-red)] shrink-0">1.</span>
                  <span>Tidak dapat digabungkan dengan promo lain.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-brand-red)] shrink-0">2.</span>
                  <span>
                    Khusus makan di tempat.{" "}
                    <em className="not-italic italic text-gray-500">
                      *Untuk takeaway akan dikenakan biaya packing.
                    </em>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-brand-red)] shrink-0">3.</span>
                  <span>Voucher tidak dapat dikembalikan dananya setelah dibeli.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-brand-red)] shrink-0">4.</span>
                  <span>Kadaluarsa voucher 30 hari setelah dibeli.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-brand-red)] shrink-0">5.</span>
                  <span>
                    Voucher harus dipindai langsung, tidak berlaku untuk tangkapan layar (screenshot).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-brand-red)] shrink-0">6.</span>
                  <span>
                    Selama bulan Ramadhan, pemesanan melalui TikTok tidak dapat digunakan untuk reservasi. Pelanggan diharapkan datang langsung ke outlet.
                  </span>
                </li>
              </ol>
              <div className="h-6 w-full shrink-0" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
