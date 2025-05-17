"use client";

import { useMemo } from "react";
import type { ItemType } from "@/components/storage/data/mock-game";

interface UseStoreTabsProps {
  activeTab: ItemType;
  onTabChange: (tab: ItemType) => void;
}

interface TabDefinition {
  value: ItemType;
  label: string;
  isFirst: boolean;
  isLast: boolean;
}

export function useStoreTabs({ activeTab, onTabChange }: UseStoreTabsProps) {
  // Define all available tabs
  const tabs = useMemo<TabDefinition[]>(
    () => [
      { value: "fish", label: "Fish", isFirst: true, isLast: false },
      { value: "food", label: "Food", isFirst: false, isLast: false },
      {
        value: "decorations",
        label: "Decorations",
        isFirst: false,
        isLast: false,
      },
      { value: "others", label: "Others", isFirst: false, isLast: true },
    ],
    []
  );

  // Handle tab change
  const handleTabChange = (value: string) => {
    onTabChange(value as ItemType);
  };

  // Get current tab index
  const currentTabIndex = useMemo(
    () => tabs.findIndex((tab) => tab.value === activeTab),
    [tabs, activeTab]
  );

  // Helper to check if a tab is active
  const isTabActive = (tabValue: ItemType) => activeTab === tabValue;

  return {
    tabs,
    activeTab,
    handleTabChange,
    currentTabIndex,
    isTabActive,
  };
}
