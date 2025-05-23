// src/lib/profile-utils.ts
import {
  Gem,
  Utensils,
  FlaskConical,
  RefreshCw,
  Egg,
} from "lucide-react";

export const getIconComponent = (icon: string) => {
  const icons: Record<string, React.ComponentType> = {
    Gem,
    Utensils,
    FlaskConical,
    RefreshCw,
    Egg,
  };

  return icons[icon] || Gem;
};
