"use client";

import { useState } from "react";
import { useBubbles } from "@/hooks/use-bubbles";
import { fishData } from "../data/mock-game";
import { useDebounce } from "./use-debounce";
import { useCartStore } from "./use-cart-store";
import { bundles, decorationItems, miscItems } from "../data/mock-store";

// Define types for our data model
export interface StoreItem {
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
  id: string;
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

// Define the PriceRange type that's expected by FilterPanel
export type PriceRange = [number, number];

// Define types for sort state
export interface SortState {
  field: "price" | "popularity" | "newest";
  direction: "asc" | "desc";
}

// Define types for filter state
export interface FilterState {
  priceRange: PriceRange;
  categories: string[];
  onSale: boolean;
}

export function useStore() {
  const [activeTab, setActiveTab] = useState("fish");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 5000],
    categories: [],
    onSale: false,
  });
  const [sort, setSort] = useState<SortState>({
    field: "price",
    direction: "asc",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);

  const bubbles = useBubbles();
  const { recentlyViewed } = useCartStore();

  // Filter functions
  const updatePriceRange = (range: PriceRange) => {
    setFilters((prev) => ({ ...prev, priceRange: range }));
  };

  const updateCategories = (categories: string[]) => {
    setFilters((prev) => ({ ...prev, categories }));
  };

  const toggleOnSale = () => {
    setFilters((prev) => ({ ...prev, onSale: !prev.onSale }));
  };

  const updateSort = (
    field: SortState["field"],
    direction: SortState["direction"]
  ) => {
    setSort({ field, direction });
  };

  // Get the correct items based on the active tab
  const getTabItems = (): StoreItem[] => {
    switch (activeTab) {
      case "fish":
        return fishData as unknown as StoreItem[];
      case "food":
        return [] as StoreItem[];
      case "decorations":
        return decorationItems;
      case "others":
        return miscItems as unknown as StoreItem[];
      default:
        return fishData as unknown as StoreItem[];
    }
  };

  // Filter items based on all filters
  const filteredItems = getTabItems().filter((item) => {
    // Apply category filter from sidebar
    const categoryMatch =
      activeCategory === "all" ||
      (item.rarity &&
        item.rarity.toLowerCase() === activeCategory.toLowerCase()) ||
      (activeCategory === "on-sale" &&
        bundles.some(
          (bundle) =>
            bundle.items.includes(item.name) ||
            bundle.items.some(
              (bundleItem) =>
                typeof bundleItem === "string" && bundleItem.includes(item.name)
            )
        ));

    // Apply search filter
    const searchMatch =
      !debouncedSearch ||
      item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      (item.description &&
        item.description
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())) ||
      (item.category &&
        item.category.toLowerCase().includes(debouncedSearch.toLowerCase()));

    // Apply price range filter
    const priceMatch =
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1];

    // Apply category filter from filter panel
    const filterCategoryMatch =
      filters.categories.length === 0 ||
      (item.rarity && filters.categories.includes(item.rarity.toLowerCase()));

    // Apply on sale filter
    const saleMatch =
      !filters.onSale ||
      item.discounted ||
      bundles.some(
        (bundle) =>
          bundle.items.includes(item.name) ||
          bundle.items.some(
            (bundleItem) =>
              typeof bundleItem === "string" && bundleItem.includes(item.name)
          )
      );

    return (
      categoryMatch &&
      searchMatch &&
      priceMatch &&
      filterCategoryMatch &&
      saleMatch
    );
  });

  // Sort filtered items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sort.field === "price") {
      return sort.direction === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sort.field === "popularity") {
      const aPopularity = a.popularity ?? 0;
      const bPopularity = b.popularity ?? 0;
      return sort.direction === "asc"
        ? aPopularity - bPopularity
        : bPopularity - aPopularity;
    } else if (sort.field === "newest") {
      const aDate = a.createdAt ? a.createdAt.getTime() : 0;
      const bDate = b.createdAt ? b.createdAt.getTime() : 0;
      return sort.direction === "asc" ? aDate - bDate : bDate - aDate;
    }
    return 0;
  });

  // Check if we should show bundles (only in Others tab)
  const shouldShowBundles = activeTab === "others";
  const shouldShowSpecialBundles = activeTab === "decorations";

  // Get the title for the current tab
  const getTabTitle = () => {
    switch (activeTab) {
      case "fish":
        return "Fish Collection";
      case "food":
        return "Fish Food";
      case "decorations":
        return "Aquarium Decorations";
      case "others":
        return "Aquarium Accessories";
      default:
        return "Products";
    }
  };

  return {
    activeTab,
    setActiveTab,
    activeCategory,
    setActiveCategory,
    isFilterPanelOpen,
    setIsFilterPanelOpen,
    isSortDropdownOpen,
    setIsSortDropdownOpen,
    filters,
    sort,
    searchQuery,
    setSearchQuery,
    updatePriceRange,
    updateCategories,
    toggleOnSale,
    updateSort,
    bubbles,
    recentlyViewed,
    sortedItems,
    shouldShowBundles,
    shouldShowSpecialBundles,
    getTabTitle,
  };
}
