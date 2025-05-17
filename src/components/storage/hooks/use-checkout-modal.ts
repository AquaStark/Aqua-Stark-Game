"use client";

import { useCartStore } from "@/components/storage/hooks/use-cart-store";

export function useCheckoutModal() {
  const { checkoutStep, setCheckoutStep, processCheckout, items } =
    useCartStore();

  // Calculate totals
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const serviceFee = subtotal * 0.01; // 1% service fee
  const total = subtotal + serviceFee;

  // Check if modal should be visible
  const isVisible = checkoutStep !== "cart";

  // Handle back to cart
  const handleBackToCart = () => setCheckoutStep("cart");

  // Handle confirm purchase
  const handleConfirmPurchase = () => processCheckout();

  return {
    checkoutStep,
    items,
    subtotal,
    serviceFee,
    total,
    isVisible,
    handleBackToCart,
    handleConfirmPurchase,
  };
}
