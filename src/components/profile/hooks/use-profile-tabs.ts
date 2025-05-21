"use client";

import { useMemo } from "react";

interface TabItem {
  id: string;
  label: string;
  iconType: "trophy" | "fish" | "shoppingBag";
}

interface UseProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function useProfileTabs({
  activeTab,
  setActiveTab,
}: UseProfileTabsProps) {
  // Define the available tabs
  const tabs = useMemo<TabItem[]>(() => {
    return [
      {
        id: "achievements",
        label: "Achievements",
        iconType: "trophy",
      },
      {
        id: "collection",
        label: "Collection",
        iconType: "fish",
      },
      {
        id: "purchase",
        label: "Purchase History",
        iconType: "shoppingBag",
      },
    ];
  }, []);

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Get tab class based on active state
  const getTabClass = (tabId: string) => {
    return `py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 ${
      activeTab === tabId
        ? "bg-blue-600 shadow-md"
        : "bg-blue-800 hover:bg-blue-700"
    }`;
  };

  // Get icon class based on active state
  const getIconClass = (tabId: string) => {
    return `w-4 h-4 mr-2 transition-transform duration-300 ${
      activeTab === tabId ? "scale-110" : ""
    }`;
  };

  return {
    tabs,
    activeTab,
    handleTabClick,
    getTabClass,
    getIconClass,
  };
}
