import { ChevronRight } from "lucide-react";
import { FishGrid } from "./fish-grid";

interface Fish {
  id: string;
  name: string;
  imageUrl: string;
  rarity: string;
  level: number;
  obtainedDate: string;
}

interface FishCollectionProps {
  fishCollection: {
    collected: number;
    total: number;
    displayedFish: Fish[];
  };
}

export function FishCollection({ fishCollection }: FishCollectionProps) {
  const progress =
    (fishCollection.collected / fishCollection.total) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Fish Collection</h2>
        <span className="text-sm">
          {fishCollection.collected} of {fishCollection.total} collected
        </span>
      </div>

      <div className="h-2 bg-blue-900 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-green-300 animate-expandWidth"
          style={{ width: `${progress}%` }}
        />
      </div>

      <FishGrid fishList={fishCollection.displayedFish} />

      <button className="w-full py-3 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors transform hover:scale-[1.01] active:scale-[0.99] transition-transform shadow-md">
        <span>View Full Collection</span>
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
