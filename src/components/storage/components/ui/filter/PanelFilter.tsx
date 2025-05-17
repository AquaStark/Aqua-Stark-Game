"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  useFilterPanel,
  type Category,
  type PriceRange,
} from "@/components/storage/hooks/use-filter-panel";

interface FilterPanelProps {
  priceRange: PriceRange;
  categories: Category[];
  onSale: boolean;
  updatePriceRange: (range: PriceRange) => void;
  updateCategories: (categories: Category[]) => void;
  toggleOnSale: () => void;
  onClose: () => void;
}

export function FilterPanel({
  priceRange,
  categories,
  onSale,
  updatePriceRange,
  updateCategories,
  toggleOnSale,
  onClose,
}: FilterPanelProps) {
  const {
    localPriceRange,
    activeCategory,
    handlePriceChange,
    selectCategory,
    availableCategories,
  } = useFilterPanel({
    priceRange,
    categories,
    onSale,
    updatePriceRange,
    updateCategories,
    toggleOnSale,
  });

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-blue-600 rounded-lg p-6 mb-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Filters</h3>
        <button onClick={onClose} className="text-white">
          <X size={24} />
        </button>
      </div>

      <div className="flex flex-row justify-between items-start mb-6">
        {/* Price Range */}
        <div className="w-1/2 mb-6">
          <label className="block text-white font-medium mb-3">
            Price range:
          </label>
          <div className="flex flex-col">
            <input
              type="range"
              min={0}
              max={5000}
              value={localPriceRange[1]}
              onChange={handlePriceChange}
              className="w-full accent-blue-400"
            />
            <div className="flex justify-between text-white mt-2">
              <span>{localPriceRange[0]} coins</span>
              <span>{localPriceRange[1]} coins</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6 ml-10">
          <label className="block text-white font-medium mb-3">
            Categories:
          </label>
          <div className="flex flex-wrap gap-2">
            {availableCategories.map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium uppercase ${
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-blue-700 text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
