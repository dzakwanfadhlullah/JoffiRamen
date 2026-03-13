"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BestSellerCarousel() {
  const items = [
    {
      id: 1,
      name: "Tonkotsu Ramen",
      price: "Rp 38K",
      image: "/images/ramen-tonkotsu.webp",
      badge: null,
    },
    {
      id: 2,
      name: "Spicy Miso Ramen",
      price: "Rp 40K",
      image: "/images/ramen-spicy.webp",
      badge: "PEDAS",
    },
    {
      id: 3,
      name: "Chicken Karaage",
      price: "Rp 25K",
      image: "/images/karaage.webp",
      badge: null,
    },
  ];

  return (
    <section>
      <div className="text-center mb-6">
        <h2 className="font-heading text-xl font-bold tracking-widest text-gray-900">
          MENU <span className="text-[var(--color-brand-red)]">TERLARIS</span>
        </h2>
        <div className="w-10 h-0.5 bg-[var(--color-brand-red)] mx-auto mt-2"></div>
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
            className="relative min-w-[200px] h-[220px] rounded-[24px] overflow-hidden shadow-md snap-center shrink-0 group cursor-pointer"
          >
            {item.badge && (
              <div className="absolute top-3 left-3 bg-[var(--color-brand-red)] text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 tracking-wider shadow-sm">
                {item.badge}
              </div>
            )}
            
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out origin-center"
              sizes="200px"
            />
            
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
