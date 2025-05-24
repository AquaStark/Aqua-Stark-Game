export type ItemType = "fish" | "food" | "decorations" | "others";

export type Category = "rare" | "common" | "legendary" | "epic" | "all" | "special";

export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export type PriceRange = [number, number];

export type SortField = "price" | "popularity" | "newest";
export type SortDirection = "asc" | "desc";

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

export interface SortOption {
  field: SortField;
  direction: SortDirection;
}

export interface FilterState {
  priceRange: PriceRange;
  categories: Category[];
  onSale: boolean;
}

export interface StoreItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: Rarity;
  description: string;
  rating: number;
  category?: Category;
  discounted?: boolean;
  popularity?: number;
  createdAt?: Date;
}

export interface Bundle {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  items: string[];
  discount: number;
}
