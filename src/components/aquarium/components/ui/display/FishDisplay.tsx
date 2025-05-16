import type { FishType } from "@/@types/Game";
import { Fish } from "@/components/aquarium/components/ui/fish/Fish";
import { useFishDisplay } from "@/components/aquarium/hooks/fish/FishDisplay.hook";

interface FishDisplayProps {
  fish: FishType[];
  containerWidth?: number;
  containerHeight?: number;
  minFishCount?: number;
}

export function FishDisplay({
  fish,
  containerWidth = 1000,
  containerHeight = 600,
  minFishCount = 15,
}: FishDisplayProps) {
  // Use the custom hook to handle all the logic
  const { fishWithMovement, allFish, fishCount } = useFishDisplay({
    fish,
    containerWidth,
    containerHeight,
    minFishCount,
  });

  return (
    <div className="relative w-full h-full fish-container overflow-hidden bg-cyan-500/20">
      {/* Display the number of fish for debugging */}
      <div className="absolute top-0 right-0 p-2 text-white text-xs opacity-50 z-50">
        Fish count: {fishCount}
      </div>

      {fishWithMovement.map((fishState) => {
        // Find the original fish data by ID
        const fishData = allFish.find((f) => f.id === fishState.id);
        if (!fishData) {
          return null;
        }

        return (
          <Fish
            key={fishData.id}
            fish={fishData}
            position={fishState.position}
            facingLeft={fishState.facingLeft}
            behaviorState={fishState.behaviorState}
          />
        );
      })}
    </div>
  );
}
