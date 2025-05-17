"use client";

interface UseAquariumTabsProps {
  aquariums: string[];
  selectedAquarium: string;
  onAquariumSelect: (aquarium: string) => void;
}

export function useAquariumTabs({
  aquariums,
  selectedAquarium,
  onAquariumSelect,
}: UseAquariumTabsProps) {
  const handleTabClick = (aquarium: string) => {
    onAquariumSelect(aquarium);
  };

  const handleViewAllClick = () => {
    // This could be expanded with more complex logic in the future
    alert("View All Aquariums");
  };

  return {
    handleTabClick,
    handleViewAllClick,
    isTabActive: (aquarium: string) => selectedAquarium === aquarium,
  };
}
