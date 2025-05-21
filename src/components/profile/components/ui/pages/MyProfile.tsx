"use client";

import { BubblesBackground } from "@/components/effects/bubbles-background";
import { ProfileHeader } from "../../layouts/header/ProfileHeader";
import { ProfileCard } from "../cards/ProfileCard";
import { ProfileTabs } from "../tabs/ProfileTabs";
import { FishCollection } from "../collection/FishCollection";
import { Achievements } from "../achievements/ProfileAchievements";
import { PurchaseHistory } from "../history/PurchaseHistory";
import { PlayerStatistics } from "../statistics/PlayerStatistics";
import { useMyProfile } from "@/components/profile/hooks/use-my-profile";

export default function MyProfile() {
  const {
    activeTab,
    setActiveTab,
    isLoaded,
    bubbles,
    profileData,
    isTabActive,
  } = useMyProfile();

  const {
    username,
    level,
    joinDate,
    experience,
    currency,
    stats,
    fishCollection,
    playerStats,
  } = profileData;

  return (
    <div className="min-h-screen bg-blue-700 text-white relative overflow-hidden">
      {/* Background bubbles */}
      <BubblesBackground
        bubbles={bubbles}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Content container */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 py-6 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProfileHeader currency={currency} />

        <ProfileCard
          username={username}
          level={level}
          joinDate={joinDate}
          experience={experience}
          stats={stats}
        />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="animate-fadeIn transition-all duration-500">
          {isTabActive("collection") && (
            <FishCollection fishCollection={fishCollection} />
          )}
          {isTabActive("achievements") && <Achievements stats={stats} />}
          {isTabActive("purchase") && <PurchaseHistory />}
          <PlayerStatistics playerStats={playerStats} />
        </div>
      </div>
    </div>
  );
}
