import { useState } from "react";
import { MOCK_AQUARIUMS } from "@/components/game/data/Game.data";

export function useAquarium() {
  const [selectedAquarium, setSelectedAquarium] = useState(MOCK_AQUARIUMS[0]);

  const handleAquariumChange = (aquarium: string) => {
    setSelectedAquarium(aquarium);
  };

  return {
    selectedAquarium,
    handleAquariumChange,
    aquariums: MOCK_AQUARIUMS,
  };
}
