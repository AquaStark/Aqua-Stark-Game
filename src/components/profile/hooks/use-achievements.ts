"use client";

import { useMemo } from "react";

interface AchievementStats {
  achievements: {
    completed: number;
    total: number;
  };
}

export function useAchievements(stats: AchievementStats) {
  // Calculate the completion percentage
  const completionPercentage = useMemo(() => {
    return (stats.achievements.completed / stats.achievements.total) * 100;
  }, [stats.achievements.completed, stats.achievements.total]);

  // Format the completion status text
  const completionText = useMemo(() => {
    return `${stats.achievements.completed} of ${stats.achievements.total} completed`;
  }, [stats.achievements.completed, stats.achievements.total]);

  return {
    completionPercentage,
    completionText,
    stats,
  };
}
