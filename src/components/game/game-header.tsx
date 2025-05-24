"use client";

import {
  Fish,
  ChevronDown,
  ChevronUp,
  Droplets,
  Leaf,
  Sparkles,
  Palette,
  Layers,
  Hammer,
  Lightbulb,
} from "lucide-react";
import { GameStatusBar } from "./game-status-bar";
import { GameButton } from "./game-button";
import Image from "next/image";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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

interface GameHeaderProps {
  happiness: number;
  food: number;
  energy: number;
  onMenuToggle: () => void;
}

export function GameHeader({
  happiness,
  food,
  energy,
  onMenuToggle,
}: GameHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const handleTipsToggle = () => setShowTips(!showTips);

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqua_Stark-removebg-preview-ubKSrqYo7jzOH5qXqxEw4CyRHXIjfq.png"
              alt="Aqua Stark Logo"
              width={80}
              height={33}
              className="drop-shadow-lg"
              priority
            />
            <div className="flex items-center gap-1 bg-blue-800/50 px-2 py-1 rounded-lg">
              <Fish className="text-blue-200 h-4 w-4" />
              <span className="text-white font-bold text-sm">2/10</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-blue-600/80 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <GameButton
                  icon={<Hammer className="h-4 w-4" />}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10"
                />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-28 p-2 bg-blue-900 flex flex-col justify-center"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only text-white text-lg font-bold mb-4">
                    Toolbox
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-1 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    {SIDEBAR_BUTTONS.map((button, i) => (
                      <GameButton
                        key={i}
                        icon={button.icon}
                        tooltip={button.tooltip}
                        className={`w-10 h-10 rounded-xl border-2 border-white/30 bg-gradient-to-br ${button.color} hover:scale-110 hover:shadow-lg transition-all duration-200 text-white shadow-md backdrop-blur-sm`}
                      />
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <GameButton
              icon="☰"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10"
              onClick={onMenuToggle}
            />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3 pb-3">
            <div className="flex items-center justify-center gap-2 bg-blue-800/30 p-2 rounded-lg">
              <GameStatusBar
                icon="🌟"
                value={happiness}
                color="from-yellow-400 to-yellow-600"
                label="Happiness"
              />
              <GameStatusBar
                icon="🍖"
                value={food}
                color="from-orange-400 to-orange-600"
                label="Hunger"
              />
              <GameStatusBar
                icon="⚡"
                value={energy}
                color="from-blue-400 to-blue-600"
                label="Energy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aqua_Stark-removebg-preview-ubKSrqYo7jzOH5qXqxEw4CyRHXIjfq.png"
            alt="Aqua Stark Logo"
            width={120}
            height={50}
            className="drop-shadow-lg"
            priority
          />
        </div>

        <GameButton
          icon={<Lightbulb className="h-4 w-4" />}
          tooltip="Tips & Help"
          className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-10 h-10 shadow-lg"
          onClick={handleTipsToggle}
        />

        <div className="flex items-center gap-4 bg-blue-900/40 backdrop-blur-sm p-3 rounded-xl">
          <div className="flex items-center gap-2 mr-4 bg-blue-800/50 px-3 py-1 rounded-lg">
            <Fish className="text-blue-200 h-5 w-5" />
            <span className="text-white font-bold">2/10</span>
          </div>

          <GameStatusBar
            icon="🌟"
            value={happiness}
            color="from-yellow-400 to-yellow-600"
            label="Happiness"
          />
          <GameStatusBar
            icon="🍖"
            value={food}
            color="from-orange-400 to-orange-600"
            label="Hunger"
          />
          <GameStatusBar
            icon="⚡"
            value={energy}
            color="from-blue-400 to-blue-600"
            label="Energy"
          />
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <GameButton
                icon={<Hammer className="h-4 w-4" />}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10"
              />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-28 p-2 bg-blue-900 flex flex-col justify-center"
            >
              <SheetHeader>
                <SheetTitle className="sr-only text-white text-lg font-bold mb-4">
                  Toolbox
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 items-center">
                  {SIDEBAR_BUTTONS.map((button, i) => (
                    <GameButton
                      key={i}
                      icon={button.icon}
                      tooltip={button.tooltip}
                      className={`w-10 h-10 rounded-xl border-2 border-white/30 bg-gradient-to-br ${button.color} hover:scale-110 hover:shadow-lg transition-all duration-200 text-white shadow-md backdrop-blur-sm`}
                    />
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <GameButton
            icon="☰"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12"
            onClick={onMenuToggle}
          />
        </div>
      </div>
    </div>
  );
}
