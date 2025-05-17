"use client";

import type { ItemType } from "@/components/storage/data/mock-game";
import { useStoreTabs } from "@/components/storage/hooks/use-store-tabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StoreTabsProps {
  activeTab: ItemType;
  onTabChange: (tab: ItemType) => void;
}

export function StoreTabs({ activeTab, onTabChange }: StoreTabsProps) {
  const { tabs, handleTabChange } = useStoreTabs({ activeTab, onTabChange });

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="flex items-center justify-start w-full gap-0.5 p-0 bg-transparent md:w-fit">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`font-bold py-4 md:py-3 md:px-4 text-white uppercase 
              data-[state=active]:bg-blue-700 
              data-[state=active]:border-b-2 
              data-[state=active]:border-b-orange-500 
              data-[state=inactive]:border-none 
              data-[state=active]:text-white 
              data-[state=inactive]:text-white
              ${
                tab.isFirst
                  ? "rounded-tl-3xl md:pl-6 md:pr-4 md:rounded-none"
                  : "rounded-none"
              }
              ${tab.isLast ? "rounded-tr-3xl md:rounded-none" : ""}`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
