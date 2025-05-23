"use client";

import { useState, useEffect } from "react";
import mockProfileData from "@/data/mock-data-profile";
import { PageHeader } from "@/components/layout/header";
import { ProfileCard } from "@/components/profile/profile-card";
import { ProfileTabs } from "@/components/profile/profile-tabs";
import { FishCollection } from "@/components/profile/fish-collection/fish-collection";
import { Achievements } from "@/components/profile/achievement/achievements";
import { PurchaseHistory } from "@/components/profile/purchase-history";
import { PlayerStatistics } from "@/components/profile/player-statistics";
import { BubblesBackground } from "@/components/effects/bubbles-background";
import { useBubbles } from "@/hooks/use-bubbles";
import { Coins } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState("collection");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const bubbles = useBubbles();

  const {
    username,
    level,
    joinDate,
    experience,
    currency,
    stats,
    fishCollection,
    playerStats,
  } = mockProfileData;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-900 animated-background text-white">
      <BubblesBackground bubbles={bubbles} className="absolute inset-0 z-0 pointer-events-none" />

      {/* 🔵 FULL-WIDTH HEADER */}
      <PageHeader
        title="My Profile"
        backTo="/game"
        rightContent={
          <div className="flex items-center">
            <Coins className="w-5 h-5 mr-2 text-yellow-400 animate-pulse-slow" />
            <span className="font-bold">{currency.toLocaleString()}</span>
          </div>
        }
      />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 py-6 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProfileCard
          username={username}
          level={level}
          joinDate={joinDate}
          experience={experience}
          stats={stats}
        />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="animate-fadeIn transition-all duration-500">
          {activeTab === "collection" && <FishCollection fishCollection={fishCollection} />}
          {activeTab === "achievements" && <Achievements stats={stats} />}
          {activeTab === "purchase" && <PurchaseHistory />}
          <PlayerStatistics playerStats={playerStats} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
