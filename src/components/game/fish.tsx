// src/components/game/Fish.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FishType } from '@/types/game';
import { useFishLogic } from '@/hooks/game/use-fish-logic';

interface FishProps {
  fish: FishType;
  position: { x: number; y: number };
  facingLeft: boolean;
  behaviorState: 'idle' | 'darting' | 'hovering' | 'turning';
}

export function Fish({ fish, position, facingLeft, behaviorState }: FishProps) {
  const { isFlipping, fishSize, fishImage, bubblePosition } = useFishLogic(fish, facingLeft);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/fish/fish1.png";
  };

  const flipClass = isFlipping ? 'fish-flipping' : '';

  return (
    <motion.div
      className="absolute cursor-pointer group"
      style={{ left: `${position.x}%`, top: `${position.y}%`, zIndex: behaviorState === 'darting' ? 10 : 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.8 }}
    >
      <div className="relative">
        <motion.div
          animate={{
            rotate: behaviorState === 'darting' ? [-1, 1, -1] : [-0.5, 0.5, -0.5],
            y: behaviorState === 'darting' ? [0, 1, 0] : [0, 2, 0],
          }}
          transition={{
            duration: behaviorState === 'darting' ? 0.5 : 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
          style={{ display: 'inline-block' }}
        >
          <Image
            src={fishImage}
            alt={fish.name}
            width={fishSize}
            height={fishSize}
            className={`transition-all hover:scale-105 fish-image ${flipClass}`}
            style={{ filter: behaviorState === 'darting' ? 'brightness(1.1)' : 'brightness(1.0)' }}
            onError={handleImageError}
            unoptimized
            priority
          />
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full opacity-10 -z-10"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
              transform: 'scale(1.05)',
            }}
          />
        </motion.div>

        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 game-container p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
          <div className="font-bold text-white">{fish.name}</div>
          <div className="text-xs text-white/80">
            Rarity: {fish.rarity} • Gen {fish.generation}
          </div>
        </div>

        {behaviorState === 'darting' && (
          <motion.div
            className={`absolute ${bubblePosition} top-1/2 -translate-y-1/2`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.4, 0], scale: [0, 0.7, 0.9], x: facingLeft ? [0, -7] : [0, 7] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.3, ease: "easeInOut" }}
          >
            <div className="w-1.5 h-1.5 bg-white/25 rounded-full" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
