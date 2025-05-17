"use client";

import { Clock, Coins, Filter, Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Footer } from "@/components/layout/footer";
import { useStore } from "@/components/storage/hooks/use-store";
import {
  bundles,
  decorationBundles,
} from "@/components/storage/data/mock-store";
import { StoreTabs } from "../tabs/StoreTabs";
import { StoreCategories } from "../categories/StoreCategories";
import { StoreGrid } from "../grid/StoreGrid";
import { BundleGrid } from "../grid/BundleGrid";
import { PaginationControls } from "../pagination/ControlPagination";
import { CartSidebar } from "../../layouts/sidebar/CartSidebar";
import { CheckoutModal } from "../modal/CheckoutModal";
import { StoreCarousel } from "../carousel/StoreCoursel";
import { BubblesBackground } from "@/components/effects/bubbles-background";
import { FilterPanel } from "../filter/PanelFilter";
import { SortDropdown } from "../dropdown/SortDropdown";
import { PageHeader } from "../../layouts/header/StoreHeader";
import { SpecialBundles } from "../bundles/SpecialBundles";

export default function StorePage() {
  const {
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
  } = useStore();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-900 animated-background">
      <BubblesBackground bubbles={bubbles} />

      <PageHeader />
      <CartSidebar />
      <CheckoutModal />

      <main className="relative z-10">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <h1 className="mb-8 text-4xl font-bold text-center text-white drop-shadow-lg">
            Aqua Stark Store
          </h1>

          <div>
            <StoreCarousel />
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden bg-blue-600 border-2 rounded-t-3xl border-blue-400/50">
            {/* Tabs */}
            <div className="flex">
              <StoreTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Content */}
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
                          <div className="">
                            <div className="flex items-center justify-center w-20 h-20 p-1 mx-auto overflow-hidden rounded-lg bg-blue-500/50">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-20 h-auto mx-auto"
                              />
                            </div>
                            <div>
                              <h4 className="mt-2 font-semibold text-center text-white">
                                {item.name}
                              </h4>
                              <p className="flex items-center justify-center py-2 text-xs text-center text-gray-200">
                                <Coins
                                  className="mr-1 text-yellow-400"
                                  size={20}
                                />
                                <span>{item.price}</span>
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tab Title */}
              <h2 className="mb-4 text-2xl font-bold text-white">
                {getTabTitle()}
              </h2>

              {/* Search and Filter Row */}
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

              {/* Bundles section (only shown in Others tab) */}
              {shouldShowBundles && (
                <BundleGrid
                  bundles={bundles.map((bundle) => ({
                    ...bundle,
                    originalPrice: bundle.originalPrice ?? bundle.price,
                    discount: bundle.discount ?? "",
                    tag: bundle.tag ?? "",
                    rarity: bundle.rarity ?? "",
                  }))}
                />
              )}

              {/* Special Bundles (only for decorations tab) */}
              {shouldShowSpecialBundles && decorationBundles.length > 0 && (
                <SpecialBundles bundles={decorationBundles} />
              )}

              {/* Regular items grid */}
              <StoreGrid items={sortedItems} />

              <PaginationControls items={sortedItems} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
