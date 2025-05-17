"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import BundleItem from "../item/BundleItem";
import {
  Bundle,
  useBundleGrid,
} from "@/components/storage/hooks/use-bundle-grid";

interface BundleGridProps {
  bundles: Bundle[];
}

export function BundleGrid({ bundles }: BundleGridProps) {
  const { isEmpty } = useBundleGrid(bundles);

  if (isEmpty) {
    return (
      <div className="text-center py-8 text-blue-200">
        No bundles available at this time.
      </div>
    );
  }

  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Package className="mr-2 text-yellow-400" /> Special Bundles
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bundles.map((bundle) => (
          <BundleItem
            key={bundle.id}
            id={bundle.id}
            name={bundle.name}
            image={bundle.image}
            price={bundle.price}
            originalPrice={bundle.originalPrice}
            discount={bundle.discount}
            tag={bundle.tag}
            rarity={bundle.rarity}
            items={bundle.items}
            description={bundle.description}
          />
        ))}
      </div>
    </div>
  );
}
