"use client";

export interface SortOption {
  label: string;
  field: string;
  direction: string;
}

export interface SortState {
  field: string;
  direction: string;
}

export function useSortDropdown(
  sort: SortState,
  updateSort: (field: string, direction: string) => void,
  onClose: () => void
) {
  // Define all available sort options
  const sortOptions: SortOption[] = [
    { label: "Price: Low to High", field: "price", direction: "asc" },
    { label: "Price: High to Low", field: "price", direction: "desc" },
    { label: "Popularity", field: "popularity", direction: "desc" },
    { label: "Newest", field: "newest", direction: "desc" },
  ];

  // Check if an option is currently active
  const isActive = (option: SortOption) => {
    return sort.field === option.field && sort.direction === option.direction;
  };

  // Handle sort selection
  const handleSort = (field: string, direction: string) => {
    updateSort(field, direction);
    onClose();
  };

  return {
    sortOptions,
    isActive,
    handleSort,
  };
}
