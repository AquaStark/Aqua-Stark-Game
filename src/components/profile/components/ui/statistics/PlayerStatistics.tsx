"use client";

import { usePlayerStatistics } from "@/components/profile/hooks/use-player-statistics";
import {
  BarChart2,
  Fish,
  Sparkles,
  Stethoscope,
  BarChartBigIcon as ChartColumnBig,
} from "lucide-react";

interface PlayerStatisticsProps {
  playerStats: {
    fishFed: number;
    decorationsPlaced: number;
    fishBred: number;
    aquariumsCreated: number;
  };
}

export function PlayerStatistics({ playerStats }: PlayerStatisticsProps) {
  const { formattedStats } = usePlayerStatistics(playerStats);

  // Helper function to get the icon based on stat key
  const getStatIcon = (key: string) => {
    switch (key) {
      case "fishFed":
        return <Fish className="w-4 h-4 text-blue-300" />;
      case "decorationsPlaced":
        return <Sparkles className="w-4 h-4 text-purple-300" />;
      case "fishBred":
        return <Stethoscope className="w-4 h-4 text-red-300" />;
      case "aquariumsCreated":
        return <ChartColumnBig className="w-4 h-4 text-yellow-300" />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <BarChart2 className="w-5 h-5 mr-2" />
        Player Statistics
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {formattedStats.map((stat, index) => (
          <div
            key={index}
            className="bg-blue-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
            style={{ animationDelay: `${stat.delay}s` }}
          >
            <div className="flex justify-center mb-2">
              <div
                className={`w-8 h-8 rounded-full ${stat.color} flex items-center justify-center animate-pulse-slow`}
              >
                {getStatIcon(stat.key)}
              </div>
            </div>
            <div className="text-center text-sm text-blue-300">
              {stat.label}
            </div>
            <div className="text-center text-2xl font-bold animate-count">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
