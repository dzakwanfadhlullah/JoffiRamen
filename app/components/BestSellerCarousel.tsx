"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BestSellerCarousel() {
  const items = [
    {
      id: 1,
      name: "Ramen Mala Original",
      price: "Rp 17K",
      image: "/images/menu_terlaris/mala.png",
      badge: "PEDAS",
    },
    {
      id: 2,
      name: "Dry Ramen Extra Beef",
      price: "Rp 30K",
      image: "/images/menu_terlaris/dry.png",
      badge: null,
    },
    {
      id: 3,
      name: "Curry Rice Omega Egg",
      price: "Rp 21K",
      image: "/images/menu_terlaris/curry.png",
      badge: null,
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
            BEST <span className="text-[var(--color-brand-red)]">SELLER</span>
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

      {/* Horizontal Scrollable Container */}
      <div className="flex overflow-x-auto pb-6 -mx-6 px-6 gap-4 snap-x hide-scrollbar">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.15 }}
            className="relative min-w-[200px] h-[220px] rounded-[24px] overflow-hidden shadow-md snap-center shrink-0 group cursor-pointer border border-white/50"
          >
            {item.badge && (
              <div className="absolute top-3 left-3 bg-[var(--color-brand-red)] text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 tracking-wider shadow-sm">
                {item.badge}
              </div>
            )}
            
            <motion.div 
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out origin-center"
                sizes="200px"
              />
            </motion.div>
            
            <div className="absolute inset-0 card-gradient flex flex-col justify-end p-4 text-white z-10 pointer-events-none">
              <h4 className="font-bold text-base leading-tight mb-1">{item.name}</h4>
              <p className="text-sm text-gray-200 font-semibold">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
