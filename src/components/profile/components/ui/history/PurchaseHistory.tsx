"use client";

import { usePurchaseHistory } from "@/components/profile/hooks/use-purchase-history";
import {
  ShoppingBag,
  Calendar,
  Coins,
  Gem,
  Utensils,
  FlaskConical,
  RefreshCw,
  Egg,
  ChevronRight,
} from "lucide-react";

export function PurchaseHistory() {
  const { transactions, getAmountDisplayClass } = usePurchaseHistory();

  // Helper function to get the icon based on transaction category
  const getTransactionIcon = (category: string) => {
    switch (category) {
      case "premium":
        return <Gem className="w-6 h-6 text-blue-300" />;
      case "food":
        return <Utensils className="w-6 h-6 text-blue-300" />;
      case "equipment":
        return <FlaskConical className="w-6 h-6 text-blue-300" />;
      case "refund":
        return <RefreshCw className="w-6 h-6 text-yellow-400" />;
      case "egg":
        return <Egg className="w-6 h-6 text-blue-300" />;
      default:
        return <ShoppingBag className="w-6 h-6 text-blue-300" />;
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2 text-blue-300" />
          Purchase History
        </h2>
      </div>

      {/* Purchase History */}
      <div className="bg-blue-800 rounded-xl overflow-hidden shadow-lg">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className={`p-4 flex items-center hover:bg-blue-700/50 transition-colors animate-fadeIn ${
              index < transactions.length - 1 ? "border-b border-blue-700" : ""
            }`}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center mr-4">
              {getTransactionIcon(transaction.category)}
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{transaction.title}</h4>
              <div className="flex items-center text-xs text-blue-300">
                <Calendar className="w-3 h-3 mr-1" />
                {transaction.date}
              </div>
            </div>
            <div className="flex items-center">
              <Coins
                className={`w-4 h-4 mr-1 ${
                  transaction.amount > 0 ? "text-green-400" : "text-yellow-400"
                }`}
              />
              <span
                className={`font-bold ${getAmountDisplayClass(
                  transaction.amount
                )} ${transaction.amount > 0 ? "animate-pulse-slow" : ""}`}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex justify-between items-center p-4 bg-blue-800 rounded-lg shadow-lg animate-fadeIn"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="text-sm">Showing recent purchases</span>
        <button className="text-sm text-blue-300 hover:text-white transition-colors flex items-center group">
          View All Transactions
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
