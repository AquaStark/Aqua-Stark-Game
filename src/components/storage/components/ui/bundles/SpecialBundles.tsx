"use client";

import { Package } from "lucide-react";
import { motion } from "framer-motion";
import type { DecorationBundle } from "@/components/storage/data/mock-store";
import { StoreBundle } from "./StoreBundles";
import { useSpecialBundles } from "@/components/storage/hooks/use-special-bundles";

interface SpecialBundlesProps {
  bundles: DecorationBundle[];
}

export function SpecialBundles({ bundles }: SpecialBundlesProps) {
  const { handleBuyBundle } = useSpecialBundles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <Package size={16} className="text-yellow-500" />
        <h2 className="text-xl font-bold text-white">Special Bundles</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {bundles.map((bundle) => (
          <StoreBundle
            key={bundle.id}
            bundle={bundle}
            onBuy={handleBuyBundle}
          />
        ))}
      </div>
    </motion.div>
  );
}
