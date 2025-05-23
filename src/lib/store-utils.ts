import { StoreItem, SortState, FilterState } from "@/types/store";
import { sampleFishData } from "@/data/mock-data-game";
import { miscItems, decorationItems, bundles } from "@/data/mock-data-store";

export const getTabItems = (tab: string): StoreItem[] => {
  switch (tab) {
    case "fish": return sampleFishData.map(fish => ({
      ...fish,
      id: String((fish as { id?: string | number }).id ?? ""),
      price: typeof (fish as { price?: unknown }).price === "number" ? (fish as { price?: number }).price! : 0,
      description: typeof (fish as { description?: unknown }).description === "string" ? (fish as { description?: string }).description! : "",
      rating: typeof (fish as { rating?: unknown }).rating === "number" ? (fish as { rating?: number }).rating! : 0,
    })) as StoreItem[];
    case "food": return [];
    case "decorations": return decorationItems;
    case "others": return miscItems as StoreItem[];
    default: return sampleFishData.map(fish => ({
      ...fish,
      id: String((fish as { id?: string | number }).id ?? ""),
      price: typeof (fish as { price?: unknown }).price === "number" ? (fish as { price?: number }).price! : 0,
      description: typeof (fish as { description?: unknown }).description === "string" ? (fish as { description?: string }).description! : "",
      rating: typeof (fish as { rating?: unknown }).rating === "number" ? (fish as { rating?: number }).rating! : 0,
    })) as StoreItem[];
  }
};

export const filterItems = (
  items: StoreItem[],
  filters: FilterState,
  search: string,
  activeCategory: string
) => {
  return items.filter((item) => {
    const categoryMatch =
      activeCategory === "all" ||
      (item.rarity?.toLowerCase() === activeCategory.toLowerCase()) ||
      (activeCategory === "on-sale" &&
        bundles.some((b) =>
          b.items.includes(item.name) ||
          b.items.some((i) => typeof i === "string" && i.includes(item.name))
        ));

    const searchMatch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()) ||
      item.category?.toLowerCase().includes(search.toLowerCase());

    const priceMatch =
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1];

    const filterCategoryMatch =
      filters.categories.length === 0 ||
      (item.rarity && filters.categories.includes(item.rarity.toLowerCase()));

    const saleMatch =
      !filters.onSale ||
      item.discounted ||
      bundles.some((b) =>
        b.items.includes(item.name) ||
        b.items.some((i) => typeof i === "string" && i.includes(item.name))
      );

    return categoryMatch && searchMatch && priceMatch && filterCategoryMatch && saleMatch;
  });
};

export const sortItems = (items: StoreItem[], sort: SortState): StoreItem[] => {
  return [...items].sort((a, b) => {
    if (sort.field === "price") {
      return sort.direction === "asc" ? a.price - b.price : b.price - a.price;
    }
    if (sort.field === "popularity") {
      return sort.direction === "asc"
        ? (a.popularity ?? 0) - (b.popularity ?? 0)
        : (b.popularity ?? 0) - (a.popularity ?? 0);
    }
    if (sort.field === "newest") {
      return sort.direction === "asc"
        ? (a.createdAt?.getTime() ?? 0) - (b.createdAt?.getTime() ?? 0)
        : (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0);
    }
    return 0;
  });
};

export const getTabTitle = (tab: string) => {
  switch (tab) {
    case "fish": return "Fish Collection";
    case "food": return "Fish Food";
    case "decorations": return "Aquarium Decorations";
    case "others": return "Aquarium Accessories";
    default: return "Products";
  }
};
