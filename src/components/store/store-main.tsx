"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal, Clock, Coins } from "lucide-react";

import { useStoreFilters } from "@/hooks/store/use-store-filters";
import { useCartStore } from "@/hooks/store/use-cart-store";

import { getTabItems, filterItems, sortItems, getTabTitle } from "@/lib/store-utils";

import { bundles, decorationBundles } from "@/data/mock-data-store";

import { StoreTabs } from "@/components/store/store-tabs";
import { StoreCarousel } from "@/components/store/store-carousel";
import { StoreCategories } from "@/components/store/store-categories";
import { StoreGrid } from "@/components/store/store-grid";
import { BundleGrid } from "@/components/store/bundle-grid";
import { SpecialBundles } from "@/components/store/special-bundles";
import { PaginationControls } from "@/components/store/pagination-controls";
import { FilterPanel } from "@/components/store/filter-panel";
import { SortDropdown } from "@/components/store/sort-dropdown";
import { CartSidebar } from "@/components/store/cart-sidebar";


export function StoreMain() {
  const [activeTab, setActiveTab] = useState("fish");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const {
    filters,
    sort,
    searchQuery,
    debouncedSearch,
    setSearchQuery,
    updatePriceRange,
    updateCategories,
    toggleOnSale,
    updateSort,
  } = useStoreFilters();

  const { recentlyViewed } = useCartStore();

  const items = getTabItems(activeTab);
  const filteredItems = filterItems(items, filters, debouncedSearch, activeCategory);
  const sortedItems = sortItems(filteredItems, sort);

  const shouldShowBundles = activeTab === "others";
  const shouldShowSpecialBundles = activeTab === "decorations";

  return (
    <div className="relative px-4 py-8 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold text-center text-white drop-shadow-lg">
        Aqua Stark Store
      </h1>

      <StoreCarousel />

      <div className="max-w-5xl mx-auto overflow-hidden bg-blue-600 border-2 rounded-t-3xl border-blue-400/50">
        {/* Tabs */}
        <div className="flex">
          <StoreTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="p-6">
          <AnimatePresence>
            {recentlyViewed.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
              >
                <h3 className="flex items-center mb-2 space-x-2 text-lg font-semibold text-white">
                  <Clock />
                  <span> Recently Viewed</span>
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {recentlyViewed.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col p-2 border rounded-lg shadow-lg bg-blue-400/25 border-white/20"
                    >
                      <div className="flex items-center justify-center w-20 h-20 p-1 mx-auto overflow-hidden rounded-lg bg-blue-500/50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="mx-auto"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="mt-2 font-semibold text-center text-white">{item.name}</h4>
                        <p className="flex items-center justify-center py-2 text-xs text-center text-gray-200">
                          <Coins className="mr-1 text-yellow-400" size={20} />
                          <span>{item.price}</span>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <h2 className="mb-4 text-2xl font-bold text-white">{getTabTitle(activeTab)}</h2>

          {/* Search & Sort & Filter Row */}
          <div className="flex flex-col items-center gap-4 mb-6 sm:flex-row">
            <div className="relative flex-grow w-full">
              <Search
                className="absolute transform -translate-y-1/2 left-3 top-1/2 text-white/70"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-white placeholder-blue-300 border rounded-lg bg-blue-700/50 border-blue-400/30"
              />
            </div>

            <div className="relative flex w-full gap-2 sm:w-auto">
              <button
                className="flex items-center px-4 py-2 text-white bg-blue-700 rounded-lg"
                onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              >
                <Filter className="mr-2" size={18} />
                Filters
              </button>

              <div className="relative">
                <button
                  className="flex items-center px-4 py-2 text-white bg-blue-700 rounded-lg"
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                >
                  <SlidersHorizontal className="mr-2" size={18} />
                  Sort
                </button>
                {isSortDropdownOpen && (
                  <SortDropdown
                    sort={sort}
                    updateSort={updateSort}
                    onClose={() => setIsSortDropdownOpen(false)}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {isFilterPanelOpen && (
              <FilterPanel
                priceRange={filters.priceRange}
                categories={filters.categories}
                onSale={filters.onSale}
                updatePriceRange={updatePriceRange}
                updateCategories={updateCategories}
                toggleOnSale={toggleOnSale}
                onClose={() => setIsFilterPanelOpen(false)}
              />
            )}
          </AnimatePresence>

          <StoreCategories
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {shouldShowBundles && <BundleGrid bundles={bundles} />}
          {shouldShowSpecialBundles && decorationBundles.length > 0 && (
            <SpecialBundles bundles={decorationBundles} />
          )}

          <StoreGrid items={sortedItems} />
          <PaginationControls items={sortedItems} />
        </div>
      </div>

      {/* ✅ CartSidebar agregado aquí, funcional */}
      <CartSidebar />
    </div>
  );
}
