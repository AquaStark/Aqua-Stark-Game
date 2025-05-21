"use client";

import { useMemo } from "react";

interface PlayerStats {
  fishFed: number;
  decorationsPlaced: number;
  fishBred: number;
  aquariumsCreated: number;
}

interface StatItem {
  key: string;
  label: string;
  value: string;
  color: string;
  delay: number;
}

export function usePlayerStatistics(playerStats: PlayerStats) {
  // Format and organize the statistics data
  const formattedStats = useMemo<StatItem[]>(() => {
    return [
      {
        key: "fishFed",
        label: "Fish Fed",
        value: playerStats.fishFed.toLocaleString(),
        color: "bg-blue-700",
        delay: 0.6,
      },
      {
        key: "decorationsPlaced",
        label: "Decorations Placed",
        value: playerStats.decorationsPlaced.toString(),
        color: "bg-purple-700",
        delay: 0.7,
      },
      {
        key: "fishBred",
        label: "Fish Bred",
        value: playerStats.fishBred.toString(),
        color: "bg-red-700",
        delay: 0.8,
      },
      {
        key: "aquariumsCreated",
        label: "Aquariums Created",
        value: playerStats.aquariumsCreated.toString(),
        color: "bg-yellow-700",
        delay: 0.9,
      },
    ];
  }, [playerStats]);

  // Calculate total activities
  const totalActivities = useMemo(() => {
    return (
      playerStats.fishFed +
      playerStats.decorationsPlaced +
      playerStats.fishBred +
      playerStats.aquariumsCreated
    );
  }, [playerStats]);

  return {
    formattedStats,
    totalActivities,
    rawStats: playerStats,
  };
}
