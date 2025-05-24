import { FishType } from "@/types/game"

export type ItemType = "fish" | "food" | "decorations" | "others";

export interface GameState {
  happiness: number
  food: number
  energy: number
}

export const sampleFishData: Partial<FishType>[] = [
  {
    name: "Blue Striped Fish",
    image: "/fish/fish1.png",
    rarity: "Rare",
    generation: 1,
  },
  {
    name: "Tropical Coral Fish",
    image: "/fish/fish2.png",
    rarity: "Uncommon",
    generation: 2,
  },
  {
    name: "Orange Tropical Fish",
    image: "/fish/fish3.png",
    rarity: "Epic",
    generation: 1,
  },
  {
    name: "Scarlet Fin",
    image: "/fish/fish4.png",
    rarity: "Legendary",
    generation: 1,
  },
]

export const fallbackImages: string[] = ["/fish/fish1.png"]

export const mockAquariums: string[] = [
  "My First Aquarium",
  "Second Aquarium",
  "Tropical Paradise",
]

export const initialGameState: GameState = {
  happiness: 80,
  food: 90,
  energy: 75,
}

export type Bundle = {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  itemsDescription: string;
  savingsPercentage: number;
}

export const mockBundles: Bundle[] = [
  {
    name: "Starter Pack",
    image: "/bundles/starter.png",
    price: 200,
    originalPrice: 300,
    itemsDescription: "Includes 3 fishes, 1 decoration, and 1 food pack",
    savingsPercentage: 33,
  },
  {
    name: "Tropical Boost",
    image: "/bundles/tropical.png",
    price: 500,
    originalPrice: 800,
    itemsDescription: "Includes 5 rare fishes and 3 decorations",
    savingsPercentage: 38,
  },
]
