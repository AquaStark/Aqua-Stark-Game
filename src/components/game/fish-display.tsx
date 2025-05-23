import { useEffect, useState } from "react"
import { FishType } from "@/types/game"
import { useFishMovement } from "@/hooks/game/use-fish-movement"
import { useGeneratedFish } from "@/hooks/game/use-generated-fish"
import { Fish } from "@/components/game/fish"

interface FishDisplayProps {
  containerWidth?: number
  containerHeight?: number
  minFishCount?: number
}

export function FishDisplay({
  containerWidth = 1000,
  containerHeight = 600,
  minFishCount = 15,
}: FishDisplayProps) {
  const [dimensions, setDimensions] = useState({
    width: containerWidth,
    height: containerHeight,
  })

  const allFish: FishType[] = useGeneratedFish(minFishCount)

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".fish-container")
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: container.clientHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const fishWithMovement = useFishMovement(allFish, {
    aquariumBounds: dimensions,
    collisionRadius: 40,
  })

  return (
    <div className="relative w-full h-full fish-container overflow-hidden bg-cyan-500/20">
      <div className="absolute top-0 right-0 p-2 text-white text-xs opacity-50 z-50">
        Fish count: {fishWithMovement.length}
      </div>

      {fishWithMovement.map((fishState) => {
        const fishData = allFish.find((f) => f.id === fishState.id)
        return fishData ? (
          <Fish
            key={fishData.id}
            fish={fishData}
            position={fishState.position}
            facingLeft={fishState.facingLeft}
            behaviorState={fishState.behaviorState}
          />
        ) : null
      })}
    </div>
  )
}
