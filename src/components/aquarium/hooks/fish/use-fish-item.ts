"use client";

import { useEffect, useState, useRef } from "react";
import type { FishType } from "@/@types/Game";

// Define valid rarity types for type safety
type RarityType =
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary"
  | "exotic";

interface UseFishProps {
  fish: FishType;
  position: {
    x: number;
    y: number;
  };
  facingLeft: boolean;
  behaviorState: "idle" | "darting" | "hovering" | "turning";
}

export function useFish({
  fish,
  position,
  facingLeft,
  behaviorState,
}: UseFishProps) {
  // Track previous facing direction to detect changes for flip animation
  const prevFacingLeftRef = useRef(facingLeft);
  const [isFlipping, setIsFlipping] = useState(false);

  // Apply flip animation when direction changes
  useEffect(() => {
    if (prevFacingLeftRef.current !== facingLeft) {
      // Direction changed, trigger flip animation
      setIsFlipping(true);

      // Clear animation after it completes
      const timer = setTimeout(() => {
        setIsFlipping(false);
      }, 400); // Match animation duration

      // Update ref to current direction
      prevFacingLeftRef.current = facingLeft;

      return () => clearTimeout(timer);
    }
  }, [facingLeft]);

  // Calculate fish size based on rarity
  const getFishSize = () => {
    const rarityFactor: Record<RarityType, number> = {
      common: 80,
      uncommon: 90,
      rare: 100,
      epic: 110,
      legendary: 120,
      exotic: 130,
    };

    // Get the lowercase rarity and check if it's a valid key
    const rarityKey = fish.rarity.toLowerCase() as RarityType;

    // Default to medium size if rarity is not recognized
    const baseSize = rarityFactor[rarityKey] || 100;

    return Math.round(baseSize);
  };

  // IMPORTANT: Determine the correct image to use based on direction
  const getCorrectFishImage = () => {
    // Extract the base image path without extension
    const originalImagePath = fish.image || "/fish/fish1.png";

    // Define fallback image to ensure we always have something to display
    const fallbackImage = "/fish/fish1.png";

    try {
      // List of known valid fish images to prevent 404 errors
      const knownValidFish = [
        "/fish/fish1.png",
        "/fish/fish2.png",
        "/fish/fish3.png",
        "/fish/fish4.png",
      ];

      // Check if fish is moving right (not facing left)
      if (!facingLeft) {
        // For RIGHT movement, use flipped images

        // Check if the original path is a known fish image
        const isKnownFish = knownValidFish.some((validPath) =>
          originalImagePath.endsWith(validPath)
        );

        if (isKnownFish) {
          // Use the corresponding flip image for known fish
          return originalImagePath.replace(".png", "-flip.png");
        } else {
          // For unknown fish images, just use a guaranteed flip image to avoid 404
          return "/fish/fish1-flip.png";
        }
      } else {
        // For LEFT movement, ensure we use non-flipped images

        // If the image already has -flip in it but we need to face LEFT, use non-flipped version
        if (originalImagePath.includes("-flip.")) {
          return originalImagePath.replace("-flip.", ".");
        }

        // Otherwise use the original image
        return originalImagePath;
      }
    } catch (error) {
      console.error("Error determining fish image:", error);
      return fallbackImage;
    }
  };

  // Handle image loading errors
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    // If image fails to load, fall back to a guaranteed image
    e.currentTarget.src = "/fish/fish1.png";
  };

  // Get the correct image based on direction
  const fishImage = getCorrectFishImage();
  const fishSize = getFishSize();

  // Determine bubble position based on facing direction
  const bubblePosition = facingLeft ? "right-[-5px]" : "left-[-5px]";

  // Use animation class based on state and direction
  const stateClass =
    behaviorState === "darting"
      ? "animate-swim-dart"
      : behaviorState === "hovering"
      ? "animate-hover"
      : "animate-swim-idle";

  // Combine state class with direction for animations
  const animationClass = `${stateClass}`;

  // Add flip animation class when direction changes
  const flipClass = isFlipping ? "fish-flipping" : "";

  return {
    fishImage,
    fishSize,
    isFlipping,
    bubblePosition,
    animationClass,
    flipClass,
    handleImageError,
    position,
    behaviorState,
    facingLeft,
  };
}
