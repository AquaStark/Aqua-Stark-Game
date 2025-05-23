import { Check, Lock } from "lucide-react";

interface Props {
  achievement: {
    id: string;
    title: string;
    description: string;
    date?: string;
    unlocked: boolean;
  };
  delay: number;
}

export function AchievementItem({ achievement, delay }: Props) {
  return (
    <div
      className={`flex items-center p-3 rounded-lg mb-2 transform hover:scale-[1.02] transition-transform animate-fadeIn ${
        achievement.unlocked ? "bg-blue-700" : "bg-blue-900/50"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
          achievement.unlocked
            ? "bg-gradient-to-br from-yellow-400 to-yellow-600 animate-pulse-slow"
            : "bg-blue-950"
        }`}
      >
        {achievement.unlocked ? (
          <Check className="w-5 h-5 text-yellow-900" />
        ) : (
          <Lock className="w-5 h-5 text-blue-400" />
        )}
      </div>
      <div className="flex-1">
        <h4 className={`font-medium ${!achievement.unlocked ? "text-blue-300" : ""}`}>
          {achievement.title}
        </h4>
        <p className="text-xs text-blue-300">{achievement.description}</p>
      </div>
      {achievement.unlocked && achievement.date && (
        <div className="text-xs text-blue-300">{achievement.date}</div>
      )}
    </div>
  );
}
