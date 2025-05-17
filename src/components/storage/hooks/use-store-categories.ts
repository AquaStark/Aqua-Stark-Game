"use client";

export type Category = {
  id: string;
  label: string;
};

export function useStoreCategories() {
  // Define all available categories
  const categories: Category[] = [
    { id: "all", label: "ALL" },
    { id: "special", label: "SPECIAL" },
    { id: "legendary", label: "LEGENDARY" },
    { id: "rare", label: "RARE" },
    { id: "on-sale", label: "% ON SALE" },
  ];

  return { categories };
}
