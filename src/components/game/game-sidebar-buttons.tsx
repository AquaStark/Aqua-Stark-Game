"use client";
import {
  Droplets,
  Leaf,
  Sparkles,
  Palette,
  Layers,
  Hammer,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GameButton } from "./game-button";

const SIDEBAR_BUTTONS = [
  { icon: "🌿", color: "from-green-400 to-green-600", tooltip: "Plants" },
  { icon: "🪨", color: "from-blue-400 to-blue-600", tooltip: "Rocks" },
  {
    icon: "🏰",
    color: "from-purple-400 to-purple-600",
    tooltip: "Decorations",
  },
  {
    icon: <Droplets className="h-5 w-5" />,
    color: "from-cyan-400 to-cyan-600",
    tooltip: "Water",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    color: "from-emerald-400 to-emerald-600",
    tooltip: "Algae",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    color: "from-amber-400 to-amber-600",
    tooltip: "Effects",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    color: "from-pink-400 to-pink-600",
    tooltip: "Colors",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    color: "from-indigo-400 to-indigo-600",
    tooltip: "Layers",
  },
];

export function GameSidebarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <GameButton
          icon={<Hammer className="h-4 w-4" />}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 p-4 bg-blue-900/95 backdrop-blur-sm border-blue-700/50"
        align="start"
        side="bottom"
      >
        <div className="grid grid-cols-4 gap-3">
          {SIDEBAR_BUTTONS.map((button, index) => (
            <div key={index} className="flex justify-center">
              <GameButton
                icon={button.icon}
                className={`w-12 h-12 rounded-xl border-2 border-white/30 bg-gradient-to-br ${button.color} hover:scale-110 hover:shadow-lg transition-all duration-200 text-white shadow-md backdrop-blur-sm`}
                tooltip={button.tooltip}
              />
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
