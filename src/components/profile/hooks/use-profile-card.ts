"use client";

import { useMemo } from "react";

interface ProfileCardData {
  username: string;
  level: number;
  joinDate: string;
  experience: {
    current: number;
    total: number;
  };
  stats: {
    playTime: string;
    fishCollected: number;
    totalFish: number;
    specialFish: number;
    achievements: {
      completed: number;
      total: number;
    };
  };
}

interface StatItem {
  type: "playTime" | "fishCollected" | "specialFish" | "achievements";
  label: string;
  value: string;
  delay: number;
}

export function useProfileCard({
  username,
  level,
  joinDate,
  experience,
  stats,
}: ProfileCardData) {
  // Calculate experience percentage
  const experiencePercentage = useMemo(() => {
    return (experience.current / experience.total) * 100;
  }, [experience.current, experience.total]);

  // Format experience text
  const experienceText = useMemo(() => {
    return `${experience.current} / ${experience.total} XP`;
  }, [experience.current, experience.total]);

  // Organize stats for display (without JSX)
  const statItems = useMemo<StatItem[]>(() => {
    return [
      {
        type: "playTime",
        label: "Play Time",
        value: stats.playTime,
        delay: 0.3,
      },
      {
        type: "fishCollected",
        label: "Fish Collected",
        value: `${stats.fishCollected}/${stats.totalFish}`,
        delay: 0.4,
      },
      {
        type: "specialFish",
        label: "Special Fish",
        value: stats.specialFish.toString(),
        delay: 0.5,
      },
      {
        type: "achievements",
        label: "Achievements",
        value: `${stats.achievements.completed}/${stats.achievements.total}`,
        delay: 0.6,
      },
    ];
  }, [stats]);

  return {
    username,
    level,
    joinDate,
    experiencePercentage,
    experienceText,
    statItems,
  };
}
