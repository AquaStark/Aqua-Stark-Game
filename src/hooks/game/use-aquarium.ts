import { useState } from "react"
import { mockAquariums } from "@/data/mock-data-game"

export function useAquarium() {
  const [selectedAquarium, setSelectedAquarium] = useState(mockAquariums[0])

  const handleAquariumChange = (aquarium: string) => {
    setSelectedAquarium(aquarium)
  }

  return {
    selectedAquarium,
    handleAquariumChange,
    aquariums: mockAquariums,
  }
} 