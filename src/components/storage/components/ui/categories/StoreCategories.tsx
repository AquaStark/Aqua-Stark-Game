"use client";

import { useStoreCategories } from "@/components/storage/hooks/use-store-categories";
import { CategoryButton } from "@/components/ui/category-button";

interface StoreCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function StoreCategories({
  activeCategory,
  onCategoryChange,
}: StoreCategoriesProps) {
  const { categories } = useStoreCategories();

  return (
    <div className="flex gap-2 pb-2 mb-6 overflow-x-auto">
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          active={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </CategoryButton>
      ))}
    </div>
  );
}
