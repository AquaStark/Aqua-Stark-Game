"use client";

import type { DecorationBundle } from "@/components/storage/data/mock-store";
import {
  type CartItem,
  useCartStore,
} from "@/components/storage/hooks/use-cart-store";

export function useSpecialBundles() {
  const { addItem, addToRecentlyViewed } = useCartStore();

  const handleBuyBundle = (bundle: DecorationBundle) => {
    const { id, name, image, price } = bundle;

    // Create item object for cart
    const item: CartItem = { id, name, image, price, quantity: 1 };

    setTimeout(() => {
      addItem(item);
      addToRecentlyViewed(item);
    }, 300);
  };

  return {
    handleBuyBundle,
  };
}
