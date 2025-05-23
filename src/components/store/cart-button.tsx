"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/hooks/store/use-cart-store";
import { motion } from "framer-motion";

export function CartButton() {
  const { items, toggleCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleCart}
      className="relative p-2 text-white rounded-full bg-blue-500 hover:bg-blue-600"
    >
      <ShoppingCart size={20} />
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -mt-1 -mr-1">
          {totalItems}
        </span>
      )}
    </motion.button>
  );
}
