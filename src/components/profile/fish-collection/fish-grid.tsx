import { FishCard } from "./fish-card";

interface Fish {
  id: string;
  name: string;
  imageUrl: string;
  rarity: string;
  level: number;
  obtainedDate: string;
}

interface Props {
  fishList: Fish[];
}

export function FishGrid({ fishList }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {fishList.map((fish, i) => (
        <FishCard key={fish.id} fish={fish} delay={0.1 * (i + 1)} />
      ))}
    </div>
  );
}
