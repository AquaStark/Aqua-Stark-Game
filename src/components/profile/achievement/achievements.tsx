import { Trophy } from "lucide-react";
import { achievements } from "@/data/mock-data-profile";
import { AchievementCategory } from "./achievement-category";

interface AchievementsProps {
  stats: {
    achievements: {
      completed: number;
      total: number;
    };
  };
}

export function Achievements({ stats }: AchievementsProps) {
  const categories = [...new Set(achievements.map((a) => a.category))];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-yellow-400 animate-pulse-slow" />
          Achievements
        </h2>
        <span className="text-sm">
          {stats.achievements.completed} of {stats.achievements.total} completed
        </span>
      </div>

      <div className="h-2 bg-blue-900 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 animate-expandWidth"
          style={{ width: `${(stats.achievements.completed / stats.achievements.total) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, i) => (
          <AchievementCategory
            key={category}
            category={category}
            delay={0.1 * (i + 1)}
          />
        ))}
      </div>
    </div>
  );
}
