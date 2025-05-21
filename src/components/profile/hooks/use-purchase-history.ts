"use client";

import { useMemo } from "react";
import type { LucideIcon } from "lucide-react";

// Define the transaction data structure
interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: "purchase" | "refund";
  category: "premium" | "food" | "equipment" | "refund" | "egg";
}

export function usePurchaseHistory() {
  // Mock data - in a real app, this would come from props or an API
  const transactions = useMemo<Transaction[]>(() => {
    return [
      {
        id: "1",
        title: "Premium Aquarium Bundle",
        date: "Apr 2, 2025",
        amount: -2500,
        type: "purchase",
        category: "premium",
      },
      {
        id: "2",
        title: "Rare Fish Food Pack",
        date: "Mar 28, 2025",
        amount: -750,
        type: "purchase",
        category: "food",
      },
      {
        id: "3",
        title: "Celestial Breeding Tank",
        date: "Mar 15, 2025",
        amount: -1200,
        type: "purchase",
        category: "equipment",
      },
      {
        id: "4",
        title: "Coin Package Refund",
        date: "Mar 10, 2025",
        amount: 500,
        type: "refund",
        category: "refund",
      },
      {
        id: "5",
        title: "Exotic Fish Egg",
        date: "Mar 5, 2025",
        amount: -1800,
        type: "purchase",
        category: "egg",
      },
    ];
  }, []);

  // Calculate total spent
  const totalSpent = useMemo(() => {
    return transactions.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);
  }, [transactions]);

  // Get transaction amount display class
  const getAmountDisplayClass = (amount: number) => {
    return amount > 0 ? "text-green-400" : "";
  };

  return {
    transactions,
    totalSpent,
    getAmountDisplayClass,
  };
}
