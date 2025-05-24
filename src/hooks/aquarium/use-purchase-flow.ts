import { useState } from "react";

export type PurchaseState = "initial" | "processing" | "complete";

export function usePurchaseFlow(onPurchase: () => void, onClose: () => void) {
  const [purchaseState, setPurchaseState] = useState<PurchaseState>("initial");

  const handlePurchase = () => {
    setPurchaseState("processing");

    setTimeout(() => {
      setPurchaseState("complete");

      setTimeout(() => {
        onPurchase();
        onClose();
      }, 2000);
    }, 2000);
  };

  return {
    purchaseState,
    handlePurchase,
  };
}
