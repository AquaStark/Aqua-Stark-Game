export const purchaseHistory = [
  {
    id: "1",
    title: "Premium Aquarium Bundle",
    icon: "Gem",
    date: "Apr 2, 2025",
    amount: -2500,
  },
  {
    id: "2",
    title: "Rare Fish Food Pack",
    icon: "Utensils",
    date: "Mar 28, 2025",
    amount: -750,
  },
  {
    id: "3",
    title: "Celestial Breeding Tank",
    icon: "FlaskConical",
    date: "Mar 15, 2025",
    amount: -1200,
  },
  {
    id: "4",
    title: "Coin Package Refund",
    icon: "RefreshCw",
    date: "Mar 10, 2025",
    amount: 500,
  },
  {
    id: "5",
    title: "Exotic Fish Egg",
    icon: "Egg",
    date: "Mar 5, 2025",
    amount: -1800,
  },
];

export const achievements = [
  {
    id: "ach-1",
    category: "Collector",
    title: "First Catch",
    description: "Catch your first fish",
    date: "Feb 15, 2025",
    unlocked: true,
  },
  {
    id: "ach-2",
    category: "Collector",
    title: "Novice Collector",
    description: "Collect 10 different fish species",
    date: "Mar 10, 2025",
    unlocked: true,
  },
  {
    id: "ach-3",
    category: "Collector",
    title: "Advanced Collector",
    description: "Collect 50 different fish species",
    unlocked: false,
  },
  {
    id: "ach-4",
    category: "Collector",
    title: "Master Collector",
    description: "Collect all 100 fish species",
    unlocked: false,
  },
  {
    id: "ach-5",
    category: "Mastery",
    title: "Aquarium Starter",
    description: "Create your first aquarium",
    date: "Feb 16, 2025",
    unlocked: true,
  },
  {
    id: "ach-6",
    category: "Mastery",
    title: "Fish Breeder",
    description: "Successfully breed 20 fish",
    date: "Mar 20, 2025",
    unlocked: true,
  },
  {
    id: "ach-7",
    category: "Mastery",
    title: "Legendary Hunter",
    description: "Collect all legendary fish",
    unlocked: false,
  },
];

export interface FishItem {
    id: string
    name: string
    rarity: "Legendary" | "Rare" | "Special" | "Common"
    level: number
    obtainedDate: string
    imageUrl: string
  }
  
  export interface PlayerStats {
    fishFed: number
    decorationsPlaced: number
    fishBred: number
    aquariumsCreated: number
  }
  
  export interface ProfileData {
    username: string
    level: number
    joinDate: string
    experience: {
      current: number
      total: number
    }
    currency: number
    stats: {
      playTime: string
      fishCollected: number
      totalFish: number
      specialFish: number
      achievements: {
        completed: number
        total: number
      }
    }
    fishCollection: {
      collected: number
      total: number
      displayedFish: FishItem[]
    }
    playerStats: PlayerStats
  }
  
  const mockProfileData: ProfileData = {
    username: "salazarsebas",
    level: 12,
    joinDate: "February 15, 2025",
    experience: {
      current: 3450,
      total: 5000,
    },
    currency: 12500,
    stats: {
      playTime: "127h 45m",
      fishCollected: 24,
      totalFish: 100,
      specialFish: 5,
      achievements: {
        completed: 2,
        total: 8,
      },
    },
    fishCollection: {
      collected: 24,
      total: 100,
      displayedFish: [
        {
          id: "fish-001",
          name: "Celestial Glowfin",
          rarity: "Legendary",
          level: 8,
          obtainedDate: "Apr 5, 2025",
          imageUrl: "/fish/fish1.png",
        },
        {
          id: "fish-002",
          name: "Royal Crowntail",
          rarity: "Rare",
          level: 12,
          obtainedDate: "Mar 22, 2025",
          imageUrl: "/fish/fish2.png",
        },
        {
          id: "fish-003",
          name: "Crimson Flasher",
          rarity: "Special",
          level: 10,
          obtainedDate: "Apr 1, 2025",
          imageUrl: "/fish/fish3.png",
        },
        {
          id: "fish-004",
          name: "Azure Drifter",
          rarity: "Common",
          level: 15,
          obtainedDate: "Feb 18, 2025",
          imageUrl: "/fish/fish4.png",
        },
      ],
    },
    playerStats: {
      fishFed: 1248,
      decorationsPlaced: 87,
      fishBred: 36,
      aquariumsCreated: 5,
    },
  }
  
  export default mockProfileData  

  