"use client";

import { useProfileTabs } from "@/components/profile/hooks/use-profile-tabs";
import { Fish, Trophy, ShoppingBag } from "lucide-react";

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function ProfileTabs({ activeTab, setActiveTab }: ProfileTabsProps) {
  const { tabs, handleTabClick, getTabClass, getIconClass } = useProfileTabs({
    activeTab,
    setActiveTab,
  });

  // Helper function to get the icon based on icon type
  const getTabIcon = (iconType: string, tabId: string) => {
    const iconClass = getIconClass(tabId);

    switch (iconType) {
      case "trophy":
        return <Trophy className={iconClass} />;
      case "fish":
        return <Fish className={iconClass} />;
      case "shoppingBag":
        return <ShoppingBag className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="grid grid-cols-3 gap-2 mb-6 animate-fadeIn"
      style={{ animationDelay: "0.4s" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={getTabClass(tab.id)}
          onClick={() => handleTabClick(tab.id)}
        >
          <div className="flex items-center justify-center">
            {getTabIcon(tab.iconType, tab.id)}
            {tab.label}
          </div>
        </button>
      ))}
    </div>
  );
}
