"use client"

import { useEffect, useState } from "react"
import { FishType } from "@/types/game"
import { sampleFishData, fallbackImages } from "@/data/mock-data-game"

export function useGeneratedFish(minCount: number = 15): FishType[] {
  const [fish, setFish] = useState<FishType[]>([])

  useEffect(() => {
    const generated: FishType[] = Array.from({ length: minCount }, (_, i) => {
      const sample = sampleFishData[Math.floor(Math.random() * sampleFishData.length)]
      const id = 1000 + i
      const x = 10 + (i % 5) * 20 + Math.random() * 10
      const y = 10 + Math.floor(i / 5) * 20 + Math.random() * 10
      return {
        id,
        name: sample.name || `Fish ${id}`,
        image: sample.image || fallbackImages[0],
        position: { x, y },
        rarity: sample.rarity || "Common",
        generation: sample.generation || 1,
      }
    })

    setFish(generated)
  }, [minCount])

  return fish
}
