"use client"

import { useState } from "react"
import Image from "next/image"

import { useAquarium } from "@/hooks/game/use-aquarium"
import { useFishStats } from "@/hooks/game/use-fish-stats"
import { useBubbles } from "@/hooks/use-bubbles"

import { GameHeader } from "@/components/game/game-header"
import { GameSidebarButtons } from "@/components/game/game-sidebar-buttons"
import { AquariumTabs } from "@/components/game/aquarium-tabs"
import { TipsPopup } from "@/components/game/tips-popup"
import { FishDisplay } from "@/components/game/fish-display"
import { GameMenu } from "@/components/game/game-menu"

import { BubblesBackground } from "@/components/effects/bubbles-background"

import { initialGameState } from "@/data/mock-data-game"

export default function Game() {
  const { happiness, food, energy } = useFishStats(initialGameState)
  const { selectedAquarium, handleAquariumChange, aquariums } = useAquarium()
  const [showMenu, setShowMenu] = useState(false)
  const [showTips, setShowTips] = useState(false)

  const bubbles = useBubbles()

  const handleTipsToggle = () => setShowTips(!showTips)

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#005C99]">
      <Image
        src="/backgrounds/background2.png"
        alt="Underwater Background"
        fill
        className="object-cover z-0"
        priority
      />

      <BubblesBackground
        bubbles={bubbles}
        className="opacity-60"
        customStyles={{
          background:
            "linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(29,78,216,0.2) 100%)",
        }}
      />

      <div className="absolute inset-0 light-rays z-20"></div>
      <div className="absolute inset-0 animate-water-movement z-20"></div>

      <FishDisplay />

      <GameHeader
        happiness={happiness}
        food={food}
        energy={energy}
        onMenuToggle={() => setShowMenu(!showMenu)}
      />

      {showMenu && <GameMenu show={showMenu} />}
      <GameSidebarButtons />

      <div className="absolute bottom-0 right-4 mb-4 z-30">
        <TipsPopup
          show={showTips}
          onClose={() => setShowTips(false)}
          onToggle={handleTipsToggle}
        />
      </div>

      <AquariumTabs
        aquariums={aquariums}
        selectedAquarium={selectedAquarium}
        onAquariumSelect={handleAquariumChange}
      />
    </div>
  )
}
