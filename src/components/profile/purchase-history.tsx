"use client";

import {
  ShoppingBag,
  Calendar,
  Coins,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { purchaseHistory } from "@/data/mock-data-profile";
import { getIconComponent } from "@/lib/profile-utils";

export function PurchaseHistory() {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2 text-blue-300" />
          Purchase History
        </h2>
      </div>

      <div className="bg-blue-800 rounded-xl overflow-hidden shadow-lg">
        {purchaseHistory.map((tx, index) => {
          const Icon = getIconComponent(tx.icon);

          return (
            <motion.div
              key={tx.id}
              className="p-4 flex items-center border-b border-blue-700 hover:bg-blue-700/50 transition-colors animate-fadeIn"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center mr-4">
                <Icon className="w-6 h-6 text-blue-300" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{tx.title}</h4>
                <div className="flex items-center text-xs text-blue-300">
                  <Calendar className="w-3 h-3 mr-1" />
                  {tx.date}
                </div>
              </div>
              <div className="flex items-center">
                <Coins
                  className={`w-4 h-4 mr-1 ${
                    tx.amount > 0 ? "text-green-400" : "text-yellow-400"
                  }`}
                />
                <span
                  className={`font-bold ${
                    tx.amount > 0
                      ? "text-green-400 animate-pulse-slow"
                      : ""
                  }`}
                >
                  {tx.amount > 0 ? `+${tx.amount}` : `-${Math.abs(tx.amount)}`}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div
        className="mt-4 flex justify-between items-center p-4 bg-blue-800 rounded-lg shadow-lg animate-fadeIn"
        style={{ animationDelay: `${0.1 * (purchaseHistory.length + 1)}s` }}
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
