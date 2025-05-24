"use client";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface AquariumTabsProps {
  aquariums: string[];
  selectedAquarium: string;
  onAquariumSelect: (aquarium: string) => void;
}

export function AquariumTabs({
  aquariums,
  selectedAquarium,
  onAquariumSelect,
}: AquariumTabsProps) {
  return (
    <div className="absolute bottom-4 left-4 z-30">
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600",
                "border-2 border-blue-400/50 text-white backdrop-blur-md",
                "min-w-[120px] justify-between rounded-2xl shadow-xl",
                "transition-all duration-300 hover:scale-105 hover:shadow-2xl",
                "relative overflow-hidden"
              )}
            >
              {/* Efectos de brillo */}
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/30 animate-pulse"></div>
              <div
                className="absolute top-3 left-4 w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              <span className="truncate max-w-[80px] relative z-10">
                {selectedAquarium}
              </span>
              <ChevronDown className="h-3 w-3 ml-1 flex-shrink-0 relative z-10" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-48 bg-blue-600/90 border-2 border-blue-400/50 backdrop-blur-md rounded-2xl shadow-xl"
          >
            {aquariums.map((aquarium) => (
              <DropdownMenuItem
                key={aquarium}
                onClick={() => onAquariumSelect(aquarium)}
                className={cn(
                  "text-white hover:bg-blue-500/50 cursor-pointer rounded-xl mx-1 my-0.5",
                  "transition-all duration-200 hover:scale-105",
                  selectedAquarium === aquarium && "bg-blue-400/50 shadow-inner"
                )}
              >
                {aquarium}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
