"use client";
import { Grid, ChevronDown } from "lucide-react";
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
      <div className="flex gap-2">
        {/* Dropdown para seleccionar acuario */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "bg-blue-900/90 border-blue-700 text-white hover:bg-blue-800/90",
                "backdrop-blur-sm min-w-[120px] justify-between"
              )}
            >
              <span className="truncate max-w-[80px]">{selectedAquarium}</span>
              <ChevronDown className="h-3 w-3 ml-1 flex-shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-48 bg-blue-900/95 border-blue-700 backdrop-blur-sm"
          >
            {aquariums.map((aquarium) => (
              <DropdownMenuItem
                key={aquarium}
                onClick={() => onAquariumSelect(aquarium)}
                className={cn(
                  "text-white hover:bg-blue-800/50 cursor-pointer",
                  selectedAquarium === aquarium && "bg-blue-700/50"
                )}
              >
                {aquarium}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Botón View All */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => alert("View All Aquariums")}
          className="bg-blue-900/90 border-blue-700 text-white hover:bg-blue-800/90 backdrop-blur-sm"
        >
          <Grid className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
