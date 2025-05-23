// src/hooks/game/useFishLogic.ts
import { useEffect, useRef, useState } from 'react';
import { FishType } from '@/types/game';

type RarityType = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'exotic';

export function useFishLogic(fish: FishType, facingLeft: boolean) {
  const prevFacingLeftRef = useRef(facingLeft);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (prevFacingLeftRef.current !== facingLeft) {
      setIsFlipping(true);
      const timer = setTimeout(() => setIsFlipping(false), 400);
      prevFacingLeftRef.current = facingLeft;
      return () => clearTimeout(timer);
    }
  }, [facingLeft]);

  const getFishSize = () => {
    const rarityFactor: Record<RarityType, number> = {
      common: 80,
      uncommon: 90,
      rare: 100,
      epic: 110,
      legendary: 120,
      exotic: 130
    };

    const rarityKey = fish.rarity.toLowerCase() as RarityType;
    return Math.round(rarityFactor[rarityKey] || 100);
  };

  const getCorrectFishImage = () => {
    const originalImagePath = fish.image || '/fish/fish1.png';
    const knownValidFish = [
      '/fish/fish1.png',
      '/fish/fish2.png',
      '/fish/fish3.png',
      '/fish/fish4.png'
    ];

    if (!facingLeft) {
      const isKnownFish = knownValidFish.some(validPath => originalImagePath.endsWith(validPath));
      return isKnownFish
        ? originalImagePath.replace('.png', '-flip.png')
        : '/fish/fish1-flip.png';
    }

    return originalImagePath.includes('-flip.')
      ? originalImagePath.replace('-flip.', '.')
      : originalImagePath;
  };

  const fishSize = getFishSize();
  const fishImage = getCorrectFishImage();
  const bubblePosition = facingLeft ? 'right-[-5px]' : 'left-[-5px]';

  return {
    isFlipping,
    fishSize,
    fishImage,
    bubblePosition
  };
}
