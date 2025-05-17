"use client";

import { useState } from "react";
import { useCartStore } from "@/components/storage/hooks/use-cart-store";

interface StoreItemData {
  id?: string;
  name: string;
  image: string;
  price: number;
  rarity: string;
  description?: string;
  rating?: number;
  originalPrice?: number;
  isNew?: boolean;
  stock?: number;
  isLimited?: boolean;
}

export function useStoreItem(
  item: StoreItemData,
  onAddToWishlist?: (itemName: string, isFavorite: boolean) => void
) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addItem, addToRecentlyViewed } = useCartStore();

  const getRarityColor = () => {
    switch (item.rarity.toLowerCase()) {
      case "common":
        return "bg-gray-500";
      case "rare":
        return "bg-blue-500";
      case "legendary":
        return "bg-purple-500";
      case "special":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const hasDiscount = item.originalPrice && item.originalPrice > item.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        (((item.originalPrice ?? item.price) - item.price) /
          (item.originalPrice ?? item.price)) *
          100
      )
    : 0;

  const handleFavoriteClick = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);

    if (onAddToWishlist) {
      onAddToWishlist(item.name, newFavoriteState);
    }
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    // Create item object for cart
    const cartItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      rarity: item.rarity,
      description: item.description,
    };

    setTimeout(() => {
      setIsInCart(true);
      setIsAddingToCart(false);

      // Add to cart using useCartStore
      addItem(cartItem);
      addToRecentlyViewed(cartItem);

      setTimeout(() => {
        setIsInCart(false);
      }, 2000);
    }, 300);
  };

  return {
    isFavorite,
    isInCart,
    isAddingToCart,
    getRarityColor,
    hasDiscount,
    discountPercentage,
    handleFavoriteClick,
    handleAddToCart,
  };
}
