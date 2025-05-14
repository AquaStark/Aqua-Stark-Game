"use client"

import { useBubbles } from "@/hooks/use-bubbles"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero"
import { FeaturedFish } from "@/components/landing/featured-fish"
import { FishStatusTips } from "@/components/landing/fish-status-tips"
import { ReadyToPlay } from "@/components/landing/ready-to-play"
import { Footer } from "@/components/layout/footer"
import { BubblesBackground } from "@/components/effects/bubbles-background"

export default function Page() {
   const bubbles = useBubbles()

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-700 animated-background">
      <div className="water-movement"></div>
      <BubblesBackground 
        bubbles={bubbles} 
        className="opacity-60"
        customStyles={{
          background: "linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(29,78,216,0.2) 100%)"
        }}
      />
      <Navbar />

      <main className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        <HeroSection />
        <FeaturedFish />
        <FishStatusTips />
        <ReadyToPlay />
      </main>

      <Footer />
    </div>
  )
}
