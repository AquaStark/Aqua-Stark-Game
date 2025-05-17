export type Rarity = "Rare" | "Legendary" | "Special";
export type ItemType = "fish" | "food" | "decorations" | "others";
export interface FishData {
  name: string;
  image: string;
  price: number;
  rarity: Rarity;
  rating: number;
  description: string;
  originalPrice?: number;
}



export const fishData: FishData[] = [
  {
    name: "REDGLOW",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fish3-LOteAGqWGR4lDQ8VBBAlRSUByZL2KX.png",
    price: 1500,
    rarity: "Rare",
    description: "A bright red fish that glows under light in the aquarium.",
    rating: 4.5,
  },
  {
    name: "BLUESHINE",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fish1-ioYn5CvkJkCHPwgx1jBGoqibnAu5to.png",
    price: 2000,
    rarity: "Legendary",
    description:
      "A stunning blue fish with a shiny appearance in the aquarium.",
    rating: 4.8,
  },
  {
    name: "TROPICORAL",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fish2-D0YdqsjY0OgI0AZg98FS0Sq7zMm2Fe.png",
    price: 2500,
    rarity: "Special",
    description:
      "A colorful tropical fish perfect for any tank in the aquarium.",
    rating: 4.6,
  },
  {
    name: "REDGLOW PLUS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fish3-LOteAGqWGR4lDQ8VBBAlRSUByZL2KX.png",
    price: 3000,
    rarity: "Special",
    description:
      "An enhanced REDGLOW with even more vibrant colors in the aquarium.",
    rating: 4.7,
  },
  {
    name: "BLUESHINE PLUS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fish1-ioYn5CvkJkCHPwgx1jBGoqibnAu5to.png",
    price: 3500,
    rarity: "Legendary",
    description:
      "A legendary version of BLUESHINE with extra shine in the aquarium.",
    rating: 4.9,
  },
  {
    name: "TROPICORAL PLUS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fish2-D0YdqsjY0OgI0AZg98FS0Sq7zMm2Fe.png",
    price: 4000,
    rarity: "Legendary",
    description:
      "An exotic TROPICORAL with mesmerizing patterns in the aquarium.",
    rating: 5.0,
  },
];


