"use client";

import { useEffect, useState } from "react";
import type { FishType } from "@/@types/Game";
import { useFishMovement } from "@/components/aquarium/hooks/fish/FishMovement.hook";

// Sample fish data for generating additional fish
const sampleFishData: Partial<FishType>[] = [
  {
    name: "Blue Striped Fish",
    image: "/fish/fish1.png",
    rarity: "Rare",
    generation: 1,
  },
  {
    name: "Tropical Coral Fish",
    image: "/fish/fish2.png",
    rarity: "Uncommon",
    generation: 2,
  },
  {
    name: "Orange Tropical Fish",
    image: "/fish/fish3.png",
    rarity: "Epic",
    generation: 1,
  },
  {
    name: "Scarlet Fin",
    image: "/fish/fish4.png",
    rarity: "Legendary",
    generation: 1,
  },
];

// Fallback images if fish images don't load
const fallbackImages = ["/fish/fish1.png"];

interface UseFishDisplayProps {
  fish: FishType[];
  containerWidth?: number;
  containerHeight?: number;
  minFishCount?: number;
}

export function useFishDisplay({
  fish,
  containerWidth = 1000,
  containerHeight = 600,
  minFishCount = 15,
}: UseFishDisplayProps) {
  // Set up container dimensions for fish movement
  const [dimensions, setDimensions] = useState({
    width: containerWidth,
    height: containerHeight,
  });

  // Combined fish data (original + generated)
  const [allFish, setAllFish] = useState<FishType[]>(fish);

  // Generate additional fish if needed to meet minFishCount
  useEffect(() => {
    if (fish.length < minFishCount) {
      const additionalFish: FishType[] = [];
      const numToAdd = minFishCount - fish.length;

      for (let i = 0; i < numToAdd; i++) {
        // Get random sample fish data
        const sampleIndex = Math.floor(Math.random() * sampleFishData.length);
        const sampleFish = sampleFishData[sampleIndex];

        // Use the fallback image to guarantee something renders
        const fallbackImage = fallbackImages[0];

        // Generate a unique ID that won't conflict with existing fish
        const uniqueId = 1000 + fish.length + i;

        // Create a more distributed starting layout
        const xPos = 10 + (i % 5) * 20 + Math.random() * 10; // 10-90% width range
        const yPos = 10 + Math.floor(i / 5) * 20 + Math.random() * 10; // 10-90% height range

        // Add new fish with better distribution
        additionalFish.push({
          id: uniqueId,
          name: sampleFish.name || `Fish ${uniqueId}`,
          image: sampleFish.image || fallbackImage,
          position: {
            x: xPos,
            y: yPos,
          },
          rarity: sampleFish.rarity || "Common",
          generation: sampleFish.generation || 1,
        });
      }

      // Combine original and additional fish
      setAllFish([...fish, ...additionalFish]);
    } else {
      setAllFish(fish);
    }
  }, [fish, minFishCount]);

  // Track window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".fish-container");
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: container.clientHeight,
        });
      }
    };

    // Set initial dimensions
    handleResize();

    // Update dimensions on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use the fish movement hook to animate fish positions
  const fishWithMovement = useFishMovement(allFish, {
    aquariumBounds: dimensions,
    collisionRadius: 40, // Radius to consider for collision avoidance
  });

  // Diagnostic logging for fish count discrepancy
  useEffect(() => {
    // Check if all fish IDs are present in the movement results
    const allFishIds = new Set(allFish.map((f) => f.id));
    const movementFishIds = new Set(fishWithMovement.map((f) => f.id));
    const missingIds = [...allFishIds].filter((id) => !movementFishIds.has(id));

    if (missingIds.length > 0) {
      // This was empty in the original code
    }
  }, [allFish, fishWithMovement]);

  return {
    fishWithMovement,
    allFish,
    dimensions,
    fishCount: fishWithMovement.length,
  };
}
