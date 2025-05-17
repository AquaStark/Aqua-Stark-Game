"use client";

import {
  StoreItemData,
  useStoreGrid,
} from "@/components/storage/hooks/use-store-grid";
import StoreItem from "../item/StoreItem";

interface StoreGridProps {
  items: StoreItemData[];
}

export function StoreGrid({ items }: StoreGridProps) {
  const { processedItems } = useStoreGrid(items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {processedItems.map((item) => (
        <StoreItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          rarity={item.rarity}
          description={item.description}
          rating={item.rating}
          originalPrice={item.originalPrice}
          isNew={item.isNew}
          stock={item.stock}
          isLimited={item.isLimited}
        />
      ))}
    </div>
  );
}
