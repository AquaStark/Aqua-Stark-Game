"use client"

import { BubblesBackground } from "@/components/effects/bubbles-background"
import BackToHomeButton from "@/components/ui/back-to-home-button"
import { useBubbles } from "@/hooks/use-bubbles"

export default function NotFound() {
  const bubbles = useBubbles({ maxBubbles: 20 })

  return (
    <div className="h-screen relative text-white">
      <div className="flex flex-col items-center justify-center font-404 h-screen bg-gradient-to-b from-blue-600 via-[#142960] to-[#050D1F]">
        <h1
          className="text-[120px] lg:text-[240px] font-extrabold text-white drop-shadow-[0_0_1px_rgba(86,167,255,1)] leading-none"
          style={{
            textShadow: `
      0 0 24px rgba(208,231,255,1),
      0 0 40px rgba(59,130,246,0.8),
      0 0 80px rgba(59,130,246,0.6),
      0 0 120px rgba(59,130,246,0.5)
    `,
          }}
        >
          404
        </h1>
        <h2 className="text-2xl drop-shadow-[0_0_4px_rgba(203,227,255,0.8)]">
          Page not found!
        </h2>

        <p className="mt-6 text-center">
          Oops! You swam too far from the reef. <br />
          This page has sunk into the ocean.
        </p>

        <div className="mt-8">
          <BackToHomeButton />
        </div>
      </div>

      <BubblesBackground bubbles={bubbles} />
    </div>
  )
}
