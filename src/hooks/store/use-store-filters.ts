import { useState } from "react";
import { useDebounce } from "@/hooks/store/use-debounce";
import { FilterState, PriceRange, SortState } from "@/types/store";

export function useStoreFilters() {
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

  return {
    filters,
    sort,
    searchQuery,
    debouncedSearch,
    setSearchQuery,
    updatePriceRange: (range: PriceRange) =>
      setFilters((prev) => ({ ...prev, priceRange: range })),
    updateCategories: (categories: string[]) =>
      setFilters((prev) => ({ ...prev, categories })),
    toggleOnSale: () =>
      setFilters((prev) => ({ ...prev, onSale: !prev.onSale })),
    updateSort: (field: SortState["field"], direction: SortState["direction"]) =>
      setSort({ field, direction }),
  };
}
