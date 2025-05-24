"use client";

import { Check, X } from "lucide-react";
import { usePurchaseFlow } from "@/hooks/aquarium/use-purchase-flow";



interface PurchaseModalProps {
  onCloseAction: () => void;
  onPurchaseAction: () => void;
  coinBalance: number;
}

export function PurchaseModal({
  onCloseAction,
  onPurchaseAction,
  coinBalance,
}: PurchaseModalProps) {
  const { purchaseState, handlePurchase } = usePurchaseFlow(
    onPurchaseAction,
    onCloseAction
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
        onClick={onCloseAction}
      ></div>

      <div className="relative bg-blue-800 border border-blue-700 rounded-xl shadow-xl w-full max-w-3xl">
        <div className="flex justify-between items-center p-4 border-b border-blue-700">
          <h2 className="text-xl font-bold text-white">
            {purchaseState === "initial" && "Purchase New Aquarium"}
            {purchaseState === "processing" && "Processing Payment..."}
            {purchaseState === "complete" && "Purchase Complete!"}
          </h2>
          <button
            onClick={onCloseAction}
            className="text-blue-300 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
        </div>
      </div>
    </div>
  );
}
