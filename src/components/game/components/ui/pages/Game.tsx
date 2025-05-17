"use client";

import { useState } from "react";
import { GameHeader } from "../layouts/header/GameHeader";
import { GameSidebarButtons } from "../layouts/sidebar/GameSidebar";
import { AquariumTabs } from "../../../../aquarium/components/ui/tabs/AquariumTabs";
import { TipsPopup } from "../tips/TipsPopup";
import { FishDisplay } from "../../../../aquarium/components/ui/display/FishDisplay";
import { INITIAL_GAME_STATE, MOCK_FISH } from "../../../data/Game.data";
import { useAquarium } from "../../../../aquarium/hooks/use-aquarium";
import { useFishStats } from "../../../../aquarium/hooks/fish/use-fish-stats";
import { GameMenu } from "../menu/GameMenu";
import { useBubbles } from "@/hooks/use-bubbles";
import { BubblesBackground } from "../../../../effects/bubbles-background";

export default function GamePage() {
  const { happiness, food, energy } = useFishStats(INITIAL_GAME_STATE);
  const { selectedAquarium, handleAquariumChange, aquariums } = useAquarium();
  const [showMenu, setShowMenu] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const bubbles = useBubbles({
    initialCount: 10,
    maxBubbles: 20,
    minSize: 6,
    maxSize: 30,
    minDuration: 10,
    maxDuration: 18,
    interval: 400,
  });

  const handleTipsToggle = () => {
    setShowTips(!showTips);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#005C99]">
      {/* Background */}
      <img
        src="/backgrounds/background2.png"
        alt="Underwater Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Bubbles */}
      <BubblesBackground
        bubbles={bubbles}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Effects */}
      <div className="absolute inset-0 light-rays z-20"></div>
      <div className="absolute inset-0 animate-water-movement z-20"></div>

      {/* Fish */}
      <FishDisplay fish={MOCK_FISH} />

      {/* Header */}
      <GameHeader
        happiness={happiness}
        food={food}
        energy={energy}
        onMenuToggle={() => setShowMenu(!showMenu)}
      />

      {showMenu && <GameMenu show={showMenu} />}
      <GameSidebarButtons />

      {/* Tips */}
      <div className="absolute bottom-0 right-4 mb-4 z-30">
        <TipsPopup
          show={showTips}
          onClose={() => setShowTips(false)}
          onToggle={handleTipsToggle}
        />
      </div>

      {/* Tabs */}
      <AquariumTabs
        aquariums={aquariums}
        selectedAquarium={selectedAquarium}
        onAquariumSelect={handleAquariumChange}
      />
    </div>
  );
}
