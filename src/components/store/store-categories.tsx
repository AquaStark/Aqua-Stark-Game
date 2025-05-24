import { Category } from "@/types/store";
import { CategoryButton } from "@/components/ui/category-button";

interface StoreCategoriesProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  toggleOnSale: () => void;
}

export function StoreCategories({
  activeCategory,
  onCategoryChange,
  toggleOnSale,
}: StoreCategoriesProps) {
  return (
    <div className="flex gap-2 pb-2 mb-6 overflow-x-auto">
      <CategoryButton
        active={activeCategory === "all"}
        onClick={() => onCategoryChange("all")}
      >
        ALL
      </CategoryButton>
      <CategoryButton
        active={activeCategory === "special"}
        onClick={() => onCategoryChange("special")}
      >
        SPECIAL
      </CategoryButton>
      <CategoryButton
        active={activeCategory === "legendary"}
        onClick={() => onCategoryChange("legendary")}
      >
        LEGENDARY
      </CategoryButton>
      <CategoryButton
        active={activeCategory === "rare"}
        onClick={() => onCategoryChange("rare")}
      >
        RARE
      </CategoryButton>
      <CategoryButton
        active={false}
        onClick={toggleOnSale}
      >
        % ON SALE
      </CategoryButton>
    </div>
  );
}
