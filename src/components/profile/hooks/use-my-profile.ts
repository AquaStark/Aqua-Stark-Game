"use client";

import { useState, useEffect } from "react";
import { useBubbles } from "@/hooks/use-bubbles";
import mockProfileData from "@/components/profile/data/mock-my-profile";

export function useMyProfile() {
  // Tab state management
  const [activeTab, setActiveTab] = useState("collection");

  // Loading state for animation
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Configure bubbles effect
  const bubbles = useBubbles({
    initialCount: 15,
    maxBubbles: 25,
    minSize: 6,
    maxSize: 30,
    minDuration: 8,
    maxDuration: 25,
    interval: 500,
  });

  // Extract profile data from mock data
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

  // Check if a tab is active
  const isTabActive = (tabName: string) => activeTab === tabName;

  return {
    // State
    activeTab,
    setActiveTab,
    isLoaded,

    // Effects
    bubbles,

    // Data
    profileData: {
      username,
      level,
      joinDate,
      experience,
      currency,
      stats,
      fishCollection,
      playerStats,
    },

    // Utility functions
    isTabActive,
  };
}
