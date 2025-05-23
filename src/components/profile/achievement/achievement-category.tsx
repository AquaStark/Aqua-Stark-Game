import { Fish, Trophy } from "lucide-react";
import { achievements } from "@/data/mock-data-profile";
import { AchievementItem } from "./achievement-item";

interface Props {
  category: string;
  delay: number;
}

export function AchievementCategory({ category, delay }: Props) {
  const Icon = category === "Collector" ? Fish : Trophy;
  const items = achievements.filter((a) => a.category === category);

  return (
    <div
      className="bg-blue-800 rounded-xl overflow-hidden shadow-lg animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-blue-700 p-4">
        <h3 className="font-bold text-lg flex items-center">
          <Icon className="w-5 h-5 mr-2 animate-wiggle" />
          {category}
        </h3>
      </div>
      <div className="p-4">
        {items.map((ach, i) => (
          <AchievementItem key={ach.id} achievement={ach} delay={0.2 + 0.1 * i} />
        ))}
      </div>
    </div>
  );
}
