"use client";

export interface Bundle {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  tag: string;
  rarity: string;
  items: string[];
  description: string;
}

export function useBundleGrid(bundles: Bundle[]) {
  // Check if there are bundles to display
  const isEmpty = bundles.length === 0;

  // You could add more logic here in the future, such as:
  // - Sorting bundles
  // - Filtering bundles
  // - Calculating statistics (total value, average discount, etc.)

  return {
    bundles,
    isEmpty,
  };
}
