"use client";

import { useEffect, useState, ChangeEvent } from "react";

// Define types
export type Category = "all" | "common" | "rare" | "special" | "legendary";
export type PriceRange = [number, number];

interface UseFilterPanelProps {
  priceRange: PriceRange;
  categories: Category[];
  onSale: boolean;
  updatePriceRange: (range: PriceRange) => void;
  updateCategories: (categories: Category[]) => void;
  toggleOnSale: () => void;
}

export function useFilterPanel({
  priceRange,
  categories,
  updatePriceRange,
  updateCategories,
  toggleOnSale,
}: UseFilterPanelProps) {
  // Local state
  const [localPriceRange, setLocalPriceRange] =
    useState<PriceRange>(priceRange);
  const [activeCategory, setActiveCategory] = useState<Category | string>(
    "all"
  );

  // Initialize active category based on current categories
  useEffect(() => {
    if (categories && categories.length === 1) {
      setActiveCategory(categories[0]);
    } else if (categories && categories.length === 0) {
      setActiveCategory("all");
    }
  }, [categories]);

  // Auto-apply price range filter when value changes
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    const newRange: PriceRange = [0, newValue];
    setLocalPriceRange(newRange);
    updatePriceRange(newRange);
  };

  // Auto-apply category filter when selection changes
  const selectCategory = (category: string) => {
    setActiveCategory(category);

    let newCategories: Category[] = [];
    if (category !== "all") {
      if (category === "% ON SALE") {
        toggleOnSale();
        return; // Don't change categories when toggling sale
      } else {
        newCategories = [category as Category];
      }
    }

    // Apply filter immediately
    console.log("Updating categories to:", newCategories);
    updateCategories(newCategories);
  };

  // Available categories for UI
  const availableCategories = [
    "all",
    "common",
    "rare",
    "special",
    "legendary",
    "% ON SALE",
  ];

  return {
    localPriceRange,
    activeCategory,
    handlePriceChange,
    selectCategory,
    availableCategories,
  };
}
