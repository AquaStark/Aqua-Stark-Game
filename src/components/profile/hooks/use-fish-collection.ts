"use client";

import { useMemo } from "react";

interface Fish {
  id: string;
  name: string;
  imageUrl: string;
  rarity: string;
  level: number;
  obtainedDate: string;
}

interface FishCollectionData {
  fishCollection: {
    collected: number;
    total: number;
    displayedFish: Fish[];
  };
}

export function useFishCollection({ fishCollection }: FishCollectionData) {
  // Calculate collection progress percentage
  const collectionPercentage = useMemo(() => {
    return (fishCollection.collected / fishCollection.total) * 100;
  }, [fishCollection.collected, fishCollection.total]);

  // Format collection status text
  const collectionText = useMemo(() => {
    return `${fishCollection.collected} of ${fishCollection.total} collected`;
  }, [fishCollection.collected, fishCollection.total]);

  // Get rarity color class for each fish
  const getRarityColorClass = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "bg-purple-500";
      case "Rare":
        return "bg-blue-500";
      case "Special":
        return "bg-yellow-500";
      default:
        return "bg-green-500";
    }
  };

  // Process fish data with additional UI-related properties
  const processedFish = useMemo(() => {
    return fishCollection.displayedFish.map((fish) => ({
      ...fish,
      rarityColorClass: getRarityColorClass(fish.rarity),
    }));
  }, [fishCollection.displayedFish]);

  return {
    collectionPercentage,
    collectionText,
    processedFish,
    totalCollected: fishCollection.collected,
    totalFish: fishCollection.total,
  };
}
