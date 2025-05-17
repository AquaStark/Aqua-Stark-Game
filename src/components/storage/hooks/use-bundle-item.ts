"use client";

import { useCartStore } from "@/components/storage/hooks/use-cart-store";
import type { CartItem } from "@/components/storage/hooks/use-cart-store";

interface BundleItemData {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: string;
}

export function useBundleItem(bundleData: BundleItemData) {
  const { addItem, addToRecentlyViewed } = useCartStore();

  const handleAddToCart = () => {
    const { id, name, image, price, rarity } = bundleData;

    // Create item object for cart
    const item: CartItem = {
      id,
      name,
      image,
      price,
      rarity,
      quantity: 1,
    };

    // Add small delay for better UX
    setTimeout(() => {
      addItem(item);
      addToRecentlyViewed(item);
    }, 300);
  };

  return {
    handleAddToCart,
  };
}
