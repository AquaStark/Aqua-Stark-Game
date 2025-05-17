"use client";

import type { FishType } from "@/@types/Game";
import { useFish } from "@/components/aquarium/hooks/fish/use-fish-item";
import { motion } from "framer-motion";

interface FishProps {
  fish: FishType;
  position: {
    x: number;
    y: number;
  };
  facingLeft: boolean;
  behaviorState: "idle" | "darting" | "hovering" | "turning";
}

export function Fish({ fish, position, facingLeft, behaviorState }: FishProps) {
  const {
    fishImage,
    fishSize,
    flipClass,
    bubblePosition,
    animationClass,
    handleImageError,
  } = useFish({
    fish,
    position,
    facingLeft,
    behaviorState,
  });

  return (
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: behaviorState === "darting" ? 10 : 1,
      }}
      // Use motion to animate position changes smoothly
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      }}
    >
      <div className="relative">
        <motion.div
          // Simplify animations to prevent jitter
          animate={{
            // Very subtle rotation only
            rotate:
              behaviorState === "darting"
                ? [-1, 1, -1]
                : behaviorState === "hovering"
                ? [-0.5, 0.5, -0.5]
                : [-1, 1, -1],
            // Subtle y-offset for bobbing
            y:
              behaviorState === "darting"
                ? [0, 1, 0]
                : behaviorState === "hovering"
                ? [0, 2, 0]
                : [0, 2, 0],
          }}
          transition={{
            duration:
              behaviorState === "darting"
                ? 0.5
                : behaviorState === "hovering"
                ? 3
                : 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            // Avoid staggering with zero delay
            delay: 0,
          }}
          // No need for transform anymore since we're using the correct pre-flipped images
          style={{
            display: "inline-block",
          }}
        >
          <div className={`relative ${animationClass}`}>
            <img
              src={fishImage || "/placeholder.svg"}
              alt={fish.name}
              width={fishSize}
              height={fishSize}
              className={`transition-all hover:scale-105 fish-image ${flipClass}`}
              style={{
                filter:
                  behaviorState === "darting"
                    ? "brightness(1.1)"
                    : "brightness(1.0)",
              }}
              onError={handleImageError}
            />

            {/* Very subtle glow for depth */}
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full opacity-10 -z-10"
              style={{
                background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
                transform: "scale(1.05)",
              }}
            />
          </div>
        </motion.div>

        {/* Tooltip on hover */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 game-container p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
          <div className="font-bold text-white">{fish.name}</div>
          <div className="text-xs text-white/80">
            Rarity: {fish.rarity} • Gen {fish.generation}
          </div>
        </div>

        {/* Only show bubbles when darting */}
        {behaviorState === "darting" && (
          <motion.div
            className={`absolute ${bubblePosition} top-1/2 -translate-y-1/2`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 0.7, 0.9],
              x: facingLeft ? [0, -7] : [0, 7],
            }}
            transition={{
              duration: 0.7,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="w-1.5 h-1.5 bg-white/25 rounded-full" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
