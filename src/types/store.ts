export interface StoreItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: string;
  description: string;
  rating: number;
  category?: string;
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

export type PriceRange = [number, number];

export interface SortState {
  field: "price" | "popularity" | "newest";
  direction: "asc" | "desc";
}

export interface FilterState {
  priceRange: PriceRange;
  categories: string[];
  onSale: boolean;
}
