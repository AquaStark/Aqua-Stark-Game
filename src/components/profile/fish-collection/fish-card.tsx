import { Star } from "lucide-react";
import Image from "next/image";

interface Fish {
  id: string;
  name: string;
  imageUrl: string;
  rarity: string;
  level: number;
  obtainedDate: string;
}

interface Props {
  fish: Fish;
  delay: number;
}

export function FishCard({ fish, delay }: Props) {
  const rarityColor =
    fish.rarity === "Legendary"
      ? "bg-purple-500"
      : fish.rarity === "Rare"
      ? "bg-blue-500"
      : fish.rarity === "Special"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div
      className="bg-blue-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-4 flex justify-center items-center h-24 relative">
        <div className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full ${rarityColor}`}>
          {fish.rarity}
        </div>
      <Image
        src={fish.imageUrl}
        alt={fish.name}
        width={80}
        height={80}
        className="h-20 w-auto animate-float-small"
      />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1">{fish.name}</h3>
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" />
            <span>Level {fish.level}</span>
          </div>
          <span className="text-blue-300">Obtained: {fish.obtainedDate}</span>
        </div>
      </div>
    </div>
  );
}
