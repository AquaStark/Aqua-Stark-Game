"use client";

export interface StoreItemData {
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
  category?: string;
}

export interface ProcessedStoreItemData extends StoreItemData {
  id: string; // No longer optional
  description: string; // No longer optional
  rating: number; // No longer optional
}

export function useStoreGrid(items: StoreItemData[]) {
  // Process items to ensure all required fields are present
  const processedItems: ProcessedStoreItemData[] = items.map((item) => ({
    ...item,
    // Generate an ID if one doesn't exist
    id: item.id || `item-${item.name.toLowerCase().replace(/\s+/g, "-")}`,
    // Ensure description exists
    description: item.description || "",
    // Ensure rating exists
    rating: item.rating || 0,
  }));

  return {
    processedItems,
  };
}
